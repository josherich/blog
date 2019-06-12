var width = view.size.width;
var height = view.size.height;
var padding = 40;
var path = new Path();
path.strokeColor = 'black';

var xa = new Path();
var ya = new Path();
xa.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });
ya.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });

xa.add(new Point(0, height/2), new Point(width, height/2));
ya.add(new Point(width/2, 0), new Point(width/2, height));

var origin = view.center;

/**
 * [complex a+ib => cord (x,y)]
 * @param  {[Complex]} p [description]
 * @return {[paper.Point]}   [description]
 */
function cord(p) {
  return new Complex(p).conjugate() + origin;
}

function drawRotation(r, theta, delta) {
  for (var i = theta; i <= theta + Math.PI; i += delta) {
    var path = new Path();
    path.strokeColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });

    var p = new Complex();
    p.init_r(r, i);

    path.add(origin, cord(p));
  }
}

/**
 * [drawETheta draw power series]
 * @param  {[Number]} theta [theta of point on circle]
 * @param  {[Number]} iter  [how many to sum]
 * @param  {[Number]} scale [circle scale]
 * @return {[null]}       [description]
 */
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
  var dot = new Path.Circle(cord(res * scale), 1);
  dot.fillColor = 'black';
  return path;
}

var mousePos = view.center;
var epath = drawETheta(0, 20, 30);
var thetaText = new PointText({
  content: 'Theta: 0',
  justification: 'center'
});
thetaText.point = new Point(width - 40, height - 40);

/**
 * Render on mouse
 */

// render every 5 frames
var count = 5
// drawing
var pencildown = false;

function onMouseMove(event) {
  mousePos = event.point;
  if (pencildown) {
    if (count < 0) {
      // path.add(new Point(mousePos.x, mousePos.y));
      var step = event.delta / 2;
      step.angle += 90;

      var top = event.middlePoint + step;
      var bottom = event.middlePoint - step;

      path.add(top);
      path.insert(0, bottom);

      path.smooth()
      count = 5
    } else {
      count--
    }
  } else {
    if (count < 0) {
      epath.remove();
      thetaText.remove();
      theta = 2 * Math.PI * (mousePos.x - padding) / (width - 2 * padding)
      epath = drawETheta(theta, 20, 30);
      thetaText = new PointText({
        content: 'Theta: ' + (theta * 360 / (2 * Math.PI)).toFixed(1),
        justification: 'center'
      });
      thetaText.point = new Point(width - 40, height - 40)
    } else {
      count--;
    }
  }
}

function onMouseDown(event) {
  pencildown = true;
  path = new Path();
  path.fillColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });
  path.strokeColor = 'black';
}

function onMouseUp(event) {
  pencildown = false;
  path.simplify()
}

// window.onDrawETheta = function(i, steps) {
//   epath.remove();
//   thetaText.remove();  
//   theta = 2 * Math.PI * (i / steps)
//   epath = drawETheta(theta, 20, 30);
//   thetaText = new PointText({
//     content: 'Theta: ' + (theta * 360 / (2 * Math.PI)).toFixed(1),
//     justification: 'center'
//   });
//   thetaText.point = new Point(width - 40, height - 40)
// }

// var steps = 100
// var rate = 50
// for (var i = 1; i <= steps; i++) {
//   (function(i) {
//     setTimeout(function() {
//       onDrawETheta(i, steps)
//     }, rate*i)
//   })(i)
// }
