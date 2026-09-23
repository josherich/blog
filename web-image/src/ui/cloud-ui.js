import { api } from "../services/api.js";
import { translate } from "../core/geometry.js";
import { Editor, surface } from "../core/engine.js";
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const button = (label, action, extra = "") =>
  `<button class="cloud-button" data-cloud="${action}" ${extra}>${label}</button>`;
const input = (label, id, value = "", type = "text") =>
  `<label>${label}<input class="field" id="${id}" type="${type}" value="${esc(value)}"></label>`;
const note = (text) => `<p class="cloud-note">${esc(text)}</p>`;
export function createCloudUI({ editor, refresh, getSelection, toast }) {
  const dialog = document.createElement("dialog");
  dialog.id = "cloud-dialog";
  document.body.append(dialog);
  let documentId = null,
    revision = null,
    user = null,
    started = false,
    signedOut = false,
    page = "documents",
    jobId = null,
    pollToken = 0,
    result = null,
    assistantResult = null,
    busy = false;
  const $ = (selector) => dialog.querySelector(selector);
  function shell(title, html) {
    dialog.innerHTML = `<div class="cloud-heading"><h2>${esc(title)}</h2><button data-cloud="close" aria-label="Close cloud dialog">×</button></div><div class="cloud-banner">Mock backend · local data · no external requests</div><div id="cloud-body">${html}</div><p id="cloud-status" role="status" aria-live="polite"></p><div class="cloud-footer">${button("Cloud documents", "documents")}${button("Account", "account")}</div>`;
    if (!dialog.open) dialog.showModal();
  }
  function status(message, error = false) {
    const el = $("#cloud-status");
    if (el) {
      el.textContent = message;
      el.classList.toggle("error", error);
    }
  }
  async function session() {
    if (!started && !signedOut) {
      await api.post("/session", {});
      started = true;
    }
    const s = await api.get("/session");
    user = s.user;
    return s;
  }
  async function saveCloud({ newCopy = false } = {}) {
    const state = structuredClone(editor.state);
    let saved;
    if (documentId && !newCopy)
      saved = await api.put(`/documents/${documentId}`, {
        baseRevision: revision,
        state,
      });
    else saved = await api.post("/documents", { state });
    documentId = saved.id;
    revision = saved.revision;
    return saved;
  }
  async function ensureDocument() {
    await session();
    return saveCloud();
  }
  async function uploadCanvas(format = "png") {
    return api.post("/assets", {
      name: editor.state.name + "." + format,
      dataUrl: editor.canvas.toDataURL("image/" + format, 0.94),
      width: editor.state.width,
      height: editor.state.height,
    });
  }
  async function loadDocument(id) {
    const d = await api.get(`/documents/${id}`);
    await editor.restore(d.state);
    documentId = d.id;
    revision = d.revision;
    refresh();
  }
  async function documents() {
    const list = await api.get("/documents");
    shell(
      "Cloud documents",
      `${note("Cloud saves are explicit. The mock server stores documents and version history in memory until it restarts.")}
      <div class="cloud-actions">${button("Save current document", "save", 'class="primary"')}${button("Save as new copy", "save-copy")}${button("Refresh", "documents")}</div>
      ${list.items.length ? list.items.map((d) => `<article class="cloud-card"><b>${esc(d.name)}</b><span>Revision ${d.revision} · ${d.width} × ${d.height}${d.id === documentId ? " · current" : ""}</span>${button("Open", "open-document", `data-id="${d.id}"`)}${button("Versions", "versions", `data-id="${d.id}"`)}</article>`).join("") : note("No cloud documents yet. Save the current canvas to create one.")}
      ${note("Opening a cloud document replaces the canvas. Use Undo to return to the previous canvas.")}`,
    );
  }
  async function versions(id = documentId) {
    if (!id) {
      await ensureDocument();
      id = documentId;
    }
    const list = await api.get(`/documents/${id}/versions`);
    shell(
      "Cloud version history",
      `${note("Restore creates a new revision; it never deletes existing versions.")}${list.items.map((v) => `<article class="cloud-card"><b>Revision ${v.revision}</b><span>${esc(new Date(v.createdAt).toLocaleString())}</span>${button("Restore", "restore", `data-id="${id}" data-revision="${v.revision}"`)}</article>`).join("")}`,
    );
  }
  async function sharing() {
    if (!documentId) await ensureDocument();
    const [members, links, presence] = await Promise.all([
      api.get(`/documents/${documentId}/members`),
      api.get(`/documents/${documentId}/shares`),
      api.get(`/documents/${documentId}/presence`),
    ]);
    shell(
      "Share document",
      `${note("Invitations are mock records only: no email is sent and no real account gains access. Links open a read-only snapshot viewer on this local server.")}
      ${input("Invite email", "invite-email", "", "email")}<label>Role<select id="invite-role"><option value="viewer">Viewer</option><option value="commenter">Commenter</option><option value="editor">Editor</option></select></label>${button("Create mock invitation", "invite")}
      ${members.items.map((m) => `<article class="cloud-card">${esc(m.email)} · ${esc(m.role)}<span>Simulated invitation — not sent</span></article>`).join("")}
      <h3>View links</h3>${button("Create view link (1 hour)", "share-link")}${links.items.map((s) => `<article class="cloud-card">${s.revoked ? "Revoked" : `<a href="${esc(s.url)}" target="_blank" rel="noopener">Open view link</a>${input("Local share URL", "link-" + s.id, new URL(s.url, location.origin).href)}${button("Revoke", "revoke", `data-id="${s.id}"`)}`}</article>`).join("")}
      <h3>Presence</h3>${presence.items.map((p) => note(p.name + " · " + p.status)).join("")}`,
    );
  }
  async function comments() {
    if (!documentId) await ensureDocument();
    const list = await api.get(`/documents/${documentId}/comments`);
    shell(
      "Comments",
      `${note("Comments belong to the current cloud document. “Attach selection” records the current rectangle in image pixels.")}
      <label>Comment<textarea id="comment-text" maxlength="2000" placeholder="Leave feedback…"></textarea></label>
      <label>Reply to<select id="comment-parent"><option value="">New thread</option>${list.items
        .filter((c) => !c.parentId)
        .map(
          (c) => `<option value="${c.id}">${esc(c.text.slice(0, 60))}</option>`,
        )
        .join("")}</select></label>
      <label class="cloud-check"><input type="checkbox" id="comment-anchor"> Attach current selection</label>${button("Post comment", "post-comment")}
      ${list.items.length ? list.items.map((c) => `<article class="cloud-card ${c.resolved ? "resolved" : ""}"><b>${esc(c.author.name)}${c.parentId ? " · reply" : ""}</b><p>${esc(c.text)}</p><span>${c.resolved ? "Resolved" : "Open"}${c.anchor ? " · anchored to selection" : ""}</span>${button(c.resolved ? "Reopen" : "Resolve", "resolve-comment", `data-id="${c.id}" data-resolved="${!c.resolved}"`)}</article>`).join("") : note("No comments yet.")}`,
    );
  }
  async function library() {
    const list = await api.get("/assets");
    shell(
      "Cloud image library",
      `${note("Save the canvas as an asset, or upload an image to the mock library. Adding an asset creates an editable image layer.")}
    <div class="cloud-actions">${button("Save canvas to library", "upload-canvas")}<label class="cloud-button">Upload image<input id="cloud-file" type="file" accept="image/png,image/jpeg,image/webp"></label></div>
    <div class="cloud-grid">${list.items.map((a) => `<article class="cloud-card"><img src="${esc(a.contentUrl)}" alt="${esc(a.name)}"><b>${esc(a.name)}</b>${button("Add as layer", "add-asset", `data-id="${a.id}"`)}</article>`).join("")}</div>${!list.items.length ? note("Your library is empty.") : ""}`,
    );
  }
  async function generation(operation = "generate") {
    const catalog = await api.get("/catalog");
    result = null;
    shell(
      "Generative tools",
      `${note("Demo results are deterministic sample artwork, not real AI. Background removal uses an ellipse mask, not object detection. Preview the result before adding a new layer.")}
      <label>Operation<select id="generation-operation">${catalog.models[0].operations.map((op) => `<option value="${op}" ${op === operation ? "selected" : ""}>${{ generate: "Generate image", fill: "Generative fill", expand: "Generative expand", "remove-background": "Remove background", "remove-object": "Remove object", markup: "AI markup", harmonize: "Harmonize" }[op]}</option>`).join("")}</select></label>
      <label>Model<select id="generation-model">${catalog.models.map((m) => `<option value="${m.id}">${esc(m.name)}</option>`).join("")}</select></label>
      <label>Prompt<textarea id="generation-prompt" maxlength="2000" placeholder="Describe the edit…"></textarea></label>
      ${note(getSelection() ? "The current selection will be used for fill, remove-object, and markup." : "For fill or remove-object, select a region with the Select tool first.")}
      <div class="cloud-actions">${button("Generate mock preview", "generate")}${button("Cancel job", "cancel-job", "disabled")}</div><div id="generation-result"></div>`,
    );
  }
  async function runGeneration() {
    const operation = $("#generation-operation").value,
      prompt = $("#generation-prompt").value,
      selection = getSelection();
    if (["fill", "remove-object"].includes(operation) && !selection)
      throw Error("Make a rectangular selection before using this operation.");
    if (operation !== "remove-background" && !prompt.trim())
      throw Error("Enter a prompt.");
    await ensureDocument();
    const source = await uploadCanvas();
    const localToken = ++pollToken;
    const selectionForJob = ["fill", "remove-object", "markup"].includes(
      operation,
    )
      ? selection
      : null;
    const job = await api.post("/jobs", {
      documentId,
      baseRevision: revision,
      sourceAssetId: source.id,
      modelId: $("#generation-model").value,
      operation,
      prompt,
      width: editor.state.width + (operation === "expand" ? 256 : 0),
      height: editor.state.height + (operation === "expand" ? 256 : 0),
      selection: selectionForJob,
    });
    jobId = job.id;
    $('[data-cloud="cancel-job"]').disabled = false;
    let current = job;
    status("Queued…");
    for (let attempts = 0; attempts < 100; attempts++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (localToken !== pollToken || !dialog.open) return;
      current = await api.get(`/jobs/${job.id}`);
      status(`${current.status} · ${current.progress}%`);
      if (current.status === "failed") throw Error(current.error.message);
      if (current.status === "cancelled") {
        status("Job cancelled");
        return;
      }
      if (current.status === "succeeded") break;
    }
    if (current.status !== "succeeded")
      throw Error("Generation is taking too long. Cancel the job or retry.");
    if (localToken !== pollToken) return;
    result = { ...current.result, operation };
    jobId = null;
    $("#generation-result").innerHTML =
      `<img class="cloud-preview" src="${esc(result.asset.contentUrl)}" alt="Mock generation preview">${note(result.notice)}${button("Add result as new layer", "apply-generation")}`;
    status("Preview ready. Review and apply.");
    $('[data-cloud="cancel-job"]').disabled = true;
  }
  async function assistant() {
    assistantResult = null;
    shell(
      "AI Assistant",
      `${note("The mock assistant recognizes “black and white” requests and otherwise suggests brightness and contrast. It never applies an edit without your click.")}
    <label>Message<textarea id="assistant-message" placeholder="How could I improve this image?"></textarea></label>${button("Ask mock assistant", "ask-assistant")}<div id="assistant-answer"></div>`,
    );
  }
  async function exporting() {
    shell(
      "Cloud export & phone download",
      `${note("The browser renders the image, and the mock server stores it. Temporary links last 15 minutes. A localhost link only works on this computer; real phone access needs a reachable production host.")}
    <label>Format<select id="cloud-export-format"><option value="png">PNG</option><option value="jpeg">JPEG</option><option value="webp">WebP</option></select></label>${button("Create cloud export", "create-export")}<div id="export-result"></div>`,
    );
  }
  async function account() {
    const s = await api.get("/session");
    shell(
      "Account & mock controls",
      `<h3>${esc(s.user.name)}</h3>${note(s.user.email + " · " + s.user.plan)}${note(`${s.entitlements.aiCredits} simulated AI credits · ${s.entitlements.storageBytes / 1073741824} GiB simulated storage. Quotas are not consumed by this mock.`)}
    ${button("Sign out of demo", "signout")}${button("Fail next API request (503)", "fail-next")}${note("Data is shared by demo sessions in this server process and disappears when the server restarts. Never enter real account credentials.")}`,
    );
  }
  async function catalogView(kind) {
    const c = await api.get("/catalog");
    if (kind === "install")
      shell("Get browser app", note(c.install.instructions));
    else if (kind === "presets")
      shell(
        "Cloud presets",
        c.presets
          .map(
            (p) =>
              `<article class="cloud-card"><b>${esc(p.name)}</b>${button("Apply preset", "apply-preset", `data-id="${p.id}"`)}</article>`,
          )
          .join(""),
      );
    else if (kind === "apps")
      shell(
        "Apps",
        c.apps
          .map(
            (a) =>
              `<article class="cloud-card"><b>${esc(a.name)}</b>${note(a.description)}${button(a.id === "library" ? "Open library" : "Return to editor", a.id === "library" ? "library" : "close")}</article>`,
          )
          .join(""),
      );
    else
      shell(
        "Learning center",
        c.tutorials
          .map(
            (t) =>
              `<article class="cloud-card"><h3>${esc(t.title)}</h3>${note(t.body)}</article>`,
          )
          .join(""),
      );
  }
  async function open(view = "documents") {
    page = view;
    shell("Mock cloud", note("Loading…"));
    await run(async () => {
      await session();
      if (view === "documents") await documents();
      else if (view === "versions") await versions();
      else if (view === "share") await sharing();
      else if (view === "comments") await comments();
      else if (view === "library") await library();
      else if (view === "assistant") await assistant();
      else if (view === "export") await exporting();
      else if (view === "account") await account();
      else if (
        [
          "generate",
          "fill",
          "expand",
          "remove-background",
          "remove-object",
          "markup",
          "harmonize",
        ].includes(view)
      )
        await generation(view);
      else await catalogView(view);
    });
  }
  async function run(fn) {
    busy = true;
    dialog.setAttribute("aria-busy", "true");
    $$disable(true);
    try {
      await fn();
    } catch (error) {
      if ($("#cloud-body")?.textContent.trim() === "Loading…") {
        $("#cloud-body").innerHTML = note(
          "The request could not complete. Use the actions below to retry.",
        );
      }
      status(`${error.code ? error.code + ": " : ""}${error.message}`, true);
      if (error.status === 401) {
        $("#cloud-body").innerHTML =
          note("You are signed out. Start a mock session to continue.") +
          button("Start demo session", "signin");
      }
      if (error.status === 404 && documentId) {
        documentId = null;
        revision = null;
        status(
          "The mock server no longer has this document. Save a new cloud copy.",
          true,
        );
      }
    } finally {
      busy = false;
      dialog.removeAttribute("aria-busy");
      $$disable(false);
    }
  }
  function $$disable(disabled) {
    dialog.querySelectorAll("[data-cloud]").forEach((b) => {
      if (!["close", "cancel-job"].includes(b.dataset.cloud))
        b.disabled = disabled;
    });
  }
  async function handle(action, target) {
    if (action === "close") {
      dialog.close();
      return;
    }
    if (action === "cancel-job") {
      ++pollToken;
      if (jobId) {
        await api.delete(`/jobs/${jobId}`);
        jobId = null;
      }
      status("Job cancelled");
      target.disabled = true;
      return;
    }
    if (action === "signin") {
      await api.post("/session", {});
      started = true;
      signedOut = false;
      return account();
    }
    if (
      [
        "documents",
        "versions",
        "share",
        "comments",
        "library",
        "assistant",
        "export",
        "account",
      ].includes(action)
    )
      return open(action);
    switch (action) {
      case "save":
        await saveCloud();
        await documents();
        status("Saved to mock cloud");
        break;
      case "save-copy":
        await saveCloud({ newCopy: true });
        await documents();
        status("New cloud copy saved");
        break;
      case "open-document":
        await loadDocument(target.dataset.id);
        dialog.close();
        toast("Opened cloud document");
        break;
      case "restore": {
        const d = await api.get(`/documents/${target.dataset.id}`);
        const saved = await api.post(`/documents/${d.id}/restore`, {
          revision: Number(target.dataset.revision),
          baseRevision: d.revision,
        });
        await loadDocument(saved.id);
        await versions(saved.id);
        status("Restored as a new cloud revision");
        break;
      }
      case "invite":
        await api.post(`/documents/${documentId}/members`, {
          email: $("#invite-email").value,
          role: $("#invite-role").value,
        });
        await sharing();
        status("Mock invitation recorded. No email sent.");
        break;
      case "share-link":
        await saveCloud();
        await api.post(`/documents/${documentId}/shares`, { role: "viewer" });
        await sharing();
        break;
      case "revoke":
        await api.delete(`/shares/${target.dataset.id}`);
        await sharing();
        break;
      case "post-comment": {
        const text = $("#comment-text").value,
          parentId = $("#comment-parent").value,
          anchor = $("#comment-anchor").checked ? getSelection() : null;
        if ($("#comment-anchor").checked && !anchor)
          throw Error("No selection exists to attach.");
        await api.post(`/documents/${documentId}/comments`, {
          text,
          parentId: parentId || null,
          anchor,
        });
        await comments();
        status("Comment posted");
        break;
      }
      case "resolve-comment":
        await api.patch(
          `/documents/${documentId}/comments/${target.dataset.id}`,
          { resolved: target.dataset.resolved === "true" },
        );
        await comments();
        break;
      case "upload-canvas":
        await uploadCanvas();
        await library();
        status("Canvas saved to library");
        break;
      case "add-asset": {
        const a = await api.get(`/assets/${target.dataset.id}`);
        await editor.importImage(await api.imageData(a.id), a.name);
        dialog.close();
        toast("Cloud asset added");
        break;
      }
      case "generate":
        await runGeneration();
        break;
      case "apply-generation":
        if (result) {
          const src = await api.imageData(result.assetId);
          const r = result.placement;
          if (result.operation === "expand") {
            editor.commit("Expand canvas (mock)", () => {
              editor.state.width = result.asset.width;
              editor.state.height = result.asset.height;
              for (const layer of editor.state.layers) {
                translate(layer, 128, 128);
              }
            });
          }
          await editor.importImage(src, `Mock ${result.operation}`);
          Object.assign(editor.selected, { x: r.x, y: r.y, w: r.w, h: r.h });
          refresh();
          dialog.close();
          toast("Mock result added as a new layer");
        }
        break;
      case "ask-assistant": {
        const message = $("#assistant-message").value;
        if (!message.trim()) throw Error("Enter a message.");
        await ensureDocument();
        assistantResult = await api.post("/assistant", {
          documentId,
          revision,
          message,
        });
        $("#assistant-answer").innerHTML =
          note(assistantResult.text) +
          button(assistantResult.actions[0].label, "apply-assistant");
        status("Suggestion ready");
        break;
      }
      case "apply-assistant":
        if (assistantResult) {
          applyAdjustment(
            assistantResult.actions[0].settings,
            "Mock assistant adjustment",
          );
          dialog.close();
        }
        break;
      case "apply-preset": {
        const c = await api.get("/catalog");
        applyAdjustment(
          c.presets.find((p) => p.id === target.dataset.id).settings,
          "Cloud preset",
        );
        dialog.close();
        break;
      }
      case "create-export": {
        const format = $("#cloud-export-format").value;
        await ensureDocument();
        const a = await uploadCanvas(format);
        const exp = await api.post("/exports", {
          documentId,
          revision,
          assetId: a.id,
          format,
        });
        const link = await api.post("/download-links", {
          assetId: exp.asset.id,
        });
        $("#export-result").innerHTML =
          `<article class="cloud-card"><b>Export ready</b><a class="cloud-button" href="${esc(link.url)}" download>Download ${format.toUpperCase()}</a>${input("Temporary download URL", "export-url", new URL(link.url, location.origin).href)}${note("Expires " + new Date(link.expiresAt).toLocaleTimeString())}</article>`;
        status("Stored in mock cloud library");
        break;
      }
      case "signout":
        await api.delete("/session");
        started = false;
        signedOut = true;
        user = null;
        documentId = null;
        revision = null;
        shell(
          "Signed out",
          note("Local editing is still available.") +
            button("Start demo session", "signin"),
        );
        break;
      case "fail-next":
        api.failNext = true;
        status(
          "The next API request will return 503. Retry it afterward to recover.",
        );
        break;
    }
  }
  function applyAdjustment(settings, name) {
    editor.add("adjust", name, settings);
    refresh();
  }
  dialog.addEventListener("click", (event) => {
    const target = event.target.closest("[data-cloud]");
    if (!target) return;
    const action = target.dataset.cloud;
    if (busy && !["close", "cancel-job"].includes(action)) return;
    if (action === "versions" && target.dataset.id) {
      run(() => versions(target.dataset.id));
      return;
    }
    if (action === "close") {
      dialog.close();
      return;
    }
    run(() => handle(action, target));
  });
  dialog.addEventListener("close", () => {
    ++pollToken;
    if (jobId) {
      const closing = jobId;
      jobId = null;
      api.delete(`/jobs/${closing}`).catch(() => {});
    }
  });
  dialog.addEventListener("change", (event) => {
    if (event.target.id !== "cloud-file") return;
    const file = event.target.files[0];
    if (!file) return;
    run(async () => {
      if (file.size > 16 * 1024 * 1024) throw Error("Maximum upload is 16 MiB");
      const dataUrl = await new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result);
        r.onerror = reject;
        r.readAsDataURL(file);
      });
      const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = () => reject(Error("Invalid image"));
        i.src = dataUrl;
      });
      await api.post("/assets", {
        name: file.name,
        dataUrl,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
      await library();
      status("Image uploaded");
    });
  });
  async function openShared(token) {
    shell("Shared document", note("Loading read-only shared snapshot…"));
    await run(async () => {
      const data = await api.get(`/shares/${encodeURIComponent(token)}/open`);
      const preview = new Editor(surface(data.state.width, data.state.height));
      preview.history = [];
      await preview.restore(data.state);
      shell(
        "Shared document · read only",
        `<img class="cloud-preview" src="${preview.canvas.toDataURL()}" alt="Shared document preview"><h3>${esc(data.document.name)}</h3>${note(`Revision ${data.document.revision} · ${data.state.width} × ${data.state.height} · ${data.state.layers.length} layers`)}${note("This view cannot edit the shared cloud document. Import a separate local copy to try changes.")}${button("Import local copy", "import-shared")}`,
      );
      const b = $('[data-cloud="import-shared"]');
      b.removeAttribute("data-cloud");
      b.onclick = () =>
        run(async () => {
          await editor.restore(data.state);
          documentId = null;
          revision = null;
          refresh();
          dialog.close();
          history.replaceState(null, "", location.pathname);
          toast("Imported an independent local copy");
        });
    });
  }
  async function save(newCopy = false) {
    try {
      await session();
      await saveCloud({ newCopy });
      toast(newCopy ? "Saved a new mock cloud copy" : "Saved to mock cloud");
    } catch (error) {
      toast(error.message);
    }
  }
  async function selectSubject(apply) {
    await session();
    await ensureDocument();
    const source = await uploadCanvas();
    const result = await api.post("/selections", {
      documentId,
      sourceAssetId: source.id,
      operation: "subject",
    });
    apply(result.selection);
    toast("Mock subject selection: central rectangle (not AI detection)");
  }
  return { open, openShared, save, selectSubject };
}
