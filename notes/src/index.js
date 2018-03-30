(function(){
  var Dependent = {};
  Dependent.parse = function(tokens, options) {
    var blocks = [];
    var links = [];
    var token_len = tokens.length;
    var block = null;
    var token = null;
    var use_strong = options.use_strong

    function findLinks(inlines) {
      var inlines_len = inlines.length;
      var token = null;
      var _links = [];
      for (var i = 0; i < inlines_len; ) {
        token = inlines[i];
        if (token.type === 'link_open' && token.tag === 'a') {
          _links.push({text: inlines[i+1]['content'], target: token.attrs[0][1].replace('#', '')})
          i += 2;
        } else {
          i++;
        }
      }
      return _links;
    }

    function findStrong(inlines) {
      var inlines_len = inlines.length;
      var token = null;
      var _links = [];
      for (var i = 0; i < inlines_len; ) {
        token = inlines[i];
        if (token.type === 'strong_open') {
          _links.push({
            target: slugify(inlines[i+1]['content'], {lower: true}),
            text: inlines[i+1]['content']
          })
          i += 2;
        } else {
          i++;
        }
      }
      return _links;
    }

    function extractLink(parent, link) {
      var result = {
        source: block['id'],
        text: link['text'],
        target: link['target'],
        type: 'url'
      }
      if (link['target'][0] === '#') {
        result.type = 'hash'
        result.target = link['target'].replace(/^#/, '')
      } else {
        result.block = {
          id: link['target'],
          text: link['text'],
          url: link['target']
        }
      }
      return result
    }

    for (var i = 0; i < token_len; ) {
      token = tokens[i];
      var _children = [];
      if (token.type === 'heading_open' && token.tag[0] === 'h') {
        if (use_strong) {
          _children = findStrong(tokens[i+1].children);
          if (_children.length > 0) {
            block = {id: _children[0]['target'], text: _children[0]['text']}
          }
        } else {
          block = {id: slugify(tokens[i+1].content.replace(/\*\*/g, ''), {lower: true}), text: tokens[i+1].content.replace(/\*\*/g, '') }
        }
        blocks.push(block)
        i += 2
      } else if (token.type === 'inline') {
        _children = findLinks(token.children);
        _children.map(function(child) {
          if (block) {
            var link = extractLink(block, child)
            if (link.type === 'url') {
              blocks.push(link.block)
            }
            links.push(link)
            // links.push({source: block['id'], text: c['text'], target: c['target'].replace('#', '')})
          }
        });
        i++;
      } else {
        i++;
      }
    }
    return {
      nodes: blocks,
      links: links
    }
  }
  window.Dependent = Dependent;
})()