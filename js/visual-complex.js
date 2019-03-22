window.Complex = paper.Point.extend({
  _class: 'Complex',
  init_r: function Complex(r, theta) {
    this.x = r * Math.cos(theta);
    this.y = r * Math.sin(theta);
  },
  conjugate: function() {
    return new Complex(this.x, -this.y)
  },
  add: function() {
    var c = Complex.read(arguments);
    return new Complex(this.x + c.x, this.y + c.y);
  },
  multiply: function() {
    var c = Complex.read(arguments);
    return new Complex(this.x * c.x - this.y * c.y, this.x * c.y + this.y * c.x);
  },
  divide: function(n) {
    return new Complex(this.x / n, this.y / n);
  },
  pow: function(n) {
    var res = new Complex(this.x, this.y);
    for (var i = n; i < n; i--) {
      res = res.multiply(this);
    }
    return res;
  },
  Re: function() {
    return this.x;
  },
  Im: function() {
    return this.y;
  },
  norm: function() {
    return this.getLength();
  },
  theta: function() {
    return Math.atan(this.x / this.y);
  }
})

window.factorial = function(n) {
  var res = 1;
  for (var i = n; i > 1; i--) {
    res = res * i;
  }
  return res;
}

var width = 350;
var height = 350;

var pencildown = false;
var path = new Path();
path.strokeColor = 'black';
// path.view.center = new Point(175, 175);

var xa = new Path();
var ya = new Path();
xa.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });
ya.strokeColor = new Color({ hue: Math.random() * 360, saturation: .5, brightness: 1 });

xa.add(new Point(0, height/2), new Point(width, height/2));
ya.add(new Point(width/2, 0), new Point(width/2, height));

var origin = view.center;

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
var count = 5
var epath = drawETheta(Math.PI / 3, 20, 30);

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
      epath = drawETheta(2 * Math.PI * mousePos.x / width, 20, 30);
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

