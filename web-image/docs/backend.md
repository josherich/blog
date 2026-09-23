# Backend contracts and implementation plan

This file describes the **implemented local mock API** and the **production backend to build for each feature**. These are proposed contracts for Web Image, not reverse-engineered private Adobe APIs. No Adobe credentials, API keys, email delivery, external model inference, or external storage are used.

## 1. Run and inspect the mock

```sh
cd web-image
npm run dev
npm run check
npm test
```

Default URL: `http://localhost:5173`. Use `PORT=5174 npm run dev` if that port is occupied. Restart an older running server after installing this change: it must load `server/mock-backend.mjs`.

- `server/mock-backend.mjs`: actual HTTP routes, deterministic responses, in-memory state, validation, job lifecycle, session cookies, errors.
- `src/services/api.js`: frontend HTTP adapter. All service calls use the same origin under `/api/v1`.
- `src/ui/cloud-ui.js`: backend-dependent workflows and their loading, empty, success, failure, cancellation, preview, and apply states.
- `server/server.mjs`: mounts the API before serving the frontend.
- `tests/backend.test.mjs`: automated HTTP contract and lifecycle tests.

The mock stores documents, immutable revisions, comments, invitations, assets, generated results, and download links **in process memory**. They disappear on restart. All demo sessions use the same fixture user and data set; this is not production tenant isolation. Local canvas autosave is separate and still uses browser storage. Cloud saving is explicit, except that generation, assistant, export, and initial collaboration setup save a document as a prerequisite. Quotas and plan information are fixtures, not billing enforcement.

### Feature inventory and UI entry points

| Feature                                        | UI entry point                                               | Implemented mock behavior                                                                                                       |
| ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Account, session, plan and quotas              | Avatar → Account                                             | Start/sign out of demo session; fixture user and entitlements                                                                   |
| Cloud documents                                | Main menu → Cloud documents, or cloud icon                   | Save, save copy, list, reopen; revision conflict detection                                                                      |
| Cloud versions                                 | History → Cloud version history; document Versions           | List versions; restore as a new revision                                                                                        |
| Cloud asset storage                            | Add image → Cloud image library                              | Upload image, save canvas, browse, add asset as a new layer                                                                     |
| Sharing and invitations                        | Header Share document                                        | Record a mock invitation, list members, create/revoke expiring viewer links                                                     |
| Shared viewer                                  | Generated `/?share=...` URL                                  | Render current shared snapshot read-only; optionally import an independent local copy                                           |
| Comments and replies                           | Right sidebar Comments → Open comments                       | Post, reply, resolve/reopen; optionally attach rectangle coordinates                                                            |
| Presence                                       | Share dialog                                                 | Current fixture editor and a clearly labeled simulated reviewer                                                                 |
| Generate image                                 | Generative → Generate image                                  | Queue/poll a job; preview sample SVG; apply as image layer                                                                      |
| Generative fill                                | Generative → Generative fill                                 | Requires selection; sample result placed inside selected rectangle                                                              |
| Generative expand                              | Generative → Generative expand                               | Sample output is 256 px larger in both dimensions; applying shifts original layers 128 px and expands canvas                    |
| Background removal                             | Generative or Quick actions                                  | Returns original composite clipped to an ellipse; no actual segmentation                                                        |
| Object removal                                 | Generative → Remove object                                   | Requires selection; sample artwork replaces the selected region on a new layer                                                  |
| AI markup                                      | Context toolbar → AI markup → AI markup                      | Prompt and optional rectangle sent to mock job; result preview and apply                                                        |
| AI Assistant                                   | Right sidebar → Open AI Assistant                            | Deterministic suggestion; explicit Apply creates an adjustment layer                                                            |
| Cloud/phone export                             | Download → Cloud export / phone link                         | Browser-rendered PNG/JPEG/WebP uploaded to mock; temporary download URL                                                         |
| Presets, learning, apps, installation metadata | Menu Cloud presets; lightbulb; app switcher; Get browser app | Catalog from API; presets apply adjustments, learning renders text, app switcher opens library, installation shows instructions |

Brushes, erasers, shapes, text, move/transform, manual masks/selections, crop, basic filters, local history, local image import, and direct image/JSON download remain client-side. PSD support, payment checkout, full multiplayer canvas editing, and arbitrary Adobe tools were not present as working features in this recreation and are not claimed as implemented. A QR code is a client-side encoding of the download URL, not a separate backend; this mock exposes the URL directly.

## 2. Common interface specification

### Transport and envelopes

Prefix every route below with `/api/v1`. JSON requests use `Content-Type: application/json`. Authenticated calls carry the same-origin `web_image_session` cookie. Successful JSON responses:

```json
{
  "data": { "id": "doc_...", "revision": 1 },
  "meta": { "requestId": "req_...", "mock": true }
}
```

Errors use the matching non-2xx HTTP status, never a success-shaped payload:

```json
{
  "error": {
    "code": "REVISION_CONFLICT",
    "message": "Cloud document changed. Open the latest version or save a new copy.",
    "requestId": "req_..."
  },
  "meta": { "mock": true }
}
```

