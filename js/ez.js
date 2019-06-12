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

function mouse2cord(mousePos) {
  return new Complex(mousePos.x - width / 2, -(mousePos.y - height / 2)).divide(scale);
}

var scale = 20;
/**
 * [drawExpZ draw power series]
 * @param  {[Number]} z [point on C]
 * @param  {[Number]} iter  [how many to sum]
 * @return {[null]}       [description]
 */
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

var mousePos = view.center;
var p = new Complex(3,3);
var epath = drawExpZ(p, 10);
var z = p.log();
var thetaText = new PointText({
  content: 'Point: ' + p.x + ', ' + p.y + '\n' + 'z: ' + z.x.toFixed(1) + ', ' + z.y.toFixed(1),
  justification: 'center'
});
thetaText.point = new Point(width - 40, height - 40);

/**
 * Render on mouse
 */

function onMouseMove(event) {
  mousePos = event.point;

  epath.remove();
  thetaText.remove();
  var p = mouse2cord(mousePos);
  epath = drawExpZ(p, 10);
  var z = p.log();

  thetaText = new PointText({
    content: 'Point: ' + p.x + ', ' + p.y + '\n' + 'z: ' + z.x.toFixed(1) + ', ' + z.y.toFixed(1),
    justification: 'center'
  });
  thetaText.point = new Point(width - 40, height - 40)
}
