(function() {
  // https://github.com/jstat/jstat/blob/master/dist/jstat.js
  function isFunction(func) {
    return toString.call(arg) === '[object Function]';
  }

  function create(rows, cols, func) {
    var res = new Array(rows);
    var i, j;

    if (isFunction(cols)) {
      func = cols;
      cols = rows;
    }

    for (i = 0; i < rows; i++) {
      res[i] = new Array(cols);
      for (j = 0; j < cols; j++)
        res[i][j] = func(i, j);
    }

    return res;
  };

  function randn(n, m) {
    var u, v, x, y, q;
    if (!m)
      m = n;
    if (n)
      return create(n, m, function() { return randn(); });
    do {
      u = Math.random();
      v = 1.7156 * (Math.random() - 0.5);
      x = u - 0.449871;
      y = Math.abs(v) + 0.386595;
      q = x * x + y * (0.19600 * y - 0.25472 * x);
    } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));
    return v / u;
  };

  // Returns the error function erf(x)
  function erf(x) {
    var cof = [-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2,
               -9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4,
               4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6,
               1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8,
               6.529054439e-9, 5.059343495e-9, -9.91364156e-10,
               -2.27365122e-10, 9.6467911e-11, 2.394038e-12,
               -6.886027e-12, 8.94487e-13, 3.13092e-13,
               -1.12708e-13, 3.81e-16, 7.106e-15,
               -1.523e-15, -9.4e-17, 1.21e-16,
               -2.8e-17];
    var j = cof.length - 1;
    var isneg = false;
    var d = 0;
    var dd = 0;
    var t, ty, tmp, res;

    if (x < 0) {
      x = -x;
      isneg = true;
    }

    t = 2 / (2 + x);
    ty = 4 * t - 2;

    for(; j > 0; j--) {
      tmp = d;
      d = ty * d - dd + cof[j];
      dd = tmp;
    }

    res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
    return isneg ? res - 1 : 1 - res;
  };

  // Returns the complmentary error function erfc(x)
  function erfc(x) {
    return 1 - erf(x);
  };

  function erfcinv(p) {
    var j = 0;
    var x, err, t, pp;
    if (p >= 2)
      return -100;
    if (p <= 0)
      return 100;
    pp = (p < 1) ? p : 2 - p;
    t = Math.sqrt(-2 * Math.log(pp / 2));
    x = -0.70711 * ((2.30753 + t * 0.27061) /
                    (1 + t * (0.99229 + t * 0.04481)) - t);
    for (; j < 2; j++) {
      err = erfc(x) - pp;
      x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);
    }
    return (p < 1) ? x : -x;
  };

  // extend normal function with static methods
  window.normal = {
    pdf: function pdf(x, mean, std) {
      return Math.exp(-0.5 * Math.log(2 * Math.PI) -
                      Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));
    },

    cdf: function cdf(x, mean, std) {
      return 0.5 * (1 + erf((x - mean) / Math.sqrt(2 * std * std)));
    },

    inv: function(p, mean, std) {
      return -1.41421356237309505 * std * erfcinv(2 * p) + mean;
    },

    mean : function(mean/*, std*/) {
      return mean;
    },

    median: function median(mean/*, std*/) {
      return mean;
    },

    mode: function (mean/*, std*/) {
      return mean;
    },

    sample: function sample(mean, std) {
      return randn() * std + mean;
    },

    variance : function(mean, std) {
      return std * std;
    }
  };
})()