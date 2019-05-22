## wasm

> head

Every wasm module starts with a magic number \0asm (ie: []byte{0x00, 0x61, 0x73, 0x6d}) and then a version number (0x1 at the moment.)

> section

[sections in module](https://webassembly.github.io/spec/core/binary/modules.html)
[wasm intro](https://rsms.me/wasm-intro)

## emscripten

run `source ./emsdk_env.sh` each time

**generate HTML**

emcc tests/hello_world.c -o hello.html

**SDL**

```cpp
// Copyright 2011 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <stdio.h>
#include <SDL/SDL.h>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

extern "C" int main(int argc, char** argv) {
  printf("hello, world!\n");

  SDL_Init(SDL_INIT_VIDEO);
  SDL_Surface *screen = SDL_SetVideoMode(256, 256, 32, SDL_SWSURFACE);

#ifdef TEST_SDL_LOCK_OPTS
  EM_ASM("SDL.defaults.copyOnLock = false; SDL.defaults.discardOnLock = true; SDL.defaults.opaqueFrontBuffer = false;");
#endif

  if (SDL_MUSTLOCK(screen)) SDL_LockSurface(screen);
  for (int i = 0; i < 256; i++) {
    for (int j = 0; j < 256; j++) {
#ifdef TEST_SDL_LOCK_OPTS
      // Alpha behaves like in the browser, so write proper opaque pixels.
      int alpha = 255;
#else
      // To emulate native behavior with blitting to screen, alpha component is ignored. Test that it is so by outputting
      // data (and testing that it does get discarded)
      int alpha = (i+j) % 255;
#endif
      *((Uint32*)screen->pixels + i * 256 + j) = SDL_MapRGBA(screen->format, i, j, 255-i, alpha);
    }
  }
  if (SDL_MUSTLOCK(screen)) SDL_UnlockSurface(screen);
  SDL_Flip(screen); 

  printf("you should see a smoothly-colored square - no sharp lines but the square borders!\n");
  printf("and here is some text that should be HTML-friendly: amp: |&| double-quote: |\"| quote: |'| less-than, greater-than, html-like tags: |<cheez></cheez>|\nanother line.\n");

  SDL_Quit();

  return 0;
}
```

**load file using stdio**

```cpp
// Copyright 2012 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <stdio.h>
int main() {
  FILE *file = fopen("tests/hello_world_file.txt", "rb");
  if (!file) {
    printf("cannot open file\n");
    return 1;
  }
  while (!feof(file)) {
    char c = fgetc(file);
    if (c != EOF) {
      putchar(c);
    }
  }
  fclose (file);
  return 0;
}
```

**debug on get, set**

> https://github.com/paulirish/break-on-access

```javascript
Object.defineProperty(twttr, 'profile', {
    get: function () {
      debugger
    }
  , set: function (val) {
      debugger
    }
})
```