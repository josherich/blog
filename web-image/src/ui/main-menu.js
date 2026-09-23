import { surface } from "../core/engine.js";
import { corners, bounds, setQuad, rotate } from "../core/geometry.js";
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function clipSelection(ctx, s, w, h) {
  if (!s) return;
  ctx.beginPath();
  if (s.inverse) ctx.rect(0, 0, w, h);
  for (const r of s.regions || [s]) ctx.rect(r.x, r.y, r.w, r.h);
  ctx.clip(s.inverse ? "evenodd" : "nonzero");
}
export function createMainMenu({
  editor,
  action,
  cloud,
  modal,
  toast,
  refresh,
  getSelection,
  setSelection,
  getColor,
  getZoom,
  finish,
}) {
  const $ = (s) => document.querySelector(s);
  let clipboard = null,
    previousSelection = null;
  const defaults = {
    grid: false,
    guides: true,
    rulers: false,
    context: true,
    snap: false,
    snapGrid: true,
    snapBounds: true,
    spacing: 72,
    subdivisions: 4,
    guideColor: "#00bfff",
    theme: "system",
    interfaceSize: "Medium",
    large: true,
    clipThumb: "document",
    labels: false,
  };
  let prefs = { ...defaults };
  try {
    Object.assign(
      prefs,
      JSON.parse(localStorage.getItem("web-image-interface") || "{}"),
    );
  } catch {}
  const menu = document.createElement("div");
  menu.id = "main-menu";
  menu.hidden = true;
  menu.setAttribute("role", "menu");
  menu.setAttribute("aria-label", "Main menu");
  document.body.append(menu);
  const overlay = document.createElement("div");
  overlay.id = "view-overlay";
  $("#canvas-wrap").append(overlay);
  const item = (label, id, shortcut = "", disabled = false) => ({
    label,
    id,
    shortcut,
    disabled,
  });
  const sub = (label, children) => ({ label, children });
  const selected = () =>
    editor.state.layers.filter((l) =>
      (editor.state.selectedIds || [editor.state.selected]).includes(l.id),
    );
  const drawable = () => editor.selected && editor.selected.type !== "adjust";
  function tree() {
    const s = getSelection(),
      has = !!editor.selected;
    return [
      item("Back to home", "home"),
      item("New…", "new", "⌥N"),
      item("Open…", "open"),
      item("Save to the cloud", "cloud-save", "⌘S"),
      item("Save as…", "save-as"),
      item("Invite people…", "share"),
      null,
      sub("Document", [
        item("Rename…", "rename-document"),
        item("Document info…", "info", "⌥⇧⌘I"),
        item("Image size…", "image-size", "⌥⌘I"),
        item("Version history", "versions"),
      ]),
      sub("Edit", [
        item("Undo", "undo", "⌘Z", !editor.undoStack.length),
        item("Redo", "redo", "⇧⌘Z", !editor.redoStack.length),
        null,
        item("Cut", "cut", "⌘X", !drawable()),
        item("Copy", "copy", "⌘C", !drawable()),
        item("Copy merged", "copy-merged", "⇧⌘C"),
        item("Paste", "paste", "⌘V", !clipboard),
        item("Fill", "fill", "", !drawable()),
        item("Free transform", "transform", "⌥⌘T", !drawable()),
        item("Transform", "transform", "", !drawable()),
        item("Crop", "crop", "", !s),
      ]),
      sub("Image", [
        item("Auto tone", "auto-tone", "⇧⌘L"),
        item("Auto contrast", "auto-contrast", "⌥⇧⌘L"),
        item("Auto color", "auto-color", "⇧⌘B"),
        item("Image rotation", "rotation"),
      ]),
      sub("Layer", [
        item("New", "new-layer"),
        item("Duplicate layer", "duplicate", "", !has),
        item("Delete", "delete", "", !has),
        item("New layer style", "style", "", !drawable()),
        item("New adjustment layer", "adjustment"),
        item("Harmonize", "harmonize", "", !drawable()),
        item("Group layers", "group", "⌘G", !has),
        item(
          "Ungroup layers",
          "ungroup",
          "⇧⌘G",
          !selected().some((l) => l.groupId),
        ),
        item("Large layer thumbnails", "large"),
        item("Clip thumbnails to layer bounds", "thumb-layer"),
        item("Clip thumbnails to document bounds", "thumb-document"),
      ]),
      sub("Select", [
        item("All", "all", "⌘A"),
        item("Deselect", "deselect", "⌘D", !s),
        item("Reselect", "reselect", "⇧⌘D", !previousSelection),
        item("Inverse", "inverse", "⇧⌘I", !s),
        item("Subject", "subject"),
        item("Refine edge", "refine", "⌥⌘R", !s),
        item("Grow", "grow", "", !s),
        item("Similar", "similar", "", !s),
        item("Transform selection", "selection-transform", "", !s),
        item("Quick mask mode", "quick-mask", "Q"),
      ]),
      sub("View", [
        item("Grid", "grid", "⌘'"),
        item("Guides", "guides", "⌘;"),
        item("Rulers", "rulers", "⌥R"),
        item("Guides, grids, ruler settings…", "grid-settings"),
        item("Contextual task bar", "context"),
        item("Snap", "snap"),
        sub("Snap to", [
          item("Grid", "snapGrid"),
          item("Document bounds", "snapBounds"),
        ]),
      ]),
      sub(
        "Effects",
        [
          "Light and color",
          "Texture",
          "Blur",
          "Light",
          "Stylize",
          "Distort",
        ].map((n, i) => item(n, "effect-" + i)),
      ),
      null,
      item("Export as…", "export", "⌥⇧⌘W"),
      item("Import…", "import"),
      item("Get browser app", "install"),
      item("Settings…", "settings", "⌘K"),
    ];
  }
  function checked(id) {
    if (id === "thumb-layer" || id === "thumb-document")
      return prefs.clipThumb === id.slice(6);
    return [
      "grid",
      "guides",
      "rulers",
      "context",
      "snap",
      "snapGrid",
      "snapBounds",
      "large",
    ].includes(id)
      ? prefs[id]
      : id === "quick-mask"
        ? !!prefs.quickMask
        : null;
  }
  function render(items) {
    return items
      .map((i) =>
        !i
          ? '<div role="separator"></div>'
          : `<div class="menu-entry"><button role="${checked(i.id) === null ? "menuitem" : "menuitemcheckbox"}" ${checked(i.id) !== null ? `aria-checked="${checked(i.id)}"` : ""} ${i.disabled ? "disabled" : ""} ${i.children ? 'aria-haspopup="menu" aria-expanded="false"' : `data-command="${i.id}"`}><span class="menu-check">${checked(i.id) ? "✓" : ""}</span><span>${escape(i.label)}</span><kbd>${i.children ? "›" : i.shortcut || ""}</kbd></button>${i.children ? `<div role="menu" aria-label="${escape(i.label)}" class="submenu" hidden>${render(i.children)}</div>` : ""}</div>`,
      )
      .join("");
  }
  function close() {
    menu.hidden = true;
    $("#menu").setAttribute("aria-expanded", "false");
  }
  function open() {
    finish();
    $("#popover").hidden = true;
    menu.innerHTML = render(tree());
    menu.hidden = false;
    $("#menu").setAttribute("aria-expanded", "true");
    menu.querySelector("button").focus();
  }
  $("#menu").setAttribute("aria-haspopup", "menu");
  $("#menu").onclick = () => (menu.hidden ? open() : close());
  function expand(button) {
    const child = button.nextElementSibling;
    if (!child) return;
    const parent = button.closest("[role=menu]");
    for (const entry of parent.children) {
      const b = entry.querySelector("button"),
        sub = b?.nextElementSibling;
      if (sub) {
        sub.hidden = b !== button;
        b.setAttribute("aria-expanded", String(b === button));
      }
    }
    child.style.top = "0px";
    const r = child.getBoundingClientRect();
    if (r.bottom > innerHeight - 12)
      child.style.top = Math.min(0, innerHeight - 12 - r.bottom) + "px";
  }
  menu.addEventListener("pointerover", (e) => {
    const b = e.target.closest("button");
    if (b?.nextElementSibling) expand(b);
  });
  menu.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.nextElementSibling) {
      expand(b);
      return;
    }
    close();
    execute(b.dataset.command).catch((e) =>
      toast(e.message || "Command failed"),
    );
  });
  document.addEventListener("pointerdown", (e) => {
    if (!menu.contains(e.target) && !e.target.closest("#menu")) close();
  });
  menu.addEventListener("keydown", (e) => {
    const b = e.target.closest("button");
    if (e.key === "Escape") {
      close();
      $("#menu").focus();
    } else if (e.key === "ArrowRight" && b?.nextElementSibling) {
      expand(b);
      b.nextElementSibling.querySelector("button:not(:disabled)")?.focus();
    } else if (e.key === "ArrowLeft") {
      const parent = b?.closest(".submenu");
      if (parent) {
        parent.hidden = true;
        parent.previousElementSibling.setAttribute("aria-expanded", "false");
        parent.previousElementSibling.focus();
      }
    } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      const list = [...b.closest("[role=menu]").children]
        .map((x) => x.querySelector("button"))
        .filter((x) => x && !x.disabled);
      const index = list.indexOf(b);
      list[
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? list.length - 1
            : (index + (e.key === "ArrowDown" ? 1 : -1) + list.length) %
              list.length
      ].focus();
    } else return;
    e.preventDefault();
    e.stopPropagation();
  });
  const input = (label, id, value, type = "number") =>
    `<label>${label}<input class="field" id="mm-${id}" type="${type}" value="${escape(value)}"></label>`;
  const value = (id) => $("#mm-" + id).value;
  const number = (id) => Number(value(id));
  const dims = () =>
    input("Width", "width", editor.state.width) +
    input("Height", "height", editor.state.height);
  function validateSize(w, h) {
    if (
      !Number.isInteger(w) ||
      !Number.isInteger(h) ||
      w < 1 ||
      h < 1 ||
      w > 8192 ||
      h > 8192 ||
      w * h > 32000000
    ) {
      toast("Use whole dimensions from 1–8192, up to 32 million pixels");
      return false;
    }
    return true;
  }
  function selection(s) {
    if (getSelection()) previousSelection = structuredClone(getSelection());
    setSelection(s);
    sync();
  }
  function raster(label, fn) {
    if (!drawable()) {
      toast("Select an image, shape, or text layer");
      return;
    }
    editor.commit(label, () => {
      const l = editor.selected,
        c = editor.rasterize(l);
      fn(c, c.getContext("2d"));
      editor.setRaster(l, c);
    });
  }
  function fullCanvas() {
    const c = surface(editor.state.width, editor.state.height);
    editor.render(c);
    return c;
  }
  async function copy(merged, cut) {
    const source = merged ? fullCanvas() : editor.rasterize(editor.selected),
      s = getSelection();
    const c = surface(source.width, source.height),
      ctx = c.getContext("2d");
    clipSelection(ctx, s, c.width, c.height);
    ctx.drawImage(source, 0, 0);
    clipboard = c;
    if (cut)
      raster("Cut", (c, ctx) => {
        clipSelection(ctx, s, c.width, c.height);
        ctx.clearRect(0, 0, c.width, c.height);
      });
    toast("Copied to editor clipboard");
  }
  function auto(kind) {
    const c = fullCanvas(),
      ctx = c.getContext("2d"),
      data = ctx.getImageData(0, 0, c.width, c.height),
      hist = Array.from({ length: 3 }, () => new Uint32Array(256));
    let n = 0;
    for (let i = 0; i < data.data.length; i += 4) {
      if (!data.data[i + 3]) continue;
      n++;
      for (let k = 0; k < 3; k++) hist[k][data.data[i + k]]++;
    }
    const ranges = hist.map((h) => {
      let sum = 0,
        lo = 0,
        hi = 255;
      for (let i = 0; i < 256; i++) {
        sum += h[i];
        if (sum > n * 0.005) {
          lo = i;
          break;
        }
      }
      sum = 0;
      for (let i = 255; i >= 0; i--) {
        sum += h[i];
        if (sum > n * 0.005) {
          hi = i;
          break;
        }
      }
      return [lo, hi];
    });
    if (kind === "contrast") {
      const lo = Math.min(...ranges.map((r) => r[0])),
        hi = Math.max(...ranges.map((r) => r[1]));
      ranges.fill([lo, hi]);
    }
    for (let i = 0; i < data.data.length; i += 4)
      for (let k = 0; k < 3; k++) {
        const [lo, hi] = ranges[k];
        data.data[i + k] =
          hi > lo
            ? ((data.data[i + k] - lo) * 255) / (hi - lo)
            : data.data[i + k];
      }
    ctx.putImageData(data, 0, 0);
    const src = c.toDataURL();
    editor.images.set(src, c);
    editor.add("image", "Auto " + kind, { src });
    refresh();
  }
  function rotateDocument(degrees, flip) {
    editor.commit("Image rotation", () => {
      const w = editor.state.width,
        h = editor.state.height;
      const turn = Math.abs(degrees) % 180 === 90;
      for (const l of editor.state.layers) {
        if (l.type === "adjust") continue;
        let q = corners(l);
        if (flip)
          q = q.map((p) => ({
            x: flip === "horizontal" ? w - p.x : p.x,
            y: flip === "vertical" ? h - p.y : p.y,
          }));
        else
          q = rotate(q, degrees, { x: w / 2, y: h / 2 }).map((p) => ({
            x: p.x + (turn ? (h - w) / 2 : 0),
            y: p.y + (turn ? (w - h) / 2 : 0),
          }));
        setQuad(l, q);
      }
      if (turn) {
        editor.state.width = h;
        editor.state.height = w;
      }
    });
    selection(null);
  }
  async function execute(id) {
    if (
      ["open", "import", "export", "duplicate", "delete", "crop"].includes(id)
    ) {
      action(id);
      return;
    }
    if (id === "undo" || id === "redo") {
      editor[id]();
      refresh();
      return;
    }
    if (["share", "versions", "install"].includes(id)) {
      cloud.open(id);
      return;
    }
    if (id === "home") {
      modal(
        "Home",
        `<p>Your current document remains saved in this browser.</p><div class="home-actions"><button id="mm-home-new">New document</button><button id="mm-home-open">Open image</button><button id="mm-home-cloud">Cloud documents</button></div>`,
        "Return to editor",
        () => {},
      );
      for (const [suffix, cmd] of [
        ["new", "new"],
        ["open", "open"],
        ["cloud", "documents"],
      ])
        $("#mm-home-" + suffix).onclick = () => {
          $("#dialog").close();
          cmd === "documents" ? cloud.open(cmd) : execute(cmd);
        };
      return;
    }
    if (id === "cloud-save") {
      await cloud.save();
      return;
    }
    if (id === "save-as") {
      modal(
        "Save as",
        input("Document name", "name", editor.state.name, "text") +
          '<label>Location<select id="mm-location"><option value="cloud">Mock cloud copy</option><option value="local">Editable project on computer</option></select></label>',
        "Save",
        () => {
          editor.commit(
            "Rename document",
            () => (editor.state.name = value("name").trim() || "Untitled"),
          );
          if (value("location") === "cloud") cloud.save(true);
          else action("save-project");
        },
      );
      return;
    }
    if (id === "new") {
      modal(
        "New document",
        input("Name", "name", "Untitled", "text") +
          dims() +
          input("Resolution (PPI)", "resolution", 72) +
          '<label>Background<select id="mm-background"><option>Transparent</option><option>White</option><option>Black</option></select></label>',
        "Create",
        () => {
          const w = number("width"),
            h = number("height");
          if (!validateSize(w, h) || number("resolution") <= 0) return false;
          editor.commit("New document", () => {
            editor.state = {
              name: value("name") || "Untitled",
              width: w,
              height: h,
              resolution: number("resolution"),
              layers: [],
              selected: null,
            };
            if (value("background") !== "Transparent") {
              const l = editor.layer("rect", "Background", {
                color: value("background") === "White" ? "#fff" : "#000",
              });
              editor.state.layers = [l];
              editor.state.selected = l.id;
            }
          });
          selection(null);
        },
      );
      return;
    }
    if (id === "rename-document") {
      modal(
        "Rename document",
        input("Name", "name", editor.state.name, "text"),
        "Rename",
        () =>
          editor.commit(
            "Rename document",
            () => (editor.state.name = value("name").trim() || "Untitled"),
          ),
      );
      return;
    }
    if (id === "info") {
      modal(
        "Document info",
        `<dl><dt>Name</dt><dd>${escape(editor.state.name)}</dd><dt>Dimensions</dt><dd>${editor.state.width} × ${editor.state.height} pixels</dd><dt>Resolution</dt><dd>${editor.state.resolution || 72} PPI</dd><dt>Layers</dt><dd>${editor.state.layers.length}</dd><dt>Color</dt><dd>RGB · 8 bits/channel · browser sRGB</dd></dl>`,
        "Close",
        () => {},
      );
      return;
    }
    if (id === "image-size") {
      modal(
        "Image size",
        dims() +
          input(
            "Resolution (PPI)",
            "resolution",
            editor.state.resolution || 72,
          ) +
          '<label><input id="mm-ratio" type="checkbox" checked> Constrain proportions</label>',
        "Resize",
        () => {
          const w = number("width"),
            h = number("height");
          if (!validateSize(w, h) || number("resolution") <= 0) return false;
          editor.commit("Image size", () => {
            const sx = w / editor.state.width,
              sy = h / editor.state.height;
            for (const l of editor.state.layers)
              if (l.type !== "adjust")
                setQuad(
                  l,
                  corners(l).map((p) => ({ x: p.x * sx, y: p.y * sy })),
                );
            editor.state.width = w;
            editor.state.height = h;
            editor.state.resolution = number("resolution");
          });
          selection(null);
        },
      );
      const ratio = editor.state.width / editor.state.height;
      $("#mm-width").oninput = () => {
        if ($("#mm-ratio").checked)
          $("#mm-height").value = Math.round(number("width") / ratio);
      };
      $("#mm-height").oninput = () => {
        if ($("#mm-ratio").checked)
          $("#mm-width").value = Math.round(number("height") * ratio);
      };
      return;
    }
    if (["copy", "copy-merged", "cut"].includes(id))
      return copy(id === "copy-merged", id === "cut");
    if (id === "paste") {
      if (clipboard) {
        const src = clipboard.toDataURL();
        editor.images.set(src, clipboard);
        editor.add("image", "Pasted layer", {
          src,
          w: clipboard.width,
          h: clipboard.height,
        });
      }
      return;
    }
    if (id === "fill") {
      modal(
        "Fill",
        '<label>Contents<select id="mm-fill"><option>Foreground color</option><option>White</option><option>Black</option></select></label>' +
          input("Opacity (%)", "opacity", 100),
        "Fill",
        () => {
          const opacity = number("opacity");
          if (opacity < 0 || opacity > 100) return false;
          raster("Fill", (c, ctx) => {
            clipSelection(ctx, getSelection(), c.width, c.height);
            ctx.globalAlpha = opacity / 100;
            ctx.fillStyle =
              value("fill") === "White"
                ? "#fff"
                : value("fill") === "Black"
                  ? "#000"
                  : getColor();
            ctx.fillRect(0, 0, c.width, c.height);
          });
        },
      );
      return;
    }
    if (id === "transform") {
      action("tool:transform");
      return;
    }
    if (id.startsWith("auto-")) {
      auto(id.slice(5));
      return;
    }
    if (id === "rotation") {
      modal(
        "Image rotation",
        '<label>Rotation<select id="mm-rotation"><option value="90">90° clockwise</option><option value="-90">90° counter clockwise</option><option value="180">180°</option><option value="horizontal">Flip canvas horizontal</option><option value="vertical">Flip canvas vertical</option></select></label>',
        "Apply",
        () => {
          const v = value("rotation");
          rotateDocument(Number(v) || 0, isNaN(Number(v)) ? v : null);
        },
      );
      return;
    }
    if (id === "new-layer") {
      modal(
        "New layer",
        input("Name", "name", "Layer", "text"),
        "Create",
        () => {
          action("new-layer");
          editor.selected.name = value("name") || "Layer";
          refresh();
        },
      );
      return;
    }
    if (id === "adjustment") {
      modal(
        "New adjustment layer",
        '<label>Adjustment<select id="mm-adjust">' +
          ["Brightness/contrast", "Hue/saturation", "Black and white", "Blur"]
            .map((n, i) => `<option value="${i}">${n}</option>`)
            .join("") +
          "</select></label>",
        "Create",
        () => {
          const v = Number(value("adjust"));
          editor.state.selected = null;
          const l = editor.adjustment();
          if (v === 2) l.grayscale = 100;
          if (v === 3) l.blur = 3;
          action(
            "adjust:" + ["brightness", "saturation", "grayscale", "blur"][v],
          );
          refresh();
        },
      );
      return;
    }
    if (id === "style") {
      modal(
        "Layer style",
        input(
          "Shadow color",
          "shadow",
          editor.selected.shadow?.color || "#000000",
          "color",
        ) +
          input("Shadow blur", "blur", editor.selected.shadow?.blur || 10) +
          input("Offset X", "x", editor.selected.shadow?.x || 5) +
          input("Offset Y", "y", editor.selected.shadow?.y || 5),
        "Apply",
        () =>
          editor.commit(
            "Layer style",
            () =>
              (editor.selected.shadow = {
                color: value("shadow"),
                blur: Math.max(0, Math.min(100, number("blur"))),
                x: number("x"),
                y: number("y"),
              }),
          ),
      );
      return;
    }
    if (id === "harmonize") {
      await cloud.open("harmonize");
      return;
    }
    if (id === "group" || id === "ungroup") {
      editor.commit(id === "group" ? "Group layers" : "Ungroup layers", () => {
        const groupId = crypto.randomUUID();
        selected().forEach((l) => {
          if (id === "group") l.groupId = groupId;
          else delete l.groupId;
        });
      });
      return;
    }
    if (id === "all") {
      selection({ x: 0, y: 0, w: editor.state.width, h: editor.state.height });
      return;
    }
    if (id === "deselect") {
      selection(null);
      return;
    }
    if (id === "reselect") {
      const saved = previousSelection;
      selection(saved);
      return;
    }
    if (id === "inverse") {
      selection({ ...getSelection(), inverse: !getSelection().inverse });
      return;
    }
    if (id === "subject") {
      await cloud.selectSubject(selection);
      return;
    }
    if (id === "grow" || id === "refine") {
      modal(
        id === "grow" ? "Grow selection" : "Refine edge",
        input("Expand edge (pixels)", "expand", id === "grow" ? 10 : 0),
        "Apply",
        () => {
          const s = getSelection(),
            n = number("expand");
          const x = Math.max(0, s.x - n),
            y = Math.max(0, s.y - n);
          selection({
            x,
            y,
            w: Math.max(1, Math.min(editor.state.width - x, s.w + 2 * n)),
            h: Math.max(1, Math.min(editor.state.height - y, s.h + 2 * n)),
            inverse: s.inverse,
          });
        },
      );
      return;
    }
    if (id === "similar") {
      modal(
        "Select similar",
        input("Color tolerance (0–255)", "tolerance", 32) +
          "<p>Select pixels matching the average color inside the current selection.</p>",
        "Select",
        () => {
          const c = fullCanvas(),
            ctx = c.getContext("2d"),
            data = ctx.getImageData(0, 0, c.width, c.height).data,
            s = getSelection(),
            sum = [0, 0, 0];
          let count = 0;
          for (
            let y = Math.max(0, Math.floor(s.y));
            y < Math.min(c.height, s.y + s.h);
            y++
          )
            for (
              let x = Math.max(0, Math.floor(s.x));
              x < Math.min(c.width, s.x + s.w);
              x++
            ) {
              const i = (y * c.width + x) * 4;
              if (data[i + 3]) {
                count++;
                sum.forEach((_, k) => (sum[k] += data[i + k]));
              }
            }
          if (!count) return false;
          const mean = sum.map((v) => v / count),
            t = Math.max(0, Math.min(255, number("tolerance"))),
            regions = [];
          for (let y = 0; y < c.height; y++) {
            let start = -1;
            for (let x = 0; x <= c.width; x++) {
              const i = (y * c.width + x) * 4,
                match =
                  x < c.width &&
                  data[i + 3] &&
                  mean.every((m, k) => Math.abs(data[i + k] - m) <= t);
              if (match && start < 0) start = x;
              if (!match && start >= 0) {
                regions.push({ x: start, y, w: x - start, h: 1 });
                start = -1;
              }
            }
          }
          if (!regions.length) {
            toast("No matching pixels");
            return false;
          }
          selection({ x: 0, y: 0, w: c.width, h: c.height, regions });
        },
      );
      return;
    }
    if (id === "selection-transform") {
      const s = getSelection();
      modal(
        "Transform selection",
        input("X", "x", s.x) +
          input("Y", "y", s.y) +
          input("Width", "width", s.w) +
          input("Height", "height", s.h),
        "Apply",
        () => {
          if (!validateSize(number("width"), number("height"))) return false;
          const x = number("x"),
            y = number("y"),
            w = number("width"),
            h = number("height");
          selection({
            ...s,
            x,
            y,
            w,
            h,
            regions: s.regions?.map((r) => ({
              x: x + ((r.x - s.x) * w) / s.w,
              y: y + ((r.y - s.y) * h) / s.h,
              w: (r.w * w) / s.w,
              h: (r.h * h) / s.h,
            })),
          });
        },
      );
      return;
    }
    if (id === "quick-mask") {
      prefs.quickMask = !prefs.quickMask;
      sync();
      return;
    }
    if (id.startsWith("effect-")) {
      effects(Number(id.slice(7)));
      return;
    }
    if (id === "settings" || id === "grid-settings") {
      settings(id === "grid-settings" ? "grid" : "general");
      return;
    }
    if (id.startsWith("thumb-")) {
      prefs.clipThumb = id.slice(6);
      sync();
      return;
    }
    if (Object.hasOwn(prefs, id)) {
      prefs[id] = !prefs[id];
      sync();
      return;
    }
  }
  function effects(category) {
    const options = [
      ["Brightness", "Contrast", "Saturation", "Grayscale", "Sepia"],
      ["Noise", "Grain"],
      ["Gaussian blur"],
      ["Exposure", "Vignette"],
      ["Posterize", "Invert", "Threshold"],
      ["Pixelate", "Wave"],
    ][category];
    modal(
      ["Light and color", "Texture", "Blur", "Light", "Stylize", "Distort"][
        category
      ],
      '<label>Effect<select id="mm-effect">' +
        options.map((x) => `<option>${x}</option>`).join("") +
        "</select></label>" +
        input("Amount (0–100)", "amount", 25),
      "Apply",
      () => {
        const name = value("effect"),
          amount = Math.max(0, Math.min(100, number("amount")));
        raster(name, (c, ctx) => {
          const src = surface(c.width, c.height);
          src.getContext("2d").drawImage(c, 0, 0);
          if (
            [
              "Brightness",
              "Contrast",
              "Saturation",
              "Grayscale",
              "Sepia",
              "Gaussian blur",
              "Exposure",
            ].includes(name)
          ) {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.filter = {
              Brightness: `brightness(${100 + amount}%)`,
              Contrast: `contrast(${100 + amount}%)`,
              Saturation: `saturate(${100 + amount}%)`,
              Grayscale: `grayscale(${amount}%)`,
              Sepia: `sepia(${amount}%)`,
              "Gaussian blur": `blur(${amount / 5}px)`,
              Exposure: `brightness(${100 + amount * 3}%)`,
            }[name];
            ctx.drawImage(src, 0, 0);
            ctx.filter = "none";
          } else if (name === "Pixelate") {
            const n = Math.max(1, Math.round(amount / 3)),
              small = surface(
                Math.max(1, Math.ceil(c.width / n)),
                Math.max(1, Math.ceil(c.height / n)),
              );
            small
              .getContext("2d")
              .drawImage(c, 0, 0, small.width, small.height);
            ctx.imageSmoothingEnabled = false;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(small, 0, 0, c.width, c.height);
          } else if (name === "Wave") {
            ctx.clearRect(0, 0, c.width, c.height);
            for (let y = 0; y < c.height; y++)
              ctx.drawImage(
                src,
                0,
                y,
                c.width,
                1,
                (Math.sin(y / 25) * amount) / 2,
                y,
                c.width,
                1,
              );
          } else if (name === "Vignette") {
            const g = ctx.createRadialGradient(
              c.width / 2,
              c.height / 2,
              0,
              c.width / 2,
              c.height / 2,
              Math.hypot(c.width, c.height) / 2,
            );
            g.addColorStop(0.3, "transparent");
            g.addColorStop(1, `rgba(0,0,0,${amount / 100})`);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, c.width, c.height);
          } else {
            const d = ctx.getImageData(0, 0, c.width, c.height);
            for (let i = 0; i < d.data.length; i += 4) {
              const noise =
                (((((i * 1103515245 + 12345) >>> 8) % 256) - 128) * amount) /
                100;
              for (let k = 0; k < 3; k++) {
                const v = d.data[i + k];
                d.data[i + k] =
                  name === "Invert"
                    ? 255 - v
                    : name === "Threshold"
                      ? v > amount * 2.55
                        ? 255
                        : 0
                      : name === "Posterize"
                        ? Math.round(v / Math.max(1, amount * 2)) *
                          Math.max(1, amount * 2)
                        : v + noise;
              }
            }
            ctx.putImageData(d, 0, 0);
          }
        });
      },
    );
  }
  function settings(tab) {
    modal(
      "App settings",
      `<nav class="settings-tabs">${[
        ["general", "General"],
        ["grid", "Guides, grid and rulers"],
        ["help", "Help"],
        ["account", "Account"],
        ["about", "About"],
      ]
        .map(
          ([id, n]) =>
            `<button data-settings-tab="${id}" ${id === tab ? 'class="active"' : ""}>${n}</button>`,
        )
        .join("")}</nav><div id="mm-settings"></div>`,
      "Done",
      () => {
        if (tab === "general") {
          prefs.theme = value("theme");
          prefs.interfaceSize = value("interfaceSize");
          prefs.large = value("layerSize") === "Large";
          prefs.labels = $("#mm-labels").checked;
        }
        if (tab === "grid") {
          prefs.spacing = Math.max(1, number("spacing"));
          prefs.subdivisions = Math.max(
            1,
            Math.min(16, number("subdivisions")),
          );
          prefs.guideColor = value("guideColor");
        }
        sync();
      },
    );
    const select = (label, id, choices, current) =>
      `<label>${label}<select id="mm-${id}">${choices.map((x) => `<option ${x === current ? "selected" : ""}>${x}</option>`).join("")}</select></label>`;
    $("#mm-settings").innerHTML =
      tab === "general"
        ? select(
            "Color theme",
            "theme",
            ["system", "light", "dark"],
            prefs.theme,
          ) +
          select(
            "Interface size",
            "interfaceSize",
            ["Small", "Medium", "Large"],
            prefs.interfaceSize,
          ) +
          select(
            "Layer size",
            "layerSize",
            ["Small", "Large"],
            prefs.large ? "Large" : "Small",
          ) +
          `<label><input id="mm-labels" type="checkbox" ${prefs.labels ? "checked" : ""}> Show toolbar labels</label><p>Language: English</p><button id="mm-reset">Reset interface to default</button><button id="mm-reset-messages">Reset messaging and dialogs</button>`
        : tab === "grid"
          ? input("Guide color", "guideColor", prefs.guideColor, "color") +
            input("Grid spacing (pixels)", "spacing", prefs.spacing) +
            input("Subdivisions", "subdivisions", prefs.subdivisions) +
            "<p>Rulers use document pixels. Double-click the top or left ruler to add a guide; double-click a guide to remove it.</p>"
          : tab === "help"
            ? '<p>Use arrow keys to navigate menus. Escape closes them. Changes support Undo. Clipboard operations use an editor-local clipboard.</p><button id="mm-learning">Learning center</button>'
            : tab === "account"
              ? '<p>Account, storage and sharing use the local mock backend.</p><button id="mm-account">Open account</button>'
              : "<p>Web Image · independent Canvas editor recreation.<br>Local rendering and mock cloud services. Not affiliated with Adobe.</p>";
    for (const b of document.querySelectorAll("[data-settings-tab]"))
      b.onclick = () => {
        $("#dialog").close();
        settings(b.dataset.settingsTab);
      };
    if ($("#mm-reset"))
      $("#mm-reset").onclick = () => {
        prefs = { ...defaults };
        sync();
        $("#dialog").close();
        settings("general");
      };
    if ($("#mm-reset-messages"))
      $("#mm-reset-messages").onclick = () => {
        localStorage.removeItem("web-image-dismissed-messages");
        toast("Messaging preferences reset");
      };
    for (const id of ["account", "learning"])
      if ($("#mm-" + id))
        $("#mm-" + id).onclick = () => {
          $("#dialog").close();
          cloud.open(id);
        };
  }
  function sync() {
    localStorage.setItem("web-image-interface", JSON.stringify(prefs));
    document.body.dataset.theme =
      prefs.theme === "system"
        ? matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : prefs.theme;
    document.body.dataset.interfaceSize = prefs.interfaceSize;
    document.body.classList.toggle("large-thumbnails", prefs.large);
    document.body.classList.toggle("toolbar-labels", prefs.labels);
    document.body.dataset.thumbBounds = prefs.clipThumb;
    $("#context-bar").style.display = prefs.context ? "" : "none";
    const scale = getZoom() / 200,
      w = editor.state.width,
      h = editor.state.height;
    overlay.style.width = w * scale + "px";
    overlay.style.height = h * scale + "px";
    overlay.innerHTML = "";
    if (prefs.grid) {
      const grid = document.createElement("div");
      grid.className = "document-grid";
      grid.style.backgroundSize = `${(prefs.spacing / prefs.subdivisions) * scale}px ${(prefs.spacing / prefs.subdivisions) * scale}px`;
      overlay.append(grid);
    }
    if (prefs.rulers) {
      for (const axis of ["x", "y"]) {
        const r = document.createElement("div");
        r.className = "document-ruler ruler-" + axis;
        const length = axis === "x" ? w : h,
          step = Math.max(10, Math.ceil(60 / scale / 10) * 10);
        for (let p = 0; p < length; p += step)
          r.insertAdjacentHTML(
            "beforeend",
            `<span style="${axis === "x" ? "left" : "top"}:${p * scale}px">${p}</span>`,
          );
        r.ondblclick = (e) => {
          const box = r.getBoundingClientRect(),
            position = Math.round(
              (axis === "x" ? e.clientX - box.left : e.clientY - box.top) /
                scale,
            );
          editor.commit("Add guide", () => {
            (editor.state.guides ??= []).push({
              axis: axis === "x" ? "vertical" : "horizontal",
              position,
            });
          });
          sync();
        };
        overlay.append(r);
      }
    }
    if (prefs.guides)
      for (const [i, g] of (editor.state.guides || []).entries()) {
        const line = document.createElement("div");
        line.className = "document-guide " + g.axis;
        line.style[g.axis === "vertical" ? "left" : "top"] =
          g.position * scale + "px";
        line.style.background = prefs.guideColor;
        line.title = "Double-click to remove guide";
        line.ondblclick = () => {
          editor.commit("Remove guide", () => editor.state.guides.splice(i, 1));
          sync();
        };
        overlay.append(line);
      }
    for (const row of document.querySelectorAll('[data-layer]')) {
      const layer = editor.state.layers.find(l => l.id === row.dataset.layer);
      if (!layer || layer.type === 'adjust') continue;
      const thumb = row.querySelector('.thumb');
      if (!thumb) continue;
      const box = prefs.clipThumb === 'layer' ? bounds(corners(layer)) : {x:0,y:0,w,h};
      const image = surface(96,96), context = image.getContext('2d');
      const factor = Math.min(96 / Math.max(1,box.w),96 / Math.max(1,box.h));
      context.translate((96-box.w*factor)/2,(96-box.h*factor)/2);
      context.scale(factor,factor); context.translate(-box.x,-box.y);
      editor.drawLayer(context,layer);
      const img = document.createElement('img'); img.src=image.toDataURL(); img.alt='';
      thumb.replaceChildren(img);
    }
    if (prefs.quickMask) {
      const mask = document.createElement("canvas");
      mask.width = w;
      mask.height = h;
      mask.className = "quick-mask";
      const ctx = mask.getContext("2d");
      ctx.fillStyle = "rgba(255,0,0,.35)";
      ctx.fillRect(0, 0, w, h);
      const s = getSelection();
      if (s) {
        clipSelection(ctx, s, w, h);
        ctx.clearRect(0, 0, w, h);
      }
      overlay.append(mask);
    }
  }
  function snapPoint(p) {
    if (!prefs.snap) return p;
    const result = { ...p },
      threshold = 8 / (getZoom() / 200);
    for (const [axis, size] of [
      ["x", "width"],
      ["y", "height"],
    ]) {
      const candidates = [];
      if (prefs.snapGrid)
        candidates.push(Math.round(p[axis] / prefs.spacing) * prefs.spacing);
      if (prefs.snapBounds) candidates.push(0, editor.state[size]);
      for (const g of editor.state.guides || [])
        if ((g.axis === "vertical") === (axis === "x"))
          candidates.push(g.position);
      const closest = candidates.sort(
        (a, b) => Math.abs(a - p[axis]) - Math.abs(b - p[axis]),
      )[0];
      if (Math.abs(closest - p[axis]) < threshold) result[axis] = closest;
    }
    return result;
  }
  document.addEventListener(
    "keydown",
    (e) => {
      if (
        !menu.hidden ||
        document.querySelector("dialog[open]") ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)
      )
        return;
      const mod = e.metaKey || e.ctrlKey,
        k = e.key.toLowerCase();
      let command = null;
      if (mod) {
        command = {
          s: "cloud-save",
          o: "open",
          a: "all",
          d: e.shiftKey ? "reselect" : "deselect",
          c: e.shiftKey ? "copy-merged" : "copy",
          x: "cut",
          v: "paste",
          k: "settings",
          "'": "grid",
          ";": "guides",
        }[k];
        if (e.altKey && k === "i") command = e.shiftKey ? "info" : "image-size";
        if (e.shiftKey && k === "i") command = "inverse";
        if (e.altKey && k === "t") command = "transform";
        if (e.altKey && e.shiftKey && k === "w") command = "export";
      } else if (e.altKey && k === "n") command = "new";
      else if (e.altKey && k === "r") command = "rulers";
      else if (k === "q") command = "quick-mask";
      if (command) {
        e.preventDefault();
        e.stopImmediatePropagation();
        finish();
        execute(command).catch((error) => toast(error.message));
      }
    },
    true,
  );
  sync();
  return { sync, snapPoint };
}
