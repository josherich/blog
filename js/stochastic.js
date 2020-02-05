/**
 * [drawAxis draw axis and return origin]
 * @return {[Point]} [origin]
 */
window.drawAxis = function() {
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

  var origin = new Point(view.center.x, view.center.y);
  return origin;
}

window.stoch = {
  _class: 'Stoch',
  origin: null,
  width: 0,
  height: 0,

  init: function(width, height, origin) {
    this.width = width;
    this.height = height;
    this.origin = origin;
  },

  qv: function(traj) {
    var len = traj.length;
    var sum = 0;
    for (var i = 0; i < len-1; i++) {
      sum += Math.pow((traj[i+1] - traj[i]), 2);
    }
    return sum;
  },

  brownian: function(sigma) {
    var sig = sigma || 1;
    return window.normal.sample(0, sig);
  },

  brownianDrift: function(t, scale, mu, sigma) {
    return mu * t + sigma * window.normal.sample(0, scale);
  },

  /**
   * [complex a+ib => cartesian (x,y)]
   * @param  {[Point]} p [description]
   * @return {[paper.Point]}   [description]
   */
  cartesian: function (p) {
    return new Complex(p).conjugate() + this.origin;
  },

  mouse2Scale: function (mousePos) {
    return 20 * mousePos.x / this.width;
  },

  drawBrownian: function (iter) {
    var path = new Path();
    path.strokeColor = 'black';
    path.add(origin);
    var y = 0;
    var traj = [y];
    var mu = 0.001;
    var sigma = 1;

    for (var i = 0; i < iter; i++) {
      y = y + this.brownian();
      traj.push(y);
      path.add( this.cartesian( new Point(i, y) ) );
    }

    // console.log(this.qv(traj))
    return path;
  },

  draw2DBrownian: function (iter) {
    var path = new Path();
    path.strokeColor = 'black';
    path.add(origin);
    var x = 0;
    var y = 0;
    var traj = [0, 0];
    var mu = 0.001;
    var sigma = 1;

    for (var i = 0; i < iter; i++) {
      x = x + this.brownian(10);
      y = y + this.brownian(10);
      traj.push([x, y]);
      path.add( this.cartesian( new Point(x, y) ) );
    }

    for (var i = 0; i < iter; i++) {
      if (i % 10 == 0) {
        var dot = new Path.Circle(this.cartesian( new Point(traj[i][0], traj[i][1]) ), 1);
        dot.fillColor = 'black';
      }
    }

    // console.log(this.qv(traj))
    return path;
  }
}