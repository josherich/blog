#!/usr/bin/env python3
"""Build web-ready chunks of the "Computer Grass" font.  See cn-fonts.md.

    python3 -m venv .venv && .venv/bin/pip install -r tools/grass-font/requirements.txt
    .venv/bin/python tools/grass-font/build.py              # all styles
    .venv/bin/python tools/grass-font/build.py --style regular

Pipeline (per cn-fonts.md):
  1. Simplified -> Traditional cmap aliases (OpenCC S->T table), so Simplified text
     uses the existing Traditional glyphs. No extra glyph data.
  2. Order glyphs by usage: characters used on this site first (by count), then by
     general frequency (wordfreq), so common characters share a few chunks.
  3. Split into CHUNK-glyph pieces. For each: subset, simplify outlines
     (Douglas-Peucker + drop tiny contours), save as WOFF2.
  4. Write fonts/grass/grass.css with one @font-face + unicode-range per chunk.

The source TTF (375 MB) is not committed (see .gitignore); only fonts/grass/ is.
"""
import argparse, collections, math, os, re, sys, time
from multiprocessing import Pool

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables import ttProgram
from fontTools.ttLib.tables._g_l_y_f import GlyphCoordinates

sys.setrecursionlimit(10000)

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
# style -> (source font, output dir, CSS family, (eps, min_extent, min_area) or None, glyphs per chunk)
# "grass" and "running" are traced from thousands of tiny polygons and need heavy
# simplification; "regular" and "qiji" have clean outlines (simplifier = None).
# Qiji Combo has ~21k glyphs at ~0.9 KB each, so it gets bigger chunks to keep the file count down.
STYLES = {
    "grass": ("ComputerGrassGrass.ttf", "grass", "Computer Grass", (1.5, 6, 4), 60),
    "regular": ("ComputerGrassRegular.ttf", "grass-regular", "Computer Grass Regular", None, 60),
    "running": ("ComputerGrassRunning.ttf", "grass-running", "Computer Grass Running", (1.5, 6, 4), 60),
    "qiji": ("qiji-combo.woff2", "qiji-combo", "Qiji Combo", None, 80),
}
CJK = re.compile("[㐀-䶿一-鿿豈-﫿]")
CONTENT_DIRS = ["_posts", "_layouts", "_includes", "_drafts"]
TEXT_EXT = {".md", ".markdown", ".html", ".htm"}


# ---------------------------------------------------------------- simplifier --

def dp(pts, eps):
    """Douglas-Peucker on an open polyline."""
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy)
    best, idx = -1, 0
    for i in range(1, len(pts) - 1):
        x, y = pts[i]
        d = abs(dy * (x - x1) - dx * (y - y1)) / L if L else math.hypot(x - x1, y - y1)
        if d > best:
            best, idx = d, i
    if best <= eps:
        return [pts[0], pts[-1]]
    return dp(pts[:idx + 1], eps)[:-1] + dp(pts[idx:], eps)


def area(p):
    return abs(sum(p[i][0] * p[i - 1][1] - p[i - 1][0] * p[i][1] for i in range(len(p)))) / 2


def simplify_glyph(gl, glyf, eps, min_extent, min_area):
    if gl.numberOfContours <= 0:
        return
    c, ends, _ = gl.getCoordinates(glyf)
    out = []
    s = 0
    for e in ends:
        p = list(c[s:e + 1])
        s = e + 1
        if len(p) > 1 and p[0] == p[-1]:
            p = p[:-1]  # drop duplicated closing point
        xs = [q[0] for q in p]
        ys = [q[1] for q in p]
        if max(max(xs) - min(xs), max(ys) - min(ys)) < min_extent:
            continue
        if eps > 0 and len(p) > 3:
            # split the closed ring at the point farthest from p[0]
            far = max(range(len(p)), key=lambda i: (p[i][0] - p[0][0]) ** 2 + (p[i][1] - p[0][1]) ** 2)
            a = dp(p[:far + 1], eps)
            b = dp(p[far:] + [p[0]], eps)
            p = a[:-1] + b[:-1]
        if len(p) < 3 or area(p) < min_area:
            continue
        out.append(p)
    pts = [q for p in out for q in p]
    if not out:
        gl.numberOfContours = 0
        for a in ("coordinates", "flags", "endPtsOfContours", "program"):
            if hasattr(gl, a):
                delattr(gl, a)
        return
    gl.coordinates = GlyphCoordinates(pts)
    gl.flags = bytearray([1] * len(pts))
    ends2, n = [], 0
    for p in out:
        n += len(p)
        ends2.append(n - 1)
    gl.endPtsOfContours = ends2
    gl.numberOfContours = len(out)
    gl.program = ttProgram.Program()
    gl.program.fromBytecode(b"")


