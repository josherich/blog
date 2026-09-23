import {
  corners,
  bounds,
  center,
  setQuad,
  translate,
  rotate,
  hitQuad,
  validQuad,
  dimensions,
  resizeQuad,
  alignLayers,
  distributeLayers,
  project,
} from "../core/geometry.js";
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const round = (n) => Math.round(n * 100) / 100;
const presets = {
  Instagram: [
    ["Square", 1080, 1080],
    ["Story", 1080, 1920],
    ["Portrait", 1080, 1350],
    ["Landscape", 1080, 566],
    ["Profile photo", 320, 320],
  ],
  Facebook: [
    ["Story", 1080, 1920],
    ["Post", 1200, 630],
    ["Profile photo", 170, 170],
  ],
  TikTok: [["Clip", 1080, 1920]],
  YouTube: [["Thumbnail", 1280, 720]],
  LinkedIn: [
    ["LinkedIn", 1200, 627],
    ["Profile photo", 400, 400],
  ],
  Twitter: [
    ["Cover photo", 1500, 500],
    ["Landscape", 1024, 512],
    ["Profile photo", 400, 400],
  ],
  Photos: [
    ["Square", 1, 1],
    ["2:1", 2, 1],
    ["3:2", 3, 2],
    ["4:3", 4, 3],
    ["5:4", 5, 4],
    ["7:5", 7, 5],
    ["16:9", 16, 9],
  ],
};
export function createSizePosition({
  editor,
  getMode,
  setMode,
  isActive,
  repaint,
  refresh,
  toast,
  icon,
  getZoom,
  snapPoint = (p) => p,
}) {
  const wrap = document.querySelector("#canvas-wrap"),
    canvas = editor.canvas;
  const overlay = document.createElement("div");
  overlay.id = "transform-overlay";
  wrap.append(overlay);
  const hover = document.createElement("div");
  hover.id = "hover-bounds";
  wrap.append(hover);
  let prefs = {
    auto: "Layer",
    align: "Canvas",
    controls: true,
    hover: true,
    advanced: false,
  };
  try {
    prefs = {
      ...prefs,
      ...JSON.parse(localStorage.getItem("web-image-move-settings") || "{}"),
    };
  } catch {}
  let transaction = null,
    drag = null,
    mode = "free",
    linked = true,
    cropLinked = false,
    units = "Pixels",
    cropRotation = 0,
    cropRect = null,
    straighten = false,
    customPresets = false;
  const savedContext = document.querySelector("#context-bar").innerHTML;
  const selected = () => {
    let ids = editor.state.selectedIds || [editor.state.selected];
    if (!ids.includes(editor.state.selected)) ids = [editor.state.selected];
    return editor.state.layers.filter(
      (l) => ids.includes(l.id) && l.type !== "adjust",
    );
  };
  const multi = () => selected().length > 1;
  function selectionQuad() {
    const layers = selected();
    if (layers.length === 1) return corners(layers[0]);
    return corners(bounds(layers.flatMap(corners)));
  }
  const btn = (label, action, i, disabled = false) =>
    `<button data-sp="${action}" aria-label="${esc(label)}" title="${esc(label)}" ${disabled ? "disabled" : ""}>${i ? icon(i) : esc(label)}</button>`;
  const field = (label, key, value, suffix = "") =>
    `<label class="sp-field"><span>${label}</span><input type="number" step="0.1" data-sp-field="${key}" aria-label="${label}" value="${round(value)}"><span>${suffix}</span></label>`;
  const alignIcon = (key) => {
    const vertical = ["top", "middle", "bottom"].includes(key),
      factor = {
        left: 3,
        center: 12,
        right: 21,
        top: 3,
        middle: 12,
        bottom: 21,
      }[key];
    return `<svg viewBox="0 0 24 24" style="transform:rotate(${vertical ? 90 : 0}deg)"><path d="M${factor} 2v20M${key === "right" || key === "bottom" ? 6 : key === "center" || key === "middle" ? 7 : 6} 5h10v4H${key === "right" || key === "bottom" ? 6 : key === "center" || key === "middle" ? 7 : 6}zM8 14h6v4H8z"/></svg>`;
  };
  function persist() {
    localStorage.setItem("web-image-move-settings", JSON.stringify(prefs));
  }
  function panel() {
    const tool = getMode();
    let html = `<button class="tool-row ${tool === "move" ? "active" : ""}" data-sp="mode:move">${icon("move")}Move</button>`;
    if (tool === "move")
      html += `<div class="options"><label class="caption">Auto-select</label><select aria-label="Auto-select" data-sp-setting="auto">${["None", "Group", "Layer"].map((x) => `<option ${prefs.auto === x ? "selected" : ""}>${x}</option>`).join("")}</select><span class="caption">Align</span><div class="align-buttons">${["left", "center", "right", "top", "middle", "bottom"].map((key) => `<button data-sp="align:${key}" aria-label="Align ${key}" title="Align ${key}" ${!selected().length ? "disabled" : ""}>${alignIcon(key)}</button>`).join("")}</div><details id="move-advanced" ${prefs.advanced ? "open" : ""}><summary>Advanced settings</summary><span class="caption">Distribute</span><div class="align-buttons">${["top", "middle", "bottom", "left", "center", "right"].map((key) => `<button data-sp="distribute:${key}" title="Distribute ${key}" aria-label="Distribute ${key}" ${selected().length < 3 ? "disabled" : ""}>${alignIcon(key)}</button>`).join("")}</div><span class="caption">Distribute spacing</span><div class="sp-spacing">${btn("Distribute vertically", "spacing:vertical", "align", selected().length < 3)}${btn("Distribute horizontally", "spacing:horizontal", "align", selected().length < 3)}</div><label class="caption">Align to</label><select aria-label="Align to" data-sp-setting="align"><option ${prefs.align === "Canvas" ? "selected" : ""}>Canvas</option><option ${prefs.align === "Selection" ? "selected" : ""}>Selection</option></select><label class="sp-switch"><input type="checkbox" role="switch" data-sp-setting="controls" ${prefs.controls ? "checked" : ""}>Show transform controls</label><label class="sp-switch"><input type="checkbox" role="switch" data-sp-setting="hover" ${prefs.hover ? "checked" : ""}>Show layer bounds on hover</label><p class="help-note">Shift-click layers to select several. Distribute needs at least three layers.</p>${multi() ? btn("Group selected layers", "group") : ""}</details></div>`;
    html += `<button class="tool-row ${tool === "transform" ? "active" : ""}" data-sp="mode:transform" ${!selected().length ? "disabled" : ""}>${icon("transform")}Transform</button>`;
    if (tool === "transform") {
      const d = dimensions(selectionQuad());
      html += `<div class="options"><div class="sp-modes" role="radiogroup" aria-label="Transform mode">${[
        ["free", "Free transform"],
        ["skew", "Skew"],
        ["distort", "Distort"],
        ["perspective", "Perspective"],
      ]
        .map(
          ([id, label]) =>
            `<button role="radio" aria-label="${label}" title="${label}" aria-checked="${mode === id}" data-sp="transform-mode:${id}" class="${mode === id ? "active" : ""}">${icon(id === "free" ? "transform" : id === "skew" ? "select" : id === "distort" ? "shapes" : "crop")}</button>`,
        )
        .join(
          "",
        )}</div><div class="sp-dimensions">${field("Width", "width", d.w)}${field("Height", "height", d.h)}<button class="sp-ratio" aria-label="Constrain aspect ratio" aria-pressed="${linked}" data-sp="link" ${mode !== "free" ? "disabled" : ""}>${linked ? "🔒" : "↔"}</button></div>${field("X", "centerX", d.x)}${field("Y", "centerY", d.y)}${field("Rotation", "rotation", d.rotation, "°")}<p class="help-note">${mode === "free" ? "Drag handles to resize; drag the round handle above the box to rotate." : mode === "skew" ? "Drag an edge handle to shear the layer." : mode === "distort" ? "Drag a corner to reshape the layer." : "Drag a corner to taper opposite corners symmetrically."}</p></div>`;
    }
    html += `<button class="tool-row ${tool === "crop" ? "active" : ""}" data-sp="mode:crop">${icon("crop")}Crop</button>`;
    if (tool === "crop") {
      const r = cropRect || { w: editor.state.width, h: editor.state.height },
        factor = unitFactor();
      html += `<div class="options"><label class="sp-field">Units<select aria-label="Units" data-sp-setting="units">${["Pixels", "Inches", "Centimeters", "Millimeters"].map((x) => `<option ${x === units ? "selected" : ""}>${x}</option>`).join("")}</select></label><div class="sp-dimensions">${field("Width", "cropWidth", r.w / factor)}${field("Height", "cropHeight", r.h / factor)}<button class="sp-ratio" data-sp="crop-link" aria-label="Constrain crop aspect ratio" aria-pressed="${cropLinked}">${cropLinked ? "🔒" : "↔"}</button></div>${btn("Swap width and height", "crop-swap", "swap")}<span class="caption">Rotate</span><div class="range-line"><input aria-label="Crop rotation" type="range" min="-45" max="45" step="0.1" value="${cropRotation}" data-sp-field="cropRotation"><input aria-label="Crop rotation value" type="number" step="0.1" value="${cropRotation}" data-sp-field="cropRotation"></div><div class="sp-spacing">${btn(straighten ? "Draw a horizon line" : "Straighten", "straighten", "align")}${btn("Rotate crop 90°", "crop-rotate", "redo")}</div>${btn("Reset", "crop-reset", "undo")}<details ${customPresets ? "open" : ""} id="crop-presets"><summary>Presets</summary>${Object.entries(
        presets,
      )
        .map(
          ([group, items]) =>
            `<details ${group === "Instagram" ? "open" : ""}><summary>${group}</summary>${items.map(([name, w, h]) => `<button class="sp-preset" data-sp="preset:${group}:${w}:${h}"><span>${name}</span><small>${group === "Photos" ? `${w}:${h}` : `${w} × ${h}`}</small></button>`).join("")}</details>`,
        )
        .join("")}</details></div>`;
    }
    return html;
  }
  function unitFactor() {
    const ppi = editor.state.resolution || 72;
    return units === "Inches"
      ? ppi
      : units === "Centimeters"
        ? ppi / 2.54
        : units === "Millimeters"
          ? ppi / 25.4
          : 1;
  }
  function start(kind) {
    if (transaction) {
      if (transaction.kind === kind) return;
      finish(true);
    }
    if (kind === "transform" && !selected().length) {
      toast("Select an image, shape, or text layer first");
      return false;
    }
    transaction = { kind, state: structuredClone(editor.state) };
    if (kind === "crop") {
      cropRect = { x: 0, y: 0, w: editor.state.width, h: editor.state.height };
      cropRotation = 0;
      straighten = false;
    }
    return true;
  }
  function switchMode(next) {
    if (transaction && transaction.kind !== next) finish(true);
    if (["transform", "crop"].includes(next) && start(next) === false) return;
    setMode(next);
    repaint();
    sync();
  }
  function finish(commit) {
    if (!transaction) return;
    const prior = transaction;
    transaction = null;
    drag = null;
    if (prior.kind === "crop" && commit) {
      const r = cropRect;
      editor.state.width = Math.max(1, Math.round(r.w));
      editor.state.height = Math.max(1, Math.round(r.h));
      for (const l of editor.state.layers) translate(l, -r.x, -r.y);
    }
    const after = structuredClone(editor.state);
    editor.state = prior.state;
    cropRect = null;
    straighten = false;
    setMode("move");
    if (commit && JSON.stringify(after) !== JSON.stringify(prior.state))
      editor.commit(
        prior.kind === "crop" ? "Crop image" : "Transform layers",
        () => (editor.state = after),
      );
    else editor.render();
    refresh();
    repaint();
    sync();
  }
  function sync() {
    const active = isActive(),
      tool = getMode();
    overlay.hidden =
      !active ||
      (!transaction && !prefs.controls) ||
      (!selected().length && tool !== "crop");
    hover.hidden = true;
    document.querySelector("#undo").disabled =
      !!transaction || !editor.undoStack.length;
    document.querySelector("#redo").disabled =
      !!transaction || !editor.redoStack.length;
    const context = document.querySelector("#context-bar");
    if (transaction) {
      context.innerHTML =
        transaction.kind === "transform"
          ? `${btn("Rotate 90° counter clockwise", "rotate:-90", "undo")}${btn("Rotate 90° clockwise", "rotate:90", "redo")}${btn("Flip horizontal", "flip:x", "swap")}${btn("Flip vertical", "flip:y", "swap")}${btn("Cancel", "cancel")}${btn("Done", "done")}`
          : `${btn("Cancel", "cancel")}${btn("Done", "done")}`;
      context.querySelector('[data-sp="done"]').classList.add("primary");
    } else if (context.querySelector("[data-sp]"))
      context.innerHTML = savedContext;
    if (overlay.hidden) return;
    const q = tool === "crop" ? corners(cropRect) : selectionQuad(),
      b = bounds(q),
      scale = getZoom() / 200;
    overlay.style.width = editor.state.width * scale + "px";
    overlay.style.height = editor.state.height * scale + "px";
    const qs = q.map((p) => ({ x: p.x * scale, y: p.y * scale }));
    let svg = `<svg class="sp-outline"><polygon points="${qs.map((p) => `${p.x},${p.y}`).join(" ")}"/></svg>`;
    if (tool === "crop")
      svg += `<div class="sp-crop-grid" style="left:${b.x * scale}px;top:${b.y * scale}px;width:${b.w * scale}px;height:${b.h * scale}px"></div>`;
    const handles = [
      q[0],
      { x: (q[0].x + q[1].x) / 2, y: (q[0].y + q[1].y) / 2 },
      q[1],
      { x: (q[1].x + q[2].x) / 2, y: (q[1].y + q[2].y) / 2 },
      q[2],
      { x: (q[2].x + q[3].x) / 2, y: (q[2].y + q[3].y) / 2 },
      q[3],
      { x: (q[3].x + q[0].x) / 2, y: (q[3].y + q[0].y) / 2 },
    ];
    svg += handles
      .map(
        (p, i) =>
          `<button class="sp-handle sp-handle-${i}" data-sp-handle="${i}" aria-label="${["Top left", "Top center", "Top right", "Right center", "Bottom right", "Bottom center", "Bottom left", "Left center"][i]} ${tool === "crop" ? "crop" : "transform"} handle" style="left:${p.x * scale}px;top:${p.y * scale}px"></button>`,
      )
      .join("");
    if (tool !== "crop") {
      const p = handles[1],
        c = center(q),
        len = Math.hypot(p.x - c.x, p.y - c.y) || 1;
      svg += `<button class="sp-handle sp-rotate" data-sp-handle="rotate" aria-label="Rotate layer handle" style="left:${p.x * scale + ((p.x - c.x) / len) * 28}px;top:${p.y * scale + ((p.y - c.y) / len) * 28}px"></button>`;
    }
    if (!drag) overlay.innerHTML = svg;
    else {
      overlay
        .querySelector(".sp-outline polygon")
        ?.setAttribute("points", qs.map((p) => `${p.x},${p.y}`).join(" "));
      handles.forEach((p, i) => {
        const h = overlay.querySelector(`[data-sp-handle="${i}"]`);
        if (h) {
          h.style.left = p.x * scale + "px";
          h.style.top = p.y * scale + "px";
        }
      });
      const grid = overlay.querySelector(".sp-crop-grid");
      if (grid)
        Object.assign(grid.style, {
          left: b.x * scale + "px",
          top: b.y * scale + "px",
          width: b.w * scale + "px",
          height: b.h * scale + "px",
        });
    }
  }
  function renderPreview() {
    editor.render();
    sync();
    updateFields();
  }
  function updateFields() {
    const d = selected().length ? dimensions(selectionQuad()) : {},
      r = cropRect;
    const values = {
      width: d.w,
      height: d.h,
      centerX: d.x,
      centerY: d.y,
      rotation: d.rotation,
      cropWidth: r?.w / unitFactor(),
      cropHeight: r?.h / unitFactor(),
      cropRotation,
    };
    for (const el of document.querySelectorAll("[data-sp-field]"))
      if (
        el !== document.activeElement &&
        Number.isFinite(values[el.dataset.spField])
      )
        el.value = round(values[el.dataset.spField]);
  }
  function applyGroup(fn) {
    const q = selectionQuad(),
      next = fn(q);
    if (!validQuad(next)) return;
    if (selected().length === 1) setQuad(selected()[0], next);
    else {
      const old = bounds(q);
      for (const l of selected())
        setQuad(
          l,
          corners(l).map((p) =>
            project(next, (p.x - old.x) / old.w, (p.y - old.y) / old.h),
          ),
        );
    }
    renderPreview();
  }
  function rotateGroup(angle) {
    const pivot = center(selectionQuad());
    for (const l of selected()) setQuad(l, rotate(corners(l), angle, pivot));
    renderPreview();
  }
  function input(key, value) {
    if (!Number.isFinite(value)) return;
    if (key.startsWith("crop")) {
      if (!transaction) start("crop");
      if (key === "cropRotation") {
        cropRotation = value;
        previewCropRotation();
      } else {
        const r = cropRect,
          k = key === "cropWidth" ? "w" : "h",
          other = k === "w" ? "h" : "w",
          before = r[k];
        r[k] = Math.max(1, Math.min(8192, value * unitFactor()));
        if (cropLinked) r[other] *= r[k] / before;
        sync();
        updateFields();
      }
      return;
    }
    if (!transaction) start("transform");
    const d = dimensions(selectionQuad());
    if (key === "width" || key === "height") {
      const w =
          key === "width"
            ? Math.max(1, value)
            : linked
              ? (d.w * Math.max(1, value)) / d.h
              : d.w,
        h =
          key === "height"
            ? Math.max(1, value)
            : linked
              ? (d.h * Math.max(1, value)) / d.w
              : d.h;
      applyGroup((q) => resizeQuad(q, w, h));
    } else if (key === "rotation") rotateGroup(value - d.rotation);
    else {
      const dx = key === "centerX" ? value - d.x : 0,
        dy = key === "centerY" ? value - d.y : 0;
      for (const l of selected()) translate(l, dx, dy);
      renderPreview();
    }
  }
  function previewCropRotation() {
    const initial = transaction.state;
    editor.state = structuredClone(initial);
    const pivot = { x: initial.width / 2, y: initial.height / 2 };
    for (const l of editor.state.layers)
      if (l.type !== "adjust")
        setQuad(l, rotate(corners(l), cropRotation, pivot));
    renderPreview();
  }
  function actions(action) {
    const [kind, arg, vw, vh] = action.split(":");
    if (kind === "mode") {
      switchMode(arg);
      return;
    }
    if (action === "done") {
      finish(true);
      return;
    }
    if (action === "cancel") {
      finish(false);
      return;
    }
    if (kind === "transform-mode") {
      mode = arg;
      repaint();
      sync();
      return;
    }
    if (action === "link") {
      linked = !linked;
      repaint();
      return;
    }
    if (action === "crop-link") {
      cropLinked = !cropLinked;
      repaint();
      return;
    }
    if (kind === "rotate") {
      rotateGroup(Number(arg));
      return;
    }
    if (kind === "flip") {
      const pivot = center(selectionQuad());
      for (const l of selected())
        setQuad(
          l,
          corners(l).map((p) => ({
            x: arg === "x" ? 2 * pivot.x - p.x : p.x,
            y: arg === "y" ? 2 * pivot.y - p.y : p.y,
          })),
        );
      renderPreview();
      return;
    }
    if (kind === "align") {
      const targets = selected();
      if (!targets.length) return;
      const target =
        prefs.align === "Canvas"
          ? { x: 0, y: 0, w: editor.state.width, h: editor.state.height }
          : bounds(targets.flatMap(corners));
      editor.commit("Align layers", () => alignLayers(targets, target, arg));
      sync();
      return;
    }
    if (kind === "distribute" || kind === "spacing") {
      editor.commit("Distribute layers", () =>
        distributeLayers(selected(), arg, kind === "spacing"),
      );
      sync();
      return;
    }
    if (action === "group") {
      const id = crypto.randomUUID();
      editor.commit("Group layers", () =>
        selected().forEach((l) => (l.groupId = id)),
      );
      return;
    }
    if (action === "crop-reset") {
      editor.state = structuredClone(transaction.state);
      cropRect = { x: 0, y: 0, w: editor.state.width, h: editor.state.height };
      cropRotation = 0;
      straighten = false;
      repaint();
      renderPreview();
      return;
    }
    if (action === "crop-rotate") {
      cropRotation += 90;
      [cropRect.w, cropRect.h] = [cropRect.h, cropRect.w];
      previewCropRotation();
      return;
    }
    if (action === "crop-swap") {
      [cropRect.w, cropRect.h] = [cropRect.h, cropRect.w];
      repaint();
      sync();
      return;
    }
    if (action === "straighten") {
      straighten = !straighten;
      repaint();
      canvas.style.cursor = "crosshair";
      return;
    }
    if (kind === "preset") {
      let w = Number(vw),
        h = Number(vh);
      if (arg === "Photos") {
        const ratio = w / h;
        w = Math.min(editor.state.width, editor.state.height * ratio);
        h = w / ratio;
      }
      cropRect = {
        x: (editor.state.width - w) / 2,
        y: (editor.state.height - h) / 2,
        w,
        h,
      };
      cropLinked = true;
      customPresets = true;
      repaint();
      sync();
    }
  }
  document.addEventListener(
    "click",
    (e) => {
      const el = e.target.closest("[data-sp]");
      if (el) {
        e.preventDefault();
        e.stopImmediatePropagation();
        actions(el.dataset.sp);
        return;
      }
      const row = e.target.closest("[data-layer]");
      if (
        row &&
        !e.target.closest("[data-visibility]") &&
        (e.shiftKey || e.metaKey || e.ctrlKey)
      ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (transaction) finish(true);
        const id = row.dataset.layer,
          ids = new Set(editor.state.selectedIds || [editor.state.selected]);
        ids.has(id) ? ids.delete(id) : ids.add(id);
        editor.state.selectedIds = [...ids];
        editor.state.selected = ids.has(id) ? id : [...ids].at(-1);
        refresh();
        if (isActive()) repaint();
        sync();
        return;
      }
      if (row) {
        if (transaction) finish(true);
        editor.state.selectedIds = [row.dataset.layer];
      }
      if (
        transaction &&
        e.target.closest(
          "[data-section],[data-action],[data-right],#undo,#redo,#menu,#download,#share,#account",
        )
      )
        finish(true);
    },
    true,
  );
  document.addEventListener("change", (e) => {
    const el = e.target;
    if (!el.dataset.spSetting) return;
    const key = el.dataset.spSetting;
    if (key === "units") units = el.value;
    else prefs[key] = el.type === "checkbox" ? el.checked : el.value;
    persist();
    sync();
    if (key === "units") repaint();
  });
  document.addEventListener(
    "toggle",
    (e) => {
      if (e.target.id === "move-advanced") {
        prefs.advanced = e.target.open;
        persist();
      }
      if (e.target.id === "crop-presets") customPresets = e.target.open;
    },
    true,
  );
  document.addEventListener(
    "input",
    (e) => {
      if (e.target.dataset.spField) {
        e.stopImmediatePropagation();
        input(e.target.dataset.spField, Number(e.target.value));
      }
    },
    true,
  );
  function point(e) {
    const r = canvas.getBoundingClientRect();
    return snapPoint({
      x: ((e.clientX - r.left) * editor.state.width) / r.width,
      y: ((e.clientY - r.top) * editor.state.height) / r.height,
    });
  }
  function hit(p) {
    return [...editor.state.layers]
      .reverse()
      .find((l) => l.type !== "adjust" && l.visible && hitQuad(corners(l), p));
  }
  function selectHit(l, add) {
    if (!l) return;
    const ids =
      prefs.auto === "Group" && l.groupId
        ? editor.state.layers
            .filter((x) => x.groupId === l.groupId)
            .map((x) => x.id)
        : [l.id];
    editor.state.selectedIds = add
      ? [
          ...new Set([
            ...(editor.state.selectedIds || [editor.state.selected]),
            ...ids,
          ]),
        ]
      : ids;
    editor.state.selected = l.id;
    refresh();
    repaint();
  }
  function down(e) {
    if (e.target.closest("#view-overlay")) return;
    if (
      !isActive() ||
      !["move", "transform", "crop"].includes(getMode()) ||
      e.button !== 0
    )
      return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const p = point(e),
      handle = e.target.closest("[data-sp-handle]")?.dataset.spHandle;
    wrap.setPointerCapture(e.pointerId);
    if (getMode() === "crop") {
      if (straighten) {
        drag = { kind: "straighten", start: p };
        return;
      }
      drag = {
        kind: handle
          ? "crop-handle"
          : hitQuad(corners(cropRect), p)
            ? "crop-move"
            : "crop-new",
        handle: Number(handle),
        start: p,
        rect: { ...cropRect },
      };
      return;
    }
    if (handle) {
      if (!transaction) {
        start("transform");
        setMode("transform");
        repaint();
      }
      drag = {
        kind: "handle",
        handle: handle === "rotate" ? "rotate" : Number(handle),
        start: p,
        quad: selectionQuad(),
        layers: selected().map((l) => ({ id: l.id, quad: corners(l) })),
      };
      return;
    }
    if (getMode() === "move" && prefs.auto !== "None") {
      const l = hit(p);
      if (l && !selected().some((s) => s.id === l.id)) selectHit(l, e.shiftKey);
      else if (l && e.shiftKey) selectHit(l, true);
    }
    if (!selected().length) return;
    if (!selected().some((l) => hitQuad(corners(l), p))) return;
    drag = {
      kind: "move",
      start: p,
      layers: selected().map((l) => ({ id: l.id, quad: corners(l) })),
      snapshot: structuredClone(editor.state),
    };
  }
  function move(e) {
    if (!isActive()) return;
    const p = point(e);
    if (!drag) {
      if (getMode() === "move" && prefs.hover) {
        const l = hit(p);
        if (l) {
          const b = bounds(corners(l)),
            s = getZoom() / 200;
          hover.hidden = false;
          Object.assign(hover.style, {
            left: b.x * s + "px",
            top: b.y * s + "px",
            width: b.w * s + "px",
            height: b.h * s + "px",
          });
        } else hover.hidden = true;
      }
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    const dx = p.x - drag.start.x,
      dy = p.y - drag.start.y;
    if (drag.kind === "move") {
      for (const item of drag.layers) {
        const l = editor.state.layers.find((l) => l.id === item.id);
        setQuad(
          l,
          item.quad.map((v) => ({ x: v.x + dx, y: v.y + dy })),
        );
      }
      renderPreview();
      return;
    }
    if (drag.kind === "straighten") {
      overlay.querySelector(".sp-straighten")?.remove();
      const s = getZoom() / 200;
      overlay.insertAdjacentHTML(
        "beforeend",
        `<svg class="sp-straighten"><line x1="${drag.start.x * s}" y1="${drag.start.y * s}" x2="${p.x * s}" y2="${p.y * s}"/></svg>`,
      );
      return;
    }
    if (drag.kind.startsWith("crop")) {
      const r = drag.rect;
      if (drag.kind === "crop-move")
        cropRect = { ...r, x: r.x + dx, y: r.y + dy };
      else if (drag.kind === "crop-new")
        cropRect = {
          x: Math.min(p.x, drag.start.x),
          y: Math.min(p.y, drag.start.y),
          w: Math.max(1, Math.abs(dx)),
          h: Math.max(1, Math.abs(dy)),
        };
      else {
        let { x, y, w, h } = r;
        const k = drag.handle;
        if ([0, 6, 7].includes(k)) {
          x += dx;
          w -= dx;
        }
        if ([2, 3, 4].includes(k)) w += dx;
        if ([0, 1, 2].includes(k)) {
          y += dy;
          h -= dy;
        }
        if ([4, 5, 6].includes(k)) h += dy;
        if (cropLinked) {
          const ratio = r.w / r.h;
          if ([1, 5].includes(k)) {
            w = h * ratio;
            x = r.x + (r.w - w) / 2;
          } else h = w / ratio;
          if ([0, 1, 2].includes(k)) y = r.y + r.h - h;
        }
        cropRect = { x, y, w: Math.max(1, w), h: Math.max(1, h) };
      }
      sync();
      updateFields();
      return;
    }
    if (drag.kind === "handle") {
      const q = drag.quad,
        k = drag.handle,
        pivot = center(q);
      let next = q.map((v) => ({ ...v }));
      if (k === "rotate") {
        const angle =
          ((Math.atan2(p.y - pivot.y, p.x - pivot.x) -
            Math.atan2(drag.start.y - pivot.y, drag.start.x - pivot.x)) *
            180) /
          Math.PI;
        next = rotate(
          q,
          e.shiftKey ? Math.round(angle / 15) * 15 : angle,
          pivot,
        );
      } else if (mode === "distort" || mode === "perspective") {
        if (k % 2 === 0) {
          const i = k / 2;
          next[i] = { x: q[i].x + dx, y: q[i].y + dy };
          if (mode === "perspective") {
            const neighbor = i ^ 1;
            next[neighbor] = { x: q[neighbor].x - dx, y: q[neighbor].y + dy };
          }
        } else {
          const i = Math.floor(k / 2),
            j = (i + 1) % 4;
          next[i] = { x: q[i].x + dx, y: q[i].y + dy };
          next[j] = { x: q[j].x + dx, y: q[j].y + dy };
        }
      } else if (mode === "skew") {
        const i = Math.floor(k / 2),
          j = (i + 1) % 4;
        const a = q[i],
          b = q[j],
          len = Math.hypot(b.x - a.x, b.y - a.y),
          ux = (b.x - a.x) / len,
          uy = (b.y - a.y) / len,
          amount = dx * ux + dy * uy;
        for (const n of [i, j])
          next[n] = { x: q[n].x + amount * ux, y: q[n].y + amount * uy };
      } else {
        const d = dimensions(q),
          angle = -d.rotation,
          flat = rotate(q, angle, pivot),
          pp = rotate([p], angle, pivot)[0],
          box = bounds(flat),
          left = [0, 6, 7].includes(k),
          right = [2, 3, 4].includes(k),
          top = [0, 1, 2].includes(k),
          bottom = [4, 5, 6].includes(k);
        let sx = left
            ? (box.x + box.w - pp.x) / box.w
            : right
              ? (pp.x - box.x) / box.w
              : 1,
          sy = top
            ? (box.y + box.h - pp.y) / box.h
            : bottom
              ? (pp.y - box.y) / box.h
              : 1;
        sx = Math.max(0.01, sx);
        sy = Math.max(0.01, sy);
        if (linked !== e.shiftKey) {
          if (left || right) sy = sx;
          else sx = sy;
        }
        const anchor = {
          x: left ? box.x + box.w : box.x,
          y: top ? box.y + box.h : box.y,
        };
        next = rotate(
          flat.map((v) => ({
            x: anchor.x + (v.x - anchor.x) * sx,
            y: anchor.y + (v.y - anchor.y) * sy,
          })),
          d.rotation,
          pivot,
        );
      }
      if (!validQuad(next)) return;
      if (drag.layers.length === 1)
        setQuad(
          editor.state.layers.find((l) => l.id === drag.layers[0].id),
          next,
        );
      else {
        const b = bounds(q);
        for (const item of drag.layers) {
          const l = editor.state.layers.find((l) => l.id === item.id);
          setQuad(
            l,
            item.quad.map((v) =>
              project(next, (v.x - b.x) / b.w, (v.y - b.y) / b.h),
            ),
          );
        }
      }
      renderPreview();
    }
  }
  function up(e) {
    if (!drag) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (drag.kind === "straighten") {
      const p = point(e);
      let a =
        (Math.atan2(p.y - drag.start.y, p.x - drag.start.x) * 180) / Math.PI;
      while (a > 45) a -= 90;
      while (a < -45) a += 90;
      cropRotation = -a;
      straighten = false;
      previewCropRotation();
      repaint();
    }
    if (drag.kind === "move" && !transaction) {
      const final = structuredClone(editor.state),
        before = drag.snapshot;
      editor.state = before;
      if (JSON.stringify(final) !== JSON.stringify(before))
        editor.commit("Move layers", () => (editor.state = final));
    }
    drag = null;
    sync();
    updateFields();
    if (!transaction) refresh();
  }
  wrap.addEventListener("pointerdown", down, true);
  wrap.addEventListener("pointermove", move, true);
  wrap.addEventListener("pointerup", up, true);
  wrap.addEventListener(
    "pointercancel",
    (e) => {
      if (drag?.snapshot) editor.state = drag.snapshot;
      drag = null;
      if (transaction) finish(false);
      editor.render();
      sync();
    },
    true,
  );
  wrap.addEventListener("pointerleave", () => {
    hover.hidden = true;
  });
  document.addEventListener(
    "keydown",
    (e) => {
      if (document.querySelector("dialog[open]")) return;
      if (transaction && ["Escape", "Enter"].includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        finish(e.key === "Enter");
        return;
      }
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) ||
        !isActive()
      )
        return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "g") {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.shiftKey)
          editor.commit("Ungroup layers", () =>
            selected().forEach((l) => delete l.groupId),
          );
        else actions("group");
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const step = e.shiftKey ? 10 : 1,
          dx =
            e.key === "ArrowLeft" ? -step : e.key === "ArrowRight" ? step : 0,
          dy = e.key === "ArrowUp" ? -step : e.key === "ArrowDown" ? step : 0;
        if (transaction) {
          if (transaction.kind === "crop") {
            cropRect.x += dx;
            cropRect.y += dy;
          } else for (const l of selected()) translate(l, dx, dy);
          renderPreview();
        } else
          editor.commit("Nudge layers", () =>
            selected().forEach((l) => translate(l, dx, dy)),
          );
        sync();
      }
    },
    true,
  );
  return {
    panel,
    sync,
    finish,
    switchMode,
    isEditing: () => !!transaction,
    selectedIds: () => new Set(selected().map((l) => l.id)),
    onLeave: () => {
      if (transaction) finish(true);
      overlay.hidden = true;
      hover.hidden = true;
    },
  };
}
