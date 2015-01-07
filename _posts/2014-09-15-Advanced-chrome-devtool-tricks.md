---
layout: post
title:  "Advanced Chrome Devtool Tricks"
description: "advanced Chrome devtool tricks (from the talk Advanced Debugging Techniques with Chrome - @Scale 2014 - Web)"
date:   2014-09-15 20:02:39
categories: FrontEnd
tags: [FrontEnd, Chrome]
---

summary from the talk [Advanced Debugging Techniques with Chrome - @Scale 2014 - Web][http://www.youtube.com/watch?v=B63jNjSVEbQ]

I'm glad to see that Chrome learned some UX tricks from Sublime and some great IDEs. I could imagine that Chrome Devtool would be a Web IDE in the near future, with a great plugin community. Everything fancy on Sublime would be available on it.
Though Atom Editor did a great job on Node.js integration and modular design, there is no reason Chrome team can't catch up and release a Chrome Dev version like Firefox. Embedded plugin market like that of Sublime should not be too hard to implement, since plugin via extension is already there.

1.workspace liveEdit:
     here is the workflow: break on exception -> edit some code and fix bug -> save and recompile, then function get restarted

2.map to file system resource:
     click sources tab, right click a file, select ‘map to file system resources...’

3.network domain filter:

4.Async callstacks support:

5.framework code blackballing:
     ignore the framework code like backbone.js when debugging

6.debug(function):
     say you want debug a function named “myFunc”, execute debug(myFunc) in devtool console, debugger will stop when entering myFunc

7.monitor function and events:
     in devtool console:


8.copy(obj):
     in devtool console: copy(obj) and you get a nice formatted string of that obj in pasteboard, no need to JSON.stringify(obj)

9.break on access:
     stop whenever something being changed, or read
     https://github.com/paulirish/break-on-access

10.worker view: full debugging feature for workers

11.flamechart in JS profiling

12.mobile mode screencast: see live screencast on your mobile device when debugging in chrome devtool

13.mobile mode network condition emulation

14.memory info: dir(performance.memory)

15.window.onerror = function(message, file, line, col, error) {
     console.log(‘message’, “from”, error.stack)
}

16.analyse requests:
     resource timing: analysis report of each resource request, like stylesheets, scripts, fonts, images
     https://developer.chrome.com/devtools/docs/network
     performance.getEntriesByType(‘resource’)[0]:


     user timing:
     write your own marks to track a certain period in your code,
     and measure it,
     get the result from  performance.getEntriesByType(‘measure’)

     http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
     performance.mark
     performance.measure
     performance.getEntriesByType(‘measure’)


17.CPU cores:

     navigator.hardwareConcurrency

18.GPU info:

          can = document.createElement('canvas')
          gl = can.getContext("experimental-webgl")
               WebGLRenderingContext {
                    drawingBufferHeight: 150,
                    drawingBufferWidth: 300,
                    canvas: canvas,
                    activeTexture: function,
                    attachShader: function…}

          ex = gl.getExtension('WEBGL_debug_renderer_info')
               WebGLDebugRendererInfo {UNMASKED_VENDOR_WEBGL: 37445, UNMASKED_RENDERER_WEBGL: 37446}
          gl.getParameter(ex.UNMASKED_VENDOR_WEBGL)
               "Intel Inc."
          gl.getParameter(ex.UNMASKED_RENDERER_WEBGL)
               "Intel Iris Pro OpenGL Engine”

19. keys(window)

20. $0 current selected element in the elements panel, $_ result of last call

21. command-shift-p: jump to function