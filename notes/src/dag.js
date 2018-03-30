(function() {

  var DAG = {};
  var graph;
  var linkedByIndex = {};
  var layout, nodes, links, data;
  var zoom;
  var graphWidth = window.innerWidth / 2;
  var graphHeight = window.innerHeight;


  function resize() {
    graphWidth = $('.graph').width();
    graphHeight = $('.graph').height();
    graph.attr("width", graphWidth)
         .attr("height", graphHeight);

    layout.size([graphWidth, graphHeight])
          .resume();
  }

  function focus(d) {
    // Highlight circle
    var elm = findElementByNode('circle', d);
    elm.style("fill", '#b94431');

    // Highlight related nodes
    fadeRelatedNodes(d, .05, nodes, links);
  }

  function centerGraph() {

    var centerTranslate = [
      (graphWidth / 2) - (graphWidth * 0.5 / 2),
      (graphHeight / 2) - (graphHeight * 0.5 / 2),
    ];

    zoom.translate(centerTranslate);

    // Render transition
    graph.transition()
      .duration(500)
      .attr("transform", "translate(" + zoom.translate() + ")" + " scale(" + zoom.scale() + ")");
  }

  function onNodeMouseOver(nodes, links, d) {

    // Highlight circle
    var elm = findElementByNode('circle', d);
    elm.style("fill", '#b94431');

    // Highlight related nodes
    fadeRelatedNodes(d, .05, nodes, links);
  }

  function onNodeMouseOut(nodes, links, d) {

    // Highlight circle
    var elm = findElementByNode('circle', d);
    elm.style("fill", '#ccc');

    // Highlight related nodes
    fadeRelatedNodes(d, 1, nodes, links);
  }

  function onNodeMouseDown(d) {
    d.fixed = true;
    d3.select(this).classed("sticky", true);
  }

  function onTick(e) {

    links.attr("d", function(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    });

    nodes.attr("cx", function(d) { return d.x; })
         .attr("cy", function(d) { return d.y; })
         .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }

  // Helpers
  function formatClassName(prefix, object) {
    return prefix + '-' + slugify(object.text, {lower: true}).replace(/[^\w]/g, '')
  }

  function findElementByNode(prefix, node) {
    var selector = '.'+formatClassName(prefix, node);
    return graph.select(selector);
  }

  function isConnected(a, b) {
    return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
  }

  function fadeRelatedNodes(d, opacity, nodes, links) {

    // Clean
    $('path.link').removeAttr('data-show');

    nodes.style("stroke-opacity", function(o) {

      if (isConnected(d, o)) {
        thisOpacity = 1;
      } else {
        thisOpacity = opacity;
      }

      this.setAttribute('fill-opacity', thisOpacity);
      this.setAttribute('stroke-opacity', thisOpacity);

      if(thisOpacity == 1) {
        this.classList.remove('dimmed');
      } else {
        this.classList.add('dimmed');
      }

      return thisOpacity;
    });

    links.style("stroke-opacity", function(o) {

      if (o.source === d) {

        // Highlight target/sources of the link
        var elmNodes = graph.selectAll('.'+formatClassName('node', o.target));
        elmNodes.attr('fill-opacity', 1);
        elmNodes.attr('stroke-opacity', 1);

        elmNodes.classed('dimmed', false);

        // Highlight arrows
        var elmCurrentLink = $('path.link[data-source=' + o.source.index + ']');
        elmCurrentLink.attr('data-show', true);
        elmCurrentLink.attr('marker-end', 'url(#regular)');

        return 1;

      }

      if (o.target === d) {
        // Highlight target/sources of the link
        var elmNodes = graph.selectAll('.'+formatClassName('node', o.source));
        elmNodes.attr('fill-opacity', 1);
        elmNodes.attr('stroke-opacity', 1);

        elmNodes.classed('dimmed', false);

        // Highlight arrows
        var elmCurrentLink = $('path.link[data-target=' + o.target.index + ']');
        elmCurrentLink.attr('data-show', true);
        elmCurrentLink.attr('marker-end', 'url(#regular)');

        return 1;
      }

      if (o.source !== d && o.target !== d) {
        var elmAllLinks = $('path.link:not([data-show])');

        if(opacity == 1) {
          elmAllLinks.attr('marker-end', 'url(#regular)');
        } else {
          elmAllLinks.attr('marker-end', '');
        }

        return opacity;
      }

    });
  }

  function renderGraph(data, onclick) {

    // Markers
    graph.append("svg:defs").selectAll("marker")
        .data(['regular'])
      .enter().append("svg:marker")
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", -1.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

    // Lines
    links = graph.append('svg:g').selectAll("line")
      .data(data.links)
      .enter().append("svg:path")
      .attr('class', 'link')
      .attr("data-target", function(o) { return o.target })
      .attr("data-source", function(o) { return o.source })
      .attr("marker-end", function(d) { return "url(#regular)"; });

    // Nodes
    nodes = graph.append('svg:g').selectAll("node")
      .data(data.nodes)
      .enter().append("svg:g")
      .attr("class", "node")
      .call(layout.drag)
      .on("mousedown", function(d) {
        onNodeMouseDown.call(this, d);
        onclick && onclick.call(this, d);
      });

      // Circles
      nodes.attr("class", function(d) { return formatClassName('node', d) })
      nodes.append("svg:circle")
        .attr("class", function(d) { return formatClassName('circle', d) })
        .attr("r", 6)
        .on("mouseover", onNodeMouseOver.bind(this, nodes, links))
        .on("mouseout", onNodeMouseOut.bind(this, nodes, links) );


      // A copy of the text with a thick white stroke for legibility.
      nodes.append("svg:text")
          .attr("x", 15)
          .attr("y", ".31em")
          .attr("class", function(d) { return 'shadow ' + formatClassName('text', d) })
          .text(function(d) { return d.text; });

      nodes.append("svg:text")
          .attr("class", function(d) { return formatClassName('text', d) })
          .attr("x", 15)
          .attr("y", ".31em")
          .text(function(d) { return d.text; });

    // Build linked index
    data.links.forEach(function(d) {
      linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

    // Draw the
    layout.nodes(data.nodes);
    layout.links(data.links);
    layout.on("tick", onTick);
    layout.start();

    zoom.scale(0.4);

    // Render transition
    graph.transition()
      .duration(500)
      .attr("transform", "scale(" + zoom.scale() + ")");

    DAG.nodes = nodes;
    DAG.links = links;
  }

  DAG.render = function(graphData, _zoom, onclick) {
    zoom = _zoom;

    // Setup layout
    layout = d3.layout.force()
      .gravity(.05)
      .charge(-300)
      .linkDistance(100);

    d3.select(".graph")
      .select('svg')
      .remove()

    // Setup graph
    graph = d3.select(".graph")
      .append("svg:svg")
      .attr("pointer-events", "all")
      .call(_zoom)
      .append('svg:g')
        .attr('width', graphWidth)
        .attr('height', graphHeight);

    d3.select(window).on("resize", resize);

    // Load graph data
    renderGraph(graphData, onclick);

    data = graphData;

    // Resize
    resize();

    centerGraph();

    // Controlers
    return graph;
  }

  DAG.focus = focus;


  window.DAG = DAG;

})();
