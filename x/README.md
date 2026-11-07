# X archive

A single-page, dependency-free archive for **josherich.me/x/**. GitHub Pages
serves `index.html`, `style.css`, `app.js`, and `data/archive.json` directly.
There is no build step, backend, embedded X widget, or authentication in the app.

- Filter posts, reposts, likes, and bookmarks; search authors, text, quotes, and threads.
- Read verified author threads in one entry, with nested quote cards and images.
- Open/share the original tweet; engagement metrics are never stored or shown.
- Responsive layout, light/dark theme, hash-linkable filters, and incremental rendering.

## Preview and validate

From the repository root:

```sh
python3 x/tools/serve.py
node --check x/app.js
python3 x/tools/check.py
```

Open the printed `/x/` URL. The Python server is only for local preview and agent
imports; the published app does not need it. Stop it with Ctrl-C when done.

## Weekly sync

A Codex automation was created for **Sunday at 9:00 a.m. America/New_York**.
It runs on this computer and needs Codex plus the signed-in Chrome session to be
available. GitHub Pages cannot access the local Chrome session itself.

See [AGENTS.md](AGENTS.md) for the browser-only capture and import procedure.
The archive is public once published. No cookies or API credentials are captured.
`sync` records actual collection coverage and incomplete detail expansion;
`truncated` posts are explicitly labeled in the UI. Unavailable/deleted X content
cannot be recovered by the app. Video uses direct media when X exposes it;
otherwise the poster links back to the original.

Publication uses the blog's existing `gh-pages` branch. Weekly runs validate,
commit, and push only changes under `x/`, then verify the Pages build. If
publication is blocked, they preserve the local capture and report the blocker;
a local successful import alone does not mean the live site changed.