| Status | Code                 | UI behavior                                                        |
| ------ | -------------------- | ------------------------------------------------------------------ |
| 400    | `BAD_JSON`           | Show malformed-request error                                       |
| 401    | `UNAUTHENTICATED`    | Offer Start demo session; keep local edits                         |
| 404    | `NOT_FOUND`          | Explain missing resource; clear obsolete cloud binding when needed |
| 405    | `METHOD_NOT_ALLOWED` | Show contract error                                                |
| 409    | `REVISION_CONFLICT`  | Never overwrite automatically; reopen latest or save a new copy    |
| 410    | `LINK_EXPIRED`       | Explain expired/revoked viewer/download link                       |
| 413    | `PAYLOAD_TOO_LARGE`  | Reject body larger than 32 MiB                                     |
| 422    | `VALIDATION`         | Keep form content and show validation message                      |
| 500    | `INTERNAL`           | Generic message, with request ID for diagnosis                     |
| 503    | `MOCK_UNAVAILABLE`   | Explicit retry; no automatic mutation replay                       |

The adapter has a 30-second request timeout. Job polling is 300 ms in the mock, up to 100 polls; production should use a slower interval or server events. `GET /assets/:id/content` and `GET /downloads/:token` return binary image bytes rather than JSON on success. Errors still use the JSON envelope. Collection responses use `{items: [...], nextCursor: null}`; the mock returns the entire collection. Production must implement cursor pagination without breaking that envelope.

IDs are opaque, prefixed UUIDs; timestamps are ISO-8601 UTC. Coordinates are in original image pixels, not CSS pixels. `revision` starts at 1 and increases monotonically. `baseRevision` is mandatory for updates and restore.

### Shared data types

```ts
type Rectangle = { x: number; y: number; w: number; h: number };
type User = { id: string; name: string; email: string; plan: string };
type DocumentMeta = {
  id: string;
  name: string;
  ownerId: string;
  revision: number;
  width: number;
  height: number;
  updatedAt: string;
};
type EditorState = {
  name: string;
  width: number;
  height: number;
  selected?: string;
  layers: Layer[]; // bottom to top
};
type Layer = {
  id: string;
  name: string;
  type: "image" | "adjust" | "rect" | "ellipse" | "text";
  x: number;
  y: number;
  w: number;
  h: number;
  visible: boolean;
  opacity: number;
  blend: string;
  src?: string; // embedded data URL for image layers in the mock
  text?: string;
  size?: number;
  font?: string;
  color?: string;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  hue?: number;
  blur?: number;
  sepia?: number;
  grayscale?: number;
};
type Asset = {
  id: string;
  name: string;
  mimeType: string;
  width: number;
  height: number;
  createdAt: string;
  contentUrl: string;
};
type Adjustment = {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  sepia: number;
  grayscale: number;
};
```

Current document validation: integer dimensions 1–8192, at most 32 million document pixels, at most 200 layers, unique string layer IDs, names 1–200 characters, finite geometry and opacity, recognized layer types, and embedded image data URLs. Upload JSON permits PNG/JPEG/WebP base64; mock-generated assets use SVG. Prompt and comment text is at most 2,000 characters. These are mock bounds, not a complete production validator. The browser upload picker also caps files at 16 MiB.

### Frontend lifecycle

Each cloud view has a visible mock banner and an `aria-live` status. Requests disable duplicate-action buttons. Server errors remain in the dialog and users can retry; failed saves must not show a success state. Generation requires explicit preview approval. Closing its dialog invalidates the polling token and attempts cancellation. A generation response cannot silently replace the canvas. The cloud ID/revision are held in memory; after page reload users reopen their cloud document to resume updating it (otherwise Save creates a new copy). Importing a shared snapshot clears this binding.

## 3. Accounts, authentication, and entitlements

### Implemented interface

| Method / path     | Request | `data` response                                                                            |
| ----------------- | ------- | ------------------------------------------------------------------------------------------ |
| `POST /session`   | `{}`    | 201 `{user, entitlements:{aiCredits:100, storageBytes:1073741824}, expiresAt}` plus cookie |
| `GET /session`    | None    | 200 same session view                                                                      |
| `DELETE /session` | None    | 200 `{signedOut:true}`, invalidate token and expire cookie                                 |

The first cloud action automatically starts the mock session; after explicit sign-out the user must click Start demo session. No password or real identity is collected. Cookie: HttpOnly, SameSite=Strict, Path=/. `expiresAt` is illustrative; the mock token lives until sign-out or process restart, not a production expiry schedule.

### Build the real backend

