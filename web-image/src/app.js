import { createMainMenu, clipSelection } from "./ui/main-menu.js";
import { Editor, surface } from "./core/engine.js";
import { createCloudUI } from "./ui/cloud-ui.js";
import { createSizePosition } from "./ui/size-position.js";
import { corners, bounds, setQuad } from "./core/geometry.js";
let mainMenu = null;
let sizePosition = null;
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const paths = {
  menu: "M4 6h16M4 12h16M4 18h16",
  move: "m5 3 14 11-7 1-3 6Z",
  ai: "M5 3v4M3 5h4M17 3v6M14 6h6M7 12v8M3 16h8M17 14v6M14 17h6",
  adjust: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6-5L6 18",
  select: "M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4M7 7h9v9H7Zm5 4 8 6-4 1-2 4Z",
  retouch:
    "m4 14 10-10a4 4 0 0 1 6 6L10 20a4 4 0 0 1-6-6Zm4-4 6 6M11 9l1 1M9 11l1 1M14 12l1 1M12 14l1 1",
  quick:
    "M14 4c3-2 6-2 7-1 0 4-2 7-5 10l-5 2-3-3 2-5Zm-4 3H5l-3 5h6M16 13v6l-5 3v-7M6 16l-3 5",
  effects: "M4 4h5v5H4ZM15 4h5v5h-5ZM4 15h5v5H4ZM15 15h5v5h-5ZM12 1v3M12 20v3",
  paint: "m9 14 9-11q3-2 3 2L12 17ZM9 14c-5-2-3 7-7 7 8 1 12-2 10-5",
  shapes: "M4 4h16v16H4Z",
  text: "M4 5V3h16v2M12 3v18M8 21h8",
  image: "M3 4h18v16H3ZM3 16l6-7 5 6 3-3 4 5M16 7h.01M12 17v6M9 20h6",
  eyedropper: "m14 3 7 7M16 5l-11 11v4h4L20 9",
  swap: "M8 3v18M4 7l4-4 4 4M16 21V3M12 17l4 4 4-4",
  layers: "m12 2 10 6-10 6L2 8Zm-10 11 10 6 10-6M2 18l10 5 10-5",
  properties:
    "M3 6h6M13 6h8M3 18h12M19 18h2M9 3v6h4V3ZM15 15v6h4v-6ZM3 12h12M19 12h2",
  history: "M3 5v6h6M3 10a9 9 0 1 1 0 5M12 6v6l4 2",
  comment: "M4 3h16v14H9l-5 4Z",
  undo: "M8 5 3 10l5 5M3 10h12a5 5 0 0 1 0 10",
  redo: "m16 5 5 5-5 5M21 10H9a5 5 0 0 0 0 10",
  cloud: "M6 18h12a4 4 0 0 0 1-8 6 6 0 0 0-12-2 5 5 0 0 0-1 10Z",
  download: "M12 3v12m-4-4 4 4 4-4M4 15v6h16v-6",
  share: "M12 16V2m-4 4 4-4 4 4M4 11v10h16V11",
  help: "M8 17h8M9 21h6M12 1v2M2 5l2 2M22 5l-2 2M3 13H1M21 13h2M8 15a6 6 0 1 1 8 0v2H8Z",
  apps: "M3 3h3v3H3ZM10 3h3v3h-3ZM17 3h3v3h-3ZM3 10h3v3H3ZM10 10h3v3h-3ZM17 10h3v3h-3ZM3 17h3v3H3ZM10 17h3v3h-3ZM17 17h3v3h-3Z",
  close: "m6 6 12 12M18 6 6 18",
  plus: "M12 5v14M5 12h14",
  new: "M4 3h16v18H4ZM12 7v10M8 12h8",
  trash: "M3 5h18M9 5V2h6v3M5 5l1 16h12l1-16M10 9v8M14 9v8",
  eye: "M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  eyeoff:
    "m3 3 18 18M7 7c-3 2-5 5-5 5s4 6 10 6c2 0 4-1 5-2M11 6h1c6 0 10 6 10 6l-2 3",
  sun: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM12 1v2M12 21v2M1 12h2M21 12h2M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2",
  contrast: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 3v18M12 5c8 0 8 14 0 14",
  transform: "M5 5h14v14H5ZM3 3h4v4H3ZM17 3h4v4h-4ZM3 17h4v4H3ZM17 17h4v4h-4Z",
  crop: "M6 2v16h16M2 6h16v16M18 6l3-3",
  align: "M4 3v18M8 7h12v4H8ZM8 15h8v4H8Z",
  more: "M4 12h.01M12 12h.01M20 12h.01",
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 11v6M12 7h.01",
  mask: "M3 3h18v18H3ZM7 7h10v10H7Z",
  eraser: "m3 14 10-11 8 8-10 10H8ZM7 10l8 8M11 21h11",
  gradient: "M3 4h18v16H3ZM7 4v16M10 4v16M13 4v16",
  ellipse: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
  check: "m4 12 5 5L20 5",
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.adjust}"/></svg>`;
const btn = (name, label, action, cls = "tool-row") =>
  `<button class="${cls}" data-action="${action}" title="${label}" aria-label="${label}">${icon(name)}${cls.split(" ").includes("icon") ? "" : label}</button>`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
let section = "move",
  tool = "move",
  color = "#000000",
  background = "#ffffff",
  brushSize = 75,
  hardness = 0,
  flow = 100,
  textSize = 48,
  zoom = 100,
  layerPanel = true,
  rightPanel = "layers",
  crop = null,
  pointer = null,
  importMode = "add";
const editor = new Editor($("#canvas"), refresh);
await editor.init();
const tools = [
  ["move", "Size & position"],
  ["ai", "Generative"],
  ["adjust", "Adjust"],
  ["select", "Select"],
  ["retouch", "Retouch"],
  ["quick", "Quick actions"],
  ["effects", "Effects"],
  ["paint", "Paint"],
  ["shapes", "Shapes"],
  ["text", "Text"],
  ["image", "Add image"],
  ["eyedropper", "Eyedropper"],
];
for (const id of ["menu", "undo", "redo", "share", "apps"])
  $("#" + id).innerHTML = icon(id);
