/** Geometry is expressed in original document pixels, independent of zoom. */
export const corners = (l) =>
  l.quad?.map((p) => ({ ...p })) || [
    { x: l.x, y: l.y },
    { x: l.x + l.w, y: l.y },
    { x: l.x + l.w, y: l.y + l.h },
    { x: l.x, y: l.y + l.h },
  ];
export function bounds(points) {
  const xs = points.map((p) => p.x),
    ys = points.map((p) => p.y);
  return {
    x: Math.min(...xs),
    y: Math.min(...ys),
    w: Math.max(...xs) - Math.min(...xs),
    h: Math.max(...ys) - Math.min(...ys),
  };
}
export const center = (points) => ({
  x: points.reduce((s, p) => s + p.x, 0) / points.length,
  y: points.reduce((s, p) => s + p.y, 0) / points.length,
});
export function setQuad(l, quad) {
  l.sourceWidth ??= l.w;
  l.sourceHeight ??= l.h;
  l.quad = quad.map((p) => ({ ...p }));
  Object.assign(l, bounds(quad));
}
export function translate(l, dx, dy) {
  if (l.quad) l.quad = l.quad.map((p) => ({ x: p.x + dx, y: p.y + dy }));
  l.x += dx;
  l.y += dy;
}
export function rotate(points, degrees, pivot = center(points)) {
  const a = (degrees * Math.PI) / 180,
    c = Math.cos(a),
    s = Math.sin(a);
  return points.map((p) => ({
    x: pivot.x + (p.x - pivot.x) * c - (p.y - pivot.y) * s,
    y: pivot.y + (p.x - pivot.x) * s + (p.y - pivot.y) * c,
  }));
}
export function hitQuad(q, p) {
  let positive = false,
    negative = false;
  for (let i = 0; i < 4; i++) {
    const a = q[i],
      b = q[(i + 1) % 4],
      v = (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);
    positive ||= v > 0;
    negative ||= v < 0;
  }
  return !(positive && negative);
}
export function validQuad(q) {
  return (
    q.every((p) => Number.isFinite(p.x) && Number.isFinite(p.y)) &&
    Math.abs(
      q.reduce(
        (s, p, i) => s + p.x * q[(i + 1) % 4].y - p.y * q[(i + 1) % 4].x,
        0,
      ),
    ) > 2 &&
    q.every((p, i) => {
      const b = q[(i + 1) % 4],
        c = q[(i + 2) % 4],
        a = q[(i + 3) % 4];
      return (
        ((b.x - p.x) * (c.y - b.y) - (b.y - p.y) * (c.x - b.x)) *
          ((p.x - a.x) * (b.y - p.y) - (p.y - a.y) * (b.x - p.x)) >
        0
      );
    })
  );
}
export function dimensions(q) {
  return {
    w: Math.hypot(q[1].x - q[0].x, q[1].y - q[0].y),
    h: Math.hypot(q[3].x - q[0].x, q[3].y - q[0].y),
    ...center(q),
    rotation: (Math.atan2(q[1].y - q[0].y, q[1].x - q[0].x) * 180) / Math.PI,
  };
}
export function resizeQuad(q, width, height, linked = false) {
  const d = dimensions(q),
    p = center(q),
    flat = rotate(q, -d.rotation, p);
  const sx = width / d.w,
    sy = linked ? sx : height / d.h;
  return rotate(
    flat.map((v) => ({ x: p.x + (v.x - p.x) * sx, y: p.y + (v.y - p.y) * sy })),
    d.rotation,
    p,
  );
}
export function alignLayers(layers, target, edge) {
  const axis = ["left", "center", "right"].includes(edge) ? "x" : "y",
    size = axis === "x" ? "w" : "h",
    factor = { left: 0, top: 0, center: 0.5, middle: 0.5, right: 1, bottom: 1 }[
      edge
    ];
  for (const l of layers) {
    const b = bounds(corners(l)),
      delta = target[axis] + target[size] * factor - b[axis] - b[size] * factor;
    translate(l, axis === "x" ? delta : 0, axis === "y" ? delta : 0);
  }
}
export function distributeLayers(layers, edge, spacing = false) {
  if (layers.length < 3) return;
  const axis = ["left", "center", "right", "horizontal"].includes(edge)
      ? "x"
      : "y",
    size = axis === "x" ? "w" : "h",
    factor =
      { left: 0, top: 0, center: 0.5, middle: 0.5, right: 1, bottom: 1 }[
        edge
      ] ?? 0;
  const items = layers
    .map((l) => ({ l, b: bounds(corners(l)) }))
    .sort(
      (a, b) =>
        a.b[axis] + a.b[size] * factor - (b.b[axis] + b.b[size] * factor),
    );
  if (spacing) {
    const first = items[0].b,
      last = items.at(-1).b,
      gap =
        (last[axis] +
          last[size] -
          first[axis] -
          items.reduce((s, i) => s + i.b[size], 0)) /
        (items.length - 1);
    let cursor = first[axis];
    for (const { l, b } of items) {
      translate(
        l,
        axis === "x" ? cursor - b.x : 0,
        axis === "y" ? cursor - b.y : 0,
      );
      cursor += b[size] + gap;
    }
  } else {
    const start = items[0].b[axis] + items[0].b[size] * factor,
      end = items.at(-1).b[axis] + items.at(-1).b[size] * factor;
    items.forEach(({ l, b }, i) => {
      const delta =
        start +
        ((end - start) * i) / (items.length - 1) -
        b[axis] -
        b[size] * factor;
      translate(l, axis === "x" ? delta : 0, axis === "y" ? delta : 0);
    });
  }
}
/** Project a unit square onto a convex quadrilateral. */
export function project(q, u, v) {
  const [p0, p1, p2, p3] = q,
    dx1 = p1.x - p2.x,
    dx2 = p3.x - p2.x,
    dx3 = p0.x - p1.x + p2.x - p3.x,
    dy1 = p1.y - p2.y,
    dy2 = p3.y - p2.y,
    dy3 = p0.y - p1.y + p2.y - p3.y,
    det = dx1 * dy2 - dx2 * dy1;
  const g = Math.abs(det) > 1e-9 ? (dx3 * dy2 - dx2 * dy3) / det : 0,
    h = Math.abs(det) > 1e-9 ? (dx1 * dy3 - dx3 * dy1) / det : 0,
    den = g * u + h * v + 1;
  return {
    x:
      ((p1.x - p0.x + g * p1.x) * u + (p3.x - p0.x + h * p3.x) * v + p0.x) /
      den,
    y:
      ((p1.y - p0.y + g * p1.y) * u + (p3.y - p0.y + h * p3.y) * v + p0.y) /
      den,
  };
}
export function drawWarp(ctx, image, q) {
  const w = image.width,
    h = image.height;
  if (
    Math.hypot(
      q[0].x + q[2].x - q[1].x - q[3].x,
      q[0].y + q[2].y - q[1].y - q[3].y,
    ) < 0.01
  ) {
    ctx.save();
    ctx.transform(
      (q[1].x - q[0].x) / w,
      (q[1].y - q[0].y) / w,
      (q[3].x - q[0].x) / h,
      (q[3].y - q[0].y) / h,
      q[0].x,
      q[0].y,
    );
    ctx.drawImage(image, 0, 0);
    ctx.restore();
    return;
  }
  const n = 20;
  function triangle(s, d) {
    const [a, b, c] = s,
      [A, B, C] = d,
      det = (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
    if (Math.abs(det) < 1e-9) return;
    const m11 = ((B.x - A.x) * (c.y - a.y) - (C.x - A.x) * (b.y - a.y)) / det,
      m12 = ((B.y - A.y) * (c.y - a.y) - (C.y - A.y) * (b.y - a.y)) / det,
      m21 = ((C.x - A.x) * (b.x - a.x) - (B.x - A.x) * (c.x - a.x)) / det,
      m22 = ((C.y - A.y) * (b.x - a.x) - (B.y - A.y) * (c.x - a.x)) / det;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.closePath();
    ctx.clip();
    ctx.transform(
      m11,
      m12,
      m21,
      m22,
      A.x - m11 * a.x - m21 * a.y,
      A.y - m12 * a.x - m22 * a.y,
    );
    ctx.drawImage(image, 0, 0);
    ctx.restore();
  }
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      const uv = [
          [x / n, y / n],
          [(x + 1) / n, y / n],
          [(x + 1) / n, (y + 1) / n],
          [x / n, (y + 1) / n],
        ],
        s = uv.map(([u, v]) => ({ x: u * w, y: v * h })),
        d = uv.map(([u, v]) => project(q, u, v));
      triangle([s[0], s[1], s[2]], [d[0], d[1], d[2]]);
      triangle([s[0], s[2], s[3]], [d[0], d[2], d[3]]);
    }
}