1. Replace `POST /session {}` with an authentication callback flow. Use an identity provider and server-validated authorization-code login. Keep `/session` GET/DELETE and its user/entitlement response stable.
2. Create `users`, `sessions`, `organizations`, `memberships`, and `entitlements` tables. Store only a hash of a high-entropy session token, expiry, user ID, and revocation time. Set Secure + HttpOnly + SameSite cookies over HTTPS.
3. Enforce expiry on every request, rotate tokens after login, and invalidate on sign-out. Apply CSRF/Origin checks to mutations and avoid wildcard credentialed CORS.
4. Read plan/credits/storage from the entitlement service. Reserve credits atomically before AI work; charge once on success, release on cancellation/failure. The frontend cannot decide whether a request is entitled.
5. Remove automatic demo login, the shared fixture user, and test-failure controls from a production bundle. Add rate limiting for auth and expensive operations.

**Acceptance:** unauthenticated calls return 401; revoked/expired sessions fail; user A cannot read or mutate user B’s data by changing a resource ID; AI credit races cannot spend the same reservation twice.

## 4. Cloud documents and versions

### Implemented interface

| Method / path                           | Request                                   | Response                                                           |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `POST /documents`                       | `{state:EditorState}`                     | 201 `DocumentMeta` at revision 1                                   |
| `GET /documents`                        | None                                      | 200 `{items:DocumentMeta[],nextCursor:null}`                       |
| `GET /documents/:id`                    | None                                      | 200 `DocumentMeta & {state:EditorState}`                           |
| `PUT /documents/:id`                    | `{baseRevision:number,state:EditorState}` | 200 updated `DocumentMeta`; stale base → 409                       |
| `GET /documents/:id/versions`           | None                                      | 200 `{items:[{revision,createdAt}],nextCursor:null}`, newest first |
| `GET /documents/:id/versions/:revision` | None                                      | 200 `{revision,createdAt,state}`                                   |
| `POST /documents/:id/restore`           | `{baseRevision:number,revision:number}`   | 200 new `DocumentMeta`; copies old snapshot into new revision      |

The current UI saves full snapshots, not patches. Repeated saves create revisions even when content is unchanged. Versions are immutable deep copies. Local undo and cloud version history are separate concepts.

### Build the real backend

1. Tables: `documents(id,owner_id,organization_id,name,current_revision,created_at,updated_at,deleted_at)`; `document_versions(document_id,revision,manifest_key,checksum,author_id,created_at)`; unique key `(document_id,revision)`.
2. Validate the entire layer discriminated union. Enforce numeric ranges, allowed blend modes, text lengths, image dimensions, asset ownership, total resource budget, and safe fonts. Reject malformed/non-finite values before rendering.
3. Store layer image bytes as immutable object-storage assets. Store a versioned JSON manifest referencing asset IDs, not base64 image duplication. Initially support the mock shape by normalizing embedded sources server-side; then version the manifest and update import/export adapters.
4. Save with a database transaction: lock the document row, compare `baseRevision`, insert version, advance the pointer, commit. Never silently apply last-writer-wins to a stale base revision.
5. Restore uses the same save transaction. Preserve historical asset references. Garbage-collect blobs only after all versions/references and retention windows are considered.
6. Implement cursor pagination and thumbnails; optionally add debounced autosave after explicit cloud association. Queue thumbnails after a committed save, not before.
7. Add an idempotency key for document creation, saves, and restore. Replayed successful requests return their original revision rather than creating another version.

**Acceptance:** parallel updates with the same base yield one success and one 409; old revisions remain byte-identical; partial storage failure cannot advance the document pointer; cross-user access fails; reload/open restores every supported layer type and pixels.

## 5. Image assets and cloud library

### Implemented interface

| Method / path             | Request                       | Response                              |
| ------------------------- | ----------------------------- | ------------------------------------- |
| `POST /assets`            | `{name,dataUrl,width,height}` | 201 `Asset`                           |
| `GET /assets`             | None                          | 200 `{items:Asset[],nextCursor:null}` |
| `GET /assets/:id`         | None                          | 200 `Asset`                           |
| `GET /assets/:id/content` | None                          | Authenticated image bytes             |

The UI can upload a local image, store the current composite, or add any returned asset as a new layer. SVG results are authored by the mock, not accepted by the ordinary upload route. The mock checks syntax/declared dimensions; it does not independently decode or scan uploads.

### Build the real backend

1. Tables: `assets(id,owner_id,organization_id,object_key,sha256,mime_type,width,height,byte_size,status,created_at)` plus document/asset reference records.
2. Decode images to verify their actual MIME, dimensions, pixel count, and file validity. Strip unwanted metadata; limit decompression and animation frames. Reject or sanitize SVG in an isolated pipeline rather than trusting XML from clients.
3. For small files retain the current POST contract. For large files add a two-step direct upload: `POST /asset-uploads {name,mimeType,byteSize,sha256}` → `{uploadId,uploadUrl,requiredHeaders,expiresAt}`, then `POST /asset-uploads/:id/complete` → `Asset`. Treat these as new production endpoints, not present in this mock.
4. Keep buckets private; return short-lived signed content URLs or authenticated streaming routes. Signed URLs must not outlive the intended access window. Provide correct CORS headers for editor-safe canvas usage if assets live on a separate origin.
5. Produce thumbnails asynchronously, store them with original asset ownership, and paginate the library by `(created_at,id)`.

