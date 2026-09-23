import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { createMockBackend } from "../server/mock-backend.mjs";
let server,
  base,
  cookie = "";
const png =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==";
const state = {
  name: "Contract test",
  width: 100,
  height: 100,
  selected: "layer",
  layers: [
    {
      id: "layer",
      name: "Image",
      type: "image",
      src: png,
      x: 0,
      y: 0,
      w: 100,
      h: 100,
      opacity: 100,
      visible: true,
      blend: "source-over",
    },
  ],
};
before(async () => {
  const handler = createMockBackend({ jobDelay: 0 });
  server = http.createServer((req, res) => handler(req, res));
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  base = `http://127.0.0.1:${server.address().port}/api/v1`;
});
after(() => new Promise((resolve) => server.close(resolve)));
async function request(path, method = "GET", body, headers = {}) {
  const response = await fetch(base + path, {
    method,
    headers: { "Content-Type": "application/json", cookie, ...headers },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const set = response.headers.get("set-cookie");
  if (set) cookie = set.split(";")[0];
  return { status: response.status, ...(await response.json()) };
}
test("session, document conflicts, immutable versions and restore", async () => {
  assert.equal((await request("/documents")).status, 401);
  assert.equal((await request("/session", "POST", {})).status, 201);
  assert.equal((await request("/session")).data.user.id, "user_demo");
  const create = await request("/documents", "POST", { state });
  assert.equal(create.status, 201);
  const id = create.data.id;
  assert.equal(
    (await request(`/documents/${id}`, "PUT", { state, baseRevision: 0 }))
      .status,
    409,
  );
  assert.equal(
    (
      await request(`/documents/${id}`, "PUT", {
        state: { ...state, name: "Changed" },
        baseRevision: 1,
      })
    ).data.revision,
    2,
  );
  assert.equal(
    (await request(`/documents/${id}/versions/1`)).data.state.name,
    "Contract test",
  );
  assert.equal(
    (
      await request(`/documents/${id}/restore`, "POST", {
        revision: 1,
        baseRevision: 2,
      })
    ).data.revision,
    3,
  );
  assert.equal(
    (await request(`/documents/${id}`)).data.state.name,
    "Contract test",
  );
});
test("comments, replies, resolution, mock invitations, revocable public links", async () => {
  const d = (await request("/documents", "POST", { state })).data;
  const comment = (
    await request(`/documents/${d.id}/comments`, "POST", { text: "Hello" })
  ).data;
  assert.equal(
    (
      await request(`/documents/${d.id}/comments`, "POST", {
        text: "reply",
        parentId: comment.id,
      })
    ).status,
    201,
  );
  assert.equal(
    (
      await request(`/documents/${d.id}/comments/${comment.id}`, "PATCH", {
        resolved: true,
      })
    ).data.resolved,
    true,
  );
  assert.equal(
    (await request(`/documents/${d.id}/comments`, "POST", { text: " " }))
      .status,
    422,
  );
  assert.equal(
    (
      await request(`/documents/${d.id}/members`, "POST", {
        email: "reader@example.test",
        role: "viewer",
      })
    ).data.delivery,
    "not-sent",
  );
  assert.equal(
    (
      await request(`/documents/${d.id}/members`, "POST", {
        email: "bad",
        role: "owner",
      })
    ).status,
    422,
  );
  const link = (
    await request(`/documents/${d.id}/shares`, "POST", { role: "viewer" })
  ).data;
  assert.equal(
    (await request(`/shares/${link.id}/open`, "GET", undefined, { cookie: "" }))
      .data.role,
    "viewer",
  );
  assert.equal(
    (await request(`/shares/${link.id}`, "DELETE")).data.revoked,
    true,
  );
  assert.equal((await request(`/shares/${link.id}/open`)).status, 410);
});
test("asset, all generation operations, failure, cancellation, assistant and export", async () => {
  const d = (await request("/documents", "POST", { state })).data;
  const a = (
    await request("/assets", "POST", {
      name: "source",
      dataUrl: png,
      width: 100,
      height: 100,
    })
  ).data;
  const input = {
    documentId: d.id,
    baseRevision: 1,
    sourceAssetId: a.id,
    modelId: "mock-image-v1",
    operation: "generate",
    prompt: "mountains",
    width: 100,
    height: 100,
  };
  for (const operation of [
    "generate",
    "fill",
    "expand",
    "remove-background",
    "remove-object",
    "markup",
    "harmonize",
  ]) {
    const j = await request("/jobs", "POST", { ...input, operation });
    assert.equal(j.status, 202);
    const finished = (await request(`/jobs/${j.data.id}`)).data;
    assert.equal(finished.status, "succeeded");
    assert.equal(finished.result.mock, true);
    const image = await fetch(
      base + finished.result.asset.contentUrl.replace("/api/v1", ""),
      { headers: { cookie } },
    );
    assert.equal(image.status, 200);
    assert.match(await image.text(), /<svg/);
  }
  const failed = (
    await request("/jobs", "POST", { ...input, prompt: "[fail]" })
  ).data;
  assert.equal((await request(`/jobs/${failed.id}`)).data.status, "failed");
  const cancel = (await request("/jobs", "POST", input)).data;
  assert.equal(
    (await request(`/jobs/${cancel.id}`, "DELETE")).data.status,
    "cancelled",
  );
  assert.equal((await request(`/jobs/${cancel.id}`)).data.status, "cancelled");
  assert.equal(
    (
      await request("/assistant", "POST", {
        documentId: d.id,
        message: "black and white",
      })
    ).data.actions[0].settings.grayscale,
    100,
  );
  assert.equal(
    (
      await request("/exports", "POST", {
        documentId: d.id,
        revision: 1,
        assetId: a.id,
        format: "jpeg",
      })
    ).status,
    422,
  );
  assert.equal(
    (
      await request("/exports", "POST", {
        documentId: d.id,
        revision: 1,
        assetId: a.id,
        format: "png",
      })
    ).status,
    201,
  );
  const link = (await request("/download-links", "POST", { assetId: a.id }))
    .data;
  const response = await fetch(base + link.url.replace("/api/v1", ""));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/png");
});
test("validation, simulated outage, catalog, signout isolation", async () => {
  assert.equal((await request("/catalog")).data.models[0].id, "mock-image-v1");
  assert.equal(
    (await request("/catalog", "GET", undefined, { "x-mock-failure": "503" }))
      .status,
    503,
  );
  assert.equal(
    (await request("/documents", "POST", { state: { ...state, width: 0 } }))
      .status,
    422,
  );
  assert.equal(
    (
      await request("/assets", "POST", {
        name: "bad",
        dataUrl: "https://example.test/x",
        width: 100,
        height: 100,
      })
    ).status,
    422,
  );
  assert.equal((await request("/session", "DELETE")).data.signedOut, true);
  assert.equal((await request("/documents")).status, 401);
});

test("mock subject selection validates inputs and stays inside the source", async () => {
  await request("/session", "POST", {});
  const d = (await request("/documents", "POST", { state })).data;
  const a = (
    await request("/assets", "POST", {
      name: "subject fixture",
      dataUrl: png,
      width: 100,
      height: 100,
    })
  ).data;
  const response = await request("/selections", "POST", {
    documentId: d.id,
    sourceAssetId: a.id,
    operation: "subject",
  });
  assert.equal(response.status, 200);
  assert.equal(response.data.mock, true);
  assert.deepEqual(response.data.selection, { x: 20, y: 15, w: 60, h: 70 });
  assert.equal(
    (
      await request("/selections", "POST", {
        documentId: d.id,
        sourceAssetId: a.id,
        operation: "unknown",
      })
    ).status,
    422,
  );
  assert.equal(
    (
      await request("/selections", "POST", {
        documentId: "missing",
        sourceAssetId: a.id,
        operation: "subject",
      })
    ).status,
    404,
  );
});
