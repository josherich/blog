"use strict";
var e = {
  780(e, t, r) {
    let n = r(918);
    class o {
      constructor(e, t) {
        if (this.maxAge = e, this[Symbol.toStringTag] = "Map", this.data = new Map, n(this.data), t)
          for (let [e, r] of t) this.set(e, r)
      }
      get size() {
        return this.data.size
      }
      clear() {
        this.data.clear()
      }
      delete(e) {
        return this.data.delete(e)
      }
      has(e) {
        return this.data.has(e)
      }
      get(e) {
        let t = this.data.get(e);
        if (t) return t.data
      }
      set(e, t) {
        return this.data.set(e, {
          maxAge: Date.now() + this.maxAge,
          data: t
        }), this
      }
      values() {
        return this.createIterator((e => e[1].data))
      }
      keys() {
        return this.data.keys()
      }
      entries() {
        return this.createIterator((e => [e[0], e[1].data]))
      }
      forEach(e, t) {
        for (let [r, n] of this.entries()) e.apply(t, [n, r, this])
      } [Symbol.iterator]() {
        return this.entries()
      } * createIterator(e) {
        for (let t of this.data.entries()) yield e(t)
      }
    }
    e.exports = o
  },
  918(e, t, r) {
    let n = r(931);
    e.exports = function (e, t = "maxAge") {
      let r, o, a, i = async () => {
        if (void 0 !== r) return;
        let i = async i => {
          a = n();
          let c = i[1][t] - Date.now();
          return c <= 0 ? (e.delete(i[0]), void a.resolve()) : (r = i[0], "function" == typeof (o = setTimeout((() => {
            e.delete(i[0]), a && a.resolve()
          }), c))
            .unref && o.unref(), a.promise)
        };
        try {
          for (let t of e) await i(t)
        } catch (e) { }
        r = void 0
      }, c = e.set.bind(e);
      return e.set = (t, n) => {
        e.has(t) && e.delete(t);
        let s = c(t, n);
        return r && r === t && (r = void 0, void 0 !== o && (clearTimeout(o), o = void 0), void 0 !== a && (a.reject(void 0), a = void 0)), i(), s
      }, i(), e
    }
  },
  931(e) {
    e.exports = () => {
      let e = {};
      return e.promise = new Promise(((t, r) => {
        e.resolve = t, e.reject = r
      })), e
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
}, r.d = (e, t) => {
  for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
    enumerable: !0,
    get: t[n]
  })
}, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
  var e, t = r(780),
    n = r.n(t);
  let o, a = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  },
    i = new Uint8Array(16);
  function c() {
    if (!o && !(o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return o(i)
  }
  let s = [];
  for (let e = 0; e < 256; ++e) s.push((e + 256)
    .toString(16)
    .slice(1));
  function l(e, t = 0) {
    return (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]])
      .toLowerCase()
  }
  let u = function (e, t, r) {
    if (a.randomUUID && !t && !e) return a.randomUUID();
    let n = (e = e || {})
      .random || (e.rng || c)();
    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
      r = r || 0;
      for (let e = 0; e < 16; ++e) t[r + e] = n[e];
      return t
    }
    return l(n)
  };
  async function d(e, t, r, n) {
    return fetch(`https://chat.openai.com/backend-api${r}`, {
      method: t,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`
      },
      body: JSON.stringify(n)
    })
  }
  function p(e) {
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
  async function y(e, t) {
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
  let v = "summary_prompt",
    b = "user_settings";
  async function g() {
    return chrome.storage.local.get(b)
      .then((t => t && t[b] ? t[b] : {
        apiKey: null,
        loginType: e.CHAT_GPT
      }))
  } ! function (e) {
    e[e.CHAT_GPT = 0] = "CHAT_GPT", e[e.API_KEY = 1] = "API_KEY"
  }(e || (e = {}));
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
  },
    Be = "accessToken",
    Re = new (n())(1e4);
  async function Je() {
    if (Re.get(Be)) return Re.get(Be);
    let e = await fetch("https://chat.openai.com/api/auth/session");
    if (403 === e.status) throw Error(JSON.stringify({
      code: "CLOUDFLARE"
    }));
    let t = await e.json()
      .catch((() => ({})));
    if (!t.accessToken) throw Error(JSON.stringify({
      code: "UNAUTHORIZED"
    }));
    return Re.set(Be, t.accessToken), t.accessToken
  }
  async function Ke(t, r, n) {
    let o = await async function () {
      return (await g())
        .loginType
    }(), a = await async function () {
      return (await g())
        .apiKey
    }();
    o == e.API_KEY && a && a.length > 0 ? await async function (e, t, r, n) {
      let o = new AbortController;
      async function a(e) {
        var t;
        let r, o, a = await e.json()
          .catch((() => ({})));
        $e(a) || (o = null === (t = null == a ? void 0 : a.error) || void 0 === t ? void 0 : t.message), n({
          code: r,
          message: o
        })
      }
      t.onDisconnect.addListener((() => {
        o.abort()
      }));
      let i = "";
      await y("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        signal: o.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: r
          }],
          model: "gpt-3.5-turbo",
          stream: !0
        }),
        onMessage(e) {
          var r, n;
          if ("[DONE]" === e) return void t.postMessage({
            event: "DONE"
          });
          let o;
          try {
            o = JSON.parse(e)
          } catch (e) {
            return
          }
          let a = null === (n = null === (r = o.choices) || void 0 === r ? void 0 : r[0].delta) || void 0 === n ? void 0 : n.content;
          a && (i += a, t.postMessage({
            text: i.trim(),
            messageId: o.id,
            conversationId: o.id
          }))
        },
        onError: a
      })
    }(a, t, r, n) : await async function (e, t, r) {
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
      })), await y("https://chat.openai.com/backend-api/conversation", {
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
  async function ze(e) {
    return e.length > 14e3 && (e = e.slice(0, 14e3)), await async function () {
      return chrome.storage.local.get(v)
        .then((e => e && e[v] ? e[v] : "Summarise the following article in bullet points:"))
    }() + e
  }
  chrome.runtime.onConnect.addListener((e => {
    e.onMessage.addListener((async t => {
      let r = await ze(t.pageContent);
      try {
        await Ke(e, r, (t => {
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
  })), chrome.runtime.onMessage.addListener((async e => {
    if ("FEEDBACK" === e.type) {
      let t = await Je();
      await async function (e, t) {
        await d(e, "POST", "/conversation/message_feedback", t)
      }(t, e.data)
    } else if ("OPEN_OPTIONS_PAGE" === e.type) chrome.runtime.openOptionsPage();
    else if ("GET_ACCESS_TOKEN" === e.type) return Je()
  })), chrome.action.onClicked.addListener((e => {
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