**Acceptance:** forged MIME/dimensions and oversized compressed images fail; an unrelated asset ID cannot be downloaded; completed assets survive restart; upload retries deduplicate safely; rendering/download does not taint the browser canvas.

## 6. Sharing, invitations, and presence

### Implemented interface

| Method / path                 | Request               | Response                                                       |
| ----------------------------- | --------------------- | -------------------------------------------------------------- |
| `GET /documents/:id/members`  | None                  | `{items:[Member],nextCursor:null}`                             |
| `POST /documents/:id/members` | `{email,role:'viewer' | 'commenter'                                                    | 'editor'}` | 201 `{id,email,role,status:'simulated-invitation',delivery:'not-sent'}` |
| `GET /documents/:id/shares`   | None                  | `{items:[Share],nextCursor:null}`                              |
| `POST /documents/:id/shares`  | `{role:'viewer'}`     | 201 `Share`                                                    |
| `DELETE /shares/:token`       | None                  | `{revoked:true}`                                               |
| `GET /shares/:token/open`     | No login needed       | `{document:DocumentMeta,state,role:'viewer',mock:true}` or 410 |
| `GET /documents/:id/presence` | None                  | `{items:[{userId,name,status,lastSeen}],mock:true}`            |

`Share = {id,documentId,role:'viewer',revoked,expiresAt,url}`. The URL is `/?share=:id`, expires after one hour, and returns the document’s latest saved state when opened. The returned snapshot is rendered in a read-only modal; Import local copy does not grant write access or bind the local copy to the shared ID. Links work only against this local server. The simulated reviewer is not another connected user. Invitations are stored for UI demonstration and neither send messages nor implement other users’ access.

### Build the real backend

1. Tables: `document_members(document_id,user_id,role)`; `invitations(id,document_id,email,role,token_hash,expires_at,accepted_at)`; `share_links(id,document_id,token_hash,role,expires_at,revoked_at)`; `audit_events`.
2. Permission matrix: viewer = read/export; commenter = viewer + comments; editor = commenter + document/asset edits; owner = editor + sharing/access management. Check this centrally on **every** document, asset, version, job, and export route.
3. On invite, validate address/role, authorize the inviter, create a pending invite, and enqueue an email via a transactional outbox. Use a verified sender and a single-use acceptance token. Acceptance requires an authenticated matching identity. Add explicit production acceptance/revoke endpoints; the mock only records invitations.
4. Share tokens must be unguessable and stored hashed; distinguish public bearer links from authenticated member access. Revoke centrally, invalidate caches, and avoid logging raw link tokens. A revoked link should stop returning document data immediately; previously downloaded copies cannot be clawed back.
5. Presence should use authenticated WebSocket/SSE connections or heartbeat HTTP updates, keyed by document and user in a short-TTL store. Only document members may subscribe; expire users after missed heartbeats. Return real `lastSeen`; never fabricate collaborator status in production.
6. Live simultaneous edits, if added, require a separate operation protocol and merge strategy. Presence and revision conflict detection alone are not multiplayer editing.

**Acceptance:** expired/revoked links return 410; viewer tokens cannot write; invitation acceptance is single-use and bound to the intended address; revoked members lose asset and socket access; presence expires on disconnect.

## 7. Comments, replies, and anchors

### Implemented interface

| Method / path                              | Request                 | Response                            |
| ------------------------------------------ | ----------------------- | ----------------------------------- |
| `GET /documents/:id/comments`              | None                    | `{items:Comment[],nextCursor:null}` |
| `POST /documents/:id/comments`             | `{text,parentId?:string | null,anchor?:Rectangle              | null}` | 201 `Comment` |
| `PATCH /documents/:id/comments/:commentId` | `{resolved:boolean}`    | 200 `Comment`                       |

`Comment = {id,author:User,text,parentId,anchor,resolved,createdAt}`. Text is 1–2,000 characters. Reply parents must exist in the same document. The UI requires a selection before attaching an anchor. Text is escaped on rendering; HTML comments are not supported. Mock resolution is per comment, not automatically propagated to every reply.

### Build the real backend

1. `comments(id,document_id,author_id,parent_id,text,anchor_json,anchor_revision,resolved_at,resolved_by,created_at,updated_at,deleted_at)`; index `(document_id,created_at,id)`.
2. Bind anchors to a document revision and validate rectangle bounds. Decide whether anchors track geometry through crop/transform or remain attached to the original version; expose that choice to the UI.
3. Enforce commenter/editor permissions, same-document parent foreign keys, maximum thread depth, and payload limits. Keep comments as plain text or a narrowly validated rich-text schema.
4. Emit comment changes to authorized document subscribers. Notifications should be queued and deduplicated, with user preferences enforced. The mock has no notifications.
5. Add author-only edit/delete and owner moderation later with explicit routes and audit history. Preserve thread consistency when a parent is deleted.

**Acceptance:** cross-document replies are rejected; script-like text renders literally; viewer access cannot post; empty/oversized messages fail; resolution updates survive reload; stale anchors remain interpretable.

