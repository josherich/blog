---
layout: post
title:  "Porting libigl using Emscripten, Get Started"
description: ""
date:   2019-04-22 14:02:39
categories: geometry
tags: [geometry, vision]
---

Playing around with [libigl](https://libigl.github.io/) is fun, but C++ compiling isn't. I read a fun piece about [porting doom3](http://www.continuation-labs.com/projects/d3wasm/) to browser, and decided to play around with this.

> [demo](https://josherich.github.io/libigl-web/)

> [code](https://github.com/josherich/libigl-web)

## Compiling dependency

`emcc` compiler's lookup path is `./incoming/system/include`, as a short, you could always just put the source and headers inside this folder.

## Main thread loop

Multi-threading is implemented using Web Workers, but the main thread is alwasys a window, meaning looping and polling doesn't work. I have to, like most porting will do, convert it to callback style.

```
-s USE_PTHREADS=1
-s PTHREAD_POOL_SIZE=2
```

**`SharedArrayBuffer`**

In early 2018, major browsers [disabled](https://github.com/tc39/security/issues/3) `ShareArrayBuffer` for security issues([high resolution timer allows cache-based side channel attacks](https://github.com/tc39/ecmascript_sharedmem/issues/1)) relating "Spectre" and "Meltdown", obviously people still need this to communicate between workers.

For now, Chrome is the only one among major browsers with enabling it as default. You can enable it in flag setting for others.

**Loop to Callback**

libigl run `launch_rendering()` as a forever loop with `glfwPollEvents` inside each iteration, and compute the duration for exact frame rate. For it to work in browser, where the window simply stop responding if any Javascript is running, you could easily move the rendering to callback functions(`mouse_move`, `mouse_down`, `key_down`). For animations, it still has to run as a loop.

## Using GLFW

The amazing thing about Emscripten is `glfw` works without a change(except there's a potential [bug](https://github.com/emscripten-core/emscripten/issues/8470) in `src/library_glfw.js` setting callback)

```
-s USE_GLFW=3

// support WebGL 2
-s USE_WEBGL2=1

// enable OpenGL ES 2.0 and 3.0 emulation, so that
// we have missing features in WebGL, like unbounded buffer, client-side arrays
// ES2 and ES3 flags are orthogonal
-s FULL_ES2=1
-s FULL_ES3=1
```

## OpenGL to WebGL

Surprisingly, `glPolygonMode` is missing in WebGL, frame rendering could be converted to GL_LINES, since face index and vertex are all given by the OFF mesh format.

**Migrating shader**

use version 100 for webgl or 300 for webgl2, change `in`, `out` to `attribute` and `varying`

## Debug

Useful debug flags:

```
// =1 for memory allocation errors checks
// =2 for showing function pointer information
-s ASSERTIONS=2

// ignoring calling function pointer with wrong types
-s SAFE_HEAP=1 -s ALIASING_FUNCTION_POINTERS=0

// show demangled function name
-s DEMANGLE_SUPPORT=1

// enable general debug information
-g
```

## Import file

```
--preload-file path/to/data
```

## Callback lifecycle

As the main thread is not looping forever, animation and viewer control is implemented in callback. I have to make sure objects in callback is alive outside `main()`.
