MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});

var converter = markdownit();
anchor(converter, {})
footnote_plugin(converter)

var GRAPH_WRITING_KEY = 'GRAPH_WRITING_CONTENT_TMP';
var GRAPH_WRITING_OPTION_STRONG = 'GRAPH_WRITING_OPTION_STRONG';
var SCALE_MAX = 2;
var SCALE_MIN = 0.5;
var content_cache = null;
var node_history = [];
var history_ptr = 0;
var start = null;
var use_cache = true;

function loadContent() {
  return window.localStorage.getItem(GRAPH_WRITING_KEY);
}

function saveContent() {
  var content = $('#content_editor').val();
  window.localStorage.setItem(GRAPH_WRITING_KEY, content);
}

function jump(h){
  document.getElementById(h).scrollIntoView();
}

function getRenderStrongNode() {
  var strong = localStorage.getItem(GRAPH_WRITING_OPTION_STRONG)
  return !!strong
}

function setRenderStrongNode(use_strong) {
  if (use_strong) {
    localStorage.setItem(GRAPH_WRITING_OPTION_STRONG, 'true')
  } else {
    localStorage.removeItem(GRAPH_WRITING_OPTION_STRONG)
  }
}

var getGraphData = function(filepath, callback) {
  function parse(text, callback) {
    var tokens = converter.parse(text, {})
    var parsed = Dependent.parse(tokens, {
      use_strong: getRenderStrongNode()
    })

    function linkIndexOf(id, nodes) {
      var index;
      nodes.map(function(n, i) {
        if (n == null) {
          index = 'NA'
        } else if (n.id === id) {
          index = i
        }
      });
      return index;
    }

    var links = parsed.links.map(function(p) {
      return {
        source: linkIndexOf(p.source, parsed.nodes),
        target: linkIndexOf(p.target, parsed.nodes)
      }
    }).filter(function(p) {
      return p['source'] != undefined && p['target'] != undefined
    })

    callback && callback(parsed.nodes, links, text)
  }
  if (content_cache && use_cache) {
    parse(content_cache, callback);
  } else {
    d3.text(filepath, function(text) {
      content_cache = text
      parse(text, callback)
    })
  }
}

