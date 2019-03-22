---
layout: post
title:  "Euler's formula as power series"
description: ""
date:   2019-03-21 14:02:39
categories: math
tags: [geometry, math, vision]
---

<script type="text/javascript" src="../../js/paper-full.min.js"></script>
<script type="text/paperscript" src="../../js/visual-complex.js" canvas="distance1"></script>

$$e^{i\theta}$$ is the points on unit circle, at angle $$\theta$$, here is a visualization of how such circle is derived from the sum of power series:

Assume we have a function with the property of its derivative is equal to itself, just as $$\frac{d}{dx}e^x = e^x$$, such function should has the form:

$$ f(x) = e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ... $$

Expand to complex number $$i\theta$$:

$$ e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + ...$$

Draw these complex numbers as vectors on complex plane, we have a end point for each $$\theta$$, and a unit circle with all $$\theta$$s

<canvas id="distance1" width="350" height="350"></canvas>
<div class="image-caption">move mouse horizontally to draw the circle</div>


~~~ javascript
function drawETheta(theta, iter, scale) {
  var itheta = new Complex(0, theta);
  var res = new Complex(1, 0).add(itheta);

  var path = new Path();
  path.strokeColor = 'black';

  path.add(origin);
  path.add(cord(new Complex(1, 0) * scale));

  var itheta_pow = new Complex(itheta);

  for (var i = 2; i < iter; i++) {
    path.add(cord(res * scale));
    itheta_pow = itheta_pow.multiply(itheta);
    res = res.add(itheta_pow.divide(factorial(i)));
    path.add(cord(res * scale));
  }
  return path;
}
~~~