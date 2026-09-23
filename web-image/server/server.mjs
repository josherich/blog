import http from "node:http";
import { createMockBackend } from "./mock-backend.mjs";
const mockApi = createMockBackend();
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".json": "application/json",
};
http
  .createServer(async (req, res) => {
    if (await mockApi(req, res)) return;
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      const file = path.resolve(
        root,
        "." + (pathname === "/" ? "/index.html" : pathname),
      );
      if (!file.startsWith(root)) throw Error();
      const data = await readFile(file);
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(Number(process.env.PORT) || 5173, "127.0.0.1", () =>
    console.log("Image editor: http://localhost:" + (process.env.PORT || 5173)),
  );