# ------------------------------------------------------------------ coverage --

def scan_corpus(root):
    """Count CJK characters in the site's content: posts, layouts, top-level pages."""
    counts = collections.Counter()
    paths = [os.path.join(root, f) for f in os.listdir(root)]
    for sub in CONTENT_DIRS:
        for d, _, files in os.walk(os.path.join(root, sub)):
            paths += [os.path.join(d, f) for f in files]
    for p in paths:
        if os.path.splitext(p)[1].lower() not in TEXT_EXT or not os.path.isfile(p):
            continue
        try:
            with open(p, encoding="utf-8") as fh:
                counts.update(CJK.findall(fh.read()))
        except (UnicodeDecodeError, OSError):
            pass
    return counts


def load_variants():
    """OpenCC character tables as an adjacency map, in priority order.

    Returns (edges, order): edges[cp] = [(priority, cp2), ...]. S->T edges come first,
    then T->S, then regional variant forms (TW/HK/JP), e.g. 爲 -> 為.
    """
    import opencc
    d = os.path.join(os.path.dirname(opencc.__file__), "dictionary")
    edges = collections.defaultdict(list)
    names = ["STCharacters", "TSCharacters", "TWVariants", "TWVariantsRev", "HKVariants", "HKVariantsRev", "JPVariants"]
    for prio, name in enumerate(names):
        with open(os.path.join(d, name + ".txt"), encoding="utf-8") as fh:
            for line in fh:
                k, _, v = line.rstrip("\n").partition("\t")
                if len(k) != 1:
                    continue
                for x in v.split():
                    if len(x) == 1 and x != k:
                        edges[ord(k)].append((prio, ord(x)))
    return edges


def build_aliases(cmap, edges):
    """Codepoints missing from the font -> glyph of the nearest form that is in it.

    Direct S->T match wins (觉 -> 覺); otherwise follow one more hop through the
    variant tables (为 -> 為 is direct, 爲 -> 為 is a variant). Existing glyphs are
    never overridden.
    """
    alias = {}
    for cp in edges:
        if cp in cmap:
            continue
        found = None
        for _, n in sorted(edges[cp], key=lambda e: e[0]):
            if n in cmap:
                found = cmap[n]
                break
        if found is None:
            for _, n in sorted(edges[cp], key=lambda e: e[0]):
                for _, m in sorted(edges.get(n, []), key=lambda e: e[0]):
                    if m in cmap and m != cp:
                        found = cmap[m]
                        break
                if found is not None:
                    break
        if found is not None:
            alias[cp] = found
    return alias


# --------------------------------------------------------------------- chunks --

def ranges(cps):
    cps = sorted(cps)
    out, start, prev = [], cps[0], cps[0]
    for c in cps[1:] + [None]:
        if c is not None and c == prev + 1:
            prev = c
            continue
        out.append("U+%X" % start if start == prev else "U+%X-%X" % (start, prev))
        if c is not None:
            start = prev = c
    return ",".join(out)


def build_chunk(job):
    src, outdir, idx, cps, alias, params = job
    f = TTFont(src, lazy=True)
    for t in f["cmap"].tables:
        if t.isUnicode():
            for cp, g in alias.items():
                if cp <= 0xFFFF or t.format == 12:
                    t.cmap[cp] = g
    opts = subset.Options()
    opts.hinting = False
    opts.layout_features = []
    opts.glyph_names = False
    opts.legacy_cmap = False
    opts.notdef_outline = False
    opts.name_IDs = [1, 2]
    opts.drop_tables += ["kern", "vhea", "vmtx", "DSIG"]
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=cps)
    sub.subset(f)
    glyf = f["glyf"]
    if params:
        for name in f.getGlyphOrder():
            simplify_glyph(glyf[name], glyf, *params)
    path = os.path.join(outdir, "g%03d.woff2" % idx)
    f.flavor = "woff2"
    f.save(path)
    return idx, os.path.getsize(path)


# ----------------------------------------------------------------------- main --

