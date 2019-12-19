var width = view.size.width;
var height = view.size.height;
var padding = 40;
var path = new Path();
path.strokeColor = 'black';

var xa = new Path();
var ya = new Path();
xa.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });
ya.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });

// xa.add(new Point(0, height/2), new Point(width, height/2));
// ya.add(new Point(width/2, 0), new Point(width/2, height));

var origin = view.center;
var scale = 1;

function drawCollatz(max, color, intervalFunc) {
  function run(i) {
    var j = getStopTime(i);
    dot = new Path.Circle(new Point(i, j), .8);
    dot.fillColor = color;
  }
  function runNext() {
    setTimeout(function() {
      run(i)
      i++
      if (i < max) {
        runNext()
      }
    }, intervalFunc(i))
  }
  var i = 0
  if (intervalFunc === 0) {
    for (; i < max; i++) {
      var start = i
      run(start)
    }
  } else if (typeof intervalFunc === 'function') {
    runNext()
  }
}

function getStopTime(i) {
  var counter = 0
  if (i < 1) return 0
  while (true) {
    if (i === 1) {
      return counter
    } else {
      counter++
    }
    if (i % 2 === 0) {
      i = i >> 1
    } else {
      i = 3 * i + 1
    }
  }
}

var mousePos = view.center;

drawCollatz(9999, 'blue', 0);

/**
 * Render on mouse
 */

var mousePrevX = 0
function onMouseMove(event) {
  mousePos = event.point;
  if (Math.abs(mousePos.x - mousePrevX) > 10) {
    mousePrevX = mousePos.x

    scale = Math.max(1, Math.floor(mousePos.x / 55))

  }
}


