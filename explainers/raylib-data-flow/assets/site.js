(function () {
  function all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function setDetails(open) {
    all("details").forEach(function (detail) {
      detail.open = open;
    });
  }

  function setupControls() {
    var expand = document.querySelector("[data-expand-all]");
    var collapse = document.querySelector("[data-collapse-all]");
    if (expand) {
      expand.addEventListener("click", function () {
        setDetails(true);
      });
    }
    if (collapse) {
      collapse.addEventListener("click", function () {
        setDetails(false);
      });
    }
  }

  function setupSearch() {
    var input = document.querySelector("[data-search]");
    var count = document.querySelector("[data-search-count]");
    if (!input) return;

    var searchable = all(".searchable");
    function filter() {
      var query = input.value.trim().toLowerCase();
      var visible = 0;
      searchable.forEach(function (item) {
        var matches = !query || item.textContent.toLowerCase().indexOf(query) !== -1;
        item.classList.toggle("hidden", !matches);
        if (matches) visible += 1;
      });
      if (count) {
        count.textContent = query ? visible + " matching blocks" : searchable.length + " blocks";
      }
    }
    input.addEventListener("input", filter);
    filter();
  }

  function setupFlowFocus() {
    all("[data-flow-step]").forEach(function (step) {
      step.addEventListener("click", function () {
        var key = step.getAttribute("data-flow-step");
        all("[data-flow-step]").forEach(function (item) {
          item.classList.toggle("is-active", item.getAttribute("data-flow-step") === key);
        });
        all("[data-flow-target]").forEach(function (item) {
          var active = item.getAttribute("data-flow-target") === key;
          item.classList.toggle("is-active", active);
          if (active && item.tagName === "DETAILS") item.open = true;
        });
        var target = document.querySelector('[data-flow-target="' + key + '"]');
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    });
  }

  var archData = {
    app: {
      title: "Your game (main)",
      body: "You write main(), own the loop, and call InitWindow / BeginDrawing / EndDrawing. raylib does not embed a game loop or scene graph."
    },
    rcore: {
      title: "rcore.c",
      body: "Window lifecycle, CORE global state (input, timing, window flags), file I/O, InitWindow/CloseWindow, BeginDrawing/EndDrawing. Platform code is #include'd into this file."
    },
    rlgl: {
      title: "rlgl.h",
      body: "OpenGL abstraction layer. Immediate-mode rlBegin/rlVertex/rlEnd backed by VBO batching on GL 3.3 and ES2. Owns default shader, 1×1 white texture, and render batch."
    },
    rshapes: {
      title: "rshapes.c",
      body: "DrawRectangle, DrawCircle, 2D collisions. All shapes emit textured quads into the rlgl batch (even solid colors)."
    },
    rtextures: {
      title: "rtextures.c",
      body: "Image in RAM (stb_image, qoi), Texture2D in VRAM (rlLoadTexture), DrawTexturePro, render textures."
    },
    rtext: {
      title: "rtext.c",
      body: "Font loading (TTF/FNT), DrawText. Each glyph is a DrawTexturePro call into the same batch as shapes."
    },
    rmodels: {
      title: "rmodels.c",
      body: "LoadModel (OBJ, glTF, IQM…), UploadMesh to VAO/VBO, DrawMesh with shaders. 3D bypasses the 2D batch."
    },
    raudio: {
      title: "raudio.c",
      body: "miniaudio device + linked-list AudioBuffer mixing in OnSendAudioDataToDevice. Opt-in via InitAudioDevice."
    },
    platform: {
      title: "platforms/rcore_*.c",
      body: "GLFW (default desktop), SDL, RGFW, Win32, Web, DRM, Android, Memory. Selected at compile time via PLATFORM_* defines."
    }
  };

  function setupArchMap() {
    var map = document.querySelector("[data-arch-map]");
    if (!map) return;

    var detailTitle = document.querySelector("[data-arch-title]");
    var detailBody = document.querySelector("[data-arch-body]");

    all("[data-arch-node]", map).forEach(function (node) {
      node.addEventListener("click", function () {
        var key = node.getAttribute("data-arch-node");
        all("[data-arch-node]", map).forEach(function (n) {
          n.classList.toggle("is-active", n.getAttribute("data-arch-node") === key);
        });
        var info = archData[key];
        if (info && detailTitle && detailBody) {
          detailTitle.textContent = info.title;
          detailBody.textContent = info.body;
        }
      });
    });

    var first = map.querySelector("[data-arch-node]");
    if (first) first.click();
  }

  function setupFrameDemo() {
    var canvas = document.querySelector("[data-frame-demo]");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var step = 0;
    var frame = 0;
    var batchVerts = 0;
    var running = false;
    var animId = null;

    var steps = [
      { label: "Poll input", color: "#1a5c8a" },
      { label: "BeginDrawing", color: "#0e8a3e" },
      { label: "Draw calls", color: "#6a8a0e" },
      { label: "Flush batch", color: "#8a5c0e" },
      { label: "Swap buffers", color: "#8a3a0e" },
      { label: "Wait FPS", color: "#5c3a8a" }
    ];

    function resize() {
      var wrap = canvas.parentElement;
      var w = wrap.clientWidth;
      var h = wrap.clientHeight;
      canvas.width = w * (window.devicePixelRatio || 1);
      canvas.height = h * (window.devicePixelRatio || 1);
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    }

    function drawScene() {
      var w = canvas.width / (window.devicePixelRatio || 1);
      var h = canvas.height / (window.devicePixelRatio || 1);
      ctx.fillStyle = "#245324";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(8, 8, w - 16, h - 16);

      var cx = w / 2;
      var cy = h / 2 + 10;

      if (step >= 2) {
        ctx.fillStyle = "#0e8a3e";
        ctx.fillRect(cx - 70, cy - 30, 140, 60);
        batchVerts += 4;
      }
      if (step >= 2) {
        ctx.fillStyle = "#c8e6c9";
        ctx.font = "14px sans-serif";
        ctx.fillText("DrawText + shapes", cx - 55, cy + 5);
        batchVerts += 4;
      }
      if (step >= 3) {
        ctx.strokeStyle = "#ffd54f";
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 72, cy - 32, 144, 64);
      }

      var barY = 24;
      steps.forEach(function (s, i) {
        var active = i === step;
        var done = i < step;
        ctx.fillStyle = done ? s.color : active ? s.color : "#444";
        ctx.globalAlpha = active ? 1 : done ? 0.85 : 0.35;
        ctx.fillRect(16, barY + i * 22, w - 32, 18);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.font = "11px sans-serif";
        ctx.fillText(s.label, 22, barY + i * 22 + 13);
      });
    }

    function updateStats() {
      var elFrame = document.querySelector("[data-stat-frame]");
      var elStep = document.querySelector("[data-stat-step]");
      var elVerts = document.querySelector("[data-stat-verts]");
      if (elFrame) elFrame.textContent = String(frame);
      if (elStep) elStep.textContent = steps[step].label;
      if (elVerts) elVerts.textContent = step >= 3 ? "0 (flushed)" : String(batchVerts);
    }

    function tick() {
      if (!running) return;
      step = (step + 1) % steps.length;
      if (step === 0) {
        frame += 1;
        batchVerts = 0;
      }
      if (step === 2) batchVerts = 8;
      drawScene();
      updateStats();
      animId = window.setTimeout(tick, 900);
    }

    var playBtn = document.querySelector("[data-demo-play]");
    var stepBtn = document.querySelector("[data-demo-step]");
    var resetBtn = document.querySelector("[data-demo-reset]");

    if (playBtn) {
      playBtn.addEventListener("click", function () {
        running = !running;
        playBtn.textContent = running ? "Pause" : "Play loop";
        if (running) tick();
        else if (animId) window.clearTimeout(animId);
      });
    }
    if (stepBtn) {
      stepBtn.addEventListener("click", function () {
        running = false;
        if (animId) window.clearTimeout(animId);
        if (playBtn) playBtn.textContent = "Play loop";
        step = (step + 1) % steps.length;
        if (step === 0) { frame += 1; batchVerts = 0; }
        if (step === 2) batchVerts = 8;
        drawScene();
        updateStats();
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        running = false;
        if (animId) window.clearTimeout(animId);
        if (playBtn) playBtn.textContent = "Play loop";
        step = 0;
        frame = 0;
        batchVerts = 0;
        drawScene();
        updateStats();
      });
    }

    window.addEventListener("resize", function () {
      resize();
      drawScene();
    });
    resize();
    drawScene();
    updateStats();
  }

  var platformInfo = {
    glfw: {
      define: "PLATFORM_DESKTOP_GLFW",
      file: "rcore_desktop_glfw.c",
      notes: "Default desktop backend. Vendored GLFW in rglfw.c or system libglfw. glfwPollEvents in EndDrawing."
    },
    sdl: {
      define: "PLATFORM_DESKTOP_SDL",
      file: "rcore_desktop_sdl.c",
      notes: "SDL2/SDL3 window and input. CMake PLATFORM=SDL or zig build -Dplatform=sdl2."
    },
    rgfw: {
      define: "PLATFORM_DESKTOP_RGFW",
      file: "rcore_desktop_rgfw.c",
      notes: "Lightweight RGFW windowing. Also used for PLATFORM_WEB_RGFW on WebAssembly."
    },
    drm: {
      define: "PLATFORM_DRM",
      file: "rcore_drm.c",
      notes: "Linux DRM/KMS for Raspberry Pi and embedded. Often paired with GLES2."
    },
    web: {
      define: "PLATFORM_WEB",
      file: "rcore_web.c",
      notes: "Emscripten + GLFW. Built with emcmake cmake -DPLATFORM=Web."
    },
    android: {
      define: "PLATFORM_ANDROID",
      file: "rcore_android.c",
      notes: "NDK native activity. fopen wrapped for APK asset loading."
    },
    memory: {
      define: "PLATFORM_MEMORY",
      file: "rcore_memory.c",
      notes: "Headless software renderer via rlsw. No OS window."
    }
  };

  function setupPlatformPicker() {
    var grid = document.querySelector("[data-platform-grid]");
    if (!grid) return;

    var defineEl = document.querySelector("[data-platform-define]");
    var fileEl = document.querySelector("[data-platform-file]");
    var notesEl = document.querySelector("[data-platform-notes]");

    all("[data-platform]", grid).forEach(function (card) {
      card.addEventListener("click", function () {
        var key = card.getAttribute("data-platform");
        all("[data-platform]", grid).forEach(function (c) {
          c.classList.toggle("is-active", c.getAttribute("data-platform") === key);
        });
        var info = platformInfo[key];
        if (info) {
          if (defineEl) defineEl.textContent = info.define;
          if (fileEl) fileEl.textContent = info.file;
          if (notesEl) notesEl.textContent = info.notes;
        }
      });
    });

    var first = grid.querySelector("[data-platform]");
    if (first) first.click();
  }

  function setupBatchDemo() {
    var canvas = document.querySelector("[data-batch-demo]");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var rects = [];
    var flushed = false;
    var texSwaps = 0;

    function resize() {
      var wrap = canvas.parentElement;
      canvas.width = wrap.clientWidth * (window.devicePixelRatio || 1);
      canvas.height = wrap.clientHeight * (window.devicePixelRatio || 1);
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    }

    function draw() {
      var w = canvas.width / (window.devicePixelRatio || 1);
      var h = canvas.height / (window.devicePixelRatio || 1);
      ctx.fillStyle = "#1a1f1a";
      ctx.fillRect(0, 0, w, h);

      if (flushed) {
        ctx.fillStyle = "#0e8a3e";
        ctx.font = "13px sans-serif";
        ctx.fillText("Batch flushed → GPU draw call", 12, 22);
        flushed = false;
        rects = [];
      }

      rects.forEach(function (r) {
        ctx.fillStyle = r.color;
        ctx.fillRect(r.x, r.y, r.w, r.h);
      });

      var stat = document.querySelector("[data-batch-count]");
      if (stat) stat.textContent = String(rects.length * 4) + " verts";
    }

    document.querySelector("[data-batch-add]")?.addEventListener("click", function () {
      var colors = ["#0e8a3e", "#1a5c8a", "#8a5c0e", "#8a0e5c"];
      var w = canvas.width / (window.devicePixelRatio || 1);
      var h = canvas.height / (window.devicePixelRatio || 1);
      rects.push({
        x: 20 + Math.random() * (w - 80),
        y: 30 + Math.random() * (h - 60),
        w: 40 + Math.random() * 50,
        h: 24 + Math.random() * 30,
        color: colors[rects.length % colors.length]
      });
      draw();
    });

    document.querySelector("[data-batch-flush]")?.addEventListener("click", function () {
      flushed = true;
      draw();
      var dc = document.querySelector("[data-batch-dc]");
      if (dc) dc.textContent = String(parseInt(dc.textContent, 10) + 1);
    });

    document.querySelector("[data-batch-texture]")?.addEventListener("click", function () {
      texSwaps += 1;
      flushed = true;
      var ts = document.querySelector("[data-batch-tex]");
      if (ts) ts.textContent = String(texSwaps);
      draw();
    });

    window.addEventListener("resize", function () { resize(); draw(); });
    resize();
    draw();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupControls();
    setupSearch();
    setupFlowFocus();
    setupArchMap();
    setupFrameDemo();
    setupPlatformPicker();
    setupBatchDemo();
  });
})();