## 8. Generative and intelligent image operations

### Shared implemented interface

```http
POST /api/v1/jobs
```

```json
{
  "documentId": "doc_...",
  "baseRevision": 3,
  "sourceAssetId": "asset_...",
  "modelId": "mock-image-v1",
  "operation": "fill",
  "prompt": "Replace this region with mountains",
  "width": 1280,
  "height": 960,
  "selection": { "x": 100, "y": 100, "w": 300, "h": 200 }
}
```

202 response: `{id,status:'queued',progress:0,createdAt}`. `GET /jobs/:id` returns `{id,status,progress,createdAt,result?,error?}`. `DELETE /jobs/:id` requests cancellation and returns `{id,status}`. States: `queued → running → succeeded|failed|cancelled`. A terminal successful job stays successful if cancellation arrives afterward.

```json
{
  "id": "job_...",
  "status": "succeeded",
  "progress": 100,
  "createdAt": "2026-09-15T12:00:00.000Z",
  "result": {
    "assetId": "asset_...",
    "asset": {
      "id": "asset_...",
      "name": "Mock fill",
      "mimeType": "image/svg+xml",
      "width": 1280,
      "height": 960,
      "createdAt": "2026-09-15T12:00:01.000Z",
      "contentUrl": "/api/v1/assets/asset_.../content"
    },
    "placement": { "x": 100, "y": 100, "w": 300, "h": 200 },
    "mock": true,
    "notice": "Deterministic sample artwork; no AI inference."
  }
}
```

The frontend saves the current document and uploads the composite before queuing work. It previews the output and imports it only after Apply. Fill/removal results are scaled into the selected rectangle; other results cover the output canvas. Selection is optional at the API level but the UI requires it for fill and remove-object. Expand sends output width/height enlarged by 256; Apply shifts underlying layers by 128 in each direction before adding the result. The mock does not preserve scene content or understand prompts; except for its ellipse mask, it returns the same geometric landscape style. `[fail]` anywhere in a prompt creates a deterministic failed job.

### Shared production worker design

1. Tables: `jobs(id,owner_id,document_id,input_revision,operation,model_id,input_json,status,progress,result_asset_id,error_code,idempotency_key,created_at,started_at,completed_at,cancel_requested_at)`; `credit_reservations`; `job_attempts`.
2. Authorize access and freeze the exact source revision. Validate source asset ownership, prompt, mask dimensions, output pixel budget, model support, quota, and policy before queuing.
3. Store source/mask artifacts privately. Push a small job ID to a durable queue. A worker claims it atomically, fetches assets, invokes the chosen image-processing/model adapter, stores output, and commits status once.
4. Polling must not perform computation in production. The mock generates on GET only to keep the demo dependency-free. Production workers progress independently and survive API/server restarts.
5. Reserve credits and use idempotency keys. Provider retries must not create duplicate charges or layers. Redact prompts and image bytes from routine logs. Persist provider request IDs, latency, cost, and failure categories separately.
6. Cancellation is best-effort for an in-flight provider; stop unscheduled work, ignore late results where required, and release unspent reservations. Apply remains an explicit client edit; server completion never mutates the document silently.
7. Return a content asset plus placement/mask metadata. Client should refuse stale applies or offer applying as a separate layer if the canvas changed since the input revision.

### Per-operation backend specification

| Operation           | Required real input                                         | Worker implementation and output                                                                                                                                                                                                                                | Acceptance                                                                                                          |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `generate`          | Prompt, model, output dimensions; optional references/style | Text-to-image adapter. Normalize to editor color space and alpha conventions. Store image and reproducibility metadata (seed/model version where available).                                                                                                    | Correct dimensions/MIME; safe provider error; stable job result on repeated GET                                     |
| `fill`              | Source composite + selection mask + prompt                  | Inpainting pipeline; mask is white where edits are allowed. Resize with preserved coordinate transforms. Composite unchanged pixels outside mask. Return a transparent region layer or full image with edit mask.                                               | Pixels outside mask are unchanged; mask edges blend; placement matches original image coordinates                   |
| `expand`            | Source, target canvas bounds, original offset, prompt       | Outpainting pipeline pads source at the requested offset, generates only new regions, returns new bounds and original-layer transform. Add `canvasTransform` to the versioned result schema rather than relying on a hard-coded 128 px client shift.            | Original region is preserved; negative offsets/asymmetric expansion are correct; undo restores previous dimensions  |
| `remove-background` | Source, optional foreground hints                           | Segmentation/matting model; produce transparent RGBA or alpha mask. Preserve hair/soft edges; define premultiplied-alpha handling.                                                                                                                              | Meaningful alpha, dimensions unchanged, preview over checkerboard, no checkerboard baked into output                |
| `remove-object`     | Source + user/object mask                                   | Optional object segmentation followed by inpainting with surrounding context. Prompt optional in production when removal mode is explicit.                                                                                                                      | Removed region replaced; outside-mask pixels untouched; boundary artifacts evaluated                                |
| `markup`            | Source, user instructions, selection and/or stroke mask     | Convert user markup to a precise region/instruction representation; send to an instruction-based editing model. Persist annotation mask separately. The current UI supplies prompt + optional rectangle; freehand annotation payload is a production extension. | Markup is interpreted at original image coordinates; annotations are not burned into final artwork unless requested |

