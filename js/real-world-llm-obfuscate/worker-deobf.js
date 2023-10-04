"use strict";
var e = {
  SessionCache(module, t, require) {
    let cleanupMap = require("cleamupMap");
    class SessionCache {
      constructor(maxAge, entries) {
        this.maxAge = maxAge;
        this[Symbol.toStringTag] = "Map";
        this.data = new Map;
        cleanupMap(this.data);
        if (entries) {
          for (let [key, value] of entries) this.set(key, value);
        }
      }
      get size() {
        return this.data.size
      }
      clear() {
        this.data.clear()
      }
      delete(key) {
        return this.data.delete(key)
      }
      has(key) {
        return this.data.has(key)
      }
      get(key) {
        let entry = this.data.get(key);
        if (entry) return entry.data
      }
      set(key, value) {
        return this.data.set(key, {
          maxAge: Date.now() + this.maxAge,
          data: value
        }), this
      }
      values() {
        return this.createIterator((entry => entry[1].data))
      }
      keys() {
        return this.data.keys()
      }
      entries() {
        return this.createIterator((entry => [entry[0], entry[1].data]))
      }
      forEach(callback, thisArg) {
        for (let [key, entry] of this.entries()) callback.apply(thisArg, [entry, key, this])
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      * createIterator(projector) {
        for (let entry of this.data.entries()) yield projector(entry);
      }
    }
    module.exports = SessionCache;
  },
  cleanupMap(module, t, require) {
    let createPromise = require('createPromise');
    module.exports = function cleanupMap(map, keyName = "maxAge") {
      let finishingKey, finishingCallback, finishingPromise;
      let checkForExpired = async () => {
        if (finishingKey !== undefined) return;
        let checkEntryForExpiry = async (entry) => {
          finishingPromise = createPromise();
          const expiryOffset = entry[1][keyName] - Date.now();
          if (expiryOffset <= 0) {
            map.delete(entry[0]);
            if (finishingPromise) finishingPromise.resolve();
            return;
          }

          finishingKey = entry[0];
          if (typeof(finishingCallback = setTimeout(
            () => {
              map.delete(entry[0]);
              if (finishingPromise) {
                finishingPromise.resolve();
              }
            },
            expiryOffset)) === "function" && finishingCallback.unref) {
            finishingCallback.unref();
          }
          return finishingPromise.promise;
        };

        try {
          for (let entry of map) {
            await checkEntryForExpiry(entry);
          }
        } catch (e) {}

        finishingKey = undefined;
      };
      const origSet = map.set.bind(map);
      map.set = (key, value) => {
        if (map.has(key)) {
          map.delete(key);
        }
        const result = origSet(key, value);
        if (finishingKey && finishingKey === key) {
          finishingKey = undefined;
          if (finishingCallback !== undefined) {
            clearTimeout(finishingCallback);
            finishingCallback = undefined;
          }
          if (finishingPromise !== undefined) {
            finishingPromise.reject(undefined);
            finishingPromise = undefined;
          }
        }

        checkForExpired();
        return result;
      };

      checkForExpired();

      return map;
    }
  },
  createPromise(module) {
    module.exports = function createPromise() {
      const promise = {};
      promise.promise = new Promise((resolve, reject) => {
        promise.resolve = resolve;
        promise.reject = reject;
      });
      return promise;
    }
  }
},
t = {};
function r(n) {
  var o = t[n];
  if (void 0 !== o) return o.exports;
  var a = t[n] = {
    exports: {}
  };
  return e[n](a, a.exports, r), a.exports
}
r.n = e => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return r.d(t, {
    a: t
  }), t
};
r.d = (e, t) => {
  for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
    enumerable: !0,
    get: t[n]
  })
};
r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
(() => {
  var LoginType, t = require('SessionCache'),
    n = r.n(t);
  // import throttle from 'lodash.throttle';
  const util = {
    randomUUID: typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  const uint8Array = new Uint8Array(16);
  function rng() {
    if (!_rng && !(_rng = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return _rng(uint8Array);
  }
  const byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }
  function stringify(arr, offset = 0) {
    return (
      byteToHex[arr[offset + 0]] +
      byteToHex[arr[offset + 1]] +
      byteToHex[arr[offset + 2]] +
      byteToHex[arr[offset + 3]] + "-" +
      byteToHex[arr[offset + 4]] +
      byteToHex[arr[offset + 5]] + "-" +
      byteToHex[arr[offset + 6]] +
      byteToHex[arr[offset + 7]] + "-" +
      byteToHex[arr[offset + 8]] +
      byteToHex[arr[offset + 9]] + "-" +
      byteToHex[arr[offset + 10]] +
      byteToHex[arr[offset + 11]] +
      byteToHex[arr[offset + 12]] +
      byteToHex[arr[offset + 13]] +
      byteToHex[arr[offset + 14]] +
      byteToHex[arr[offset + 15]]
    ).toLowerCase()
  }
  let v4 = function (options, buf, offset) {
    if (a.randomUUID && !buf && !options) return a.randomUUID();
    let random = (options = options || {})
      .random || (options.rng || c)();
    if (random[6] = 15 & random[6] | 64, random[8] = 63 & random[8] | 128, buf) {
      offset = offset || 0;
      for (let e = 0; e < 16; ++e) buf[offset + e] = random[e];
      return buf
    }
    return stringify(random)
  };
  async function fetchWithAuth(accessToken, signal, path, method, body) {
    return fetch(`https://chat.openai.com/backend-api${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    });
  }
  function parseEventStream(e) {
    let t, r, n, o, a, i, c;
    return s(), {
      feed: function (e) {
        r = r ? r + e : e, t && function (e) {
          return f.every(((t, r) => e.charCodeAt(r) === t))
        }(r) && (r = r.slice(f.length)), t = !1;
        let a = r.length,
          i = 0,
          c = !1;
        for (; i < a;) {
          c && ("\n" === r[i] && ++i, c = !1);
          let e, t = -1,
            s = o;
          for (let o = n; t < 0 && o < a; ++o) ":" === (e = r[o]) && s < 0 ? s = o - i : "\r" === e ? (c = !0, t = o - i) : "\n" === e && (t = o - i);
          if (t < 0) {
            n = a - i, o = s;
            break
          }
          n = 0, o = -1, l(r, i, s, t), i += t + 1
        }
        i === a ? r = "" : i > 0 && (r = r.slice(i))
      },
      reset: s
    };
    function s() {
      t = !0, r = "", n = 0, o = -1, a = void 0, i = void 0, c = ""
    }
    function l(t, r, n, o) {
      if (0 === o) return c.length > 0 && (e({
        type: "event",
        id: a,
        event: i || void 0,
        data: c.slice(0, -1)
      }), c = "", a = void 0), void (i = void 0);
      let s = n < 0,
        l = t.slice(r, r + (s ? o : n)),
        u = 0;
      u = s ? o : " " === t[r + n + 1] ? n + 2 : n + 1;
      let d = r + u,
        p = o - u,
        f = t.slice(d, d + p)
          .toString();
      if ("data" === l) c += f ? "".concat(f, "\n") : "\n";
      else if ("event" === l) i = f;
      else if ("id" !== l || f.includes("\0")) {
        if ("retry" === l) {
          let t = parseInt(f, 10);
          Number.isNaN(t) || e({
            type: "reconnect-interval",
            value: t
          })
        }
      } else a = f
    }
  }
  let f = [239, 187, 191];
  async function eventStream(e, t) {
    let {
      onMessage: r,
      onError: n,
      ...o
    } = t, a = await fetch(e, o);
    if (!a.ok) return void n(a);
    let i = p((e => {
      "event" === e.type && r(e.data)
    }));
    for await (let e of async function* (e) {
      let t = e.getReader();
      try {
        for (; ;) {
          let {
            done: e,
            value: r
          } = await t.read();
          if (e) return;
          yield r
        }
      } finally {
        t.releaseLock()
      }
    }(a.body)) {
      let t = (new TextDecoder)
        .decode(e);
      i.feed(t)
    }
  }
  const PROMPT_KEY = 'summary_prompt';
  const SETTINGS_KEY = 'user_settings';
  LoginType = {
    CHAT_GPT: 0,
    API_KEY: 1
  };
  async function getUserSettings() {
    return chrome.storage.local.get(SETTINGS_KEY)
      .then(data => {
        if (data && data[SETTINGS_KEY]) {
          return data[SETTINGS_KEY];
        }

        return {
          apiKey: null,
          loginType: LoginType.CHAT_GPT
        };
      });
  };
  var h = Object.prototype;
  let m = function (e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || h)
  };
  let j = function (e, t) {
    return function (r) {
      return e(t(r))
    }
  }(Object.keys, Object);
  var w = Object.prototype.hasOwnProperty;
  let O = function (e) {
    if (!m(e)) return j(e);
    var t = [];
    for (var r in Object(e)) w.call(e, r) && "constructor" != r && t.push(r);
    return t
  };
  let A = "object" == typeof global && global && global.Object === Object && global;
  var S = "object" == typeof self && self && self.Object === Object && self;
  let T = A || S || Function("return this")();
  let x = T.Symbol;
  var E = Object.prototype,
    P = E.hasOwnProperty,
    _ = E.toString,
    I = x ? x.toStringTag : void 0;
  let D = function (e) {
    var t = P.call(e, I),
      r = e[I];
    try {
      e[I] = void 0;
      var n = !0
    } catch (e) { }
    var o = _.call(e);
    return n && (t ? e[I] = r : delete e[I]), o
  };
  var M = Object.prototype.toString;
  let N = function (e) {
    return M.call(e)
  };
  var C = x ? x.toStringTag : void 0;
  let k = function (e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : C && C in Object(e) ? D(e) : N(e)
  };
  let U = function (e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
  };
  let F = function (e) {
    if (!U(e)) return !1;
    var t = k(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
  };
  let L = T["__core-js_shared__"];
  var $ = function () {
    var e = /[^.]+$/.exec(L && L.keys && L.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
  }();
  let B = function (e) {
    return !!$ && $ in e
  };
  var R = Function.prototype.toString;
  let J = function (e) {
    if (null != e) {
      try {
        return R.call(e)
      } catch (e) { }
      try {
        return e + ""
      } catch (e) { }
    }
    return ""
  };
  var K = /^\[object .+?Constructor\]$/,
    z = Function.prototype,
    G = Object.prototype,
    V = z.toString,
    H = G.hasOwnProperty,
    W = RegExp("^" + V.call(H)
      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  let Y = function (e) {
    return !(!U(e) || B(e)) && (F(e) ? W : K)
      .test(J(e))
  };
  let q = function (e, t) {
    return null == e ? void 0 : e[t]
  };
  let Z = function (e, t) {
    var r = q(e, t);
    return Y(r) ? r : void 0
  };
  let Q = Z(T, "DataView");
  let X = Z(T, "Map");
  let ee = Z(T, "Promise");
  let te = Z(T, "Set");
  let re = Z(T, "WeakMap");
  var ne = "[object Map]",
    oe = "[object Promise]",
    ae = "[object Set]",
    ie = "[object WeakMap]",
    ce = "[object DataView]",
    se = J(Q),
    le = J(X),
    ue = J(ee),
    de = J(te),
    pe = J(re),
    fe = k;
  (Q && fe(new Q(new ArrayBuffer(1))) != ce || X && fe(new X) != ne || ee && fe(ee.resolve()) != oe || te && fe(new te) != ae || re && fe(new re) != ie) && (fe = function (e) {
    var t = k(e),
      r = "[object Object]" == t ? e.constructor : void 0,
      n = r ? J(r) : "";
    if (n) switch (n) {
      case se:
        return ce;
      case le:
        return ne;
      case ue:
        return oe;
      case de:
        return ae;
      case pe:
        return ie
    }
    return t
  });
  let ye = fe;
  let ve = function (e) {
    return null != e && "object" == typeof e
  };
  let be = function (e) {
    return ve(e) && "[object Arguments]" == k(e)
  };
  var ge = Object.prototype,
    he = ge.hasOwnProperty,
    me = ge.propertyIsEnumerable;
  let je = be(function () {
    return arguments
  }()) ? be : function (e) {
    return ve(e) && he.call(e, "callee") && !me.call(e, "callee")
  };
  let we = Array.isArray;
  let Oe = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  };
  let Ae = function (e) {
    return null != e && Oe(e.length) && !F(e)
  };
  let Se = function () {
    return !1
  };
  var Te = "object" == typeof exports && exports && !exports.nodeType && exports,
    xe = Te && "object" == typeof module && module && !module.nodeType && module,
    Ee = xe && xe.exports === Te ? T.Buffer : void 0;
  let Pe = (Ee ? Ee.isBuffer : void 0) || Se;
  var _e = {};
  _e["[object Float32Array]"] = _e["[object Float64Array]"] = _e["[object Int8Array]"] = _e["[object Int16Array]"] = _e["[object Int32Array]"] = _e["[object Uint8Array]"] = _e["[object Uint8ClampedArray]"] = _e["[object Uint16Array]"] = _e["[object Uint32Array]"] = !0, _e["[object Arguments]"] = _e["[object Array]"] = _e["[object ArrayBuffer]"] = _e["[object Boolean]"] = _e["[object DataView]"] = _e["[object Date]"] = _e["[object Error]"] = _e["[object Function]"] = _e["[object Map]"] = _e["[object Number]"] = _e["[object Object]"] = _e["[object RegExp]"] = _e["[object Set]"] = _e["[object String]"] = _e["[object WeakMap]"] = !1;
  let Ie = function (e) {
    return ve(e) && Oe(e.length) && !!_e[k(e)]
  };
  let De = function (e) {
    return function (t) {
      return e(t)
    }
  };
  var Me = "object" == typeof exports && exports && !exports.nodeType && exports,
    Ne = Me && "object" == typeof module && module && !module.nodeType && module,
    Ce = Ne && Ne.exports === Me && A.process,
    ke = function () {
      try {
        var e = Ne && Ne.require && Ne.require("util")
          .types;
        return e || Ce && Ce.binding && Ce.binding("util")
      } catch (e) { }
    }();
  var Ue = ke && ke.isTypedArray;
  let Fe = Ue ? De(Ue) : Ie;
  var Le = Object.prototype.hasOwnProperty;
  let $e = function (e) {
    if (null == e) return !0;
    if (Ae(e) && (we(e) || "string" == typeof e || "function" == typeof e.splice || Pe(e) || Fe(e) || je(e))) return !e.length;
    var t = ye(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (m(e)) return !O(e)
      .length;
    for (var r in e)
      if (Le.call(e, r)) return !1;
    return !0
  };
  const CACHE_KEY = "accessToken";
  const cache = new (LRU())(1e4);
  // core logic
  async function getAccessToken() {
    if (cache.get(CACHE_KEY)) return cache.get(CACHE_KEY);
    let resp = await fetch("https://chat.openai.com/api/auth/session");
    if (403 === resp.status) throw Error(JSON.stringify({
      code: "CLOUDFLARE"
    }));
    let data = await resp.json()
      .catch((() => ({})));
    if (!data.accessToken) throw Error(JSON.stringify({
      code: "UNAUTHORIZED"
    }));
    cache.set(CACHE_KEY, data.accessToken);
    return data.accessToken;
  }
  async function chatGptRequest(port, prompt, notifyError) {
    let loginType = await async function () {
      return (await getUserSettings())
        .loginType
    }(), apiKey = await async function () {
      return (await getUserSettings())
        .apiKey
    }();
    if (loginType == LoginType.API_KEY && apiKey && apiKey.length > 0) {
      await async function apiKeyRequest(apiKey, port, prompt, notifyError) {
        let controller = new AbortController;
        async function handleError(e) {
          var t;
          let r, o, a = await e.json()
            .catch((() => ({})));
          $e(a) || (o = null === (t = null == a ? void 0 : a.error) || void 0 === t ? void 0 : t.message), notifyError({
            code: r,
            message: o
          })
        }
        port.onDisconnect.addListener((() => {
          controller.abort()
        }));
        let i = "";
        await eventStream("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            messages: [{
              role: "user",
              content: prompt
            }],
            model: "gpt-3.5-turbo",
            stream: !0
          }),
          onMessage(e) {
            var r, n;
            if ("[DONE]" === e) return void port.postMessage({
              event: "DONE"
            });
            let o;
            try {
              o = JSON.parse(e)
            } catch (e) {
              return
            }
            let a = null === (n = null === (r = o.choices) || void 0 === r ? void 0 : r[0].delta) || void 0 === n ? void 0 : n.content;
            a && (i += a, port.postMessage({
              text: i.trim(),
              messageId: o.id,
              conversationId: o.id
            }))
          },
          onError: handleError
        })
      }(a, t, r, n)
    } else {
      await async function (e, t, r) {
        let n = await Je()
          .catch((e => r(JSON.parse(e.message))));
        if (!n) return void Re.delete(Be);
        let o, a = () => {
          o && async function (e, t, r) {
            await d(e, "PATCH", `/conversation/${t}`, r)
          }(n, o, {
            is_visible: !1
          })
        };
        async function i(e) {
          let t, n, o = await e.json()
            .catch((() => ({})));
          $e(o) || (t = o.detail.code, n = o.detail.message || o.detail), r({
            code: t,
            message: n
          })
        }
        let c = new AbortController;
        e.onDisconnect.addListener((() => {
          c.abort(), a()
        })), await eventStream("https://chat.openai.com/backend-api/conversation", {
          method: "POST",
          signal: c.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${n}`
          },
          body: JSON.stringify({
            action: "next",
            messages: [{
              id: u(),
              role: "user",
              content: {
                content_type: "text",
                parts: [t]
              }
            }],
            model: "text-davinci-002-render",
            parent_message_id: u()
          }),
          onMessage(t) {
            var r, n, i;
            if ("[DONE]" === t) return e.postMessage({
              event: "DONE"
            }), void a();
            let c;
            try {
              c = JSON.parse(t)
            } catch (e) {
              return
            }
            let s = null === (i = null === (n = null === (r = c.message) || void 0 === r ? void 0 : r.content) || void 0 === n ? void 0 : n.parts) || void 0 === i ? void 0 : i[0];
            o = c.conversation_id, s && e.postMessage({
              text: s,
              messageId: c.message.id,
              conversationId: c.conversation_id
            })
          },
          onError: i
        })
      }(t, r, n)
    }
  }
  async function summarizeAndAppend(e) {
    // If the input string is longer than 14,000 characters, truncate it
    if (e.length > 14000) {
      e = e.slice(0, 14000);
    }

    // Retrieve a value from the local Chrome storage
    const defaultValue = "Summarise the following article in bullet points:";
    const storedValue = await (async function () {
      return chrome.storage.local.get(v)
        .then((result) => {
          // Check if the value exists in the storage, if not, use the default
          return result && result[v] ? result[v] : defaultValue;
        });
    })();

    // Concatenate the stored value (or default) with the input string
    return storedValue + e;
  }
  chrome.runtime.onConnect.addListener((e => {
    e.onMessage.addListener((async t => {
      let r = await summarizeAndAppend(t.pageContent);
      try {
        await chatGptRequest(e, r, (t => {
          e.postMessage({
            error: t
          })
        }))
      } catch (t) {
        e.postMessage({
          error: {}
        })
      }
    }))
  }));
  chrome.runtime.onMessage.addListener((async e => {
    if ("FEEDBACK" === e.type) {
      let token = await getAccessToken();
      await async function (e, t) {
        await fetchWithAuth(e, "POST", "/conversation/message_feedback", t)
      }(token, e.data)
    } else if ("OPEN_OPTIONS_PAGE" === e.type)
      chrome.runtime.openOptionsPage();
    else if ("GET_ACCESS_TOKEN" === e.type)
      return getAccessToken();
  }));
  chrome.action.onClicked.addListener((e => {
    chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      files: ["javascripts/script.js"]
    })
  })), chrome.runtime.onInstalled.addListener((function (e) {
    "install" == e.reason && chrome.runtime.openOptionsPage()
  }))
})()