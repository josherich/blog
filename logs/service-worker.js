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
    "revision": "b9fea4405aa2646f2d027c85759890f2"
  },
  {
    "url": "api.html",
    "revision": "67094294366e583ae6355f55fbcacce4"
  },
  {
    "url": "assets/css/0.styles.8fc14f09.css",
    "revision": "4bd07fa4f9f728524070f4bf9bcd1905"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6c3fe2d.js",
    "revision": "d492aed5ec69102de1f32e1170926f57"
  },
  {
    "url": "assets/js/11.5b84baed.js",
    "revision": "9bdcf0e58ae4c271bfca394f30f5fa00"
  },
  {
    "url": "assets/js/12.8fc480c4.js",
    "revision": "294eff6b512527e368f2d05e32b274d6"
  },
  {
    "url": "assets/js/13.9943c4f9.js",
    "revision": "91cb8fcfbf0fd89fb2eebac3337ee50d"
  },
  {
    "url": "assets/js/14.97e9ce17.js",
    "revision": "7f0b7ff27966a3940af8bc099ce285e4"
  },
  {
    "url": "assets/js/15.c8ff130d.js",
    "revision": "e4091187c88cae2145b30e05f07bb5ad"
  },
  {
    "url": "assets/js/16.7f9315ec.js",
    "revision": "025603536ad00881f093f40957292737"
  },
  {
    "url": "assets/js/17.d73b1737.js",
    "revision": "f79473b7aa212f9d93370ed0af8399d7"
  },
  {
    "url": "assets/js/3.3fc94f5c.js",
    "revision": "d3d1627a85218b4b70e36d2e2df96409"
  },
  {
    "url": "assets/js/4.2bb00080.js",
    "revision": "a5043635fdc64c534964a60ecbbc27d6"
  },
  {
    "url": "assets/js/5.5908965c.js",
    "revision": "5022b9d63690e1f9cd0456061e62c758"
  },
  {
    "url": "assets/js/6.61bc6cee.js",
    "revision": "be7cbb710eef20a577e807bed2739b04"
  },
  {
    "url": "assets/js/7.bb6f06a9.js",
    "revision": "458e00b45836a35561eaa8ae93481197"
  },
  {
    "url": "assets/js/8.335b05f4.js",
    "revision": "c39d8a2b5b680e7a84c45c783cd1b674"
  },
  {
    "url": "assets/js/9.3473b1ab.js",
    "revision": "c5fabda428966da064024d1cea2444eb"
  },
  {
    "url": "assets/js/app.21c88631.js",
    "revision": "c69c3019f42e8a22e567657b3c556c38"
  },
  {
    "url": "assets/js/vendors~docsearch.b99959b5.js",
    "revision": "b1b23a20f350ca13e06c30580e6e5063"
  },
  {
    "url": "context.html",
    "revision": "472a0c06e2120a4e97670aeb831c6906"
  },
  {
    "url": "faq.html",
    "revision": "cf11658bf0b08395ace43e79a16d96e3"
  },
  {
    "url": "index.html",
    "revision": "e21468b388d2b9a8f55154d6039ba1ed"
  },
  {
    "url": "install/index.html",
    "revision": "cb40ffd245b6d469b2a66d13f7c6ff86"
  },
  {
    "url": "joinus/index.html",
    "revision": "f1f27173a91acab468782c73ee1704d8"
  },
  {
    "url": "others.html",
    "revision": "af35d70e713c8a4887e2974fb88f6e34"
  },
  {
    "url": "state-council.html",
    "revision": "ed1c0c88800f1eeb4b4b0e01115a338b"
  },
  {
    "url": "state-org.html",
    "revision": "fb154bebcdaa7d570247f103902f0b0a"
  },
  {
    "url": "support/index.html",
    "revision": "4af0a4e0f330477c47b506cf2b59985e"
  },
  {
    "url": "todos.html",
    "revision": "d5270d8bc06aadc16e376e888fac4b99"
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