Add masks as asset references (`maskAssetId`) and reference assets as an array in a versioned schema when replacing rectangle-only mocks. Do not infer a precise mask from a bounding box for users who drew a freehand selection.

## 9. AI Assistant

### Implemented interface

`POST /assistant {documentId,revision,message}` → 200:

```json
{
  "id": "message_...",
  "text": "Mock suggestion: lift brightness slightly and add contrast. Review before applying.",
  "actions": [
    {
      "type": "adjustment",
      "label": "Apply suggested adjustment",
      "settings": {
        "brightness": 10,
        "contrast": 12,
        "saturation": 100,
        "hue": 0,
        "blur": 0,
        "sepia": 0,
        "grayscale": 0
      }
    }
  ],
  "mock": true
}
```

The current mock checks document existence and nonempty message, but does not inspect pixels, track conversation, or enforce the supplied revision. Mentions of black/white/mono return a monochrome adjustment; other requests return brightness/contrast. Apply adds an adjustment layer and supports local undo.

### Build the real backend

1. Persist `assistant_threads` and `assistant_messages`, scoped to user/document. Accept a revision and optional thumbnail asset ID; verify permissions and read only the requested revision.
2. Give the model an allowlisted structured action schema (initially adjustment settings). Treat message, image text, layer names, and document content as untrusted data, never as service instructions.
3. Validate action types, numeric ranges, and referenced IDs server-side. Return suggestions, not executable JavaScript. Do not let the model directly mutate documents, grant access, or execute network requests.
4. Extend responses with `inputRevision`, message ID, and action IDs. Client checks revision and asks for explicit Apply. Include model failures and unsupported requests as structured non-actions.
5. Add streaming only after complete-response correctness is covered; partial streamed JSON must never be applied.

**Acceptance:** prompt injection cannot invoke arbitrary operations; invalid adjustments are rejected; suggestions do not modify pixels until Apply; revision mismatch is surfaced; persisted conversations are isolated by owner/document.

## 10. Cloud export and phone download links

### Implemented interface

| Method / path           | Request                                    | Response                                             |
| ----------------------- | ------------------------------------------ | ---------------------------------------------------- |
| `POST /exports`         | `{documentId,revision,assetId,format:'png' | 'jpeg'                                               | 'webp'}` | 201 `{id,status:'succeeded',asset:Asset,documentId,revision,mock:true}` |
| `POST /download-links`  | `{assetId}`                                | 201 `{id,url,expiresAt,mock:true}`; 15-minute expiry |
| `GET /downloads/:token` | No session needed                          | Attachment image bytes or 410                        |

The browser renders and uploads the current composite using `/assets`. The mock checks that MIME matches `format` and revision matches the current document, then returns that asset; it does not render or transcode on the server. Links are reusable until expiry, not one-time. The UI displays the full URL and an actual download action. A localhost URL will not reach this computer from a phone; no fake QR code is shown.

### Build the real backend

1. For trusted server rendering accept `{documentId,revision,format,quality,scale,colorProfile}` and queue an export job using the immutable manifest. Keep the existing uploaded-asset path only for explicitly client-rendered exports. If changing POST to return 202, update the client to poll the export job before showing success.
2. Run the renderer/transcoder in an isolated worker with memory, CPU, timeout, font, and output-size limits. Define blend/filter parity, alpha flattening for JPEG, orientation, metadata stripping, and color-profile behavior.
3. Persist `exports(id,document_id,revision,requester_id,format,status,asset_id,created_at)` and `download_links(token_hash,asset_id,expires_at,revoked_at,max_downloads,download_count)`.
4. Resolve download tokens without exposing storage keys. Enforce expiry server-side, send safe Content-Disposition names and correct MIME, and keep logs free of bearer tokens. Restrict content to authorized exporter-owned assets.
5. Serve the production application over a reachable HTTPS origin. Render a QR code client-side from the HTTPS download URL for the phone workflow; the same expiry/access rules apply. Add a revoke endpoint if users need early revocation.
6. PSD export/import would need a separate supported layer-format contract and dedicated renderer/converter; it is not interchangeable with JSON project downloads and is not implemented here.

**Acceptance:** correct format magic bytes and dimensions; transparent PNG remains transparent; JPEG has an explicit background policy; links expire and cannot retrieve arbitrary assets; retries do not generate duplicate expensive exports; server/browser render parity is tested on a fixture set.

## 11. Catalog: models, presets, learning, apps, and installation

### Implemented interface

`GET /catalog` → `{mock,features,models,presets,tutorials,apps,install}`.

