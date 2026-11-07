(function () {
  "use strict";

  var OWNER = "josherich";
  var REPO_NAME = "blog";
  var REPO = OWNER + "/" + REPO_NAME;
  var BRANCH = "gh-pages";
  var API_ROOT = "https://api.github.com";
  var RAW_ROOT = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";
  var DATA_PATH = "photos/data.json";
  var MEDIA_DIR = "photos/media/";
  var DATA_BRANCH_URL = RAW_ROOT + DATA_PATH;

  var TOKEN_KEY = "josherich.photos.token";
  var LIKES_KEY = "josherich.photos.likes";
  var PENDING_KEY = "josherich.photos.pending";
  var DELETED_KEY = "josherich.photos.deleted";

  var USERNAME = "josherich";
  var MAX_BYTES = 95 * 1024 * 1024;
  var MAX_CAPTION = 2200;

  var ALLOWED_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/avif",
    "image/heic",
    "image/heif",
  ]);
  var ALLOWED_EXT = new Set(["jpg", "jpeg", "png", "webp", "gif", "avif", "heic", "heif"]);
  var MIME_EXT = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/avif": "avif",
    "image/heic": "heic",
    "image/heif": "heif",
  };

  var els = {};
  var toastTimer = null;
  var lastLoadedAt = 0;
  var initialHashHandled = false;

  var state = {
    posts: [],
    view: "feed",
    liked: readLikes(),
    pending: readJSON(PENDING_KEY, []),
    deleted: readDeleted(),
    localPreviews: Object.create(null),
    selectedFile: null,
    previewUrl: null,
    uploading: false,
    loading: false,
    activePostId: null,
    lastFocus: null,
  };

  state.pending = Array.isArray(state.pending) ? state.pending.filter(isUsablePost) : [];

  /* ------------------------------------------------------------------ */
  /* Storage                                                            */
  /* ------------------------------------------------------------------ */

  function readJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      /* Storage can be full or disabled; the page still works in-memory. */
    }
  }

  function readLikes() {
    var value = readJSON(LIKES_KEY, []);
    return new Set(
      Array.isArray(value)
        ? value.filter(function (id) {
            return typeof id === "string";
          })
        : []
    );
  }

  function readDeleted() {
    var value = readJSON(DELETED_KEY, {});
    var result = {};
    var cutoff = Date.now() - 24 * 60 * 60 * 1000;
    if (value && typeof value === "object") {
      Object.keys(value).forEach(function (id) {
        var timestamp = Number(value[id]);
        if (id && isFinite(timestamp) && timestamp > cutoff) result[id] = timestamp;
      });
    }
    return result;
  }

  function getToken() {
    try {
      return (localStorage.getItem(TOKEN_KEY) || "").trim();
    } catch (err) {
      return "";
    }
  }

  function setToken(token) {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token);
      else localStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      /* ignore */
    }
  }

  /* ------------------------------------------------------------------ */
  /* Small helpers                                                      */
  /* ------------------------------------------------------------------ */

  function $(selector) {
    return document.querySelector(selector);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name, className) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className || "icon");
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }

  function extOf(name) {
    var match = /\.([a-z0-9]+)$/i.exec(name || "");
    return match ? match[1].toLowerCase() : "";
  }

  function encodePath(path) {
    return String(path)
      .split("/")
      .map(function (part) {
        return encodeURIComponent(part);
      })
      .join("/");
  }

  function isUsablePost(post) {
    return (
      post &&
      typeof post.id === "string" &&
      typeof post.path === "string" &&
      post.path.indexOf(MEDIA_DIR) === 0 &&
      typeof post.createdAt === "string" &&
      !isNaN(Date.parse(post.createdAt))
    );
  }

  function normalizePost(post) {
    return {
      id: post.id,
      path: post.path.replace(/^\/+/, ""),
      caption: typeof post.caption === "string" ? post.caption.slice(0, MAX_CAPTION) : "",
      createdAt: new Date(post.createdAt).toISOString(),
      width: Number(post.width) || null,
      height: Number(post.height) || null,
      size: Number(post.size) || null,
      mime: typeof post.mime === "string" ? post.mime : "",
    };
  }

  function normalizePosts(data) {
    var raw = Array.isArray(data) ? data : data && Array.isArray(data.posts) ? data.posts : [];
    return raw.filter(isUsablePost).map(normalizePost);
  }

  function byNewest(a, b) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }

  function dedupePosts(posts) {
    var seen = new Set();
    return posts.filter(function (post) {
      if (!post || seen.has(post.id)) return false;
      seen.add(post.id);
      return true;
    });
  }

  function relativeTime(iso) {
    var then = new Date(iso).getTime();
    if (isNaN(then)) return "";
    var diff = Date.now() - then;
    if (diff < 0) diff = 0;
    var minute = 60 * 1000;
    var hour = 60 * minute;
    var day = 24 * hour;
    var week = 7 * day;
    if (diff < minute) return "just now";
    if (diff < hour) return Math.round(diff / minute) + "m";
    if (diff < day) return Math.round(diff / hour) + "h";
    if (diff < week) return Math.round(diff / day) + "d";
    if (diff < 5 * week) return Math.round(diff / week) + "w";
    var date = new Date(iso);
    var now = new Date();
    var options = { month: "short", day: "numeric" };
    if (date.getFullYear() !== now.getFullYear()) options.year = "numeric";
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }

  function fullDate(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    } catch (err) {
      return date.toString();
    }
  }

  function formatBytes(bytes) {
    if (!bytes || bytes < 0) return "";
    var units = ["B", "KB", "MB", "GB"];
    var i = 0;
    var n = bytes;
    while (n >= 1024 && i < units.length - 1) {
      n = n / 1024;
      i += 1;
    }
    return (i === 0 ? Math.round(n) : n.toFixed(n >= 10 ? 0 : 1)) + " " + units[i];
  }

  function pagesImageURL(post) {
    var relative = post.path.indexOf("photos/") === 0 ? post.path.slice("photos/".length) : post.path;
    return new URL(relative, location.href).href;
  }

  function rawImageURL(post) {
    return RAW_ROOT + encodePath(post.path);
  }

  function imageURL(post) {
    return state.localPreviews[post.id] || pagesImageURL(post);
  }

  function permalink(post) {
    return location.origin + location.pathname + "#post-" + encodeURIComponent(post.id);
  }

  function isAllowedImage(file) {
    var type = (file.type || "").toLowerCase();
    var ext = extOf(file.name);
    return ALLOWED_TYPES.has(type) || ALLOWED_EXT.has(ext);
  }

  function extensionFor(file) {
    var ext = extOf(file.name);
    if (ALLOWED_EXT.has(ext)) return ext === "jpeg" ? "jpg" : ext;
    return MIME_EXT[(file.type || "").toLowerCase()] || "jpg";
  }

  /* ------------------------------------------------------------------ */
  /* GitHub API                                                         */
  /* ------------------------------------------------------------------ */

  function gh(path, options) {
    options = options || {};
    var token = options.token !== undefined ? options.token : getToken();
    var headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (token) headers.Authorization = "Bearer " + token;

    var init = {
      method: options.method || "GET",
      headers: headers,
    };

    if (options.body !== undefined) {
      init.body = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
      headers["Content-Type"] = "application/json";
    }

    return fetch(API_ROOT + "/repos/" + REPO + path, init)
      .catch(function () {
        throw new Error("Network error. Check your connection and try again.");
      })
      .then(function (res) {
        if (!res.ok) {
          return res
            .json()
            .catch(function () {
              return null;
            })
            .then(function (detail) {
              var error = new Error((detail && detail.message) || res.status + " " + res.statusText);
              error.status = res.status;
              error.detail = detail;
              throw error;
            });
        }
        if (res.status === 204) return null;
        return res.json();
      });
  }

  function verifyToken(token) {
    return gh("", { token: token }).then(function (repo) {
      if (repo.permissions && repo.permissions.push !== true) {
        var error = new Error("Token can read this repository but cannot write. Set Contents to “Read and write”.");
        error.status = 403;
        throw error;
      }
      return repo;
    });
  }

  function readDataAtRev(rev, token) {
    return gh("/contents/" + encodePath(DATA_PATH) + "?ref=" + encodeURIComponent(rev), { token: token })
      .then(function (file) {
        if (!file || !file.content) return { version: 1, posts: [] };
        var parsed;
        try {
          parsed = JSON.parse(decodeUtf8Base64(file.content));
        } catch (err) {
          throw new Error("photos/data.json is not valid JSON. Fix it in the repository before adding photos.");
        }
        return {
          version: 1,
          posts: parsed && Array.isArray(parsed.posts) ? parsed.posts : [],
        };
      })
      .catch(function (error) {
        if (error.status === 404) return { version: 1, posts: [] };
        throw error;
      });
  }

  function fileExistsAtRev(path, rev, token) {
    return gh("/contents/" + encodePath(path) + "?ref=" + encodeURIComponent(rev), { token: token })
      .then(function () {
        return true;
      })
      .catch(function (error) {
        if (error.status === 404) return false;
        throw error;
      });
  }

  function commitChanges(options) {
    var token = getToken();
    if (!token) return Promise.reject(new Error("NO_TOKEN"));

    var attempts = 3;

    function attempt() {
      return gh("/git/ref/heads/" + BRANCH, { token: token }).then(function (ref) {
        var parentSha = ref.object.sha;
        return gh("/git/commits/" + parentSha, { token: token }).then(function (parentCommit) {
          var baseTree = parentCommit.tree.sha;

          return readDataAtRev(parentSha, token).then(function (current) {
            var posts = (current.posts || []).filter(function (post) {
              return post && post.id !== options.removeId;
            });

            if (options.newPost) {
              posts = posts.filter(function (post) {
                return post && post.id !== options.newPost.id;
              });
              posts.unshift(options.newPost);
            }

            posts.sort(byNewest);

            var nextData = {
              version: 1,
              updatedAt: new Date().toISOString(),
              posts: posts,
            };

            var tree = [];

            var imagePromise = options.image
              ? gh("/git/blobs", {
                  token: token,
                  method: "POST",
                  body: { content: options.image.base64, encoding: "base64" },
                }).then(function (blob) {
                  tree.push({
                    path: options.image.path,
                    mode: "100644",
                    type: "blob",
                    sha: blob.sha,
                  });
                })
              : Promise.resolve();

            return imagePromise
              .then(function () {
                if (!options.removePath) return false;
                return fileExistsAtRev(options.removePath, parentSha, token).then(function (exists) {
                  if (exists) {
                    tree.push({
                      path: options.removePath,
                      mode: "100644",
                      type: "blob",
                      sha: null,
                    });
                  }
                  return true;
                });
              })
              .then(function () {
                return gh("/git/blobs", {
                  token: token,
                  method: "POST",
                  body: {
                    content: encodeUtf8Base64(JSON.stringify(nextData, null, 2) + "\n"),
                    encoding: "base64",
                  },
                });
              })
              .then(function (dataBlob) {
                tree.push({
                  path: DATA_PATH,
                  mode: "100644",
                  type: "blob",
                  sha: dataBlob.sha,
                });

                return gh("/git/trees", {
                  token: token,
                  method: "POST",
                  body: { base_tree: baseTree, tree: tree },
                });
              })
              .then(function (newTree) {
                return gh("/git/commits", {
                  token: token,
                  method: "POST",
                  body: {
                    message: options.message,
                    tree: newTree.sha,
                    parents: [parentSha],
                  },
                });
              })
              .then(function (commit) {
                return gh("/git/refs/heads/" + BRANCH, {
                  token: token,
                  method: "PATCH",
                  body: { sha: commit.sha, force: false },
                });
              })
              .then(function () {
                return nextData;
              })
              .catch(function (error) {
                if (error.status === 422 && attempts > 1) {
                  attempts -= 1;
                  return attempt();
                }
                throw error;
              });
          });
        });
      });
    }

    return attempt();
  }

  function friendlyError(error) {
    if (!error) return "Something went wrong.";
    if (error.message === "NO_TOKEN") return "Add a GitHub token in Settings before doing that.";
    if (/rate limit/i.test(error.message || "")) {
      return "GitHub API rate limit reached. Wait a few minutes and try again.";
    }
    switch (error.status) {
      case 401:
        return "GitHub rejected the token (401). It may be expired, revoked, or mistyped. Update it in Settings.";
      case 403:
        return "GitHub refused the request (403). Check that the token has Contents: Read and write for josherich/blog.";
      case 404:
        return "GitHub could not find the repository or file (404). Check the token's repository access.";
      case 422:
        if (/rule violations|protected branch|pull request/i.test(error.message || "")) {
          return "GitHub blocked the commit on gh-pages because of a branch rule. Allow your account to bypass the gh-pages ruleset, or push through a pull request.";
        }
        return "GitHub could not apply the change (422). " + (error.message || "");
      default:
        return error.message || "Something went wrong. Try again.";
    }
  }

  /* ------------------------------------------------------------------ */
  /* Encoding                                                           */
  /* ------------------------------------------------------------------ */

  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        var result = String(reader.result || "");
        var comma = result.indexOf(",");
        if (comma < 0) {
          reject(new Error("Could not read the photo."));
          return;
        }
        resolve(result.slice(comma + 1));
      };
      reader.onerror = function () {
        reject(new Error("Could not read the photo."));
      };
      reader.readAsDataURL(file);
    });
  }

  function encodeUtf8Base64(text) {
    var bytes = new TextEncoder().encode(text);
    var binary = "";
    var chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function decodeUtf8Base64(base64) {
    var clean = String(base64).replace(/\s/g, "");
    var binary = atob(clean);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  /* ------------------------------------------------------------------ */
  /* Image handling                                                     */
  /* ------------------------------------------------------------------ */

  function loadImageWithFallback(image, sources, onFail) {
    var index = 0;
    var retry = 0;
    var done = false;

    function attempt() {
      if (done) return;
      if (index >= sources.length) {
        done = true;
        onFail();
        return;
      }
      var source = sources[index];
      if (retry && /^https?:/i.test(source)) {
        source += (source.indexOf("?") === -1 ? "?" : "&") + "r=" + retry;
      }
      image.src = source;
    }

    image.addEventListener("error", function () {
      if (done) return;
      if (retry < 1) {
        retry += 1;
        window.setTimeout(attempt, 600);
        return;
      }
      retry = 0;
      index += 1;
      window.setTimeout(attempt, 250);
    });

    attempt();
  }

  function imageDimensions(file) {
    return new Promise(function (resolve) {
      var url = URL.createObjectURL(file);
      var image = new Image();
      image.onload = function () {
        resolve({
          width: image.naturalWidth || null,
          height: image.naturalHeight || null,
        });
        URL.revokeObjectURL(url);
      };
      image.onerror = function () {
        resolve({ width: null, height: null });
        URL.revokeObjectURL(url);
      };
      image.src = url;
    });
  }

  function ensureWebFriendly(file) {
    var type = (file.type || "").toLowerCase();
    var ext = extOf(file.name);
    var isHeic = type.indexOf("heic") !== -1 || type.indexOf("heif") !== -1 || ext === "heic" || ext === "heif";
    if (!isHeic) return Promise.resolve(file);

    if (!window.createImageBitmap) {
      return Promise.reject(
        new Error(
          "This browser cannot convert HEIC photos. On iPhone, use Settings → Camera → Formats → Most Compatible, or export the photo as JPEG."
        )
      );
    }

    return createImageBitmap(file)
      .then(function (bitmap) {
        var canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        var context = canvas.getContext("2d");
        context.drawImage(bitmap, 0, 0);
        if (bitmap.close) bitmap.close();

        return new Promise(function (resolve, reject) {
          canvas.toBlob(
            function (blob) {
              if (!blob) {
                reject(
                  new Error(
                    "Could not convert this HEIC photo. On iPhone, use Settings → Camera → Formats → Most Compatible, or export it as JPEG."
                  )
                );
                return;
              }
              resolve(
                new File([blob], file.name.replace(/\.(heic|heif)$/i, ".jpg"), {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                })
              );
            },
            "image/jpeg",
            0.92
          );
        });
      })
      .catch(function () {
        throw new Error(
          "Could not convert this HEIC photo in the browser. On iPhone, use Settings → Camera → Formats → Most Compatible, or export it as JPEG."
        );
      });
  }

  /* ------------------------------------------------------------------ */
  /* Rendering                                                          */
  /* ------------------------------------------------------------------ */

  function renderSkeletons() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 2; i += 1) {
      var post = el("div", "skeleton-post");
      var head = el("div", "skeleton-head");
      head.appendChild(el("div", "sk sk-avatar"));
      head.appendChild(el("div", "sk sk-line"));
      post.appendChild(head);
      post.appendChild(el("div", "sk sk-media"));
      post.appendChild(el("div", "sk sk-text"));
      fragment.appendChild(post);
    }
    els.feed.replaceChildren(fragment);
  }

  function renderEmpty() {
    var wrapper = el("div", "empty");
    var circle = el("div", "empty-icon");
    circle.appendChild(icon("camera"));
    wrapper.appendChild(circle);
    wrapper.appendChild(el("h2", "", "No photos yet"));
    wrapper.appendChild(el("p", "", "Share the first moment from your phone. No filters, no edits."));
    var button = el("button", "btn primary", "Add a photo");
    button.type = "button";
    button.addEventListener("click", openAdd);
    wrapper.appendChild(button);
    els.feed.replaceChildren(wrapper);
  }

  function renderLoadError(error) {
    var wrapper = el("div", "error-box");
    wrapper.appendChild(icon("image", "icon"));
    wrapper.appendChild(el("h2", "", "Could not load photos"));
    wrapper.appendChild(
      el(
        "p",
        "",
        "The timeline could not be fetched. Check the connection or make sure photos/data.json exists in the repository."
      )
    );
    var retry = el("button", "btn primary", "Try again");
    retry.type = "button";
    retry.addEventListener("click", function () {
      loadPosts({ initial: true, notify: false });
    });
    wrapper.appendChild(retry);
    els.feed.replaceChildren(wrapper);
    if (error) console.warn("Photos load failed:", error);
  }

  function renderFeed() {
    if (!state.posts.length) {
      renderEmpty();
      return;
    }

    var fragment = document.createDocumentFragment();
    state.posts.forEach(function (post, index) {
      fragment.appendChild(renderPost(post, index));
    });
    els.feed.replaceChildren(fragment);
  }

  function renderPost(post, index) {
    var article = el("article", "post");
    article.id = "post-" + post.id;
    article.dataset.postId = post.id;

    var head = el("header", "post-head");
    var avatar = el("div", "avatar", "J");
    avatar.setAttribute("aria-hidden", "true");
    head.appendChild(avatar);

    var user = el("div", "post-user");
    user.appendChild(el("span", "name", USERNAME));
    user.appendChild(el("span", "sub", "josherich.me"));
    head.appendChild(user);

    if (getToken()) {
      var more = el("button", "post-more");
      more.type = "button";
      more.setAttribute("aria-label", "Photo actions");
      more.appendChild(icon("more"));
      more.addEventListener("click", function () {
        openActions(post);
      });
      head.appendChild(more);
    }

    article.appendChild(head);

    var media = el("div", "post-media");
    var image = new Image();
    image.alt = post.caption ? "Photo: " + post.caption : "Photo";
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";
    if (post.width && post.height) {
      image.style.aspectRatio = post.width + " / " + post.height;
    }
    var sources = [];
    if (state.localPreviews[post.id]) sources.push(state.localPreviews[post.id]);
    sources.push(pagesImageURL(post));
    sources.push(rawImageURL(post));

    loadImageWithFallback(image, sources, function () {
      var fallback = el("div", "media-fallback");
      fallback.appendChild(icon("image", "icon"));
      var text = el("span", "", "This image cannot be shown in this browser.");
      fallback.appendChild(text);
      var link = el("a", "", "Open original");
      link.href = pagesImageURL(post);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      fallback.appendChild(link);
      media.replaceChildren(fallback);
    });
    media.appendChild(image);
    media.addEventListener("dblclick", function () {
      doubleTapLike(post.id, media);
    });
    article.appendChild(media);

    var actions = el("div", "post-actions");
    var likeButton = el("button", "action-btn like-btn");
    likeButton.type = "button";
    likeButton.appendChild(icon("heart"));
    likeButton.addEventListener("click", function () {
      toggleLike(post.id);
    });
    actions.appendChild(likeButton);

    var shareButton = el("button", "action-btn");
    shareButton.type = "button";
    shareButton.setAttribute("aria-label", "Share photo");
    shareButton.appendChild(icon("share"));
    shareButton.addEventListener("click", function () {
      sharePost(post);
    });
    actions.appendChild(shareButton);
    article.appendChild(actions);

    var likes = el("div", "post-likes");
    var likesText = el("span", "likes-text");
    likes.appendChild(likesText);
    article.appendChild(likes);

    if (post.caption) {
      var caption = el("div", "post-caption");
      caption.appendChild(el("span", "name", USERNAME));
      caption.appendChild(document.createTextNode(post.caption));
      article.appendChild(caption);
    }

    var time = el("time", "post-time");
    time.dateTime = post.createdAt;
    time.title = fullDate(post.createdAt);
    time.dataset.iso = post.createdAt;
    time.textContent = relativeTime(post.createdAt);
    article.appendChild(time);

    updateLikeUIElement(article, post.id);
    return article;
  }

  function updateLikeUIElement(article, id) {
    var liked = state.liked.has(id);
    var button = article.querySelector(".like-btn");
    if (button) {
      button.classList.toggle("liked", liked);
      button.setAttribute("aria-pressed", String(liked));
      button.setAttribute("aria-label", liked ? "Unlike photo" : "Like photo");
      var use = button.querySelector("use");
      if (use) use.setAttribute("href", liked ? "#i-heart-fill" : "#i-heart");
    }
    var likesText = article.querySelector(".likes-text");
    if (likesText) likesText.textContent = liked ? "Liked by you" : "No likes yet";
  }

  function updateLikeUI(id) {
    var article = document.getElementById("post-" + id);
    if (article) updateLikeUIElement(article, id);
  }

  function renderGrid() {
    els.grid.replaceChildren();

    var profile = el("div", "grid-profile");
    var avatar = el("div", "avatar", "J");
    avatar.setAttribute("aria-hidden", "true");
    profile.appendChild(avatar);

    var meta = el("div");
    meta.appendChild(el("h2", "", USERNAME));
    var count = state.posts.length;
    meta.appendChild(el("p", "", count + (count === 1 ? " photo" : " photos")));
    profile.appendChild(meta);
    els.grid.appendChild(profile);

    if (!state.posts.length) {
      els.grid.appendChild(el("div", "grid-empty", "No photos yet."));
      return;
    }

    var grid = el("div", "photo-grid");
    state.posts.forEach(function (post) {
      var tile = el("button", "grid-tile");
      tile.type = "button";
      tile.setAttribute("aria-label", post.caption ? "Open photo: " + post.caption : "Open photo");
      var image = new Image();
      image.alt = post.caption ? "Photo: " + post.caption : "Photo";
      image.loading = "lazy";
      image.decoding = "async";
      var gridSources = [];
      if (state.localPreviews[post.id]) gridSources.push(state.localPreviews[post.id]);
      gridSources.push(pagesImageURL(post));
      gridSources.push(rawImageURL(post));
      loadImageWithFallback(image, gridSources, function () {
        image.remove();
        tile.appendChild(el("span", "grid-fallback", "—"));
      });
      tile.appendChild(image);
      tile.addEventListener("click", function () {
        openPostInFeed(post.id);
      });
      grid.appendChild(tile);
    });
    els.grid.appendChild(grid);
  }

  function openPostInFeed(id) {
    setView("feed");
    requestAnimationFrame(function () {
      var article = document.getElementById("post-" + id);
      if (article) article.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderAll() {
    renderFeed();
    if (state.view === "grid") renderGrid();
    updateTimes();
  }

  function updateTimes() {
    var times = document.querySelectorAll("time[data-iso]");
    times.forEach(function (time) {
      time.textContent = relativeTime(time.dataset.iso);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Likes / sharing                                                    */
  /* ------------------------------------------------------------------ */

  function doubleTapLike(id, media) {
    if (!state.liked.has(id)) {
      state.liked.add(id);
      writeJSON(LIKES_KEY, Array.from(state.liked));
      updateLikeUI(id);
    }
    showHeartBurst(media);
  }

  function toggleLike(id) {
    if (state.liked.has(id)) state.liked.delete(id);
    else state.liked.add(id);
    writeJSON(LIKES_KEY, Array.from(state.liked));
    updateLikeUI(id);
  }

  function showHeartBurst(media) {
    var burst = el("div", "heart-burst");
    burst.appendChild(icon("heart-fill"));
    media.appendChild(burst);
    window.setTimeout(function () {
      burst.remove();
    }, 1000);
  }

  function sharePost(post) {
    var data = {
      title: "Photos — Josherich",
      text: post.caption || "A photo",
      url: permalink(post),
    };

    if (navigator.share) {
      navigator.share(data).catch(function (error) {
        if (error && error.name === "AbortError") return;
        copyText(data.url).then(function () {
          showToast("Link copied");
        });
      });
      return;
    }

    copyText(data.url).then(function () {
      showToast("Link copied");
    });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        return fallbackCopy(text);
      });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      /* ignore */
    }
    textarea.remove();
  }

  /* ------------------------------------------------------------------ */
  /* Data loading                                                       */
  /* ------------------------------------------------------------------ */

  function fetchJSON(url) {
    return fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    }).then(function (res) {
      if (!res.ok) {
        var error = new Error("HTTP " + res.status);
        error.status = res.status;
        throw error;
      }
      return res.json();
    });
  }

  function loadPosts(options) {
    options = options || {};
    if (state.loading) return Promise.resolve();

    state.loading = true;
    els.refreshBtn.classList.add("spinning");

    if (options.initial && !state.posts.length) renderSkeletons();

    var dataPromise = fetchJSON("data.json?t=" + Date.now()).catch(function () {
      return fetchJSON(DATA_BRANCH_URL + "?t=" + Date.now());
    });

    return dataPromise
      .then(function (data) {
        var remote = normalizePosts(data);
        var remoteIds = new Set(
          remote.map(function (post) {
            return post.id;
          })
        );
        var cutoff = Date.now() - 24 * 60 * 60 * 1000;

        state.deleted = readDeleted();
        state.pending = state.pending.filter(function (post) {
          return (
            !remoteIds.has(post.id) &&
            !state.deleted[post.id] &&
            new Date(post.createdAt).getTime() > cutoff
          );
        });
        writeJSON(PENDING_KEY, state.pending);

        state.posts = dedupePosts(state.pending.concat(remote))
          .filter(function (post) {
            return !state.deleted[post.id];
          })
          .sort(byNewest);
        lastLoadedAt = Date.now();
        renderAll();

        if (!initialHashHandled) {
          initialHashHandled = true;
          scrollToHash();
        }

        if (options.notify) showToast("Timeline refreshed");
      })
      .catch(function (error) {
        if (!state.posts.length) renderLoadError(error);
        else showToast("Could not refresh");
      })
      .then(function () {
        state.loading = false;
        els.refreshBtn.classList.remove("spinning");
      });
  }

  function scrollToHash() {
    var match = /^#post-(.+)$/.exec(location.hash || "");
    if (!match) return;
    var id = decodeURIComponent(match[1]);
    var post = state.posts.find(function (item) {
      return item.id === id;
    });
    if (!post) return;
    setView("feed");
    requestAnimationFrame(function () {
      var article = document.getElementById("post-" + id);
      if (article) article.scrollIntoView({ block: "start" });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Views / sheets                                                     */
  /* ------------------------------------------------------------------ */

  function setView(view) {
    state.view = view;
    var isFeed = view === "feed";
    els.feedView.hidden = !isFeed;
    els.gridView.hidden = isFeed;

    els.tabFeed.classList.toggle("active", isFeed);
    els.tabGrid.classList.toggle("active", !isFeed);

    if (isFeed) {
      els.tabFeed.setAttribute("aria-current", "page");
      els.tabGrid.removeAttribute("aria-current");
    } else {
      els.tabGrid.setAttribute("aria-current", "page");
      els.tabFeed.removeAttribute("aria-current");
      renderGrid();
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function anySheetOpen() {
    return !!document.querySelector(".sheet:not([hidden]), .action-sheet:not([hidden])");
  }

  function syncScrollLock() {
    document.body.classList.toggle("no-scroll", anySheetOpen());
  }

  function openSheet(sheet) {
    state.lastFocus = document.activeElement;
    sheet.hidden = false;
    syncScrollLock();
    requestAnimationFrame(function () {
      var focusable = sheet.querySelector("button:not([disabled]), input, textarea");
      if (focusable) focusable.focus({ preventScroll: true });
    });
  }

  function closeSheet(sheet) {
    sheet.hidden = true;
    syncScrollLock();
    if (!anySheetOpen() && state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus({ preventScroll: true });
    }
  }

  function closeTopLayer() {
    if (!els.actionSheet.hidden) {
      closeActions();
    } else if (!els.settingsSheet.hidden) {
      closeSheet(els.settingsSheet);
    } else if (!els.addSheet.hidden) {
      closeAdd();
    }
  }

  /* ------------------------------------------------------------------ */
  /* Add photo flow                                                     */
  /* ------------------------------------------------------------------ */

  function openAdd() {
    if (state.uploading) return;
    resetAdd();
    openSheet(els.addSheet);
  }

  function closeAdd() {
    if (state.uploading) return;
    closeSheet(els.addSheet);
    resetAdd();
  }

  function resetAdd() {
    if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
    state.selectedFile = null;
    state.previewUrl = null;

    els.previewImg.removeAttribute("src");
    els.previewImg.alt = "";
    els.captionInput.value = "";
    els.fileMeta.textContent = "";
    els.addError.hidden = true;
    els.addError.textContent = "";
    els.dropzone.hidden = false;
    els.compose.hidden = true;
    els.addShare.disabled = true;
    els.addShare.textContent = "Share";
    els.addCancel.disabled = false;
    els.chooseAnother.disabled = false;
    els.chooseBtn.disabled = false;
    els.cameraBtn.disabled = false;
    els.fileInput.value = "";
    els.cameraInput.value = "";
  }

  function handleFile(file) {
    if (!file) return;
    if (!isAllowedImage(file)) {
      showAddError("Choose a JPEG, PNG, WebP, GIF, HEIC, or AVIF image.");
      return;
    }
    if (!file.size) {
      showAddError("That file is empty.");
      return;
    }
    if (file.size > MAX_BYTES) {
      showAddError("That photo is larger than 95 MB. Choose a smaller image.");
      return;
    }

    clearAddError();
    if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);

    state.selectedFile = file;
    state.previewUrl = URL.createObjectURL(file);
    els.previewImg.src = state.previewUrl;
    els.previewImg.alt = file.name || "Selected photo";
    els.fileMeta.textContent = (file.name || "Photo") + " · " + formatBytes(file.size);
    els.dropzone.hidden = true;
    els.compose.hidden = false;
    els.addShare.disabled = false;
    els.addShare.textContent = "Share";
  }

  function setAddBusy(busy, label) {
    state.uploading = busy;
    els.addShare.disabled = busy || !state.selectedFile;
    els.addShare.textContent = busy ? label || "Sharing…" : "Share";
    els.addCancel.disabled = busy;
    els.chooseAnother.disabled = busy;
    els.chooseBtn.disabled = busy;
    els.cameraBtn.disabled = busy;
  }

  function showAddError(message) {
    els.addError.textContent = message;
    els.addError.hidden = false;
  }

  function clearAddError() {
    els.addError.textContent = "";
    els.addError.hidden = true;
  }

  function handleShare() {
    if (state.uploading) return;

    var original = state.selectedFile;
    if (!original) return;

    if (!getToken()) {
      showAddError("Add a GitHub token in Settings before sharing.");
      openSettings("Paste a fine-grained token with Contents: Read and write for josherich/blog.");
      return;
    }

    clearAddError();
    setAddBusy(true, "Preparing…");

    var caption = els.captionInput.value.slice(0, MAX_CAPTION).trim();
    var createdAt = new Date().toISOString();
    var id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    var post = null;
    var uploadedFile = null;

    ensureWebFriendly(original)
      .then(function (file) {
        return imageDimensions(file).then(function (dimensions) {
          return { file: file, dimensions: dimensions };
        });
      })
      .then(function (prepared) {
        uploadedFile = prepared.file;
        setAddBusy(true, "Reading photo…");
        return fileToBase64(prepared.file).then(function (base64) {
          var extension = extensionFor(prepared.file);
          var path = MEDIA_DIR + createdAt.slice(0, 10) + "-" + id + "." + extension;
          post = {
            id: id,
            path: path,
            mime: prepared.file.type || "application/octet-stream",
            caption: caption,
            createdAt: createdAt,
            width: prepared.dimensions.width,
            height: prepared.dimensions.height,
            size: prepared.file.size,
          };
          return { base64: base64, post: post };
        });
      })
      .then(function (payload) {
        setAddBusy(true, "Sharing…");
        return commitChanges({
          message: "Add photo " + payload.post.id,
          image: { path: payload.post.path, base64: payload.base64 },
          newPost: payload.post,
        });
      })
      .then(function () {
        if (uploadedFile && post) {
          state.localPreviews[post.id] = URL.createObjectURL(uploadedFile);
        }
        state.pending = dedupePosts([post].concat(state.pending)).slice(0, 20);
        writeJSON(PENDING_KEY, state.pending);
        state.posts = dedupePosts([post].concat(state.posts)).sort(byNewest);
        renderAll();
        setAddBusy(false);
        closeAdd();
        setView("feed");
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast("Photo posted");
      })
      .catch(function (error) {
        setAddBusy(false);
        showAddError(friendlyError(error));
      });
  }

  /* ------------------------------------------------------------------ */
  /* Settings                                                           */
  /* ------------------------------------------------------------------ */

  function renderTokenUI() {
    var hasToken = !!getToken();
    els.clearToken.hidden = !hasToken;
    els.tokenInput.placeholder = hasToken ? "Token saved — paste a new one to replace" : "github_pat_...";
    els.saveToken.textContent = hasToken ? "Replace token" : "Save token";
  }

  function setTokenStatus(kind, message) {
    els.tokenStatus.className = "token-status" + (kind ? " " + kind : "");
    els.tokenStatus.textContent = message || "";
  }

  function refreshTokenStatus() {
    var token = getToken();
    if (!token) {
      setTokenStatus("", "");
      return;
    }
    setTokenStatus("pending", "Checking saved token…");
    verifyToken(token)
      .then(function (repo) {
        setTokenStatus("ok", "Connected to " + repo.full_name + " → " + BRANCH + ".");
      })
      .catch(function (error) {
        setTokenStatus("bad", friendlyError(error));
      });
  }

  function openSettings(message) {
    renderTokenUI();
    if (message) {
      setTokenStatus("bad", message);
    } else {
      refreshTokenStatus();
    }
    openSheet(els.settingsSheet);
  }

  function saveToken(event) {
    event.preventDefault();
    var token = els.tokenInput.value.trim();
    if (!token) {
      setTokenStatus("bad", "Paste a token first.");
      return;
    }

    els.saveToken.disabled = true;
    els.saveToken.textContent = "Checking…";
    setTokenStatus("pending", "Checking token…");

    verifyToken(token)
      .then(function (repo) {
        setToken(token);
        els.tokenInput.value = "";
        renderTokenUI();
        renderFeed();
        if (state.view === "grid") renderGrid();
        if (!els.addSheet.hidden) clearAddError();
        setTokenStatus("ok", "Connected to " + repo.full_name + " → " + BRANCH + ". Uploads are enabled on this device.");
      })
      .catch(function (error) {
        setTokenStatus("bad", friendlyError(error));
      })
      .then(function () {
        els.saveToken.disabled = false;
        renderTokenUI();
      });
  }

  function clearToken() {
    setToken("");
    els.tokenInput.value = "";
    renderTokenUI();
    renderFeed();
    if (state.view === "grid") renderGrid();
    setTokenStatus("pending", "Token removed from this browser.");
  }

  /* ------------------------------------------------------------------ */
  /* Post actions                                                       */
  /* ------------------------------------------------------------------ */

  function openActions(post) {
    state.activePostId = post.id;
    els.postActionSheet.hidden = false;
    els.actionBackdrop.hidden = false;
    syncScrollLock();
  }

  function closeActions() {
    els.postActionSheet.hidden = true;
    els.actionBackdrop.hidden = true;
    state.activePostId = null;
    syncScrollLock();
  }

  function handleCopyLink() {
    var post = state.posts.find(function (item) {
      return item.id === state.activePostId;
    });
    if (!post) return;
    copyText(permalink(post)).then(function () {
      closeActions();
      showToast("Link copied");
    });
  }

  function handleDelete() {
    var post = state.posts.find(function (item) {
      return item.id === state.activePostId;
    });
    closeActions();
    if (!post) return;

    if (!getToken()) {
      openSettings("Add a GitHub token before deleting photos.");
      return;
    }

    if (!window.confirm("Delete this photo permanently? This cannot be undone.")) return;

    showToast("Deleting…", { duration: 0 });
    commitChanges({
      message: "Delete photo " + post.id,
      removePath: post.path,
      removeId: post.id,
    })
      .then(function () {
        state.posts = state.posts.filter(function (item) {
          return item.id !== post.id;
        });
        state.pending = state.pending.filter(function (item) {
          return item.id !== post.id;
        });
        state.liked.delete(post.id);
        state.deleted[post.id] = Date.now();
        if (state.localPreviews[post.id]) {
          URL.revokeObjectURL(state.localPreviews[post.id]);
          delete state.localPreviews[post.id];
        }
        writeJSON(PENDING_KEY, state.pending);
        writeJSON(DELETED_KEY, state.deleted);
        writeJSON(LIKES_KEY, Array.from(state.liked));
        renderAll();
        showToast("Photo deleted");
      })
      .catch(function (error) {
        showToast("Delete failed: " + friendlyError(error), { duration: 5000 });
      });
  }

  /* ------------------------------------------------------------------ */
  /* Toast                                                              */
  /* ------------------------------------------------------------------ */

  function showToast(message, options) {
    options = options || {};
    var duration = options.duration === undefined ? 2600 : options.duration;
    els.toast.textContent = message;
    els.toast.classList.add("show");
    if (toastTimer) window.clearTimeout(toastTimer);
    if (duration > 0) {
      toastTimer = window.setTimeout(function () {
        els.toast.classList.remove("show");
      }, duration);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Events / init                                                      */
  /* ------------------------------------------------------------------ */

  function bindEvents() {
    els.tabFeed.addEventListener("click", function () {
      setView("feed");
    });
    els.tabGrid.addEventListener("click", function () {
      setView("grid");
    });
    els.navAdd.addEventListener("click", openAdd);

    els.refreshBtn.addEventListener("click", function () {
      if (state.loading) return;
      loadPosts({ initial: !state.posts.length, notify: true });
    });

    els.settingsBtn.addEventListener("click", function () {
      openSettings();
    });
    els.settingsDone.addEventListener("click", function () {
      closeSheet(els.settingsSheet);
    });

    els.addCancel.addEventListener("click", closeAdd);
    els.addShare.addEventListener("click", handleShare);
    els.chooseBtn.addEventListener("click", function () {
      els.fileInput.click();
    });
    els.cameraBtn.addEventListener("click", function () {
      els.cameraInput.click();
    });
    els.chooseAnother.addEventListener("click", function () {
      els.fileInput.value = "";
      els.fileInput.click();
    });

    els.fileInput.addEventListener("change", function () {
      handleFile(els.fileInput.files && els.fileInput.files[0]);
    });
    els.cameraInput.addEventListener("change", function () {
      handleFile(els.cameraInput.files && els.cameraInput.files[0]);
    });

    ["dragenter", "dragover"].forEach(function (name) {
      els.dropzone.addEventListener(name, function (event) {
        event.preventDefault();
        els.dropzone.classList.add("dragover");
      });
    });
    ["dragleave", "dragend", "drop"].forEach(function (name) {
      els.dropzone.addEventListener(name, function (event) {
        event.preventDefault();
        els.dropzone.classList.remove("dragover");
      });
    });
    els.dropzone.addEventListener("drop", function (event) {
      var file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) handleFile(file);
    });

    document.addEventListener("paste", function (event) {
      if (els.addSheet.hidden) return;
      var items = (event.clipboardData && event.clipboardData.items) || [];
      for (var i = 0; i < items.length; i += 1) {
        if (items[i].type && items[i].type.indexOf("image/") === 0) {
          var file = items[i].getAsFile();
          if (file) {
            event.preventDefault();
            handleFile(file);
            break;
          }
        }
      }
    });

    els.tokenForm.addEventListener("submit", saveToken);
    els.clearToken.addEventListener("click", clearToken);

    els.copyLinkBtn.addEventListener("click", handleCopyLink);
    els.deletePostBtn.addEventListener("click", handleDelete);
    els.actionCancel.addEventListener("click", closeActions);
    els.actionBackdrop.addEventListener("click", closeActions);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeTopLayer();
    });

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && Date.now() - lastLoadedAt > 60000) {
        loadPosts({});
      }
    });

    window.setInterval(updateTimes, 60000);
  }

  function init() {
    els.feed = $("#feed");
    els.grid = $("#grid");
    els.feedView = $("#feedView");
    els.gridView = $("#gridView");
    els.tabFeed = $("#tabFeed");
    els.tabGrid = $("#tabGrid");
    els.navAdd = $("#navAdd");
    els.refreshBtn = $("#refreshBtn");
    els.settingsBtn = $("#settingsBtn");

    els.addSheet = $("#addSheet");
    els.addCancel = $("#addCancel");
    els.addShare = $("#addShare");
    els.addTitle = $("#addTitle");
    els.dropzone = $("#dropzone");
    els.chooseBtn = $("#chooseBtn");
    els.cameraBtn = $("#cameraBtn");
    els.chooseAnother = $("#chooseAnother");
    els.fileInput = $("#fileInput");
    els.cameraInput = $("#cameraInput");
    els.compose = $("#compose");
    els.previewImg = $("#previewImg");
    els.captionInput = $("#captionInput");
    els.fileMeta = $("#fileMeta");
    els.addError = $("#addError");

    els.settingsSheet = $("#settingsSheet");
    els.settingsDone = $("#settingsDone");
    els.tokenForm = $("#tokenForm");
    els.tokenInput = $("#tokenInput");
    els.saveToken = $("#saveToken");
    els.clearToken = $("#clearToken");
    els.tokenStatus = $("#tokenStatus");

    els.postActionSheet = $("#actionSheet");
    els.actionBackdrop = $("#actionBackdrop");
    els.copyLinkBtn = $("#copyLinkBtn");
    els.deletePostBtn = $("#deletePostBtn");
    els.actionCancel = $("#actionCancel");

    els.toast = $("#toast");

    state.liked = readLikes();

    bindEvents();
    renderTokenUI();
    loadPosts({ initial: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
