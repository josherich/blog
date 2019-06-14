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
  log: function() {
    return new Complex(Math.log(this.norm()), this.theta());
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
    if (this.x == 0 && this.y == 0)
      return  0; // undefined
    var arctan = Math.atan(this.y / this.x);
    if (this.x > 0)
      return arctan;
    else if (this.x < 0)
      return arctan + (this.y < 0 ? -Math.PI : Math.PI);
    else
      return this.y < 0 ? - Math.PI/2 : Math.PI/2;
  },
  polar: function() {
    return [this.norm(), this.theta()];
  },
  inverse: function() {
    var r = 1/this.norm();
    var theta = -this.theta();
    return new Complex(r * Math.cos(theta), r * Math.sin(theta));
  }
})

window.factorial = function(n) {
  var res = 1;
  for (var i = n; i > 1; i--) {
    res = res * i;
  }
  return res;
}

// euler rotation
var X = function(theta) {
  return [
    [1, 0, 0],
    [0, cos(theta), -sin(theta)],
    [0, sin(theta), cos(theta)]
  ]
}

var Y = function(theta) {
  return [
    [cos(theta), 0, sin(theta)],
    [0, 1, 0],
    [-sin(theta), 0, cos(theta)]
  ]
}

var Z = function(theta) {
  return [
    [cos(theta), -sin(theta), 0],
    [sin(theta), cos(theta), 0],
    [0, 0, 1]
  ]
}