- `models`: `[{id,name,operations:string[]}]`; current model is `mock-image-v1`.
- `presets`: `[{id,name,settings:Adjustment}]`; warm and monochrome fixtures. The existing eight local thumbnail presets are unchanged.
- `tutorials`: `[{id,title,body}]`; trusted plain-text learning content.
- `apps`: `[{id,name,description}]`; current editor/library destinations only.
- `install`: `{name,instructions}`. Browser installation itself is performed by the browser and does not need a backend action.

### Build the real backend

1. Keep versioned catalog records in a database or CMS and cache with ETag/Cache-Control. Separate public content from user-specific feature/entitlement decisions.
2. Validate preset schemas and model operation support; the job service must recheck entitlement rather than trusting catalog visibility.
3. Return allowlisted application routes/URLs and plain text or sanitized content. Never inject arbitrary catalog HTML or installer scripts into the editor.
4. For a browser-installable app, add a manifest/icons/service-worker strategy in the frontend; catalog instructions alone do not constitute offline/PWA support. If native installers are offered later, use signed releases with platform metadata and integrity verification.

**Acceptance:** unavailable model operations cannot be queued; preset values stay in renderer-supported ranges; unknown app IDs do not navigate to arbitrary origins; learning content is safe to render.

## 12. Production assembly and rollout

### Suggested service boundaries

A single API process can initially host authentication/session, document metadata, ACL, comments, and catalogs. Put image transforms, AI inference, and export rendering in separate workers. Use a relational store for transactional metadata, private object storage for binary assets/manifests, and a durable queue plus an ephemeral presence store. These are architectural requirements, not a dependency on a particular vendor.

Suggested schema relationships:

```text
users ── sessions
  └── organizations/memberships/entitlements
  └── documents ── document_versions ── asset_references ── assets
        ├── document_members / invitations / share_links
        ├── comments (parent_id → comments)
        ├── jobs ── job_attempts / credit_reservations ── output assets
        ├── assistant_threads ── assistant_messages
        └── exports ── assets ── download_links
```

### Implementation order

1. Extract a versioned JSON/OpenAPI schema from the contracts above. Add full schema validation and standardized errors. Keep mock and production contract tests reusable.
2. Implement authentication and object-level authorization first. Replace the shared demo session before any deployment.
3. Implement durable assets, document transactions, and immutable versions. Migrate inline image sources to referenced assets behind an adapter.
4. Implement members, invitations, links, comments, and presence with an outbox/event delivery mechanism.
5. Implement job infrastructure with a deterministic worker fixture first; then add the real provider adapters one operation at a time.
6. Implement structured assistant suggestions and server rendering/export workers. Add reachable, expiring download URLs and optional frontend QR rendering.
7. Replace catalog fixtures with versioned content. Add quotas, idempotency, monitoring, backup/restore, and retention jobs.
8. Change `src/services/api.js` only at the adapter boundary where needed. Do not expose provider secrets to the frontend. Remove `mock:true` labels only when the corresponding service is real. Remove the `X-Mock-Failure` hook and demo login in production.

### Required production tests

- Contract tests for every route, envelope, validation, pagination, and documented status.
- Authorization matrix tests for owner/editor/commenter/viewer/outsider across documents **and nested assets, jobs, versions, comments, exports**.
- Save race, duplicate-request replay, queue redelivery, worker crash, cancellation/result race, and expired link tests.
- Image fixture tests: dimensions, alpha, masks, cropping/placement, color space, invalid uploads, huge decompression, and transform round-trips.
- Browser tests for loading/empty/error/retry, session expiry mid-edit, stale revisions, apply/undo, upload/download, readonly sharing, and local-data survival when cloud fails.
- Restore drills for database/object-store backups and reconciliation of orphan assets and incomplete jobs.

### Current verification and known mock limits

`npm test` exercises session protection/sign-out, saves/conflicts/restore/immutable snapshots, comments/replies/resolution, mock invitation delivery status, link revocation, all six image job operations, failure and cancellation, assistant output, format validation/export/download, catalog, validation, and forced 503 responses. `npm run check` parses every application/service module.

Browser checks also verified mock session setup, invitation records marked “not sent,” share-link creation, generation preview and explicit layer application with undo, comment posting and resolution, cloud export URL creation, and recovery after a simulated 503 response.

For manual failure testing: Account → Fail next API request, then open Cloud documents; retry to recover. For generation failure: include `[fail]` in the prompt. Close/cancel a queued job to test cancellation. Restart the server to test missing cloud records while local edits remain intact.

The mock is intentionally not a production security boundary: it has one shared user, no durable persistence, simplified validation, no storage/credit accounting, no real collaborators, no email delivery, no provider inference, no asynchronous worker process, and no cross-device hosting. Treat all production instructions above as required work before deployment.

## Size & position: geometry persistence and rendering

Move, alignment/distribution, transform and crop run locally and require no new HTTP endpoint. Their committed state uses the existing document revision API; mock saves and restores preserve these additional JSON fields. Cancel discards the preview and Done produces one undoable edit.

### Additional document fields

