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
    "revision": "c52dd56ebca29dff464a8d801f12f9aa"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "assets/css/0.styles.7ecac9b5.css",
    "revision": "ded5a4e773eb85b1000cd2888517af7d"
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
    "url": "assets/js/10.f3f37999.js",
    "revision": "97ceed6bcd95bc3da1442a391e419915"
  },
  {
    "url": "assets/js/11.6c51e49a.js",
    "revision": "b067488594f08dd82a1cc79c5ec51ce5"
  },
  {
    "url": "assets/js/12.cedf0acc.js",
    "revision": "7d62f3cd340ab7d9fce8bb618d6b8dc3"
  },
  {
    "url": "assets/js/13.c0aac8b3.js",
    "revision": "b9a0d6a796accd623de90197b33224f3"
  },
  {
    "url": "assets/js/14.e515f413.js",
    "revision": "8a1fb4f9aa5f2833611d078e05236dda"
  },
  {
    "url": "assets/js/15.a7156ace.js",
    "revision": "fdcc9273b4e9b2e0f78048e95aec29ec"
  },
  {
    "url": "assets/js/16.86da6cc3.js",
    "revision": "6765d3d644f2040f7fdfaf86d1a6746d"
  },
  {
    "url": "assets/js/17.5064e897.js",
    "revision": "7a1a41562d8bec1d95753e5f95e247a5"
  },
  {
    "url": "assets/js/18.efc70e0b.js",
    "revision": "289f53f64a560d9a13661ad48a860c13"
  },
  {
    "url": "assets/js/19.7c20638b.js",
    "revision": "eb9c72b9aa2c3a4c7c26bd153b99157a"
  },
  {
    "url": "assets/js/2.df7b45b5.js",
    "revision": "ef77d225afac9ba3d0c69a55fb0fa69d"
  },
  {
    "url": "assets/js/20.d024c098.js",
    "revision": "93c3f4a690ad3ad534687c58b787ba27"
  },
  {
    "url": "assets/js/21.d4a62b38.js",
    "revision": "e97ba049c4cf06ccd398d47402f80dc6"
  },
  {
    "url": "assets/js/22.e6e36746.js",
    "revision": "403aac5550a1a5b575c8f2fad4c5b225"
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
    "url": "assets/js/25.7bf13951.js",
    "revision": "af4b25c7d2781f62e67f19d4c36bda6b"
  },
  {
    "url": "assets/js/26.2671bacd.js",
    "revision": "ef663e9519fa8e50e840cc8d6b9e4add"
  },
  {
    "url": "assets/js/27.92c9d814.js",
    "revision": "ec0a299298502434fe9f5149ca73fb3e"
  },
  {
    "url": "assets/js/28.7a8e5cd1.js",
    "revision": "810112264e58cf433492846f9f7a4261"
  },
  {
    "url": "assets/js/3.a5d03b9a.js",
    "revision": "4881b3cf441b6a140d7e83ed1f48d1e6"
  },
  {
    "url": "assets/js/4.75b1ce8e.js",
    "revision": "2f94b319b9e2ca11eacfda691b5e952c"
  },
  {
    "url": "assets/js/5.27eaf9c7.js",
    "revision": "91a343bde2554cf8cca4ef376ebe6018"
  },
  {
    "url": "assets/js/6.7f5d89f0.js",
    "revision": "b931b676e76a95e1563223edbbdd8ec5"
  },
  {
    "url": "assets/js/7.4ca882b0.js",
    "revision": "d5312799424173a31e5e8feb474f2072"
  },
  {
    "url": "assets/js/8.03ef91ae.js",
    "revision": "3aeb4715ee52d854e12d4f83cf6f6380"
  },
  {
    "url": "assets/js/9.dce7702f.js",
    "revision": "37032d17cb5590dd23cfb21b4f5eb400"
  },
  {
    "url": "assets/js/app.f98c735d.js",
    "revision": "7d226d83201b6dcf4b4f28d3c1f00d91"
  },
  {
    "url": "cloud.html",
    "revision": "99dbb05397e12f9e27a7251f30323bac"
  },
  {
    "url": "cpp.html",
    "revision": "307c81a5e17aca1d875e23528e867ac3"
  },
  {
    "url": "cs.html",
    "revision": "c0f94661eafb010a12bd4a1387bb131e"
  },
  {
    "url": "database.html",
    "revision": "79c4ada67cb42926df76d0cdac42ead0"
  },
  {
    "url": "draw.html",
    "revision": "bee14f0ef737cbe93a7649cb7c56b13a"
  },
  {
    "url": "frontend.html",
    "revision": "82d8d7b1d04a4ed74900328cd056c114"
  },
  {
    "url": "gaming.html",
    "revision": "0a946001874c00132e9f4ef96fd886d9"
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
    "revision": "63342bbc1ea17424c389adb5fa4d6090"
  },
  {
    "url": "josherich.html",
    "revision": "6bdd6d5873cb2c91838a753738edd61c"
  },
  {
    "url": "languages.html",
    "revision": "f5992ac61498a9ab3a33464ad4278d45"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "091bd5c29f37cb0f8df00d32b9834e1b"
  },
  {
    "url": "math.html",
    "revision": "d7bcebc0d8a1a258143256278f634350"
  },
  {
    "url": "ml.html",
    "revision": "9e8b1d3ed789e6ad06de241e8611a44d"
  },
  {
    "url": "nlp.html",
    "revision": "156da06a4d699fb790dc90eba1448b30"
  },
  {
    "url": "numpy.html",
    "revision": "ef34f84543570c56a1322f6f78073e4f"
  },
  {
    "url": "ops.html",
    "revision": "efa57560e780ad56723d05686624b8db"
  },
  {
    "url": "os.html",
    "revision": "1dacdef74c83095c32ad10eae2556919"
  },
  {
    "url": "papernotes.html",
    "revision": "ea34e5731010f6aac13360885661c10a"
  },
  {
    "url": "pl.html",
    "revision": "e0ae4b437f44d3a77292d7f567029299"
  },
  {
    "url": "R.html",
    "revision": "59fdbcfd9448539349d035fadd5d72eb"
  },
  {
    "url": "RL.html",
    "revision": "dff34825c4c04f1818f9d589276497c4"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "social.html",
    "revision": "5219a828d9cc275fcc89d978f7112de3"
  },
  {
    "url": "vision.html",
    "revision": "481a672c52fc4df42a354099b5d9ee3c"
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
