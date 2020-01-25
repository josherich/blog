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
    "revision": "44dfbce5f1461195a8f9d955b064d33c"
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
    "url": "assets/js/11.fd749eab.js",
    "revision": "c0c6ffdbf9de6adc7cdf142a97540144"
  },
  {
    "url": "assets/js/12.e197d713.js",
    "revision": "ea03a867168ea55b73251bcacd8bd713"
  },
  {
    "url": "assets/js/13.5faee3eb.js",
    "revision": "c091a9646f291cd1a5461d23c8b97728"
  },
  {
    "url": "assets/js/14.dd1edca1.js",
    "revision": "8d739ebc47b1ee00c23c8af26f5fa584"
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
    "url": "assets/js/18.1cf5c84a.js",
    "revision": "28dba03654938cddb8146aa0570ec12d"
  },
  {
    "url": "assets/js/19.0a4d2d26.js",
    "revision": "72c8ed962c4478063fe065e2f9dc9d8c"
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
    "url": "assets/js/22.d66a1538.js",
    "revision": "abbf5b1c2aa4323f37fec8bfbde13fb1"
  },
  {
    "url": "assets/js/23.c2b61054.js",
    "revision": "9693b243b4918267646edf86b2900bf7"
  },
  {
    "url": "assets/js/24.a688e03c.js",
    "revision": "15234f43320aa4a1fd4898fb3316fb30"
  },
  {
    "url": "assets/js/25.ce0b2b01.js",
    "revision": "85e3f9fd52da26027c8172096d9b6016"
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
    "url": "assets/js/4.824b2f94.js",
    "revision": "3cb9e287599078c1c3dfde204f9684f3"
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
    "url": "assets/js/8.1099fc02.js",
    "revision": "f9fbfba340559857d9664488d9cb52d2"
  },
  {
    "url": "assets/js/9.64f7f7fe.js",
    "revision": "0ce3a5f51a662ec765fe67f0dbd5891c"
  },
  {
    "url": "assets/js/app.09a71387.js",
    "revision": "e0bbb4e5dda099f1b38217212df9dc51"
  },
  {
    "url": "cloud.html",
    "revision": "9dd4d447e81fb5222fbaf8c1de336640"
  },
  {
    "url": "cpp.html",
    "revision": "190c61f3372a4d36d2c2ea43b2626383"
  },
  {
    "url": "cs.html",
    "revision": "09345c586ad50bf7bd3e3af65def572d"
  },
  {
    "url": "database.html",
    "revision": "2c6b608dbb64a3b2adce2a8320230e8e"
  },
  {
    "url": "draw.html",
    "revision": "257ba2c445b42dc63749283cf88f49d4"
  },
  {
    "url": "frontend.html",
    "revision": "f83f955cd0d1ebda2c2ceb8040bac1ec"
  },
  {
    "url": "gaming.html",
    "revision": "b68c5a3c028342d9c2b01d666d6b1efd"
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
    "revision": "650c43d07c33b4902dff5220e87aca3c"
  },
  {
    "url": "josherich.html",
    "revision": "7308ac9de834b46e30db851552b96ad1"
  },
  {
    "url": "languages.html",
    "revision": "d10757ac74d540fe04024d75763325f2"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "1115beb582287c26c3578ac5155b955d"
  },
  {
    "url": "math.html",
    "revision": "e30fc85882560953acc10d8bc6de5ead"
  },
  {
    "url": "ml.html",
    "revision": "6c3f6496611987ce2db1c0255257a833"
  },
  {
    "url": "nlp.html",
    "revision": "a96346876af7870c562a910e06053111"
  },
  {
    "url": "numpy.html",
    "revision": "54b4f5dd0bd665ff76288d532105f1b8"
  },
  {
    "url": "ops.html",
    "revision": "9e58ee19f8ca4911f97d0363fa4490dd"
  },
  {
    "url": "os.html",
    "revision": "96c044e484f2051ad9393b6359b86340"
  },
  {
    "url": "papernotes.html",
    "revision": "e031c29f0b80d83d2fb3faeca77fda6f"
  },
  {
    "url": "pl.html",
    "revision": "25148d380dde666e41f6052ef7d05af1"
  },
  {
    "url": "R.html",
    "revision": "58d11cee0cb2f90a731a31543a97132e"
  },
  {
    "url": "RL.html",
    "revision": "13635beb723c4754f3208f311486991f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "social.html",
    "revision": "3d49ded481341b248064b9072feb5315"
  },
  {
    "url": "vision.html",
    "revision": "cf3f69139e4af50179e846c0e0d21715"
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