- `layers[].quad`: optional array of exactly four `{x:number,y:number}` points in document pixels. Order is source top-left, top-right, bottom-right, bottom-left, retained after flips. This is authoritative for transformed placement.
- `layers[].sourceWidth`, `sourceHeight`: positive original rasterization dimensions. Preserve them through repeated transformations; do not rasterize from the transformed bounding box.
- `layers[].x/y/w/h`: axis-aligned bounds of `quad`, or ordinary rectangle geometry when no quad exists.
- `layers[].groupId`: optional string associating layers for Group auto-selection. Current grouping is flat.
- `selectedIds`: optional layer IDs for multi-selection (editor state, not authorization).
- `resolution`: optional positive pixels-per-inch value; physical crop units default to 72 PPI when absent.

### Production backend implementation

Extend document schema validation to accept only four finite, convex, nondegenerate quad points and bounded positive source dimensions. Permit either winding direction for flips. Apply document coordinate and decoded-pixel limits before rendering. Recompute bounds server-side; reject inconsistent geometry or normalize it explicitly. Preserve geometry, grouping and resolution in every immutable revision and restore response. Use existing revision conflict checks for concurrent edits.

For server exports, rasterize each source layer at its source dimensions, apply the homography mapping its source rectangle to `quad`, then composite opacity/blend and adjustments in layer order. Use inverse mapping with interpolation in the production renderer. Crop sets document dimensions and translates all layer geometry; clip at the final document bounds while retaining off-canvas content in saved revisions. Do not stretch the complete document to implement a crop. The client currently approximates perspective with a triangle mesh; production exports should use a full projective renderer.

Required integration fixtures: rotated text/vector/image layers, mirrored quads, perspective corners, crop followed by restore, mixed transformed/untransformed layers, source dimensions surviving multiple edits, invalid/self-crossing quads, and save conflicts. Compare preview and export geometry at multiple zoom levels. Move preferences (auto-select, alignment target, bounds visibility) remain local preferences; optionally persist them through a separate authenticated user-preferences endpoint.

## Main menu additions

The complete inspected top-level menu and its immediate submenus are in `src/ui/main-menu.js`. Local document, clipboard, geometry, selection, filter, and view commands do not require a server. Cloud commands reuse the endpoints above:

| Menu command | Interface |
| --- | --- |
| Save to the cloud | Create document on first save, then PUT with `baseRevision` |
| Save as → Mock cloud copy | POST a new document snapshot |
| Invite people | Existing members/invitations API; mock records never send email |
| Version history | Existing revision list and restore API |
| Back to home → Cloud documents | Existing document list/open API |
| Layer → Harmonize | Existing job API with `operation: "harmonize"`; preview and explicit apply |
| Select → Subject | New selection interface below |

### POST `/api/v1/selections`

Requires the same session cookie and document/source asset access checks as image jobs.

Request: `{ "documentId": "doc_…", "sourceAssetId": "asset_…", "operation": "subject" }`.

Response envelope: `{ "data": { "mock": true, "operation": "subject", "selection": { "x": 20, "y": 15, "w": 60, "h": 70 } } }` for a 100×100 source. The mock returns the central 60% width × 70% height rectangle; it does not detect subjects. Invalid operations return 422; inaccessible/missing resources return 404 or the standard authorization error. No source image leaves localhost.

Production implementation: authorize both resources, decode the bounded image in a worker, run a segmentation model, and return a versioned alpha-mask asset plus its pixel coordinate space and bounding rectangle. Use the job queue contract for expensive inference (202 + job ID, cancellation and progress); adapt the client to the mask result rather than silently approximating it as a rectangle. Include document revision and source checksum to reject stale results. Test empty images, multiple subjects, transparent backgrounds, EXIF orientation, model timeout, cancellation and unauthorized assets.

### Harmonize job

The mock accepts `operation: "harmonize"` with the standard source asset, document revision, prompt and dimensions. It returns labeled fixture artwork using the existing preview/apply flow, not a color-matched image. Production needs separate foreground and background asset IDs, foreground mask, placement transform, model/version, and optional strength. Validate ownership and aligned color spaces, run relighting/color-matching inference in the image worker, preserve foreground alpha, and return a new result asset without overwriting the original. Charge credits only once per successful idempotent job. Test transparent edges, clipped foregrounds, retries, and preview/apply/undo.

### Additional persisted fields and local preferences

Document `guides` is an optional array of `{axis:"vertical"|"horizontal",position:number}` in document pixels. Layer `shadow` is optional `{color:string,blur:number,x:number,y:number}`; production validation must restrict colors, finite coordinates, and blur radius. Export rendering must apply the shadow before transformed layer compositing. Guides are editor metadata and are excluded from exports.

Theme, toolbar labels/size, grid spacing, thumbnail size/bounds, snapping and ruler visibility are browser-local preferences. A future authenticated preferences API can store these independently from document revisions. Clipboard images stay in memory and never use the system clipboard. Selection masks/runs are transient editor state. RGB/8-bit sRGB is the current supported document mode.
