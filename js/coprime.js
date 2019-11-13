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

var scale = 1;
/**
 * [drawCorpime draw power series]
 * @param  {[Number]} z [point on C]
 * @param  {[Number]} iter  [how many to sum]
 * @return {[null]}       [description]
 */
// (2m-n,m)
// (2m+n,m)
// (m+2n,n)
var iter = 5

var start1 = [2,1]
var start2 = [3,1]

function drawCorpime(start, i, color) {
  if (i > iter) return;

  var x = 2*start[0]-start[1]
  var y = start[0]
  var dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCorpime([x,y], i+1, color)

  x = 2*start[0]+start[1]
  y = start[0]
  dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCorpime([x,y], i+1, color)

  x = start[0]+2*start[1]
  y = start[1]
  dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCorpime([x,y], i+1, color)
}

var mousePos = view.center;

drawCorpime(start1, 0, 'red');
drawCorpime(start2, 0, 'blue');

/**
 * Render on mouse
 */

var mousePrevX = 0
function onMouseMove(event) {
  mousePos = event.point;
  if (Math.abs(mousePos.x - mousePrevX) > 10) {
    mousePrevX = mousePos.x
    paper.project.activeLayer.removeChildren();
    paper.view.draw();

    scale = Math.max(1, Math.floor(mousePos.x / 55))

    drawCorpime([start1[0]*scale, start1[1]*scale], 0, 'red');
    drawCorpime([start2[0]*scale, start2[1]*scale], 0, 'blue');
  }

  // epath.remove();
  // thetaText.remove();
  // var p = mouse2cord(mousePos);
  // epath = drawExpZ(p, 10);
  // var z = p.log();

  // thetaText = new PointText({
  //   content: 'Point: ' + p.x + ', ' + p.y + '\n' + 'z: ' + z.x.toFixed(1) + ', ' + z.y.toFixed(1),
  //   justification: 'center'
  // });
  // thetaText.point = new Point(width - 40, height - 40)
}