$("#save-status").innerHTML = icon("cloud");
$("#tools").innerHTML =
  tools
    .map(
      ([id, name], i) =>
        `${i === 11 ? "<hr>" : ""}<button aria-label="${name}" title="${name}" data-section="${id}">${icon(id)}</button>`,
    )
    .join("") +
  `<button id="foreground" class="color" aria-label="Foreground color" data-action="color"></button>${btn("swap", "Switch colors", "swap", "icon")}<button id="background" class="color" aria-label="Background color" data-action="background"></button>`;
$("#right-tools").innerHTML = [
  ["layers", "Layers"],
  ["properties", "Layer properties"],
  ["history", "History"],
  ["ai", "AI Assistant"],
  ["comment", "Comments"],
]
  .map(
    ([id, label]) =>
      `<button class="icon" data-right="${id}" title="${label}" aria-label="${label}">${icon(id)}</button>`,
  )
  .join("");
function head(title) {
  return `<div class="panel-head"><h2>${title}</h2>${btn("close", "Close", "close-tool", "icon")}</div>`;
}
function range(label, key, value, min, max) {
  return `<label class="caption" for="${key}">${label}</label><div class="range-line"><input id="${key}" type="range" data-range="${key}" aria-label="${label}" min="${min}" max="${max}" value="${value}"><input type="number" aria-label="${label} value" data-number="${key}" min="${min}" max="${max}" value="${value}"></div>`;
}
function panel() {
  $$("[data-section]").forEach((b) =>
    b.classList.toggle("active", b.dataset.section === section),
  );
  const el = $("#tool-panel");
  el.hidden = false;
  let html = head(
    tools.find((t) => t[0] === section)?.[1] || "Size & position",
  );
  if (section === "move") html += sizePosition?.panel() || "";
  if (section === "paint" || section === "retouch") {
    html +=
      btn(
        "paint",
        "Brush",
        "tool:brush",
        "tool-row " + (tool === "brush" ? "active" : ""),
      ) +
      `<div class="options"><select id="brush-preset" aria-label="Brush presets"><option>Brush presets</option><option>Soft round</option><option>Hard round</option></select><br><br>${range("Brush size", "size", brushSize, 1, 250)}${range("Brush hardness", "hardness", hardness, 0, 100)}${range("Flow", "flow", flow, 1, 100)}<details><summary>Advanced settings</summary><p class="help-note">Paint on the selected layer. Create a new layer to keep your original image intact.</p></details></div>` +
      btn(
        "eraser",
        "Eraser",
        "tool:eraser",
        `tool-row ${tool === "eraser" ? "active" : ""}`,
      ) +
      btn("shapes", "Paint bucket", "tool:bucket") +
      btn("gradient", "Gradient", "tool:gradient");
  }
  if (section === "adjust" || section === "effects") {
    const presets = [
      ["f0c0491b9304acbd", "Cine neutral"],
      ["c75c20400686dbf1", "Cine matte"],
      ["39b52de5acd8be45", "Mono velvet"],
      ["f3cb56f0dcfbda09", "Mono noir"],
      ["75ae3522e7806bb8", "Tone matte"],
      ["6bdcb255886ea3e2", "Tone cool"],
      ["2fea70a31eaf142b", "Atmos neutral"],
      ["b889945c1956fd67", "Atmos golden hour"],
    ];
    html += `<details open><summary><b>Presets</b></summary><div class="preset-grid">${presets.map(([src, name], i) => `<button data-action="preset:${i}" title="${name}" aria-label="${name}"><img src="assets/${src}.png" alt="${name}"></button>`).join("")}</div></details><hr>`;
    html += [
      ["sun", "Brightness/contrast", "brightness"],
      ["gradient", "Hue/saturation", "saturation"],
      ["contrast", "Exposure", "brightness"],
      ["adjust", "Vibrance", "saturation"],
      ["properties", "Color balance", "hue"],
      ["mask", "Black & white", "grayscale"],
      ["ellipse", "Gaussian blur", "blur"],
    ]
      .map(([i, n, k]) => btn(i, n, "adjust:" + k))
      .join("");
    if (tool.startsWith("adjust:")) {
      const l =
        editor.selected?.type === "adjust"
          ? editor.selected
          : {
              brightness: 0,
              contrast: 0,
              saturation: 100,
              hue: 0,
              grayscale: 0,
              blur: 0,
            };
      html +=
        '<hr><div class="options">' +
        (tool === "adjust:brightness"
          ? range("Brightness", "brightness", l.brightness, -100, 100) +
            range("Contrast", "contrast", l.contrast, -100, 100)
          : tool === "adjust:saturation"
            ? range("Saturation", "saturation", l.saturation, 0, 200)
            : tool === "adjust:hue"
              ? range("Hue", "hue", l.hue, -180, 180)
              : tool === "adjust:grayscale"
                ? range("Black & white", "grayscale", l.grayscale, 0, 100)
                : range("Blur", "blur", l.blur, 0, 30)) +
        "</div>";
    }
  }
  if (section === "shapes") {
    html +=
      btn(
        "shapes",
        "Rectangle",
        "tool:rect",
        `tool-row ${tool === "rect" ? "active" : ""}`,
      ) +
      btn(
        "ellipse",
        "Ellipse",
        "tool:ellipse",
        `tool-row ${tool === "ellipse" ? "active" : ""}`,
      ) +
      `<div class="options"><label class="caption">Fill</label><input type="color" class="color-field" data-color="foreground" aria-label="Shape fill" value="${color}"></div><p class="help-note">Click and drag on the image to draw a shape.</p>`;
  }
  if (section === "text") {
    html +=
      btn("text", "Type", "tool:text", "tool-row active") +
      `<div class="options"><label class="caption">Font</label><select id="font-family"><option>Arial</option><option>Georgia</option><option>Courier New</option></select><br><br>${range("Font size", "textSize", textSize, 8, 200)}<label class="caption">Text color</label><input type="color" class="color-field" data-color="foreground" value="${color}" aria-label="Text color"></div><p class="help-note">Click on the canvas to add text. Double-click a text layer to edit it.</p>`;
  }
  if (section === "select") {
    html +=
      btn("select", "Rectangular marquee", "tool:select", "tool-row active") +
      `<p class="help-note">Drag to make a rectangular selection. Painting is limited to this area.</p>` +
      btn("close", "Deselect", "deselect") +
      btn("crop", "Crop to selection", "crop");
  }
  if (section === "quick") {
    html +=
      btn("image", "Open image", "open") +
      btn("transform", "Rotate clockwise", "rotate") +
      btn("swap", "Flip horizontal", "flip") +
      btn("sun", "Auto contrast", "auto") +
      btn("crop", "Crop image", "tool:crop") +
      btn("ai", "Remove background (mock)", "backend:remove-background");
  }
  if (section === "image") {
    html +=
      btn("image", "Upload from computer", "import") +
      btn("cloud", "Cloud image library", "backend:library") +
      `<p class="help-note">Add PNG, JPEG, WebP, or SVG images as a new layer. You can also drag an image into the workspace.</p>`;
  }
  if (section === "eyedropper")
    html +=
      '<p class="help-note">Click the image to sample a foreground color.</p>';
  if (section === "ai")
    html +=
      `<div class="options"><h2>Generative tools <span class="badge">Mock</span></h2><p class="help-note">Preview sample AI responses from the local mock service, then add them as a new layer.</p></div>` +
      [
        ["Generate image", "generate"],
        ["Generative fill", "fill"],
        ["Generative expand", "expand"],
        ["Remove background", "remove-background"],
        ["Remove object", "remove-object"],
        ["AI markup", "markup"],
      ]
        .map(([label, id]) => btn("ai", label, "backend:" + id))
        .join("");
  el.innerHTML = html;
}
function layers() {
  const el = $("#layers-panel");
  el.hidden = !layerPanel;
  $$("[data-right]").forEach((b) =>
    b.classList.toggle("active", b.dataset.right === rightPanel && layerPanel),
  );
  if (!layerPanel) return;
  const l = editor.selected;
  if (rightPanel === "history") {
    el.innerHTML = `${head("History").replace("close-tool", "close-layers")}${btn("cloud", "Cloud version history", "backend:versions")}${editor.history.map((n) => `<div class="history-row">${esc(n)}</div>`).join("")}`;
    return;
  }
  if (rightPanel === "ai" || rightPanel === "comment") {
    el.innerHTML =
      head(rightPanel === "ai" ? "AI Assistant" : "Comments").replace(
        "close-tool",
        "close-layers",
      ) +
      `<p class="help-note">${rightPanel === "ai" ? "Ask the mock assistant for an edit suggestion, review it, and apply it." : "Add comments, replies, and selection anchors to the cloud document."}</p>` +
      btn(
        rightPanel === "ai" ? "ai" : "comment",
        rightPanel === "ai" ? "Open AI Assistant" : "Open comments",
        "backend:" + (rightPanel === "ai" ? "assistant" : "comments"),
      );
    return;
  }
  if (rightPanel === "properties") {
    el.innerHTML =
      head("Layer properties").replace("close-tool", "close-layers") +
      `<p>${esc(l?.name || "No layer selected")}</p><div class="two-fields">${["x", "y", "w", "h"].map((k) => `<label>${k.toUpperCase()}<input class="field" type="number" data-geometry="${k}" value="${Math.round(l?.[k] || 0)}" aria-label="Layer ${k}"></label>`).join("")}</div>`;
    return;
  }
  el.innerHTML = `<div class="handle"></div><div class="panel-head"><h2>Layers ${icon("info")}</h2>${btn("close", "Close layers", "close-layers", "icon")}</div><div class="layer-toolbar">${[
    ["new", "Add new layer", "new-layer"],
    ["adjust", "Adjustment layers", "adjust:brightness"],
    ["mask", "Duplicate layer", "duplicate"],
    ["transform", "Rename layer", "rename"],
    ["download", "Move layer down", "down"],
    ["layers", "Move layer up", "up"],
    ["trash", "Delete layer", "delete"],
    ["more", "Layer actions", "layer-menu"],
  ]
    .map(([i, n, a]) => btn(i, n, a, "icon"))
    .join(
      "",
    )}</div><div class="layer-settings"><label><span class="caption">Blend</span><select id="blend" aria-label="Blend"><option value="source-over">Normal</option><option value="multiply">Multiply</option><option value="screen">Screen</option><option value="overlay">Overlay</option><option value="darken">Darken</option><option value="lighten">Lighten</option><option value="difference">Difference</option></select></label><label><span class="caption">Opacity</span><input id="opacity" aria-label="Opacity" type="number" min="0" max="100" value="${l?.opacity ?? 100}"></label></div><div class="layer-list">${[
    ...editor.state.layers,
  ]
    .reverse()
    .map(
      (item) =>
        `<div class="layer ${item.id === editor.state.selected || sizePosition?.selectedIds().has(item.id) ? "selected" : ""}" data-layer="${item.id}" tabindex="0" role="button" aria-label="Select ${esc(item.name)}"><button class="eye" data-visibility="${item.id}" aria-label="${item.visible ? "Hide" : "Show"} ${esc(item.name)}">${icon(item.visible ? "eye" : "eyeoff")}</button><div class="thumb ${item.type === "adjust" ? "adjust" : ""}">${item.type === "image" ? `<img src="${esc(item.src)}" alt="">` : item.type === "adjust" ? icon("sun") : item.type === "text" ? icon("text") : ""}</div>${item.type === "adjust" ? '<div class="mask"></div>' : ""}<span class="layer-name">${esc(item.name)}</span>${item.type === "adjust" ? btn("properties", "Adjustment properties", "adjust:brightness", "icon properties") : ""}</div>`,
    )
    .join("")}</div>`;
  $("#blend").value = l?.blend || "source-over";
}
function refresh() {
  editor.render();
  $("#undo").disabled = !editor.undoStack.length;
  $("#redo").disabled = !editor.redoStack.length;
  $("#document-name").value = editor.state.name;
  layers();
  resize();
  sizePosition?.sync();
  save();
}
function resize() {
  const scale = (zoom / 100) * 0.5;
  $("#canvas-wrap").style.width = editor.state.width * scale + "px";
  $("#canvas-wrap").style.height = editor.state.height * scale + "px";
  $("#zoom-button").textContent = zoom + "% ⌄";
  showSelection();
  sizePosition?.sync();
  mainMenu?.sync();
}
function showSelection() {
  const s = $("#selection");
  s.style.display = crop ? "block" : "none";
  if (crop) {
    const scale = zoom / 200;
    Object.assign(s.style, {
      left: crop.x * scale + "px",
      top: crop.y * scale + "px",
      width: crop.w * scale + "px",
      height: crop.h * scale + "px",
    });
  }
}
let saveTimer;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    if (sizePosition?.isEditing()) return;
    try {
      localStorage.setItem("web-image-project", JSON.stringify(editor.state));
      $("#save-status").title = "Saved in this browser";
    } catch {
      $("#save-status").title =
        "Browser storage full. Save a project to keep your changes.";
    }
  }, 500);
}
function selectSection(id) {
  if (id !== section || sizePosition?.isEditing()) sizePosition?.onLeave();
  section = id;
  tool =
    {
      paint: "brush",
      shapes: "rect",
      text: "text",
      select: "select",
      eyedropper: "eyedropper",
      retouch: "brush",
      move: "move",
    }[id] || "move";
  $$("[data-section]").forEach((b) =>
    b.classList.toggle("active", b.dataset.section === id),
  );
  panel();
  $("#canvas").style.cursor = [
    "brush",
    "eraser",
    "rect",
    "ellipse",
    "select",
    "crop",
    "eyedropper",
  ].includes(tool)
    ? "crosshair"
    : tool === "text"
      ? "text"
      : "default";
}
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("#toast").classList.remove("visible"), 3000);
}
function modal(title, body, accept, onAccept) {
  $("#dialog").innerHTML =
    `<h2>${title}</h2>${body}<div class="actions"><button data-dismiss>Cancel</button><button class="primary" id="modal-accept">${accept}</button></div>`;
  $("#dialog").showModal();
  $("#dialog [data-dismiss]").onclick = () => $("#dialog").close();
  $("#modal-accept").onclick = () => {
    if (onAccept() !== false) $("#dialog").close();
  };
}
function textDialog(l, x = 100, y = 100) {
  modal(
    l ? "Edit text" : "Add text",
    `<label>Text<textarea id="text-content" placeholder="Type something…">${esc(l?.text || "")}</textarea></label>`,
    "Apply",
    () => {
      const text = $("#text-content").value;
      if (!text.trim()) return false;
      if (l) editor.commit("Edit text", () => (l.text = text));
      else
        editor.add(
          "text",
          "Text " +
            (editor.state.layers.filter((l) => l.type === "text").length + 1),
          {
            x,
            y,
            text,
            color,
            size: textSize,
            font: $("#font-family")?.value || "Arial",
            w: text.length * textSize * 0.6,
            h: textSize * 1.2,
          },
        );
    },
  );
  $("#text-content").focus();
}
function download(data, name) {
  const a = document.createElement("a");
  a.href = data;
  a.download = name;
  a.click();
}
function projectDownload() {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(editor.state)], { type: "application/json" }),
  );
  download(url, editor.state.name + ".web-image.json");
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function pop(anchor, items) {
  const el = $("#popover");
  if (!el.hidden && el.dataset.anchor === anchor.id) {
    el.hidden = true;
    return;
  }
  el.dataset.anchor = anchor.id;
  el.innerHTML = items
    .map(
      ([label, action, shortcut]) =>
        `<button data-action="${action}">${label}${shortcut ? `<span class="shortcut">${shortcut}</span>` : ""}</button>`,
    )
    .join("");
  el.hidden = false;
  const r = anchor.getBoundingClientRect();
  el.style.left = Math.min(r.left, innerWidth - 230) + "px";
  el.style.top = r.bottom + 6 + "px";
}
function rasterOperation(label, fn) {
  const l = editor.selected;
  if (!l || l.type === "adjust") {
    toast("Select an image, shape, or text layer first");
    return;
  }
  editor.commit(label, () => {
    const c = editor.rasterize(l);
    fn(c);
    editor.setRaster(l, c);
  });
}
function action(a) {
  if (a.startsWith("backend:")) {
    cloud.open(a.slice(8));
    return;
  }
  const [kind, arg] = a.split(":");
  if (kind === "section") {
    selectSection(arg);
    return;
  }
  if (kind === "tool") {
    if (["move", "transform", "crop"].includes(arg)) {
      sizePosition.switchMode(arg);
      return;
    }
    tool = arg;
    if (arg === "crop") section = "move";
    panel();
    $("#canvas").style.cursor = ["move", "transform"].includes(tool)
      ? "move"
      : "crosshair";
    return;
  }
  if (kind === "adjust") {
    editor.adjustment();
    section = "adjust";
    tool = a;
    panel();
    return;
  }
  if (kind === "preset") {
    const presets = [
      { contrast: 12, saturation: 85 },
      { contrast: -15, brightness: 8, saturation: 70 },
      { grayscale: 100, contrast: -10 },
      { grayscale: 100, contrast: 35 },
      { sepia: 20, contrast: -10 },
      { hue: 15, saturation: 80 },
      { brightness: 5, contrast: 5 },
      { sepia: 40, saturation: 120 },
    ];
    const l = editor.adjustment();
    editor.commit("Apply preset", () =>
      Object.assign(
        l,
        {
          brightness: 0,
          contrast: 0,
          saturation: 100,
          hue: 0,
          blur: 0,
          sepia: 0,
          grayscale: 0,
        },
        presets[Number(arg)],
      ),
    );
    return;
  }
  if (kind === "align") {
    const l = editor.selected;
    if (!l || l.type === "adjust") return;
    editor.commit("Align layer", () => {
      if (arg === "left") l.x = 0;
      if (arg === "center") l.x = (editor.state.width - l.w) / 2;
      if (arg === "right") l.x = editor.state.width - l.w;
      if (arg === "top") l.y = 0;
      if (arg === "middle") l.y = (editor.state.height - l.h) / 2;
      if (arg === "bottom") l.y = editor.state.height - l.h;
    });
    return;
  }
  if (kind === "zoom") {
    zoom =
      arg === "fit"
        ? Math.round(
            Math.min(
              ($("#workspace").clientWidth - 140) / editor.state.width,
              ($("#workspace").clientHeight - 130) / editor.state.height,
            ) * 200,
          )
        : Number(arg);
    resize();
    return;
  }
  switch (a) {
    case "close-tool":
      $("#tool-panel").hidden = true;
      break;
    case "close-layers":
      layerPanel = false;
      layers();
      break;
    case "new-layer": {
      const c = surface(editor.state.width, editor.state.height),
        src = c.toDataURL();
      editor.images.set(src, c);
      editor.add(
        "image",
        "Layer " + editor.state.layers.filter((l) => l.type === "image").length,
        { src },
      );
      break;
    }
    case "duplicate":
      if (editor.selected)
        editor.add(editor.selected.type, editor.selected.name + " copy", {
          ...structuredClone(editor.selected),
          id: crypto.randomUUID(),
          name: editor.selected.name + " copy",
        });
      break;
    case "delete":
      if (editor.selected)
        editor.commit("Delete layer", () => {
          editor.state.layers = editor.state.layers.filter(
            (l) => l.id !== editor.state.selected,
          );
          editor.state.selected = editor.state.layers.at(-1)?.id;
        });
      break;
    case "up":
    case "down": {
      const i = editor.state.layers.findIndex(
          (l) => l.id === editor.state.selected,
        ),
        j = i + (a === "up" ? 1 : -1);
      if (i >= 0 && j >= 0 && j < editor.state.layers.length)
        editor.commit("Arrange layers", () => {
          [editor.state.layers[i], editor.state.layers[j]] = [
            editor.state.layers[j],
            editor.state.layers[i],
          ];
        });
      break;
    }
    case "rename":
      if (editor.selected)
        modal(
          "Rename layer",
          `<input class="field" id="layer-name" value="${esc(editor.selected.name)}" aria-label="Layer name">`,
          "Save",
          () =>
            editor.commit(
              "Rename layer",
              () => (editor.selected.name = $("#layer-name").value || "Layer"),
            ),
        );
      break;
    case "layer-menu":
      pop($("#layers-panel .layer-toolbar button:last-child"), [
        ["Rename layer", "rename"],
        ["Duplicate layer", "duplicate"],
        ["Delete layer", "delete"],
      ]);
      break;
    case "open":
    case "import":
      importMode = a === "open" ? "replace" : "add";
      $("#file-input").click();
      break;
    case "load-project":
      $("#project-input").click();
      break;
    case "save-project":
      projectDownload();
      break;
    case "export":
      modal(
        "Download image",
        `<label>File name<input class="field" id="export-name" value="${esc(editor.state.name)}"></label><label>Format<select id="export-format"><option value="png">PNG</option><option value="jpeg">JPEG</option><option value="webp">WebP</option></select></label><p>${editor.state.width} × ${editor.state.height} pixels · All visible layers</p>`,
        "Download",
        () => {
          const format = $("#export-format").value;
          const c = surface(editor.state.width, editor.state.height);
          editor.render(c);
          if (format === "jpeg") {
            const ctx = c.getContext("2d");
            ctx.globalCompositeOperation = "destination-over";
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, c.width, c.height);
          }
          download(
            c.toDataURL("image/" + format, 0.94),
            ($("#export-name").value || "image") + "." + format,
          );
          toast("Image exported");
        },
      );
      break;
    case "color":
    case "background":
      modal(
        a === "color" ? "Foreground color" : "Background color",
        `<input id="pick-color" class="color-field" type="color" value="${a === "color" ? color : background}" aria-label="Choose color">`,
        "Apply",
        () => {
          if (a === "color") color = $("#pick-color").value;
          else background = $("#pick-color").value;
          updateColor();
          panel();
        },
      );
      break;
    case "swap":
      [color, background] = [background, color];
      updateColor();
      break;
    case "deselect":
      crop = null;
      showSelection();
      break;
    case "crop":
      if (crop && crop.w > 1 && crop.h > 1) {
        editor.crop(crop);
        crop = null;
        showSelection();
        selectSection("move");
      } else toast("Drag a crop area on the canvas first");
      break;
    case "rotate": {
      const c = surface(editor.state.height, editor.state.width),
        ctx = c.getContext("2d");
      ctx.translate(c.width, 0);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(editor.canvas, 0, 0);
      const src = c.toDataURL();
      editor.images.set(src, c);
      editor.commit("Rotate image", () => {
        [editor.state.width, editor.state.height] = [
          editor.state.height,
          editor.state.width,
        ];
        const l = editor.layer("image", "Rotated image", { src });
        editor.state.layers = [l];
        editor.state.selected = l.id;
      });
      break;
    }
    case "flip":
      rasterOperation("Flip horizontal", (c) => {
        const copy = surface(c.width, c.height);
        copy.getContext("2d").drawImage(c, 0, 0);
        const x = c.getContext("2d");
        x.clearRect(0, 0, c.width, c.height);
        x.translate(c.width, 0);
        x.scale(-1, 1);
        x.drawImage(copy, 0, 0);
      });
      break;
    case "auto": {
      const l = editor.adjustment();
      editor.commit("Auto contrast", () =>
        Object.assign(l, { brightness: 8, contrast: 15 }),
      );
      break;
    }
    case "help":
      modal(
        "Make it your own",
        `<p>Open an image or use the sample document. Select a tool on the left, then work directly on the canvas.</p><p><b>B</b> Brush · <b>V</b> Move · <b>T</b> Text · <b>C</b> Crop<br><b>⌘/Ctrl Z</b> Undo · <b>Shift ⌘/Ctrl Z</b> Redo<br><b>⌘/Ctrl S</b> Save project · <b>Esc</b> Deselect</p><p>Edits save in this browser. Download exports visible layers; Save project keeps editable layers.</p>`,
        "Got it",
        () => {},
      );
      break;
    case "ai":
      selectSection("ai");
      break;
    case "reset":
      modal(
        "Reset sample document?",
        "<p>This replaces your current canvas with the reference document. Save a project first if you want to keep your edits.</p>",
        "Reset",
        () => {
          editor.checkpoint("Reset");
          editor.init().then(refresh);
        },
      );
      break;
  }
}
function updateColor() {
  $("#foreground").style.background = color;
  $("#background").style.background = background;
}
$("#context-bar").innerHTML =
  btn("text", "AI markup", "ai") +
  btn("sun", "Brightness", "adjust:brightness") +
  btn("contrast", "Contrast", "adjust:brightness");
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-action]");
  if (a) {
    if (!a.closest("#popover")) $("#popover").hidden = true;
    else $("#popover").hidden = true;
    action(a.dataset.action);
    return;
  }
  const s = e.target.closest("[data-section]");
  if (s) {
    selectSection(s.dataset.section);
    return;
  }
  const right = e.target.closest("[data-right]");
  if (right) {
    layerPanel = rightPanel === right.dataset.right ? !layerPanel : true;
    rightPanel = right.dataset.right;
    layers();
    return;
  }
  const v = e.target.closest("[data-visibility]");
  if (v) {
    const l = editor.state.layers.find((l) => l.id === v.dataset.visibility);
    editor.commit("Toggle layer visibility", () => (l.visible = !l.visible));
    return;
  }
  const l = e.target.closest("[data-layer]");
  if (l) {
    editor.state.selected = l.dataset.layer;
    layers();
    if (section === "move") panel();
    sizePosition?.sync();
    return;
  }
  if (!e.target.closest("#popover") && !e.target.closest("header"))
    $("#popover").hidden = true;
});
$("#layers-panel").addEventListener("dblclick", (e) => {
  const row = e.target.closest("[data-layer]");
  if (!row) return;
  const l = editor.state.layers.find((l) => l.id === row.dataset.layer);
  if (l.type === "text") textDialog(l);
  else action("rename");
});
$("#download").onclick = () =>
  pop($("#download"), [
    ["Download on computer", "export"],
    ["Save editable project", "save-project"],
    ["Cloud export / phone link", "backend:export"],
  ]);