window.pageone = function(filepath, cache=true) {
  use_cache = cache;
  getGraphData(filepath, function(nodes, links, text) {
    var r = 10;
    var graph, zoom;
    var graphWidth, graphHeight;
    var tree;

    graphWidth = $('.graph').width() / 2;
    graphHeight = $('.graph').height();

    var buildTree = function(source) {
      var treeObj = {};
      var children = [];

      treeObj["name"] = source.id;
      treeObj["content"] = source.text;
      links.map(function(link, index) {
        if (link.source.id == source.id) {
          children.push(link.target);
        }
      });
      treeObj["children"] = children.map(buildTree);
      return treeObj;
    };

    function readNode(node) {
      Tree.render(buildTree(node));
      jump(slugify(node.text, {lower: true}));
    }

    function readPrevNode() {
      history_ptr -= 1
      if (history_ptr < 0) {
        history_ptr = 0
      } else {
        readNode(node_history[history_ptr])
      }
    }

    function readNextNode() {
      history_ptr += 1
      if (history_ptr > node_history.length - 1) {
        history_ptr = node_history.length - 1
      } else {
        readNode(node_history[history_ptr]);
      }
    }

    function onZoomChanged() {
      var scale = d3.event.scale
      // if (scale > SCALE_MAX) {
      //   scale = SCALE_MAX;
      // }
      // if (scale < SCALE_MIN) {
      //   scale = SCALE_MIN;
      // }
      graph.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + scale + ")")
    }

    function onControlZoomClicked(e) {
      var elmTarget = $(this)
      var scaleProcentile = 0.50;

      // Scale
      var currentScale = zoom.scale()
      var newScale
      if(elmTarget.hasClass('control-zoom-in')) {
        newScale = currentScale * (1 + scaleProcentile)
      } else {
        newScale = currentScale * (1 - scaleProcentile)
      }
      newScale = Math.max(newScale, 0)

      // Translate
      var centerTranslate = [
        (graphWidth / 2) - (graphWidth * newScale / 2),
        (graphHeight / 2) - (graphHeight * newScale / 2)
      ];

      // Store values
      zoom
        .translate(centerTranslate)
        .scale(newScale)

      // Render transition
      graph.transition()
        .duration(500)
        .attr("transform", "translate(" + zoom.translate() + ")" + " scale(" + zoom.scale() + ")")
    }

    $('.control-zoom a').on('click', onControlZoomClicked);

    zoom = d3.behavior.zoom();
    zoom.on("zoom", onZoomChanged);

    function renderContent(text) {
      $('#content_editor').val(text)
      $(".content-body").html(converter.render(text))
      $('.content-body')
      .children()
      .each(function(e) {
        $(this).css({position: 'relative'})
        $(this).append($('<div class="marker"><svg class="icon icon-files-empty"><use xlink:href="#icon-files-empty"></use></svg></div>'))
      })
    }

    function renderGraph(nodes, links, start, zoom) {
      start = nodes[0]
      tree = Tree.render(buildTree(start));
      graph = DAG.render({nodes: nodes, links: links}, zoom, function(d) {
        if (d['id'] !== node_history[node_history.length - 1]['id']) {
          node_history.push(d);
          history_ptr += 1;
        }
        readNode(d);
      });
      readNode(start);
      node_history = [];
      node_history.push(start);
    }

    // setTimeout(function() {
    //   DAG.focus(start);
    // }, 2000)

    renderContent(text)
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    renderGraph(nodes, links, start, zoom)

    function attachToStash(mark) {
      $('#marker_stash').append(mark)
    }

    function toggle_graph() {
      $('#graph').toggle()
      $('#tree').toggle()
      $('body').toggleClass('indexing')
    }

    function toggle_setting() {
      $('.modal.js').toggle()
    }

    function toggle_tree() {
      $('#tree').toggle()
    }

    function toggle_edit() {
      $('#editor').toggle()
    }

    $('#control_panel #toggle_graph').on('click', toggle_graph)
    $('#control_panel #content_back').on('click', readPrevNode)
    $('#control_panel #content_forward').on('click', readNextNode)
    $('#control_panel #toggle_setting').on('click', toggle_setting)

    $('#rerender').on('click', function(e) {
      saveContent();
      renderGraph();
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    })

    $('.content').on('click', function(e) {
      if (e.target.nodeName !== 'A') return;
      var id = e.target.hash.replace('#', '');
      if (nodes.filter(function(n) { return n["id"] == id }).length > 0) {
        if (id !== node_history[node_history.length - 1]['id']) {
          node_history.push({"id": id});
          history_ptr += 1;
        }
        readNode({"id": id});
        // console.log(node_history);
        // console.log(history_ptr);
      }
    })

    // $('#control_panel #toggle_tree').on('click', toggle_tree)


    $('.content-body').on('click', function(e) {
      if (e.target.parentNode.className === 'marker') {
        var mark = $(e.target).parent().parent().clone()
        var close = $(mark).find('.marker')
        $(close).text('x')
        attachToStash(mark)
      }
    })

    $('#marker_stash').on('click', function(e) {
      if (e.target.className === 'marker') {
        $(e.target).parent().remove();
      }
    })

    $('.modal.js .modal-close').on('click', function(e) {
      getGraphData(function(nodes, links, text) {
        renderGraph(nodes, links, start, zoom)
      })
      toggle_setting();
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    })

    $('#toggle_strong_node').on('click', function(e) {
      setRenderStrongNode(e.target.checked)
    })

    $('#toggle_strong_node').attr({ checked: getRenderStrongNode()})

  })
}