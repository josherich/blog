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
var maxCoprime = 100;
var scale = 1;

// (2m-n,m)
// (2m+n,m)
// (m+2n,n)
var iter = 5

var start1 = [2,1]
var start2 = [3,1]

var distributionx = {}, distributiony = {}

function drawCoprime(start, i, color) {
  if (i > iter) return;

  // if (start > maxCoprime) {
  //   lastStarts.push(start)
  //   return
  // }

  var x = 2*start[0]-start[1]
  var y = start[0]
  x in distributionx ? distributionx[x]++ : distributionx[x] = 1
  y in distributiony ? distributiony[y]++ : distributiony[y] = 1

  var dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCoprime([x,y], i+1, color)

  x = 2*start[0]+start[1]
  y = start[0]
  x in distributionx ? distributionx[x]++ : distributionx[x] = 1
  y in distributiony ? distributiony[y]++ : distributiony[y] = 1
  dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCoprime([x,y], i+1, color)

  x = start[0]+2*start[1]
  y = start[1]
  x in distributionx ? distributionx[x]++ : distributionx[x] = 1
  y in distributiony ? distributiony[y]++ : distributiony[y] = 1
  dot = new Path.Circle(new Point(x, y), .8);
  dot.fillColor = color;
  drawCoprime([x,y], i+1, color)
}

var mousePos = view.center;

drawCoprime(start1, 0, 'red');
drawCoprime(start2, 0, 'blue');

/**
 * Render on mouse
 */

var mousePrevX = 0
function onMouseMove(event) {
  mousePos = event.point;
  if (Math.abs(mousePos.x - mousePrevX) > 10) {
    mousePrevX = mousePos.x
    maxCoprime = mousePos.x

    paper.project.activeLayer.removeChildren();
    paper.view.draw();

    scale = Math.max(1, Math.floor(mousePos.x / 55))

    drawCoprime([start1[0]*scale, start1[1]*scale], 0, 'red');
    drawCoprime([start2[0]*scale, start2[1]*scale], 0, 'blue');
  }
}


