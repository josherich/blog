/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8a03bc7aa62c0f2d4b7fbe9866b3c3e8"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "assets/css/0.styles.7191ec3a.css",
    "revision": "9dc775c8e226763c8c857d54c94c2376"
  },
  {
    "url": "assets/img/sampling.5d5fd28a.png",
    "revision": "5d5fd28a479cdf72a67b575448078c7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/training.a9897041.png",
    "revision": "a989704131571885c2911c5e667d86c1"
  },
  {
    "url": "assets/js/10.653d1f86.js",
    "revision": "27a872adf66902d23cd987952e22781e"
  },
  {
    "url": "assets/js/11.fd749eab.js",
    "revision": "c0c6ffdbf9de6adc7cdf142a97540144"
  },
  {
    "url": "assets/js/12.e197d713.js",
    "revision": "ea03a867168ea55b73251bcacd8bd713"
  },
  {
    "url": "assets/js/13.c0aac8b3.js",
    "revision": "b9a0d6a796accd623de90197b33224f3"
  },
  {
    "url": "assets/js/14.3723de59.js",
    "revision": "45125bc478e2aa6ff2aa4e645ba9ffc0"
  },
  {
    "url": "assets/js/15.0e6f5c5d.js",
    "revision": "92580e80172308a8feb2277a215d9044"
  },
  {
    "url": "assets/js/16.7ce3f667.js",
    "revision": "8c84138cf7247ff7120d50fd928e11da"
  },
  {
    "url": "assets/js/17.fce427ec.js",
    "revision": "315d1812ca704509c4c05ce0beaf75c8"
  },
  {
    "url": "assets/js/18.0db37ab3.js",
    "revision": "6f214d1fda6b30e34aca7246922edddd"
  },
  {
    "url": "assets/js/19.6d3a4a7c.js",
    "revision": "72a078db6b75f035f3d3778c10796d6b"
  },
  {
    "url": "assets/js/2.5fba0fc3.js",
    "revision": "33c3080b3b249e541c3eee8981519e2f"
  },
  {
    "url": "assets/js/20.6ad277bf.js",
    "revision": "855e6106dd2b4eaff947fcde88012077"
  },
  {
    "url": "assets/js/21.f653a922.js",
    "revision": "57fe5072a9d1b3f795ac6f688f8723bb"
  },
  {
    "url": "assets/js/22.c116516a.js",
    "revision": "fd1c43052be298d4c16ef082373c556a"
  },
  {
    "url": "assets/js/23.1566bb22.js",
    "revision": "60dfa63fd4d2670520da00e5a9f5d853"
  },
  {
    "url": "assets/js/24.dc5fe6b6.js",
    "revision": "b0c2b9179c7ea03457e50eaa4646d3f2"
  },
  {
    "url": "assets/js/25.ce0b2b01.js",
    "revision": "85e3f9fd52da26027c8172096d9b6016"
  },
  {
    "url": "assets/js/26.2671bacd.js",
    "revision": "ef663e9519fa8e50e840cc8d6b9e4add"
  },
  {
    "url": "assets/js/27.9c56208f.js",
    "revision": "ddd00daf293669844fbf1413e4c65455"
  },
  {
    "url": "assets/js/28.2b361e5f.js",
    "revision": "c64b976b6311a1f036cf9f4eae086c68"
  },
  {
    "url": "assets/js/3.e79b47f3.js",
    "revision": "fa43f350871c6433ed4bb2a13dbd0fd8"
  },
  {
    "url": "assets/js/4.f252b007.js",
    "revision": "2c458eacb4becafccc90a567e48811b1"
  },
  {
    "url": "assets/js/5.cf7ef866.js",
    "revision": "b5edd5fb2c1c3a3ff91e894a3447d5b5"
  },
  {
    "url": "assets/js/6.129ef146.js",
    "revision": "1879312102f26244eaae616e25e25e3f"
  },
  {
    "url": "assets/js/7.99d61cc4.js",
    "revision": "8ecfd9a5b21a06f228c0e251d9c432aa"
  },
  {
    "url": "assets/js/8.01fbfcca.js",
    "revision": "6607b528f50407e72f0dbf67f2599505"
  },
  {
    "url": "assets/js/9.21139b3d.js",
    "revision": "24da6501528a9a8e1b3517802e398b0f"
  },
  {
    "url": "assets/js/app.06182bd8.js",
    "revision": "19fe74daeabc994d7387d588da653a69"
  },
  {
    "url": "cloud.html",
    "revision": "5c095f60f149ec71943fdfa6132e751c"
  },
  {
    "url": "cpp.html",
    "revision": "3050a91d89a74ce1d45b0a92e4733e09"
  },
  {
    "url": "cs.html",
    "revision": "14c9bfc4750d8a8f9719726576c3428b"
  },
  {
    "url": "database.html",
    "revision": "bd715b8942944e70eb4af71c9fa741a2"
  },
  {
    "url": "draw.html",
    "revision": "7e4eb9992dce2b5f279b4c73ade8abf2"
  },
  {
    "url": "frontend.html",
    "revision": "c4a64aa790b2b4dc7e2604a295ff3f98"
  },
  {
    "url": "gaming.html",
    "revision": "144f4844455143419b5b2a36209f6b67"
  },
  {
    "url": "images/sampling.png",
    "revision": "5d5fd28a479cdf72a67b575448078c7d"
  },
  {
    "url": "images/training.png",
    "revision": "a989704131571885c2911c5e667d86c1"
  },
  {
    "url": "index.html",
    "revision": "bac46705dc28af134693f7392e0ba377"
  },
  {
    "url": "josherich.html",
    "revision": "d11854919a6ce604febb130c67b069d8"
  },
  {
    "url": "languages.html",
    "revision": "2cacc83e1d9d18430ac06069e16e5953"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "6bcd5f542f6a5d0c065a41fc9a2c32c8"
  },
  {
    "url": "math.html",
    "revision": "2e557d7cd90caac43cbdeacf22081f9c"
  },
  {
    "url": "ml.html",
    "revision": "34962eec45c5b73feba17bd0a74b9e12"
  },
  {
    "url": "nlp.html",
    "revision": "3248ad54341b5c0bd21df2ff60e32553"
  },
  {
    "url": "numpy.html",
    "revision": "748e0a47f93ff5c956886688bee76ee3"
  },
  {
    "url": "ops.html",
    "revision": "3276509c0f829b4d3062b9e8f1cfae3e"
  },
  {
    "url": "os.html",
    "revision": "8a252d47eb4939ac7cf7a0aecceff649"
  },
  {
    "url": "papernotes.html",
    "revision": "1e53e09b11d8c5d28d4b60e1ec5c0bd1"
  },
  {
    "url": "pl.html",
    "revision": "7220a367580a6dc100036613772b5d9a"
  },
  {
    "url": "R.html",
    "revision": "dd8a24ef6469c88b4d9963bd66d41588"
  },
  {
    "url": "RL.html",
    "revision": "a3c1e4e23db757dadc0a29e0f2c6714b"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "social.html",
    "revision": "a6967180958825c6ba67e5addb1e08f3"
  },
  {
    "url": "vision.html",
    "revision": "84de1e0e0d4d805d2a9ab192f0fb8e7d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
