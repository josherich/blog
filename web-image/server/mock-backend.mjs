// Node HTTP adapter around the shared mock API core. Never deploy this authentication model.
import { createMockApi } from "./mock-api.js";
const MAX_BODY = 32 * 1024 * 1024;
function write(res, result) {
  res.writeHead(result.status, result.headers);
  res.end(result.base64 ? Buffer.from(result.body, "base64") : result.body);
}
export function createMockBackend(options) {
  const handle = createMockApi(options);
  return async function handleRequest(req, res) {
    const url = new URL(req.url, "http://localhost");
    if (!url.pathname.startsWith("/api/")) return false;
    let body = "";
    if (req.method !== "GET" && req.method !== "HEAD") {
      let size = 0;
      const chunks = [];
      for await (const chunk of req) {
        size += chunk.length;
        if (size > MAX_BODY) {
          write(res, {
            status: 413,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
            body: JSON.stringify({
              error: {
                code: "PAYLOAD_TOO_LARGE",
                message: "Maximum JSON body size is 32 MiB",
                requestId: `req_${crypto.randomUUID()}`,
              },
              meta: { mock: true },
            }),
          });
          return true;
        }
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks).toString();
    }
    write(
      res,
      await handle({ method: req.method, path: req.url, headers: req.headers, body }),
    );
    return true;
  };
}
