---
layout: post
title:  "Simulating Stochastic Processes"
description: ""
date:   2019-06-12 14:02:39
categories: math
tags: [calculus, math, stochastic]
---
<script type="text/javascript" src="../../js/paper-full.min.js"></script>
<script type="text/javascript" src="../../js/normal.js"></script>
<script type="text/javascript" src="../../js/complex.js"></script>
<script type="text/paperscript" src="../../js/stochastic.js" canvas="bt"></script>

# Brownian motion


<script type="text/paperscript" canvas="bt">
  var width = view.size.width;
  var height = view.size.height;
  var origin = new Point(view.center.x, view.center.y);
  stoch.init(width, height, origin);

  drawAxis();

  var epath = stoch.drawBrownian(width);

  function onMouseMove(event) {
    epath.remove();
    mousePos = event.point;
    epath = stoch.drawBrownian(width);
  }
  
</script>

<canvas id="bt" width="450" height="450"></canvas>
<div class="image-caption">move mouse</div>




<script type="text/paperscript" canvas="bt2d">
  var width = view.size.width;
  var height = view.size.height;
  var origin = new Point(view.center.x, view.center.y);
  stoch.init(width, height, origin);

  drawAxis();

  var epath = stoch.draw2DBrownian(width);

  function onMouseMove(event) {
    epath.remove();
    mousePos = event.point;
    epath = stoch.draw2DBrownian(width);
  }
  
</script>

<canvas id="bt2d" width="450" height="450"></canvas>
<div class="image-caption">move mouse</div>

# Black-Scholes process

#

# mandelbrot

<script type="text/paperscript" canvas="fract">
  var mandelbrot = function(z) {
    var iter = 200;
    var contrast = 15
    var v = new Complex(0, 0)
    for (var i = 0; i < iter; i++) {
      v = new Complex(v*v + z)
      if (v.norm() > 2) {
        return 255 - contrast * i
      }
    }
    return 255
  }

  var width = view.size.width;
  var height = view.size.height;
  var origin = new Point(view.center.x, view.center.y);
  var xmin = -2;
  var ymin = -2;
  var xmax = 2;
  var ymax = 2;

  for (var py = 0; py < height; py++) {
    var y = py / height * (ymax - ymin) + ymin
    for (var px = 0; px < width; px++) {
      var x = px / width * (xmax - xmin) + xmin
      var z = new Complex(x, y);
      var pz = mandelbrot(z);
      var d = new Path.Circle(new Point(px, py), 0.5);
      d.fillColor = 'rgba(0,0,0,' + pz + ')';
    }
  }
  
</script>

<canvas id="fract" width="450" height="450"></canvas>
<div class="image-caption">move mouse</div>