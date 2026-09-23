import { createMockApi } from "./mock-api.js";
/** All backend-dependent UI goes through this HTTP adapter.
 * When no backend is reachable (or the app is served by a static host
 * without /api), requests fall back to the same mock API running in
 * the browser, so the frontend works on its own. */
export class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
export const api = {
  // The default is deliberately same-origin; no external services receive editor data.
  base: "/api/v1",
  failNext: false,
  offline: false,
  _local: null,
  _sessionCookie: "",
  _localHandle() {
    if (!this._local) this._local = createMockApi();
    return this._local;
  },
  async _localCall(path, method, headers, body) {
    const localHeaders = { ...headers };
    if (this._sessionCookie) localHeaders.cookie = this._sessionCookie;
    const result = await this._localHandle()({
      method,
      path: this.base + path,
      headers: localHeaders,
      body: body === undefined ? "" : JSON.stringify(body),
    });
    const setCookie = result?.headers?.["Set-Cookie"];
    if (setCookie) {
      const pair = setCookie.split(";")[0];
      this._sessionCookie = pair.endsWith("=") ? "" : pair;
    }
    return result;
  },
  _unwrapLocal(result) {
    if (!result) throw new ApiError("Request failed", 404, "NOT_FOUND");
    let payload;
    try {
      payload = JSON.parse(result.body);
    } catch {
      throw new ApiError("Request failed", result.status, "BAD_RESPONSE");
    }
    if (payload.error)
      throw new ApiError(
        payload.error.message || "Request failed",
        result.status,
        payload.error.code,
      );
    return payload.data;
  },
  async _assetContent(assetId) {
    const result = await this._localCall(
      `/assets/${encodeURIComponent(assetId)}/content`,
      "GET",
      {},
      undefined,
    );
    if (!result || result.status !== 200) {
      let message = "Could not load image",
        code = "ASSET_LOAD";
      try {
        const payload = JSON.parse(result?.body || "");
        if (payload.error) {
          message = payload.error.message || message;
          code = payload.error.code || code;
        }
      } catch {
        /* non-JSON error body */
      }
      throw new ApiError(message, result?.status || 404, code);
    }
    return {
      type: result.headers["Content-Type"] || "application/octet-stream",
      base64: result.body,
    };
  },
  async _localRequest(path, method, headers, body) {
    const data = this._unwrapLocal(
      await this._localCall(path, method, headers, body),
    );
    if (
      path === "/download-links" &&
      data &&
      typeof data === "object" &&
      body?.assetId &&
      globalThis.URL?.createObjectURL
    ) {
      // The server-backed /api/v1/downloads URL does not exist offline; serve a blob instead.
      try {
        const { type, base64 } = await this._assetContent(body.assetId);
        const binary = atob(base64);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        data.url = URL.createObjectURL(new Blob([bytes], { type }));
      } catch {
        /* keep the original URL if bytes are unavailable */
      }
    }
    return data;
  },
  async request(path, { method = "GET", body, signal } = {}) {
    const headers = { "Content-Type": "application/json" };
    if (this.failNext) {
      headers["X-Mock-Failure"] = "503";
      this.failNext = false;
    }
    if (this.offline) return this._localRequest(path, method, headers, body);
    let response;
    try {
      response = await fetch(this.base + path, {
        method,
        headers,
        credentials: "same-origin",
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: signal || AbortSignal.timeout(30000),
      });
    } catch (error) {
      if (error.name === "TimeoutError")
        throw new ApiError("The service timed out. Please retry.", 0, "NETWORK");
      if (error.name === "AbortError")
        throw new ApiError("The request was cancelled.", 0, "NETWORK");
      // No backend reachable: run the mock API in the browser instead.
      this.offline = true;
      return this._localRequest(path, method, headers, body);
    }
    let payload;
    try {
      payload = await response.json();
    } catch {
      payload = null;
    }
    if (payload && typeof payload === "object") {
      if (payload.error && typeof payload.error === "object")
        throw new ApiError(
          payload.error.message || "Request failed",
          response.status,
          payload.error.code,
        );
      if ("data" in payload) return payload.data;
    }
    // Not a backend API response (e.g. a static host serving the frontend only).
    this.offline = true;
    return this._localRequest(path, method, headers, body);
  },
  get(path) {
    return this.request(path);
  },
  post(path, body) {
    return this.request(path, { method: "POST", body });
  },
  put(path, body) {
    return this.request(path, { method: "PUT", body });
  },
  patch(path, body) {
    return this.request(path, { method: "PATCH", body });
  },
  delete(path) {
    return this.request(path, { method: "DELETE" });
  },
  async imageData(assetId) {
    const path = `/assets/${encodeURIComponent(assetId)}/content`;
    if (this.offline) {
      const { type, base64 } = await this._assetContent(assetId);
      return `data:${type};base64,${base64}`;
    }
    let response;
    try {
      response = await fetch(this.base + path, {
        credentials: "same-origin",
        signal: AbortSignal.timeout(30000),
      });
    } catch (error) {
      if (error.name === "TimeoutError")
        throw new ApiError("The service timed out. Please retry.", 0, "ASSET_LOAD");
      if (error.name === "AbortError")
        throw new ApiError("Could not load image", 0, "ASSET_LOAD");
      this.offline = true;
      return this.imageData(assetId);
    }
    const type = response.headers.get("content-type") || "";
    if (response.ok && type.startsWith("image/")) {
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }
    if (type.includes("json")) {
      // Backend answered with an error envelope: surface it instead of falling back.
      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
      if (payload?.error && typeof payload.error === "object")
        throw new ApiError(
          payload.error.message || "Could not load image",
          response.status,
          payload.error.code || "ASSET_LOAD",
        );
      if (payload && typeof payload === "object" && "data" in payload)
        throw new ApiError("Could not load image", response.status, "ASSET_LOAD");
    }
    // HTML/plain response: static host without an API → offline mock fallback.
    this.offline = true;
    return this.imageData(assetId);
  },
};
