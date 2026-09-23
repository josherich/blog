# Web Image

A local, browser-based recreation of the Photoshop web workspace inspected in the supplied Chrome session. Built with plain JavaScript, CSS, and Canvas 2D; no build step, dependencies, account, or API key.

## Run

```sh
cd web-image
npm run dev
```

Open http://localhost:5173. Set `PORT` to use another port. The server binds to localhost only. `npm run check` checks JavaScript syntax.

The backend is optional: any static file server (or `python3 -m http.server`) can serve the app. When `/api/v1` is unreachable, `api.js` automatically falls back to the same mock API running in the browser, so all features work without `server.mjs`.

## Implemented

- Reference document, light gray workspace, floating tool panels, layers panel, contextual toolbar, zoom menu, and keyboard shortcuts.
- Import images from disk or drag and drop; open a replacement document through the main menu.
- Move and numerically transform layers; align, duplicate, rename, reorder, hide, delete, change opacity, and blend modes.
- Soft/hard brush, eraser, full-layer fill, gradient, rectangular selections that clip painting, and eyedropper.
- Rectangles, ellipses, editable text, font selection, foreground/background colors.
- Brightness, contrast, saturation, hue, grayscale, blur, and eight approximate presets.
- Crop, flip selected layer, rotate the composite image, undo/redo, and history.
- Export PNG/JPEG/WebP, download/open editable JSON projects, and browser-local autosave.

## Shortcuts

| Key                    | Action                                 |
| ---------------------- | -------------------------------------- |
| V / B / E              | Move / Brush / Eraser                  |
| T / U / M / I          | Text / Shapes / Selection / Eyedropper |
| C, then drag and Enter | Crop                                   |
| Escape                 | Clear selection / dismiss menu         |
| Cmd/Ctrl Z             | Undo                                   |
| Cmd/Ctrl Shift Z       | Redo                                   |
| Cmd/Ctrl S / O         | Save project / open image              |
| [ / ]                  | Decrease / increase brush size         |

## Scope and differences

This is an independent interface and behavior recreation, not Adobe's original source or a complete Photoshop implementation. Inspection used the rendered interface and its visible controls; no credentials or Adobe backend code are included.

- Backend-dependent features now use a local HTTP mock: sessions, cloud documents and versions, sharing, comments, presence, image library, AI jobs/assistant, and cloud exports. See [docs/backend.md](docs/backend.md) for interfaces and production implementation specs. Real Adobe authentication, provider inference, email delivery, and PSD support are not connected.
- The sample uses the locally available reference photograph. Its black markings are approximated in Canvas; the white rectangle and adjustment are independent layers. It does not preserve the original Photoshop document's exact layer data.
- The preset preview assets were captured from the inspected page. Preset rendering uses approximate Canvas filters, not Adobe's color pipeline.
- Painting on a shape/text layer rasterizes it. Fill paints the entire selected area/layer, rather than contiguous color regions. Rotation produces a flattened composite; undo restores the layered document.
- Layer-mask thumbnails are visual references only. The recreated layer toolbar exposes the local operations described by its tooltips.
- Undo retains up to 35 edits in memory. Autosave uses browser storage, whose quota varies. Save an editable project for a durable copy, particularly with large images. All editing and exports happen locally.
- The desktop layout is the main target. At smaller widths the panels shrink; close panels to expose the canvas.

## Project structure

```
web-image/
├── index.html               Workspace shell and dialogs (entry point)
├── assets/                  Reference photograph and preset preview images
├── styles/
│   └── style.css            Layout, controls, floating panels, responsive rules
├── src/
│   ├── app.js               Entry point: tools, panels, pointer/keyboard handling, import/export, persistence
│   ├── core/                Domain logic, no backend or menu dependencies
│   │   ├── engine.js        Layer model, canvas rendering, filters, history, project loading
│   │   └── geometry.js      Pure geometry: quads, rotation, alignment, projective warp
│   ├── ui/                  Feature panels and workflows (DOM)
│   │   ├── main-menu.js     Top-left menu, commands, view prefs, guides/rulers
│   │   ├── size-position.js Move/transform/crop tooling and overlays
│   │   └── cloud-ui.js      Cloud document, share, comment, AI and export dialogs
│   └── services/
│       └── api.js           HTTP adapter for all backend-dependent calls (/api/v1)
├── server/
│   ├── server.mjs           Dependency-free static server and mock API host
│   └── mock-backend.mjs     In-memory mock backend
├── tests/                   node:test suites (geometry, selection clip, API contract)
└── docs/
    └── backend.md           API contracts and per-feature production backend specs
```

Dependency direction: `ui` → `core` and `services`; `core` never imports from `ui`; `server` is independent of the frontend. To extend the app, put pure logic in `src/core`, DOM behavior in `src/ui`, and route any network call through `src/services/api.js`.

## Verification

Verified interactively in Chrome: reference layout, numeric brightness rendering and undo, rectangle creation, soft brush drawing, text creation, layer visibility, crop to 780 × 320 and undo, and PNG download. The downloaded PNG was independently checked as 1280 × 960. No browser console errors were reported during these checks. JavaScript syntax checks passed.

## Mock backend

The server serves `/api/v1` as well as the app. Cloud records persist only until the server restarts. AI results are labeled demo artwork, and mock invitations do not send email. All requests stay on the local origin. Open the Account menu to simulate a failed request; retry the next action to recover.

Run `npm test` for API contract tests. See [docs/backend.md](docs/backend.md) for every endpoint, UI entry point, data model, limitation, and instructions for replacing the mock with production services.

### Expanded Size & position

- Move: None/Group/Layer auto-select, six alignments, six distributions, horizontal/vertical equal spacing, Canvas/Selection targets, transform controls and hover bounds toggles.
- Multi-select layers with Shift/Ctrl/Cmd-click; Ctrl/Cmd-G groups and Shift-Ctrl/Cmd-G ungroups them.
- Transform: Free transform, Skew, Distort, Perspective, width/height with ratio lock, center X/Y, rotation, flips, quarter turns, draggable handles, Done/Cancel and undo.
- Crop: pixel/physical units, dimensions and ratio lock, swap, rotation, straighten, reset, social/photo presets, draggable crop bounds and Done/Cancel.

Geometry stays editable in document saves. Perspective uses a Canvas triangle mesh, groups are flat, and physical units default to 72 PPI. This expands the inspected Size & position panel; it does not establish complete Photoshop feature parity. Backend persistence/export requirements are in `docs/backend.md`.

### Main menu

The top-left menu includes all inspected entries under Document, Edit, Image, Layer, Select, View and Effects, with nested navigation, checked states, disabled states, keyboard navigation and shortcuts. New/rename/resize documents, local clipboard copy/cut/paste, image rotation, automatic tonal correction, grouping, drop shadows, selection commands, filters, grids, rulers, guides, snapping and interface preferences are implemented. Double-click a ruler to create a guide, or a guide to remove it. Cloud save/copy, invitation, version history, Subject and Harmonize use mock APIs described in `docs/backend.md`.

Current approximations: Subject is a mock rectangle; Harmonize returns fixture artwork; Refine edge expands/contracts a rectangular boundary; Similar uses average-color tolerance; quick mask is a visualization; layer styles currently provide a drop shadow; Effects categories provide representative Canvas filters. Settings currently support English and pixel rulers. The original Image rotation command could not be inspected because automatic approval review flagged a possible edit to the original document; the local command supplies standard quarter turns, 180° rotation and flips. These are functional local equivalents, not full Adobe algorithm parity.