$("#zoom-button").onclick = () =>
  pop($("#zoom-button"), [
    ["Fit on screen", "zoom:fit"],
    ...[25, 50, 75, 100, 150, 200].map((n) => [n + "%", "zoom:" + n]),
  ]);
$("#undo").onclick = () => {
  editor.undo();
  panel();
};
$("#redo").onclick = () => {
  editor.redo();
  panel();
};
$("#share").onclick = () => cloud.open("share");
$("#share").setAttribute("aria-label", "Share document");
$("#save-status").onclick = () => cloud.open("documents");
$("#save-status").title = "Cloud documents (mock)";
// $("#help").onclick = () => cloud.open("learning");
// $("#browser-app").onclick = () => cloud.open("install");
$("#apps").onclick = () => cloud.open("apps");
$("#account").onclick = () => cloud.open("account");
$("#document-name").onchange = (e) =>
  editor.commit(
    "Rename document",
    () => (editor.state.name = e.target.value || "Untitled"),
  );
let adjustmentCheckpoint = false;
let fieldCheckpoint = false;
document.addEventListener("pointerdown", (e) => {
  if (e.target.matches("[data-range]")) adjustmentCheckpoint = false;
});
document.addEventListener("focusin", (e) => {
  if (e.target.matches("[data-number]")) adjustmentCheckpoint = false;
  if (e.target.matches("#opacity,[data-geometry],#document-name"))
    fieldCheckpoint = false;
});
function changeValue(key, value, checkpoint) {
  if (key === "size") brushSize = value;
  else if (key === "hardness") hardness = value;
  else if (key === "flow") flow = value;
  else if (key === "textSize") textSize = value;
  else {
    const l = editor.selected;
    if (l?.type !== "adjust") return;
    if (checkpoint) {
      editor.checkpoint("Adjust " + key);
      adjustmentCheckpoint = true;
    }
    l[key] = value;
    editor.render();
    save();
    $("#undo").disabled = false;
  }
  const r = $(`[data-range="${key}"]`),
    n = $(`[data-number="${key}"]`);
  if (r) r.value = value;
  if (n) n.value = value;
}
document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.dataset.range)
    changeValue(t.dataset.range, Number(t.value), !adjustmentCheckpoint);
  if (t.dataset.number)
    changeValue(
      t.dataset.number,
      Math.max(Number(t.min), Math.min(Number(t.max), Number(t.value))),
      !adjustmentCheckpoint,
    );
  if ((t.id === "opacity" || t.dataset.geometry) && editor.selected) {
    if (!fieldCheckpoint) {
      editor.checkpoint(
        t.id === "opacity" ? "Layer opacity" : "Transform layer",
      );
      fieldCheckpoint = true;
    }
    if (t.id === "opacity")
      editor.selected.opacity = Math.max(0, Math.min(100, Number(t.value)));
    else {
      const l = editor.selected,
        old = bounds(corners(l)),
        key = t.dataset.geometry;
      const next = {
        ...old,
        [key]: ["w", "h"].includes(key)
          ? Math.max(1, Number(t.value))
          : Number(t.value),
      };
      if (l.quad)
        setQuad(
          l,
          corners(l).map((p) => ({
            x: next.x + ((p.x - old.x) * next.w) / old.w,
            y: next.y + ((p.y - old.y) * next.h) / old.h,
          })),
        );
      else l[key] = next[key];
      sizePosition?.sync();
    }
    editor.render();
    save();
    $("#undo").disabled = false;
  }
  if (t.dataset.color) {
    color = t.value;
    updateColor();
  }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.id === "blend" && editor.selected)
    editor.commit("Blend mode", () => (editor.selected.blend = t.value));
  if (t.id === "brush-preset") {
    hardness = t.value === "Hard round" ? 100 : 0;
    panel();
  }
});
const readFile = (file) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
async function openFile(file) {
  if (!file) return;
  try {
    await editor.importImage(
      await readFile(file),
      file.name,
      importMode === "replace",
    );
    crop = null;
    showSelection();
    toast("Image added");
  } catch {
    toast("Unable to open this image");
  }
}
$("#file-input").onchange = async (e) => {
  await openFile(e.target.files[0]);
  e.target.value = "";
};
$("#project-input").onchange = async (e) => {
  try {
    await editor.restore(JSON.parse(await e.target.files[0].text()));
    toast("Project loaded");
  } catch {
    toast("This project file could not be opened");
  }
  e.target.value = "";
};
$("#workspace").addEventListener("dragover", (e) => {
  e.preventDefault();
  $("#drop-zone").style.display = "grid";
});
$("#drop-zone").addEventListener(
  "dragleave",
  () => ($("#drop-zone").style.display = "none"),
);
$("#workspace").addEventListener("drop", (e) => {
  e.preventDefault();
  $("#drop-zone").style.display = "none";
  importMode = "add";
  openFile(e.dataTransfer.files[0]);
});
function point(e) {
  const r = $("#canvas").getBoundingClientRect();
  return {
    x: Math.max(
      0,
      Math.min(
        editor.state.width,
        ((e.clientX - r.left) * editor.state.width) / r.width,
      ),
    ),
    y: Math.max(
      0,
      Math.min(
        editor.state.height,
        ((e.clientY - r.top) * editor.state.height) / r.height,
      ),
    ),
  };
}
function brushPoint(ctx, p, last) {
  ctx.save();
  if (crop) {
    clipSelection(ctx, crop, editor.state.width, editor.state.height);
  }
  ctx.globalCompositeOperation =
    tool === "eraser" ? "destination-out" : "source-over";
  ctx.globalAlpha = flow / 100;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  if (hardness < 100)
    ctx.filter = `blur(${((100 - hardness) / 100) * brushSize * 0.12}px)`;
  ctx.beginPath();
  ctx.moveTo(last?.x ?? p.x, last?.y ?? p.y);
  ctx.lineTo(p.x + 0.01, p.y + 0.01);
  ctx.stroke();
  ctx.restore();
}
$("#canvas").addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  const p = point(e);
  $("#canvas").setPointerCapture(e.pointerId);
  if (tool === "eyedropper") {
    const data = editor.ctx.getImageData(
      Math.min(editor.state.width - 1, Math.floor(p.x)),
      Math.min(editor.state.height - 1, Math.floor(p.y)),
      1,
      1,
    ).data;
    color =
      "#" +
      [...data]
        .slice(0, 3)
        .map((n) => n.toString(16).padStart(2, "0"))
        .join("");
    updateColor();
    toast("Sampled " + color);
    return;
  }
  if (tool === "text") {
    textDialog(null, p.x, p.y);
    return;
  }
  if (tool === "crop" || tool === "select") {
    pointer = { start: p, kind: "selection" };
    crop = { ...p, w: 0, h: 0 };
    showSelection();
    return;
  }
  if (
    tool === "brush" ||
    tool === "eraser" ||
    tool === "bucket" ||
    tool === "gradient"
  ) {
    let l = editor.selected;
    if (!l || l.type === "adjust") {
      action("new-layer");
      l = editor.selected;
    }
    editor.checkpoint(
      tool === "eraser"
        ? "Erase"
        : tool === "bucket"
          ? "Fill layer"
          : tool === "gradient"
            ? "Gradient"
            : "Brush stroke",
    );
    const c = editor.rasterize(l);
    pointer = { start: p, last: p, kind: "paint", canvas: c, layer: l };
    if (tool === "bucket") {
      const ctx = c.getContext("2d");
      ctx.fillStyle = color;
      clipSelection(ctx, crop, c.width, c.height);
      ctx.fillRect(0, 0, c.width, c.height);
    } else if (tool !== "gradient") brushPoint(c.getContext("2d"), p);
    previewRaster();
    return;
  }
  if (tool === "rect" || tool === "ellipse") {
    const l = editor.add(
      tool,
      tool === "rect"
        ? "Rectangle " +
            (editor.state.layers.filter((l) => l.type === "rect").length + 1)
        : "Ellipse",
      { x: p.x, y: p.y, w: 1, h: 1, color },
    );
    pointer = { start: p, kind: "shape", layer: l };
    return;
  }
  if (tool === "move" || tool === "transform") {
    let l = editor.selected;
    const auto = $('[aria-label="Auto-select"]');
    if (auto?.value !== "Off") {
      const hit = [...editor.state.layers]
        .reverse()
        .find(
          (l) =>
            l.type !== "adjust" &&
            l.visible &&
            p.x >= l.x &&
            p.x <= l.x + l.w &&
            p.y >= l.y &&
            p.y <= l.y + l.h,
        );
      if (hit) {
        l = hit;
        editor.state.selected = l.id;
        layers();
      }
    }
    if (l && l.type !== "adjust") {
      editor.checkpoint("Move layer");
      pointer = { start: p, kind: "move", layer: l, x: l.x, y: l.y };
    }
  }
});
function previewRaster() {
  const l = pointer.layer;
  const old = {
    quad: l.quad,
    type: l.type,
    src: l.src,
    x: l.x,
    y: l.y,
    w: l.w,
    h: l.h,
    opacity: l.opacity,
    blend: l.blend,
  };
  const key = "preview";
  editor.images.set(key, pointer.canvas);
  Object.assign(l, {
    quad: null,
    type: "image",
    src: key,
    x: 0,
    y: 0,
    w: pointer.canvas.width,
    h: pointer.canvas.height,
    opacity: 100,
    blend: "source-over",
  });
  editor.render();
  Object.assign(l, old);
}
$("#canvas").addEventListener("pointermove", (e) => {
  if (!pointer) return;
  const p = point(e),
    r = {
      x: Math.min(pointer.start.x, p.x),
      y: Math.min(pointer.start.y, p.y),
      w: Math.abs(p.x - pointer.start.x),
      h: Math.abs(p.y - pointer.start.y),
    };
  if (pointer.kind === "selection") {
    crop = r;
    showSelection();
  }
  if (pointer.kind === "shape") {
    Object.assign(pointer.layer, r);
    editor.render();
  }
  if (pointer.kind === "move") {
    pointer.layer.x = pointer.x + p.x - pointer.start.x;
    pointer.layer.y = pointer.y + p.y - pointer.start.y;
    editor.render();
  }
  if (pointer.kind === "paint" && ["brush", "eraser"].includes(tool)) {
    brushPoint(pointer.canvas.getContext("2d"), p, pointer.last);
    pointer.last = p;
    previewRaster();
  }
});
function endPointer(e) {
  if (!pointer) return;
  if (pointer.kind === "paint") {
    if (tool === "gradient") {
      const p = point(e),
        ctx = pointer.canvas.getContext("2d"),
        g = ctx.createLinearGradient(
          pointer.start.x,
          pointer.start.y,
          p.x || 1,
          p.y || 1,
        );
      g.addColorStop(0, color);
      g.addColorStop(1, background);
      ctx.fillStyle = g;
      if (crop) ctx.fillRect(crop.x, crop.y, crop.w, crop.h);
      else ctx.fillRect(0, 0, pointer.canvas.width, pointer.canvas.height);
    }
    editor.setRaster(pointer.layer, pointer.canvas);
  }
  const wasSelection = pointer.kind === "selection";
  pointer = null;
  if (!wasSelection) refresh();
  if (tool === "crop" && crop) toast("Press Enter to apply crop");
}
$("#canvas").addEventListener("pointerup", endPointer);
$("#canvas").addEventListener("pointercancel", endPointer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.dataset.layer) {
    editor.state.selected = e.target.dataset.layer;
    layers();
    return;
  }
  if (
    ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) ||
    $("#dialog").open ||
    $("#cloud-dialog")?.open
  )
    return;
  const meta = e.ctrlKey || e.metaKey;
  if (meta && e.key.toLowerCase() === "z") {
    e.preventDefault();
    e.shiftKey ? editor.redo() : editor.undo();
    panel();
    return;
  }
  if (meta && e.key.toLowerCase() === "s") {
    e.preventDefault();
    projectDownload();
    return;
  }
  if (meta && e.key.toLowerCase() === "o") {
    e.preventDefault();
    action("open");
    return;
  }
  if (e.key === "Escape") {
    crop = null;
    showSelection();
    $("#popover").hidden = true;
  }
  if (e.key === "Enter" && tool === "crop") action("crop");
  if (e.key === "Delete" || e.key === "Backspace") {
    e.preventDefault();
    action("delete");
  }
  const shortcut = {
    v: "move",
    b: "paint",
    t: "text",
    m: "select",
    i: "eyedropper",
    u: "shapes",
  }[e.key.toLowerCase()];
  if (shortcut) selectSection(shortcut);
  if (e.key === "c") {
    selectSection("move");
    action("tool:crop");
  }
  if (e.key === "e") {
    selectSection("paint");
    action("tool:eraser");
  }
  if (e.key === "[" || e.key === "]") {
    brushSize = Math.max(
      1,
      Math.min(250, brushSize + (e.key === "[" ? -5 : 5)),
    );
    if (section === "paint") panel();
  }
});
sizePosition = createSizePosition({
  editor,
  getMode: () => tool,
  setMode: (next) => {
    tool = next;
    section = "move";
  },
  isActive: () => section === "move",
  repaint: panel,
  refresh,
  toast,
  icon,
  getZoom: () => zoom,
  snapPoint: (p) => mainMenu?.snapPoint(p) || p,
});
try {
  const saved = localStorage.getItem("web-image-project");
  if (saved) await editor.restore(JSON.parse(saved));
} catch {
  toast("Previous project unavailable; opened the sample");
}
selectSection("move");
refresh();
updateColor();

const cloud = createCloudUI({
  editor,
  refresh,
  getSelection: () => (crop ? structuredClone(crop) : null),
  toast,
});
mainMenu = createMainMenu({
  editor,
  action,
  cloud,
  modal,
  toast,
  refresh,
  getSelection: () => crop,
  setSelection: (value) => {
    crop = value;
    showSelection();
  },
  getColor: () => color,
  getZoom: () => zoom,
  finish: () => {
    if (sizePosition.isEditing()) sizePosition.finish(true);
  },
});
const shareToken = new URLSearchParams(location.search).get("share");
if (shareToken) cloud.openShared(shareToken);
