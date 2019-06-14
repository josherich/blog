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
var scale = 50;
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

/**
 * [drawExpZ draw power series]
 * @param  {[Number]} z [point on C]
 * @return {[null]}       [description]
 */
function drawInverse(p) {
  var dot = new Path.Circle(cord(p * scale), 1);
  dot.fillColor = 'black';

  var inv = p.inverse();

  var doti = new Path.Circle(cord(inv * scale), 1);
  doti.fillColor = 'red';
}

/**
 * Render on mouse
 */

 var thetaText = new PointText({
   content: '',
   justification: 'center'
 });
 thetaText.point = new Point(width - 40, height - 40);

function onMouseMove(event) {
  mousePos = event.point;

  thetaText.remove();
  var p = mouse2cord(mousePos);
  drawInverse(p);
  var inv = p.inverse();

  thetaText = new PointText({
    content: 'z: ' + p.x + ', ' + p.y + '\n' + '1/z: ' + inv.x.toFixed(1) + ', ' + inv.y.toFixed(1),
    justification: 'center'
  });
  thetaText.point = new Point(width - 40, height - 40)
}
