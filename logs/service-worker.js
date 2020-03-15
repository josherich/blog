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
    "revision": "c104c0d0c3e6ae36b055afd9303b6ae7"
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
    "url": "assets/js/10.d006e7a8.js",
    "revision": "d60e100a1ed54c23268dc443dd4edea1"
  },
  {
    "url": "assets/js/11.d5266bb7.js",
    "revision": "1844237c8a130b8809d49ea65f0e4286"
  },
  {
    "url": "assets/js/12.ae6403cd.js",
    "revision": "22de5d704bd6a0917cee16ceccfeb4c5"
  },
  {
    "url": "assets/js/13.5faee3eb.js",
    "revision": "c091a9646f291cd1a5461d23c8b97728"
  },
  {
    "url": "assets/js/14.ca21d440.js",
    "revision": "37002946e8ecfd5910cf7d61e7f13ae8"
  },
  {
    "url": "assets/js/15.8ccfa7a9.js",
    "revision": "a9ee507a37b8b68ee4f0e02843a9696c"
  },
  {
    "url": "assets/js/16.0254efc1.js",
    "revision": "492fac5a435f69744ee782be333b8d27"
  },
  {
    "url": "assets/js/17.e177a4da.js",
    "revision": "a968a9154a27a9cf786553660b00931e"
  },
  {
    "url": "assets/js/18.0ae10052.js",
    "revision": "80d15d729445ff7dceed8a2190af87ef"
  },
  {
    "url": "assets/js/19.0a4d2d26.js",
    "revision": "72c8ed962c4478063fe065e2f9dc9d8c"
  },
  {
    "url": "assets/js/2.a50b14f1.js",
    "revision": "33c3080b3b249e541c3eee8981519e2f"
  },
  {
    "url": "assets/js/20.c4bcf208.js",
    "revision": "3d534b1573da893a80155709fb2e713d"
  },
  {
    "url": "assets/js/21.cf14781b.js",
    "revision": "40cf821167507c56c88071df14cc5fcc"
  },
  {
    "url": "assets/js/22.d66a1538.js",
    "revision": "abbf5b1c2aa4323f37fec8bfbde13fb1"
  },
  {
    "url": "assets/js/23.c2b61054.js",
    "revision": "9693b243b4918267646edf86b2900bf7"
  },
  {
    "url": "assets/js/24.cf84dda2.js",
    "revision": "bf26db432261cc7a3cb7592124e5e60e"
  },
  {
    "url": "assets/js/25.87d554d9.js",
    "revision": "e04c5f1f3a17a26c8a2654833168bce7"
  },
  {
    "url": "assets/js/26.98393859.js",
    "revision": "7a075c8168a511ad7cd1832e2658459e"
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
    "url": "assets/js/4.7001d9bb.js",
    "revision": "4209e45d2d764f0adb05eaed36b43e6b"
  },
  {
    "url": "assets/js/5.cf7ef866.js",
    "revision": "b5edd5fb2c1c3a3ff91e894a3447d5b5"
  },
  {
    "url": "assets/js/6.d8e82984.js",
    "revision": "76f77b73ed933aeb11e552881c3b4486"
  },
  {
    "url": "assets/js/7.99d61cc4.js",
    "revision": "8ecfd9a5b21a06f228c0e251d9c432aa"
  },
  {
    "url": "assets/js/8.cbf45634.js",
    "revision": "cf31ba424760a9db45dfbfcf12ed6b84"
  },
  {
    "url": "assets/js/9.9decd2f2.js",
    "revision": "3e7fca9a27dad6d7fdf051ac6c7b1ccd"
  },
  {
    "url": "assets/js/app.5cc72574.js",
    "revision": "b26c61483c0001f6e4c2d574dc6367c4"
  },
  {
    "url": "cloud.html",
    "revision": "05dfec856e2f699c9c51f781f273c4b6"
  },
  {
    "url": "cpp.html",
    "revision": "4f8a08ec50c70c51dfbfe81bc6e1d87e"
  },
  {
    "url": "cs.html",
    "revision": "5db080b1fb6934763499f0091f83c97d"
  },
  {
    "url": "database.html",
    "revision": "04871a238b8b03c161da72673cfbd581"
  },
  {
    "url": "draw.html",
    "revision": "fc9d4f6717f9efeba6fc47cefa5c4ac7"
  },
  {
    "url": "frontend.html",
    "revision": "673d7aa702bea6dc694b58c4c725c9a3"
  },
  {
    "url": "gaming.html",
    "revision": "b94684bb13394d2f6bfac525ca313ad7"
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
    "revision": "e4a09d8ed0a95fea56e87a70d417589f"
  },
  {
    "url": "josherich.html",
    "revision": "6ea1b7967d6c180699f7ef1c4a7dc094"
  },
  {
    "url": "languages.html",
    "revision": "908d674c44ae2f1890d32930be0fd32a"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "731eb6e3ac3af412118eb814b5300d92"
  },
  {
    "url": "math.html",
    "revision": "450632e43758ed8900218c0dce94cc27"
  },
  {
    "url": "ml.html",
    "revision": "3ba543d59519b18e5a8786aa12e6e59d"
  },
  {
    "url": "nlp.html",
    "revision": "c71b4bea2c2d2e2706a9db0a9cecd1a2"
  },
  {
    "url": "numpy.html",
    "revision": "5c862707c042a6ca2cbe1b6cdc07c870"
  },
  {
    "url": "ops.html",
    "revision": "4b9f96943c9919d7f8b509c9893cdf31"
  },
  {
    "url": "os.html",
    "revision": "91725356e0b23ffe477ed81051622755"
  },
  {
    "url": "papernotes.html",
    "revision": "e5bed92d6f78d26ce0d0626772d88ed9"
  },
  {
    "url": "pl.html",
    "revision": "be9a5272d2e68a273c391f3ba6e02c0d"
  },
  {
    "url": "R.html",
    "revision": "5b5d1d7bc7a8b2aa5cda3d590c062d3a"
  },
  {
    "url": "RL.html",
    "revision": "30d8bfbc059be9fc324d190bd256848f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "social.html",
    "revision": "22a17462a36bb83dcb8ea05a0625924e"
  },
  {
    "url": "vision.html",
    "revision": "1872b483fa93410758808627bb17cb3f"
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
