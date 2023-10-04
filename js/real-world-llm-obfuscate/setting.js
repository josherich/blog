"use strict";
var e;
let t = "summary_prompt",
  n = "user_settings";
async function a() {
  return chrome.storage.local.get(n)
    .then((t => t && t[n] ? t[n] : {
      apiKey: null,
      loginType: e.CHAT_GPT
    }))
}
async function o(e) {
  await chrome.storage.local.set({
    user_settings: e
  })
}
async function i(e) {
  let t = await a();
  t.loginType = e, await o(t)
}
function l() {
  (async function () {
    return chrome.storage.local.get(t)
      .then((e => e && e[t] ? e[t] : "Summarise the main points of the article in a list format:"))
  })()
    .then((e => {
      e && function (e) {
        let t = document.getElementById("promptInput");
        t && (t.value = e)
      }(e),
        function () {
          let e = document.getElementById("promptInput");
          null == e || e.addEventListener("input", (async () => {
            var e;
            null === (e = document.getElementById("promptForm")) || void 0 === e || e.classList.remove("was-validated")
          }));
          let t = document.getElementById("savePromptButton");
          null == t || t.addEventListener("click", (async () => {
            var t;
            let n = null == e ? void 0 : e.value;
            n && (null === (t = document.getElementById("promptForm")) || void 0 === t || t.classList.add("was-validated"), n.endsWith(":") || (n += ":"), await async function (e) {
              e && await chrome.storage.local.set({
                summary_prompt: e
              })
            }(n))
          }));
          let n = document.getElementById("resetButton");
          null == n || n.addEventListener("click", (async () => {
            await async function () {
              await chrome.storage.local.remove("summary_prompt")
            }(), l()
          }))
        }()
    })), async function () {
      return (await a())
        .loginType
    }()
      .then((e => {
        d(e), c()
      })), async function () {
        return (await a())
          .apiKey
      }()
        .then((e => {
          e && function (e) {
            let t = document.getElementById("apiKeyInput");
            t && (t.value = e)
          }(e), u()
        }))
}
function d(t) {
  var n, a, o, i;
  t == e.API_KEY ? (document.getElementById("openAiKeyRadio")
    .checked = !0, null === (n = document.getElementById("apiKeyForm")) || void 0 === n || n.classList.remove("d-none"), null === (a = document.getElementById("apiKeyLoginFeatures")) || void 0 === a || a.classList.add("d-none")) : t == e.CHAT_GPT && (document.getElementById("chatGptLoginRadio")
      .checked = !0, null === (o = document.getElementById("apiKeyForm")) || void 0 === o || o.classList.add("d-none"), null === (i = document.getElementById("apiKeyLoginFeatures")) || void 0 === i || i.classList.remove("d-none"))
}
function c() {
  var t = document.querySelectorAll('input[type=radio][name="loginRadio"]');
  function n(t) {
    var n;
    "openAiKeyRadio" === (null === (n = t.target) || void 0 === n ? void 0 : n.value) ? (i(e.API_KEY), d(e.API_KEY)) : (i(e.CHAT_GPT), d(e.CHAT_GPT))
  }
  Array.prototype.forEach.call(t, (function (e) {
    e.addEventListener("change", n)
  }))
}
function u() {
  let t = document.getElementById("apiKeyInput");
  null == t || t.addEventListener("input", (async () => {
    var e;
    null === (e = document.getElementById("apiKeyForm")) || void 0 === e || e.classList.remove("was-validated")
  }));
  let n = document.getElementById("saveTokenButton");
  null == n || n.addEventListener("click", (async () => {
    var n;
    let l = null == t ? void 0 : t.value;
    l && (null === (n = document.getElementById("apiKeyForm")) || void 0 === n || n.classList.add("was-validated"), await i(e.API_KEY), await async function (e) {
      if (e) {
        let t = await a();
        t.apiKey = e, await o(t)
      }
    }(l))
  }))
} ! function (e) {
  e[e.CHAT_GPT = 0] = "CHAT_GPT", e[e.API_KEY = 1] = "API_KEY"
}(e || (e = {})), addEventListener("load", (() => l()))