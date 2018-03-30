(function() {
  var TEX = {};
  TEX.render = function(html) {
    $(".content-body").html(html);
    $(".content-body script[type='math/tex']").replaceWith(
      function(){
        var tex = $(this).text();
        console.log(tex)
        return "<span class=\"inline-equation\">" + 
               katex.renderToString(tex) +
               "</span>";
    });

    $(".content-body script[type='math/tex; mode=display']").replaceWith(
      function(){
        var tex = $(this).text();
        return "<div class=\"equation\">" + 
               katex.renderToString("\\displaystyle "+tex) +
               "</div>";
    });
  };
  window.TEX = TEX;

})();
