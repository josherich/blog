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
    "revision": "8278a19f6d324cae60045522eed7aeb5"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5bcff58d.js",
    "revision": "9fc197d6532cefa81e7ffd3c47421ad8"
  },
  {
    "url": "assets/js/3.997dc51a.js",
    "revision": "4e117f1c4bc140d0bb7504871bb50d65"
  },
  {
    "url": "assets/js/4.7715aa49.js",
    "revision": "ddd8a3da2899ed14b586e7f2168d3964"
  },
  {
    "url": "assets/js/5.abc10fce.js",
    "revision": "bdeeadb14a41018c636bec3371333e64"
  },
  {
    "url": "assets/js/6.74772aa1.js",
    "revision": "b3e66f71342e1cef21e9895fcea4e940"
  },
  {
    "url": "assets/js/7.434247c8.js",
    "revision": "f5432cd36469f00444f2190846085c7d"
  },
  {
    "url": "assets/js/app.6daaec76.js",
    "revision": "31443d142b2efb5dd8971aec58584e33"
  },
  {
    "url": "index.html",
    "revision": "d76eb2e666e25c1f9ca39d470c6c77c2"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "ea41da3b89696ad04d6e6b6619799990"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
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
