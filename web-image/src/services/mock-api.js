// Deliberately local-only, in-memory service. Never deploy this authentication model.
// Shared by the Node mock server (mock-backend.mjs) and the browser offline fallback (api.js).
const clone = structuredClone;
const now = () => new Date().toISOString();
const uuid = () =>
  globalThis.crypto?.randomUUID?.() ??
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
const id = (prefix) => `${prefix}_${uuid()}`;
const fail = (status, code, message) => {
  throw Object.assign(new Error(message), { status, code });
};
const requireText = (value, name, max = 2000) => {
  if (typeof value !== "string" || !value.trim() || value.length > max)
    fail(422, "VALIDATION", `${name} must contain 1–${max} characters`);
  return value.trim();
};
const textToBase64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000)
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
};
export function createMockApi({ jobDelay = 700 } = {}) {
  const user = {
    id: "user_demo",
    name: "Demo editor",
    email: "editor@example.test",
    plan: "Mock Pro",
  };
  const sessions = new Set(),
    docs = new Map(),
    assets = new Map(),
    jobs = new Map(),
    shares = new Map(),
    downloads = new Map();
  const catalog = {
    mock: true,
    features: [
      "cloud-documents",
      "versions",
      "sharing",
      "comments",
      "presence",
      "assets",
      "generation",
      "assistant",
      "exports",
    ],
    models: [
      {
        id: "mock-image-v1",
        name: "Mock image model",
        operations: [
          "generate",
          "fill",
          "expand",
          "remove-background",
          "remove-object",
          "markup",
          "harmonize",
        ],
      },
    ],
    presets: [
      {
        id: "warm",
        name: "Warm light",
        settings: {
          brightness: 8,
          contrast: 4,
          saturation: 115,
          hue: 0,
          blur: 0,
          sepia: 15,
          grayscale: 0,
        },
      },
      {
        id: "mono",
        name: "Studio mono",
        settings: {
          brightness: 0,
          contrast: 20,
          saturation: 100,
          hue: 0,
          blur: 0,
          sepia: 0,
          grayscale: 100,
        },
      },
    ],
    tutorials: [
      {
        id: "layers",
        title: "Working with layers",
        body: "Add a layer before painting. Use the eye icon for visibility and Opacity to blend your edits.",
      },
      {
        id: "ai",
        title: "Trying mock AI",
        body: "Select a region with the Select tool, then choose Generative fill. Jobs return deterministic sample artwork, not real AI inference.",
      },
    ],
    apps: [
      {
        id: "editor",
        name: "Image editor",
        description: "Your current local workspace.",
      },
      {
        id: "library",
        name: "Cloud library",
        description: "Browse images stored by the mock API.",
      },
    ],
    install: {
      name: "Web Image",
      instructions:
        "Use your browser menu to create a shortcut or install this site when supported. No installer or account permission is required.",
    },
  };
  function snapshot(state) {
    if (
      !state ||
      !Number.isInteger(state.width) ||
      !Number.isInteger(state.height) ||
      state.width < 1 ||
      state.height < 1 ||
      state.width > 8192 ||
      state.height > 8192 ||
      state.width * state.height > 32000000 ||
      !Array.isArray(state.layers) ||
      state.layers.length > 200
    )
      fail(422, "VALIDATION", "Invalid document dimensions or layers");
    requireText(state.name, "Document name", 200);
    const ids = new Set();
    for (const l of state.layers) {
      if (
        !l ||
        !["image", "adjust", "rect", "ellipse", "text"].includes(l.type) ||
        typeof l.id !== "string" ||
        ids.has(l.id)
      )
        fail(422, "VALIDATION", "Invalid or duplicate layer");
      ids.add(l.id);
      requireText(l.name, "Layer name", 200);
      if (
        l.type === "image" &&
        (typeof l.src !== "string" ||
          !/^data:image\/(png|jpeg|webp|svg\+xml);base64,/.test(l.src))
      )
        fail(422, "VALIDATION", "Images must be embedded data URLs");
      for (const k of ["x", "y", "w", "h", "opacity"])
        if (!Number.isFinite(l[k]))
          fail(422, "VALIDATION", `Invalid layer ${k}`);
    }
    return clone(state);
  }
  function owned(docId) {
    const d = docs.get(docId);
    if (!d) fail(404, "NOT_FOUND", "Document not found");
    return d;
  }
  function asset(assetId) {
    const a = assets.get(assetId);
    if (!a) fail(404, "NOT_FOUND", "Asset not found");
    return a;
  }
  function metadata(d) {
    return {
      id: d.id,
      name: d.name,
      revision: d.revision,
      updatedAt: d.updatedAt,
      ownerId: user.id,
      width: d.state.width,
      height: d.state.height,
    };
  }
  function assetMeta(a) {
    return {
      id: a.id,
      name: a.name,
      mimeType: a.mimeType,
      width: a.width,
      height: a.height,
      createdAt: a.createdAt,
      contentUrl: `/api/v1/assets/${a.id}/content`,
    };
  }
  function addAsset(name, dataUrl, width, height) {
    const mimeType = dataUrl.slice(5, dataUrl.indexOf(";"));
    const a = {
      id: id("asset"),
      name,
      dataUrl,
      mimeType,
      width,
      height,
      createdAt: now(),
    };
    assets.set(a.id, a);
    return a;
  }
  function append(d, state) {
    d.state = state;
    d.name = state.name;
    d.revision++;
    d.updatedAt = now();
    d.versions.push({
      revision: d.revision,
      createdAt: d.updatedAt,
      state: clone(state),
    });
    return metadata(d);
  }
  function version(d, revision) {
    const v = d.versions.find((v) => v.revision === Number(revision));
    if (!v) fail(404, "NOT_FOUND", "Version not found");
    return v;
  }
  function generatedResult(j) {
    const { operation, width, height, sourceAssetId } = j.input;
    const original = asset(sourceAssetId);
    let body;
    if (operation === "remove-background")
      body = `<defs><clipPath id="subject"><ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.34}" ry="${height * 0.43}"/></clipPath></defs><image width="${width}" height="${height}" href="${original.dataUrl}" clip-path="url(#subject)"/>`;
    else
      body = `<defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#809de6"/><stop offset="1" stop-color="#edd1bd"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="${width * 0.72}" cy="${height * 0.27}" r="${Math.min(width, height) * 0.12}" fill="#fff0c2"/><path d="M0 ${height} L${width * 0.25} ${height * 0.35} L${width * 0.6} ${height} M${width * 0.3} ${height} L${width * 0.75} ${height * 0.48} L${width} ${height}Z" fill="#586d91"/><text x="${width * 0.06}" y="${height * 0.9}" font-size="${Math.max(10, Math.min(width, height) * 0.055)}" font-family="sans-serif" fill="white">Mock ${operation} preview</text>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`;
    const a = addAsset(
      `Mock ${operation}`,
      `data:image/svg+xml;base64,${textToBase64(svg)}`,
      width,
      height,
    );
    return {
      assetId: a.id,
      asset: assetMeta(a),
      placement: j.input.selection || { x: 0, y: 0, w: width, h: height },
      mock: true,
      notice:
        operation === "remove-background"
          ? "Demo ellipse mask; no subject detection."
          : "Deterministic sample artwork; no AI inference.",
    };
  }
  return async function handle({ method = "GET", path = "", headers = {}, body = "" }) {
    const url = new URL(path, "http://localhost");
    if (!url.pathname.startsWith("/api/")) return null;
    const requestId = id("req");
    const H = {};
    for (const key of Object.keys(headers)) {
      const value = headers[key];
      H[key.toLowerCase()] = Array.isArray(value) ? value.join(", ") : value;
    }
    const send = (status, data, extraHeaders) => ({
      status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        "X-Mock-Backend": "true",
        ...extraHeaders,
      },
      body: JSON.stringify({ data, meta: { requestId, mock: true } }),
    });
    const jsonBody = () => {
      if (body.length > 32 * 1024 * 1024)
        fail(413, "PAYLOAD_TOO_LARGE", "Maximum JSON body size is 32 MiB");
      if (!body) return {};
      try {
        return JSON.parse(body);
      } catch {
        fail(400, "BAD_JSON", "Invalid JSON");
      }
    };
    const binary = (a, download = false) => ({
      status: 200,
      headers: {
        "Content-Type": a.mimeType,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; img-src data:; sandbox",
        ...(download
          ? {
              "Content-Disposition": `attachment; filename="web-image.${a.mimeType === "image/jpeg" ? "jpg" : a.mimeType === "image/webp" ? "webp" : a.mimeType === "image/svg+xml" ? "svg" : "png"}"`,
            }
          : {}),
      },
      body: a.dataUrl.split(",")[1],
      base64: true,
    });
    try {
      if (H["x-mock-failure"] === "503")
        fail(
          503,
          "MOCK_UNAVAILABLE",
          "Simulated service unavailable. Retry the action.",
        );
      const p = url.pathname.split("/").filter(Boolean).slice(2);
      // Local demo tokens are random but are not a substitute for production authentication.
      if (p[0] === "session" && method === "POST") {
        const token = id("session");
        sessions.add(token);
        return send(
          201,
          {
            user,
            entitlements: { aiCredits: 100, storageBytes: 1073741824 },
            expiresAt: new Date(Date.now() + 86400000).toISOString(),
          },
          {
            "Set-Cookie": `web_image_session=${token}; HttpOnly; SameSite=Strict; Path=/`,
          },
        );
      }
      if (p[0] === "shares" && p[1] && p[2] === "open" && method === "GET") {
        const s = shares.get(p[1]);
        if (!s || s.revoked || Date.parse(s.expiresAt) < Date.now())
          fail(410, "LINK_EXPIRED", "Sharing link is expired or revoked");
        const d = owned(s.documentId);
        return send(200, {
          document: metadata(d),
          state: clone(d.state),
          role: s.role,
          mock: true,
        });
      }
      if (p[0] === "downloads" && p[1] && method === "GET") {
        const link = downloads.get(p[1]);
        if (!link || Date.parse(link.expiresAt) < Date.now())
          fail(410, "LINK_EXPIRED", "Download link expired");
        return binary(asset(link.assetId), true);
      }
      const token = (H.cookie || "")
        .split(";")
        .map((x) => x.trim())
        .find((x) => x.startsWith("web_image_session="))
        ?.split("=")[1];
      if (!sessions.has(token))
        fail(401, "UNAUTHENTICATED", "Start a demo session from Account");
      if (p[0] === "session") {
        if (method === "GET")
          return send(200, {
            user,
            entitlements: { aiCredits: 100, storageBytes: 1073741824 },
            expiresAt: new Date(Date.now() + 86400000).toISOString(),
          });
        if (method === "DELETE") {
          sessions.delete(token);
          return send(
            200,
            { signedOut: true },
            {
              "Set-Cookie":
                "web_image_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0",
            },
          );
        }
        fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
      }
      if (p[0] === "catalog" && method === "GET") return send(200, catalog);
      if (p[0] === "documents") {
        if (!p[1]) {
          if (method === "GET")
            return send(200, {
              items: [...docs.values()].map(metadata),
              nextCursor: null,
            });
          if (method === "POST") {
            const b = jsonBody(),
              state = snapshot(b.state);
            const d = {
              id: id("doc"),
              name: state.name,
              state,
              revision: 0,
              updatedAt: now(),
              versions: [],
              comments: [],
              members: [],
            };
            docs.set(d.id, d);
            append(d, state);
            return send(201, metadata(d));
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
        const d = owned(p[1]);
        if (!p[2]) {
          if (method === "GET")
            return send(200, { ...metadata(d), state: clone(d.state) });
          if (method === "PUT") {
            const b = jsonBody();
            if (b.baseRevision !== d.revision)
              fail(
                409,
                "REVISION_CONFLICT",
                "Cloud document changed. Open the latest version or save a new copy.",
              );
            return send(200, append(d, snapshot(b.state)));
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
        if (p[2] === "versions" && method === "GET")
          return send(
            200,
            p[3]
              ? version(d, p[3])
              : {
                  items: d.versions
                    .map((v) => ({
                      revision: v.revision,
                      createdAt: v.createdAt,
                    }))
                    .reverse(),
                  nextCursor: null,
                },
          );
        if (p[2] === "restore" && method === "POST") {
          const b = jsonBody();
          if (b.baseRevision !== d.revision)
            fail(409, "REVISION_CONFLICT", "Document changed before restore");
          return send(200, append(d, clone(version(d, b.revision).state)));
        }
        if (p[2] === "comments") {
          if (method === "GET")
            return send(200, { items: d.comments, nextCursor: null });
          if (method === "POST") {
            const b = jsonBody();
            if (b.parentId && !d.comments.some((c) => c.id === b.parentId))
              fail(422, "VALIDATION", "Parent comment not found");
            const c = {
              id: id("comment"),
              author: user,
              text: requireText(b.text, "Comment"),
              parentId: b.parentId || null,
              anchor: b.anchor || null,
              resolved: false,
              createdAt: now(),
            };
            d.comments.push(c);
            return send(201, c);
          }
          if (method === "PATCH" && p[3]) {
            const c = d.comments.find((c) => c.id === p[3]);
            if (!c) fail(404, "NOT_FOUND", "Comment not found");
            const b = jsonBody();
            if (typeof b.resolved !== "boolean")
              fail(422, "VALIDATION", "resolved must be boolean");
            c.resolved = b.resolved;
            return send(200, c);
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
        if (p[2] === "presence" && method === "GET")
          return send(200, {
            items: [
              {
                userId: user.id,
                name: user.name,
                status: "editing",
                lastSeen: now(),
              },
              {
                userId: "fixture_reviewer",
                name: "Sample reviewer (simulated)",
                status: "viewing",
                lastSeen: now(),
              },
            ],
            mock: true,
          });
        if (p[2] === "members") {
          if (method === "GET")
            return send(200, { items: d.members, nextCursor: null });
          if (method === "POST") {
            const b = jsonBody();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email || ""))
              fail(422, "VALIDATION", "Enter an email address");
            if (!["viewer", "commenter", "editor"].includes(b.role))
              fail(422, "VALIDATION", "Invalid role");
            const member = {
              id: id("member"),
              email: b.email,
              role: b.role,
              status: "simulated-invitation",
              delivery: "not-sent",
            };
            d.members.push(member);
            return send(201, member);
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
        if (p[2] === "shares") {
          if (method === "GET")
            return send(200, {
              items: [...shares.values()].filter(
                (s) => s.documentId === d.id,
              ),
              nextCursor: null,
            });
          if (method === "POST") {
            const b = jsonBody();
            if (b.role !== "viewer")
              fail(422, "VALIDATION", "Mock links support viewer access only");
            const s = {
              id: id("share"),
              documentId: d.id,
              role: "viewer",
              revoked: false,
              expiresAt: new Date(Date.now() + 3600000).toISOString(),
            };
            s.url = `/?share=${s.id}`;
            shares.set(s.id, s);
            return send(201, s);
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
      }
      if (p[0] === "shares" && p[1] && method === "DELETE") {
        const s = shares.get(p[1]);
        if (!s) fail(404, "NOT_FOUND", "Share not found");
        s.revoked = true;
        return send(200, { revoked: true });
      }
      if (p[0] === "assets") {
        if (!p[1]) {
          if (method === "GET")
            return send(200, {
              items: [...assets.values()].map(assetMeta).reverse(),
              nextCursor: null,
            });
          if (method === "POST") {
            const b = jsonBody();
            requireText(b.name, "Asset name", 200);
            if (
              !/^data:image\/(png|jpeg|webp);base64,[a-zA-Z0-9+/=]+$/.test(
                b.dataUrl || "",
              )
            )
              fail(422, "VALIDATION", "Upload a PNG, JPEG, or WebP data URL");
            if (
              !Number.isInteger(b.width) ||
              !Number.isInteger(b.height) ||
              b.width < 1 ||
              b.height < 1 ||
              b.width > 8192 ||
              b.height > 8192
            )
              fail(422, "VALIDATION", "Invalid image dimensions");
            return send(
              201,
              assetMeta(addAsset(b.name, b.dataUrl, b.width, b.height)),
          );
          }
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        }
        const a = asset(p[1]);
        if (method !== "GET")
          fail(405, "METHOD_NOT_ALLOWED", "Unsupported method");
        if (p[2] === "content") return binary(a);
        return send(200, assetMeta(a));
      }
      if (p[0] === "selections" && method === "POST") {
        const b = jsonBody();
        const d = owned(b.documentId),
          source = asset(b.sourceAssetId);
        if (b.operation !== "subject")
          fail(422, "VALIDATION", "Invalid selection operation");
        return send(200, {
          mock: true,
          operation: "subject",
          selection: {
            x: Math.round(source.width * 0.2),
            y: Math.round(source.height * 0.15),
            w: Math.max(1, Math.round(source.width * 0.6)),
            h: Math.max(1, Math.round(source.height * 0.7)),
          },
        });
      }
      if (p[0] === "jobs") {
        if (!p[1] && method === "POST") {
          const b = jsonBody();
          owned(b.documentId);
          asset(b.sourceAssetId);
          if (!catalog.models[0].operations.includes(b.operation))
            fail(422, "VALIDATION", "Invalid operation");
          if (b.modelId !== "mock-image-v1")
            fail(422, "VALIDATION", "Unknown model");
          if (
            !Number.isInteger(b.width) ||
            !Number.isInteger(b.height) ||
            b.width < 1 ||
            b.height < 1 ||
            b.width > 8192 ||
            b.height > 8192
          )
            fail(422, "VALIDATION", "Invalid output dimensions");
          if (b.operation !== "remove-background")
            requireText(b.prompt, "Prompt");
          if (b.selection) {
            const r = b.selection;
            if (
              !["x", "y", "w", "h"].every((k) => Number.isFinite(r[k])) ||
              r.x < 0 ||
              r.y < 0 ||
              r.w <= 0 ||
              r.h <= 0 ||
              r.x + r.w > b.width ||
              r.y + r.h > b.height
            )
              fail(422, "VALIDATION", "Invalid selection");
          }
          const d = owned(b.documentId);
          if (b.baseRevision !== d.revision)
            fail(
              409,
              "REVISION_CONFLICT",
              "Save the current document before generating",
            );
          const j = {
            id: id("job"),
            status: "queued",
            progress: 0,
            createdAt: now(),
            input: clone(b),
            readyAt: Date.now() + jobDelay,
          };
          jobs.set(j.id, j);
          return send(202, {
            id: j.id,
            status: j.status,
            progress: 0,
            createdAt: j.createdAt,
          });
        }
        const j = jobs.get(p[1]);
        if (!j) fail(404, "NOT_FOUND", "Job not found");
        if (method === "DELETE") {
          if (["queued", "running"].includes(j.status)) j.status = "cancelled";
          return send(200, { id: j.id, status: j.status });
        }
        if (method === "GET") {
          if (["queued", "running"].includes(j.status)) {
            if (Date.now() >= j.readyAt) {
              if (j.input.prompt?.includes("[fail]")) {
                j.status = "failed";
                j.error = {
                  code: "GENERATION_FAILED",
                  message: "Requested mock failure. Try another prompt.",
                };
              } else {
                j.status = "succeeded";
                j.progress = 100;
                j.result = generatedResult(j);
              }
            } else {
              j.status = "running";
              j.progress = 40;
            }
          }
          return send(200, {
            id: j.id,
            status: j.status,
            progress: j.progress,
            createdAt: j.createdAt,
            result: j.result,
            error: j.error,
          });
        }
      }
      if (p[0] === "assistant" && method === "POST") {
        const b = jsonBody();
        owned(b.documentId);
        const message = requireText(b.message, "Message");
        const mono = /black|white|mono/i.test(message);
        return send(200, {
          id: id("message"),
          text: mono
            ? "Mock suggestion: convert the image to black and white."
            : "Mock suggestion: lift brightness slightly and add contrast. Review before applying.",
          actions: [
            {
              type: "adjustment",
              label: mono
                ? "Apply black & white"
                : "Apply suggested adjustment",
              settings: {
                brightness: mono ? 0 : 10,
                contrast: 12,
                saturation: 100,
                hue: 0,
                blur: 0,
                sepia: 0,
                grayscale: mono ? 100 : 0,
              },
            },
          ],
          mock: true,
        });
      }
      if (p[0] === "exports" && method === "POST") {
        const b = jsonBody();
        const d = owned(b.documentId),
          a = asset(b.assetId);
        if (
          !["png", "jpeg", "webp"].includes(b.format) ||
          a.mimeType !== `image/${b.format}`
        )
          fail(422, "VALIDATION", "Format must match the uploaded image");
        if (b.revision !== d.revision)
          fail(409, "REVISION_CONFLICT", "Export revision is stale");
        return send(201, {
          id: id("export"),
          status: "succeeded",
          asset: assetMeta(a),
          documentId: d.id,
          revision: d.revision,
          mock: true,
        });
      }
      if (p[0] === "download-links" && method === "POST") {
        const b = jsonBody();
        asset(b.assetId);
        const token = id("download"),
          expiresAt = new Date(Date.now() + 900000).toISOString();
        downloads.set(token, { assetId: b.assetId, expiresAt });
        return send(201, {
          id: token,
          url: `/api/v1/downloads/${token}`,
          expiresAt,
          mock: true,
        });
      }
      fail(404, "NOT_FOUND", "API route not found");
    } catch (error) {
      const status = error.status || 500;
      return {
        status,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify({
          error: {
            code: error.code || "INTERNAL",
            message:
              status === 500 ? "Unexpected mock backend error" : error.message,
            requestId,
          },
          meta: { mock: true },
        }),
      };
    }
  };
}
