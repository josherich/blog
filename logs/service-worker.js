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
    "revision": "1375e3935c87408d3cae75719db0f465"
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
    "url": "assets/js/10.6ee1f944.js",
    "revision": "e8e79b50bc8874664122547cde2bd236"
  },
  {
    "url": "assets/js/11.1dcbfe02.js",
    "revision": "57c2daae9e847fb2c1ea0ac6e9bacdef"
  },
  {
    "url": "assets/js/12.d3349a11.js",
    "revision": "6117ad5701f8a0aa97733dfeb22a0bba"
  },
  {
    "url": "assets/js/13.1eba8aed.js",
    "revision": "affb9e1fa3dab89198e1aa53d4482098"
  },
  {
    "url": "assets/js/14.6f2a483a.js",
    "revision": "f3299fa7b9547556a061a245f4b02104"
  },
  {
    "url": "assets/js/15.48dfd4f0.js",
    "revision": "7d18e215205d218311f2f5ceef24085c"
  },
  {
    "url": "assets/js/16.2ac64539.js",
    "revision": "15be8eeb68d751ebd760e723ed42b008"
  },
  {
    "url": "assets/js/17.44da7489.js",
    "revision": "bd82b53866b4102df7ce0e7192816232"
  },
  {
    "url": "assets/js/18.9cb06127.js",
    "revision": "81eb4bbe9f6ace2af1e402db716ce733"
  },
  {
    "url": "assets/js/19.b32ed6c5.js",
    "revision": "873813ca2c4657dc4bd2e54e55204b1c"
  },
  {
    "url": "assets/js/2.df7b45b5.js",
    "revision": "ef77d225afac9ba3d0c69a55fb0fa69d"
  },
  {
    "url": "assets/js/20.f10b8234.js",
    "revision": "7cfb02a33bf8052565f3ffd2bc842328"
  },
  {
    "url": "assets/js/21.698aa962.js",
    "revision": "40897a98281cf84c6c15e02eb972f221"
  },
  {
    "url": "assets/js/22.97dd9d96.js",
    "revision": "5278ae00a2fc85a9821be8edfe6b034d"
  },
  {
    "url": "assets/js/23.8b2539d1.js",
    "revision": "347ca5f7fb34499e6ae073807c114c18"
  },
  {
    "url": "assets/js/24.cd165e8d.js",
    "revision": "2cfe6bd17eb69dacb03554f0489662ef"
  },
  {
    "url": "assets/js/25.95cc12a6.js",
    "revision": "0b24de2bae323633921a2fa3eaf22143"
  },
  {
    "url": "assets/js/26.2db97423.js",
    "revision": "1267721121c1a32148fbe8d5b12da26b"
  },
  {
    "url": "assets/js/27.64351e96.js",
    "revision": "7441990e6bba3ded3c1bbcec0ef2004c"
  },
  {
    "url": "assets/js/3.4c64b374.js",
    "revision": "1114f47bac2a655846f50c9d57d0fcbf"
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
    "url": "assets/js/6.7c374580.js",
    "revision": "5a3df26454dc39a070a405f96768986d"
  },
  {
    "url": "assets/js/7.6f1394ec.js",
    "revision": "985d177b7b99e1cb94557779e20deec2"
  },
  {
    "url": "assets/js/8.be872a8f.js",
    "revision": "542c121b7d600094f257e3bec8d12308"
  },
  {
    "url": "assets/js/9.6deaf343.js",
    "revision": "d4f07a6e87c398cd703523b198e578c5"
  },
  {
    "url": "assets/js/app.0e9f5839.js",
    "revision": "ae343f4d5d8985c42e59c15e2700535f"
  },
  {
    "url": "cloud.html",
    "revision": "3377d04564f2981a06ab828a44f0d3aa"
  },
  {
    "url": "cs.html",
    "revision": "7f5c42ba33720c8534a3587845233c03"
  },
  {
    "url": "database.html",
    "revision": "c049770e05e86c86d57b905548f7dc1c"
  },
  {
    "url": "draw.html",
    "revision": "bb562d4d611a55bf36f91a70f43078e0"
  },
  {
    "url": "frontend.html",
    "revision": "e246aea22115624a8ab2fe4b54c575e8"
  },
  {
    "url": "gaming.html",
    "revision": "60a5c7762462ad31150572cd4964a0fc"
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
    "revision": "2066b4006255fc93c2e4d1317e74ea05"
  },
  {
    "url": "josherich.html",
    "revision": "c32980b99a7a8478c2433a9de81cc30a"
  },
  {
    "url": "languages.html",
    "revision": "8f60c4f9105a37d50d993d22bd4499e1"
  },
  {
    "url": "logo.png",
    "revision": "631a3caddfdb97ccbab4c449701691a4"
  },
  {
    "url": "logs.html",
    "revision": "58e7e54b146bd022d58a24547ee5a0dd"
  },
  {
    "url": "math.html",
    "revision": "d449feaef9d4ff5633f8598993a79a2f"
  },
  {
    "url": "ml.html",
    "revision": "1115fada8bf62caf5cc8bde78f4091c4"
  },
  {
    "url": "nlp.html",
    "revision": "5377f6f979e600d7251e59b548002c65"
  },
  {
    "url": "numpy.html",
    "revision": "1016c20c302806a0e14ddd1f0f1a16cc"
  },
  {
    "url": "ops.html",
    "revision": "50d030e88d26c366d4680b031407f3ec"
  },
  {
    "url": "os.html",
    "revision": "450d28c69b44bbf5ee836fa6af5b9c37"
  },
  {
    "url": "papernotes.html",
    "revision": "a66c50b9b433ac0b6b20de26e3cbdcd5"
  },
  {
    "url": "pl.html",
    "revision": "880626577973af45322dbe4b261bd1ab"
  },
  {
    "url": "R.html",
    "revision": "3c5b793d6e605ae57e162c2601e05a54"
  },
  {
    "url": "RL.html",
    "revision": "a615aad6139c3413f60aab2f473cc877"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "social.html",
    "revision": "6919498c861d7c921c09c88cf5706b14"
  },
  {
    "url": "vision.html",
    "revision": "aa932bcc85ab0a6e84796b98ad252095"
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
