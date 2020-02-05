---
layout: post
title:  "Browser Parallel Benchmark"
description: ""
date:   2019-06-29 14:02:39
categories: cs
tags: [worker, browser, cs, parallel]
---

<script type="text/javascript" src="../../js/paper-full.min.js"></script>

<script type="text/paperscript" canvas="heat">
  window.group = new Group();
  window.renderPoints = function(points) {

    group.removeChildren();
    for (var i = 0; i < points.length; i++) {
      for (var j = 0; j < points[i].length; j++) {
        if (i % 10 == 0 && j % 10 == 0) {
          var dot = new Path.Circle(new Point(Math.floor(j/3), Math.floor(i/3)), 1);
          dot.fillColor = new Color(0, 0, 0, points[i][j]*0.01);
          group.addChild(dot);
        }
      }
    }
  };

</script>

<div class="counter"></div>
<canvas id="heat" width="450" height="450"></canvas>

<script type="module">
  import * as Comlink from "https://unpkg.com/comlink@alpha/dist/esm/comlink.mjs";
  // import * as Comlink from "../../../dist/esm/comlink.mjs";
  async function init() {
    const worker = new Worker("../js/worker.js");
    // WebWorkers use `postMessage` and therefore work with Comlink.
    const obj = Comlink.wrap(worker);
    
    await obj.init();

    for (let i = 0; i < 100; i++) {
      await obj.run();
      let temperature = await obj.temperature;
      renderGrid(temperature);
      document.querySelector('.counter').textContent = `iteration ${i}`

      // await new Promise(resolve => {
      //   setTimeout(() => resolve(), 1000);
      // });
    }
  }

  init();

  let renderGrid = (temp) => {
    renderPoints(temp);
  }
</script>