def build_style(style, args, counts, edges, zipf_frequency):
    src_name, out_name, family, params, chunk_size = STYLES[style]
    src = os.path.join(ROOT, "fonts", src_name)
    out = os.path.join(ROOT, "fonts", out_name)
    if args.eps is not None and params:
        params = (args.eps, args.min_extent, args.min_area)
    t0 = time.time()
    print("== %s (%s)" % (style, family))
    if src.endswith(".woff2"):
        # WOFF2 must be fully decompressed on every open; do it once so workers can load the TTF lazily.
        ttf = src[:-len(".woff2")] + ".ttf"
        if not os.path.exists(ttf):
            f = TTFont(src)
            f.flavor = None
            f.save(ttf)
        src = ttf

    font = TTFont(src, lazy=True)
    cmap = dict(font.getBestCmap())
    alias = build_aliases(cmap, edges)
    full = dict(cmap)
    full.update(alias)
    print("font: %d mapped codepoints + %d Simplified/variant aliases" % (len(cmap), len(alias)))

    used = sum(counts.values())
    covered = sum(n for c, n in counts.items() if ord(c) in cmap)
    covered2 = sum(n for c, n in counts.items() if ord(c) in full)
    print("site: %d distinct CJK chars (%d occurrences); covered by font: %.1f%% -> with aliases: %.1f%%" % (
        len(counts), used, 100.0 * covered / used, 100.0 * covered2 / used))
    missing = [c for c, _ in counts.most_common() if ord(c) not in full]
    print("  still uncovered (%d): %s" % (len(missing), "".join(missing[:80])))

    by_glyph = collections.defaultdict(list)
    for cp, g in full.items():
        by_glyph[g].append(cp)

    def score(item):
        _, cps = item
        site = sum(counts.get(chr(c), 0) for c in cps)
        zipf = max(zipf_frequency(chr(c), "zh") for c in cps)
        return (-(site > 0), -site, -zipf, min(cps))

    order = sorted(by_glyph.items(), key=score)
    chunk_size = args.chunk or chunk_size
    chunks = [order[i:i + chunk_size] for i in range(0, len(order), chunk_size)]
    if args.limit:
        chunks = chunks[:args.limit]

    os.makedirs(out, exist_ok=True)
    for fn in os.listdir(out):
        if fn.endswith(".woff2") or fn.endswith(".css"):
            os.remove(os.path.join(out, fn))

    jobs = [(src, out, i, [c for _, cps in ch for c in cps], alias, params)
            for i, ch in enumerate(chunks)]
    sizes = {}
    with Pool(args.jobs) as pool:
        for idx, size in pool.imap_unordered(build_chunk, jobs):
            sizes[idx] = size
            print("\rchunk %d/%d" % (len(sizes), len(jobs)), end="", flush=True)
    print()

    css = ["/* generated by tools/grass-font/build.py - do not edit */"]
    for i, j in enumerate(jobs):
        css.append('@font-face{font-family:"%s";font-display:swap;src:url(g%03d.woff2) format("woff2");'
                   'unicode-range:%s}' % (family, i, ranges(j[3])))
    with open(os.path.join(out, "grass.css"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(css) + "\n")

    total = sum(sizes.values())
    print("%d chunks, %.1f MB total, avg %.0f KB, max %.0f KB (%.0fs)" % (
        len(sizes), total / 1e6, total / len(sizes) / 1e3, max(sizes.values()) / 1e3, time.time() - t0))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--style", choices=sorted(STYLES) + ["all"], default="all")
    ap.add_argument("--eps", type=float, default=None, help="override simplifier settings for the style")
    ap.add_argument("--min-extent", type=float, default=6)
    ap.add_argument("--min-area", type=float, default=4)
    ap.add_argument("--chunk", type=int, default=0, help="glyphs per WOFF2 file (default: per style)")
    ap.add_argument("--jobs", type=int, default=os.cpu_count())
    ap.add_argument("--limit", type=int, default=0, help="only build the first N chunks (testing)")
    args = ap.parse_args()

    try:
        from wordfreq import zipf_frequency
    except ImportError:
        zipf_frequency = lambda ch, lang: 0.0
        print("wordfreq not installed; ordering by site usage only")

    counts = scan_corpus(ROOT)
    edges = load_variants()
    for style in (sorted(STYLES) if args.style == "all" else [args.style]):
        build_style(style, args, counts, edges, zipf_frequency)


if __name__ == "__main__":
    main()
