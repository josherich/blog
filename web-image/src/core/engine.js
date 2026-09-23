import { drawWarp, translate } from "./geometry.js";
export const surface = (w, h) =>
  Object.assign(document.createElement("canvas"), { width: w, height: h });
export const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
export class Editor {
  constructor(canvas, onChange) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { willReadFrequently: true });
    this.onChange = onChange;
    this.images = new Map();
    this.undoStack = [];
    this.redoStack = [];
    this.state = {
      width: 1280,
      height: 960,
      name: "photo_2026-09-13 23.07.25",
      selected: "adjustment",
      layers: [],
    };
  }
  async init() {
    const img = await loadImage("assets/reference.jpeg");
    const c = surface(1280, 960),
      x = c.getContext("2d");
    x.drawImage(img, 0, 0);
    x.save();
    x.filter = "blur(9px)";
    x.strokeStyle = "#000";
    x.lineWidth = 44;
    x.lineCap = "round";
    x.lineJoin = "round";
    for (const d of [
      "M 570 15 C 600 120 758 60 741 23 C 720 -22 540 -20 534 74 C 528 143 662 151 687 133",
      "M 190 357 C 168 489 308 547 380 462 C 452 361 310 326 284 403 C 243 503 389 522 420 382",
      "M 567 500 C 505 626 665 637 727 548 C 801 433 707 339 678 418 C 614 566 790 601 868 464 C 906 401 901 358 859 326",
    ])
      x.stroke(new Path2D(d));
    x.restore();
    const src = c.toDataURL();
    this.images.set(src, c);
    this.state.layers = [
      this.layer("image", "Layer 0", { id: "base", src }),
      this.layer("rect", "Rectangle 1", {
        id: "rectangle",
        x: 934,
        y: 170,
        w: 86,
        h: 64,
        color: "#ffffff",
      }),
      this.layer("adjust", "Brightness/contrast 1", {
        id: "adjustment",
        brightness: 0,
        contrast: 0,
        saturation: 100,
        hue: 0,
        blur: 0,
        sepia: 0,
        grayscale: 0,
      }),
    ];
    this.history = ["Open document"];
    this.render();
  }
  layer(type, name, extra = {}) {
    return {
      id: crypto.randomUUID(),
      type,
      name,
      visible: true,
      opacity: 100,
      blend: "source-over",
      x: 0,
      y: 0,
      w: this.state.width,
      h: this.state.height,
      ...extra,
    };
  }
  get selected() {
    return this.state.layers.find((l) => l.id === this.state.selected);
  }
  checkpoint(label) {
    this.undoStack.push({
      state: structuredClone(this.state),
      history: [...this.history],
    });
    if (this.undoStack.length > 35) this.undoStack.shift();
    this.redoStack = [];
    this.history.push(label);
  }
  commit(label, fn) {
    this.checkpoint(label);
    fn();
    this.render();
    this.onChange?.();
  }
  undo() {
    if (!this.undoStack.length) return;
    this.redoStack.push({
      state: structuredClone(this.state),
      history: [...this.history],
    });
    Object.assign(this, this.undoStack.pop());
    this.render();
    this.onChange?.();
  }
  redo() {
    if (!this.redoStack.length) return;
    this.undoStack.push({
      state: structuredClone(this.state),
      history: [...this.history],
    });
    Object.assign(this, this.redoStack.pop());
    this.render();
    this.onChange?.();
  }
  add(type, name, extra) {
    const l = this.layer(type, name, extra);
    this.commit("Add " + name, () => {
      this.state.layers.push(l);
      this.state.selected = l.id;
    });
    return l;
  }
  drawLayer(ctx, l) {
    if (l.quad) {
      const source = surface(
        Math.max(1, Math.round(l.sourceWidth || l.w)),
        Math.max(1, Math.round(l.sourceHeight || l.h)),
      );
      this.drawLayer(source.getContext("2d"), {
        ...l,
        quad: null,
        x: 0,
        y: 0,
        w: source.width,
        h: source.height,
        opacity: 100,
        blend: "source-over",
      });
      ctx.save();
      ctx.globalAlpha = l.opacity / 100;
      ctx.globalCompositeOperation = l.blend;
      drawWarp(ctx, source, l.quad);
      ctx.restore();
      return;
    }
    ctx.save();
    ctx.globalAlpha = l.opacity / 100;
    ctx.globalCompositeOperation = l.blend;
    if (l.shadow) {
      ctx.shadowColor = l.shadow.color;
      ctx.shadowBlur = l.shadow.blur;
      ctx.shadowOffsetX = l.shadow.x;
      ctx.shadowOffsetY = l.shadow.y;
    }
    ctx.translate(l.x, l.y);
    if (l.type === "image")
      ctx.drawImage(this.images.get(l.src), 0, 0, l.w, l.h);
    else if (l.type === "rect") {
      ctx.fillStyle = l.color;
      ctx.fillRect(0, 0, l.w, l.h);
    } else if (l.type === "ellipse") {
      ctx.fillStyle = l.color;
      ctx.beginPath();
      ctx.ellipse(
        l.w / 2,
        l.h / 2,
        Math.abs(l.w / 2),
        Math.abs(l.h / 2),
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    } else if (l.type === "text") {
      ctx.fillStyle = l.color;
      ctx.font = `${l.size}px ${l.font || "Arial"}`;
      ctx.textBaseline = "top";
      l.text
        .split("\n")
        .forEach((s, i) => ctx.fillText(s, 0, i * l.size * 1.2));
    }
    ctx.restore();
  }
  render(target = this.canvas) {
    if (target.width !== this.state.width) target.width = this.state.width;
    if (target.height !== this.state.height) target.height = this.state.height;
    const ctx = target.getContext("2d");
    ctx.clearRect(0, 0, target.width, target.height);
    for (const l of this.state.layers) {
      if (!l.visible) continue;
      if (l.type === "adjust") {
        const temp = surface(target.width, target.height);
        temp.getContext("2d").drawImage(target, 0, 0);
        ctx.save();
        ctx.clearRect(0, 0, target.width, target.height);
        ctx.filter = `brightness(${100 + l.brightness}%) contrast(${100 + l.contrast}%) saturate(${l.saturation}%) hue-rotate(${l.hue}deg) blur(${l.blur}px) sepia(${l.sepia}%) grayscale(${l.grayscale}%)`;
        ctx.globalAlpha = l.opacity / 100;
        ctx.drawImage(temp, 0, 0);
        ctx.restore();
        if (l.opacity < 100) {
          ctx.save();
          ctx.globalCompositeOperation = "destination-over";
          ctx.drawImage(temp, 0, 0);
          ctx.restore();
        }
      } else this.drawLayer(ctx, l);
    }
  }
  adjustment() {
    let l = this.selected;
    if (l?.type !== "adjust")
      l = this.add(
        "adjust",
        "Brightness/contrast " +
          (this.state.layers.filter((l) => l.type === "adjust").length + 1),
        {
          brightness: 0,
          contrast: 0,
          saturation: 100,
          hue: 0,
          blur: 0,
          sepia: 0,
          grayscale: 0,
        },
      );
    return l;
  }
  async importImage(src, name, replace = false) {
    const img = await loadImage(src);
    this.images.set(src, img);
    if (replace) {
      this.commit("Open image", () => {
        this.state.width = img.naturalWidth;
        this.state.height = img.naturalHeight;
        this.state.name = name.replace(/\.[^.]+$/, "");
        const l = this.layer("image", "Layer 0", {
          src,
          w: img.naturalWidth,
          h: img.naturalHeight,
        });
        this.state.layers = [l];
        this.state.selected = l.id;
      });
    } else {
      const scale = Math.min(
        1,
        this.state.width / img.naturalWidth,
        this.state.height / img.naturalHeight,
      );
      this.add("image", name, {
        src,
        w: img.naturalWidth * scale,
        h: img.naturalHeight * scale,
      });
    }
  }
  rasterize(l) {
    const c = surface(this.state.width, this.state.height);
    if (l) this.drawLayer(c.getContext("2d"), l);
    return c;
  }
  setRaster(l, c) {
    delete l.quad;
    delete l.sourceWidth;
    delete l.sourceHeight;
    const src = c.toDataURL();
    this.images.set(src, c);
    Object.assign(l, {
      type: "image",
      src,
      x: 0,
      y: 0,
      w: c.width,
      h: c.height,
      opacity: 100,
      blend: "source-over",
    });
  }
  crop(r) {
    this.commit("Crop image", () => {
      this.state.width = Math.max(1, Math.round(r.w));
      this.state.height = Math.max(1, Math.round(r.h));
      for (const l of this.state.layers) {
        translate(l, -r.x, -r.y);
      }
    });
  }
  async restore(state) {
    if (
      !state ||
      !Number.isInteger(state.width) ||
      state.width < 1 ||
      state.width > 16384 ||
      !Number.isInteger(state.height) ||
      state.height < 1 ||
      state.height > 16384 ||
      !Array.isArray(state.layers)
    )
      throw Error("Invalid project");
    for (const l of state.layers) {
      if (l.type === "image" && !this.images.has(l.src)) {
        if (!/^data:image\//.test(l.src)) throw Error("Unsupported image");
        this.images.set(l.src, await loadImage(l.src));
      }
    }
    this.commit("Load project", () => {
      this.state = state;
    });
  }
}
