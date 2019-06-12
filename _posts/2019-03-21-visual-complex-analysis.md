---
layout: post
title:  "Euler's formula as power series"
description: ""
date:   2019-03-21 14:02:39
categories: math
tags: [geometry, math, vision]
---

<script type="text/javascript" src="../../js/paper-full.min.js"></script>
<script type="text/javascript" src="../../js/visual-complex.js"></script>
<script type="text/paperscript" src="../../js/ei.js" canvas="ei"></script>
<script type="text/paperscript" src="../../js/ez.js" canvas="ez"></script>

# Visualize Euler's Formula

$$e^{i\theta}$$ is the points on unit circle, at angle $$\theta$$, here is a visualization of how such circle is derived from the sum of power series:

Assume we have a function with the property of its derivative is equal to itself, just as $$\frac{d}{dx}e^x = e^x$$, such function should have the form:

$$ f(x) = e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ... $$

Expand to complex number $$i\theta$$:

$$ e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + ...$$

Draw these complex numbers as vectors on complex plane, we have a end point for each $$\theta$$, and a unit circle with all $$\theta$$s

<canvas id="ei" width="450" height="450"></canvas>
<div class="image-caption">move mouse horizontally to draw the circle</div>

# Complex number as a Power Series

Any point on C plane can be written as

$$
  a = x + iy = e^z = 1 + z + \frac{1}{2!}z^2 + \frac{1}{3!}z^3 + ...
$$

Let's first compute the value of z using complex logarithm:

$$ z = log(a) = log(\vert a \vert) + i\arctan(a) $$

each term in the series is a vector, we add up these vectors to recover a in complex plane.

<canvas id="ez" width="450" height="450"></canvas>
<div class="image-caption">move mouse to draw the vectors</div>

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


function drawExpZ(z, iter) {
  // res = 1 + z
  var w = z.log();
  var res = new Complex(1 * scale, 0).add(w * scale);
  var w_pow = new Complex(w);

  var path = new Path();
  path.strokeColor = 'black';
  path.add(origin);
  path.add(cord(new Complex(1 * scale, 0)));

  for (var i = 2; i < iter; i++) {
    path.add(cord(res));

    w_pow = w_pow.multiply(w);
    res = res.add(w_pow.divide(factorial(i)) * scale);
    path.add(cord(res));
  }
  return path;
}
~~~

<!-- 
<script type="text/javascript" src="../../js/three.js"></script>
<script type="text/javascript" src="../../js/drag-controls.js"></script>
<script type="text/javascript" src="../../js/orbit-controls.js"></script>
<script type="text/javascript" src="../../js/env.js"></script> -->
<!-- <script type="text/javascript" src="../../js/gdp.js" ccd="enabled" hinge="enabled" limits="enabled" orbit="enabled"></script> -->
