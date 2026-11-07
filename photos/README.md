# Photos

A small Instagram-style photo timeline at `/photos/`. It is a static GitHub Pages app: the feed is public, and the only write action is uploading a photo with a GitHub token that you paste into Settings on your own phone.

## How it works

- `photos/data.json` is the timeline index.
- `photos/media/` contains the uploaded originals. Nothing is cropped, filtered, or edited.
- `photos/media/thumbs/` contains a 512×512 WebP center crop of each photo (JPEG if the browser cannot encode WebP). The grid uses these instead of the multi-megabyte originals; the feed and focused view still use the original.
- The feed reads the Pages copy of `data.json` and the images under `/photos/`, with `raw.githubusercontent.com/josherich/blog/gh-pages/...` as a fallback. The uploading device keeps the new photo in memory and caches its metadata, so it appears immediately; other devices see it after the GitHub Pages build (usually under a minute).
- Uploads create one atomic Git commit through the GitHub API: a new image blob, the updated `data.json`, a new tree, a commit, and a branch update.
- The token is saved only in the browser's `localStorage`. No server is involved.

## Timeline behavior

- The timeline renders four posts at a time and loads images only when they approach the viewport.
- The grid renders 18 tiles at a time and loads the small `thumb` image for each tile, falling back to the original if a thumbnail is missing.
- A link ending in `#post-<id>` opens a focused view with the target photo and up to two neighbors on each side. Use **Full timeline** to browse from the top.

## One-time setup on your phone

1. Open <https://github.com/settings/personal-access-tokens/new>.
2. Repository access: **Only select repositories** → **josherich/blog**.
3. Permissions: **Contents → Read and write**. Leave every other permission off.
4. Set an expiration, generate the token, and copy it.
5. Open `/photos/`, tap the settings icon, paste the token, and tap **Save token**.

Use a fine-grained token, not a classic token. A classic token with `repo` scope can write to all of your public repositories; a fine-grained token can be limited to this one repo.

## Choosing photos

- JPEG, PNG, WebP, GIF, AVIF, HEIC, and HEIF are accepted.
- HEIC/HEIF photos are converted to JPEG in the browser when the browser can decode them, because most browsers cannot display HEIC images from a web page.
- Files up to 95 MB are accepted. GitHub itself has a 100 MB per-file limit.
- Uploads go to the `gh-pages` branch. If branch protection is enabled, the token's user must be allowed to push to it.

## Local development

The page is plain HTML/CSS/JS with no build step. From the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/photos/>. The app reads `photos/data.json` from the site first, then falls back to the copy on the `gh-pages` branch.

GitHub Pages gives `app.js` and `app.css` a long browser cache lifetime. When changing them, bump the `?v=` value on their `<link>`/`<script>` tags in `photos/index.html`.

To backfill thumbnails for photos that predate the grid thumbnails, run the script from the repository root. It needs ImageMagick (`magick`) and is safe to re-run:

```sh
node photos/scripts/make-thumbs.mjs
```

## Changing the repository or branch

Edit the constants at the top of `photos/app.js`:

```js
var REPO = "josherich/blog";
var BRANCH = "gh-pages";
```

The CSP in `photos/index.html` allows the GitHub API, `raw.githubusercontent.com`, and the Cloudflare analytics beacon; update it if you change hosts.
