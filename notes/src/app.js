(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('markdown-it')) :
  typeof define === 'function' && define.amd ? define(['exports', 'markdown-it'], factory) :
  (factory((global.sd = global.sd || {}),global.markdownit));
}(this, (function (exports,markdownit) { 'use strict';

  markdownit = markdownit && markdownit.hasOwnProperty('default') ? markdownit['default'] : markdownit;

  // this file is based on https://github.com/valeriangalliat/markdown-it-anchor
  const slugify = function (string, options) {
    /*eslint-disable */
    var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');
    /*eslint-enable */

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {};

    string = string.split('')
      .reduce(function (result, ch) {
        if (charMap[ch]) {
          ch = charMap[ch];
        } else {
          ch = ch;
        }
        // allowed
        var regcjk = new RegExp(/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/, 'u');
        if (!ch.match(regcjk)) {
          ch = ch.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '');
        }
        result += ch;
        return result
      }, '')
      // trim leading/trailing spaces
      .replace(/^\s+|\s+$/g, '')
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')
      // remove trailing separator
      .replace('#{replacement}$', '');

    return options.lower ? string.toLowerCase() : string
  };

  const position = {
    false: 'push',
    true: 'unshift'
  };

  const hasProp = ({}).hasOwnProperty;

  const permalinkHref = slug => `#${slug}`;

  const renderPermalink = (slug, opts, state, idx) => {
    const space = () =>
      Object.assign(new state.Token('text', '', 0), { content: ' ' });

    const linkTokens = [
      Object.assign(new state.Token('link_open', 'a', 1), {
        attrs: [
          ['class', opts.permalinkClass],
          ['href', opts.permalinkHref(slug, state)],
          ['aria-hidden', 'true']
        ]
      }),
      Object.assign(new state.Token('html_block', '', 0), { content: opts.permalinkSymbol }),
      new state.Token('link_close', 'a', -1)
    ];

    // `push` or `unshift` according to position option.
    // Space is at the opposite side.
    linkTokens[position[!opts.permalinkBefore]](space());
    state.tokens[idx + 1].children[position[opts.permalinkBefore]](...linkTokens);
  };

  const uniqueSlug = (slug, slugs) => {
    // Mark this slug as used in the environment.
    slugs[slug] = (hasProp.call(slugs, slug) ? slugs[slug] : 0) + 1;

    // First slug, return as is.
    if (slugs[slug] === 1) {
      return slug
    }

    // Duplicate slug, add a `-2`, `-3`, etc. to keep ID unique.
    return slug + '-' + slugs[slug]
  };

  const isLevelSelectedNumber = selection => level => level >= selection;
  const isLevelSelectedArray = selection => level => selection.includes(level);

  const anchor_plugin = (md, opts) => {
    opts = Object.assign({}, anchor_plugin.defaults, opts);

    md.core.ruler.push('anchor', state => {
      const slugs = {};
      const tokens = state.tokens;

      const isLevelSelected = Array.isArray(opts.level)
        ? isLevelSelectedArray(opts.level)
        : isLevelSelectedNumber(opts.level);

      tokens
        .filter(token => token.type === 'heading_open')
        .filter(token => isLevelSelected(Number(token.tag.substr(1))))
        .forEach(token => {
          // Aggregate the next token children text.
          const title = tokens[tokens.indexOf(token) + 1].children
            .filter(token => token.type === 'text' || token.type === 'code_inline')
            .reduce((acc, t) => acc + t.content, '');

          let slug = token.attrGet('id');

          if (slug == null) {
            slug = uniqueSlug(opts.slugify(title, {lower: true}), slugs);
            token.attrPush(['id', slug]);
          }

          if (opts.permalink) {
            opts.renderPermalink(slug, opts, state, tokens.indexOf(token));
          }

          if (opts.callback) {
            opts.callback(token, { slug, title });
          }
        });
    });
  };

  anchor_plugin.defaults = {
    level: 1,
    slugify,
    permalink: false,
    renderPermalink,
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false,
    permalinkHref
  };

  // this file is based on https://github.com/markdown-it/markdown-it-footnote

  ////////////////////////////////////////////////////////////////////////////////
  // Renderer partials

  function render_footnote_anchor_name(tokens, idx, options, env/*, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();
    var prefix = '';

    if (typeof env.docId === 'string') {
      prefix = '-' + env.docId + '-';
    }

    return prefix + n;
  }

  function render_footnote_caption(tokens, idx/*, options, env, slf*/) {
    var n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }

    return '[' + n + ']';
  }

  function render_footnote_ref(tokens, idx, options, env, slf) {
    var id      = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    var refid   = id;

    if (tokens[idx].meta.subId > 0) {
      refid += ':' + tokens[idx].meta.subId;
    }

    return '<sup class="footnote-ref"><a href="#fn' + id + '" id="fnref' + refid + '">' + caption + '</a></sup>';
  }

  function render_footnote_block_open(tokens, idx, options) {
    return (options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') +
           '<section class="footnotes">\n' +
           '<ol class="footnotes-list">\n';
  }

  function render_footnote_block_close() {
    return '</ol>\n</section>\n';
  }

  function render_footnote_open(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ':' + tokens[idx].meta.subId;
    }

    return '<li id="fn' + id + '" class="footnote-item">';
  }

  function render_footnote_close() {
    return '</li>\n';
  }

  function render_footnote_anchor(tokens, idx, options, env, slf) {
    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) {
      id += ':' + tokens[idx].meta.subId;
    }

    /* ↩ with escape code to prevent display as Apple Emoji on iOS */
    return ' <a href="#fnref' + id + '" class="footnote-backref">\u21a9\uFE0E</a>';
  }


  const footnote_plugin = function(md) {
    var parseLinkLabel = md.helpers.parseLinkLabel,
        isSpace = md.utils.isSpace;

    md.renderer.rules.footnote_ref          = render_footnote_ref;
    md.renderer.rules.footnote_block_open   = render_footnote_block_open;
    md.renderer.rules.footnote_block_close  = render_footnote_block_close;
    md.renderer.rules.footnote_open         = render_footnote_open;
    md.renderer.rules.footnote_close        = render_footnote_close;
    md.renderer.rules.footnote_anchor       = render_footnote_anchor;

    // helpers (only used in other rules, no tokens are attached to those)
    md.renderer.rules.footnote_caption      = render_footnote_caption;
    md.renderer.rules.footnote_anchor_name  = render_footnote_anchor_name;

    // Process footnote block definition
    function footnote_def(state, startLine, endLine, silent) {
      var oldBMark, oldTShift, oldSCount, oldParentType, pos, label, token,
          initial, offset, ch, posAfterColon,
          start = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      // line should be at least 5 chars - "[^x]:"
      if (start + 4 > max) { return false; }

      if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) { return false; }
        if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
          break;
        }
      }

      if (pos === start + 2) { return false; } // no empty footnote labels
      if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
      if (silent) { return true; }
      pos++;

      if (!state.env.footnotes) { state.env.footnotes = {}; }
      if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
      label = state.src.slice(start + 2, pos - 2);
      state.env.footnotes.refs[':' + label] = -1;

      token       = new state.Token('footnote_reference_open', '', 1);
      token.meta  = { label: label };
      token.level = state.level++;
      state.tokens.push(token);

      oldBMark = state.bMarks[startLine];
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      oldParentType = state.parentType;

      posAfterColon = pos;
      initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      state.tShift[startLine] = pos - posAfterColon;
      state.sCount[startLine] = offset - initial;

      state.bMarks[startLine] = posAfterColon;
      state.blkIndent += 4;
      state.parentType = 'footnote';

      if (state.sCount[startLine] < state.blkIndent) {
        state.sCount[startLine] += state.blkIndent;
      }

      state.md.block.tokenize(state, startLine, endLine, true);

      state.parentType = oldParentType;
      state.blkIndent -= 4;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.bMarks[startLine] = oldBMark;

      token       = new state.Token('footnote_reference_close', '', -1);
      token.level = --state.level;
      state.tokens.push(token);

      return true;
    }

    // Process inline footnotes (^[...])
    function footnote_inline(state, silent) {
      var labelStart,
          labelEnd,
          footnoteId,
          token,
          tokens,
          max = state.posMax,
          start = state.pos;

      if (start + 2 >= max) { return false; }
      if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }

      labelStart = start + 2;
      labelEnd = parseLinkLabel(state, start + 1);

      // parser failed to find ']', so it's not a valid note
      if (labelEnd < 0) { return false; }

      // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      //
      if (!silent) {
        if (!state.env.footnotes) { state.env.footnotes = {}; }
        if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
        footnoteId = state.env.footnotes.list.length;

        state.md.inline.parse(
          state.src.slice(labelStart, labelEnd),
          state.md,
          state.env,
          tokens = []
        );

        token      = state.push('footnote_ref', '', 0);
        token.meta = { id: footnoteId };

        state.env.footnotes.list[footnoteId] = { tokens: tokens };
      }

      state.pos = labelEnd + 1;
      state.posMax = max;
      return true;
    }

    // Process footnote references ([^...])
    function footnote_ref(state, silent) {
      var label,
          pos,
          footnoteId,
          footnoteSubId,
          token,
          max = state.posMax,
          start = state.pos;

      // should be at least 4 chars - "[^x]"
      if (start + 3 > max) { return false; }

      if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
      if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
      if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }

      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 0x20) { return false; }
        if (state.src.charCodeAt(pos) === 0x0A) { return false; }
        if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
          break;
        }
      }

      if (pos === start + 2) { return false; } // no empty footnote labels
      if (pos >= max) { return false; }
      pos++;

      label = state.src.slice(start + 2, pos - 1);
      if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }

      if (!silent) {
        if (!state.env.footnotes.list) { state.env.footnotes.list = []; }

        if (state.env.footnotes.refs[':' + label] < 0) {
          footnoteId = state.env.footnotes.list.length;
          state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
          state.env.footnotes.refs[':' + label] = footnoteId;
        } else {
          footnoteId = state.env.footnotes.refs[':' + label];
        }

        footnoteSubId = state.env.footnotes.list[footnoteId].count;
        state.env.footnotes.list[footnoteId].count++;

        token      = state.push('footnote_ref', '', 0);
        token.meta = { id: footnoteId, subId: footnoteSubId, label: label };
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    }

    // Glue footnote tokens to end of token stream
    function footnote_tail(state) {
      var i, l, j, t, lastParagraph, list, token, tokens, current, currentLabel,
          insideRef = false,
          refTokens = {};

      if (!state.env.footnotes) { return; }

      state.tokens = state.tokens.filter(function (tok) {
        if (tok.type === 'footnote_reference_open') {
          insideRef = true;
          current = [];
          currentLabel = tok.meta.label;
          return false;
        }
        if (tok.type === 'footnote_reference_close') {
          insideRef = false;
          // prepend ':' to avoid conflict with Object.prototype members
          refTokens[':' + currentLabel] = current;
          return false;
        }
        if (insideRef) { current.push(tok); }
        return !insideRef;
      });

      if (!state.env.footnotes.list) { return; }
      list = state.env.footnotes.list;

      token = new state.Token('footnote_block_open', '', 1);
      state.tokens.push(token);

      for (i = 0, l = list.length; i < l; i++) {
        token      = new state.Token('footnote_open', '', 1);
        token.meta = { id: i, label: list[i].label };
        state.tokens.push(token);

        if (list[i].tokens) {
          tokens = [];

          token          = new state.Token('paragraph_open', 'p', 1);
          token.block    = true;
          tokens.push(token);

          token          = new state.Token('inline', '', 0);
          token.children = list[i].tokens;
          token.content  = '';
          tokens.push(token);

          token          = new state.Token('paragraph_close', 'p', -1);
          token.block    = true;
          tokens.push(token);

        } else if (list[i].label) {
          tokens = refTokens[':' + list[i].label];
        }

        state.tokens = state.tokens.concat(tokens);
        if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
          lastParagraph = state.tokens.pop();
        } else {
          lastParagraph = null;
        }

        t = list[i].count > 0 ? list[i].count : 1;
        for (j = 0; j < t; j++) {
          token      = new state.Token('footnote_anchor', '', 0);
          token.meta = { id: i, subId: j, label: list[i].label };
          state.tokens.push(token);
        }

        if (lastParagraph) {
          state.tokens.push(lastParagraph);
        }

        token = new state.Token('footnote_close', '', -1);
        state.tokens.push(token);
      }

      token = new state.Token('footnote_block_close', '', -1);
      state.tokens.push(token);
    }

    md.block.ruler.before('reference', 'footnote_def', footnote_def, { alt: [ 'paragraph', 'reference' ] });
    md.inline.ruler.after('image', 'footnote_inline', footnote_inline);
    md.inline.ruler.after('footnote_inline', 'footnote_ref', footnote_ref);
    md.core.ruler.after('inline', 'footnote_tail', footnote_tail);
  };

  let converter = markdownit();
  anchor_plugin(converter, {});
  footnote_plugin(converter);
  let content_cache = null;

  const slugify$1 = anchor_plugin.defaults.slugify;

  let SemanticDocs = {};

  SemanticDocs.parse = function(tokens, options) {
    let blocks = [];
    let links = [];
    let token_len = tokens.length;
    let block = null;
    let token = null;
    let use_strong = options.use_strong;

    function findLinks(inlines) {
      let inlines_len = inlines.length;
      let token = null;
      let _links = [];
      for (let i = 0; i < inlines_len; ) {
        token = inlines[i];
        if (token.type === 'link_open' && token.tag === 'a') {
          _links.push({text: inlines[i+1]['content'], target: token.attrs[0][1].replace('#', '')});
          i += 2;
        } else {
          i++;
        }
      }
      return _links;
    }

    function findStrong(inlines) {
      let inlines_len = inlines.length;
      let token = null;
      let _links = [];
      for (let i = 0; i < inlines_len; ) {
        token = inlines[i];
        if (token.type === 'strong_open') {
          _links.push({
            target: slugify$1(inlines[i+1]['content'], {lower: true}),
            text: inlines[i+1]['content']
          });
          i += 2;
        } else {
          i++;
        }
      }
      return _links
    }

    function extractLink(parent, link) {
      let result = {
        source: block['id'],
        text: link['text'],
        target: link['target'],
        type: 'url'
      };
      if (link['target'][0] === '#') {
        result.type = 'hash';
        result.target = link['target'].replace(/^#/, '');
      } else {
        result.block = {
          id: link['target'],
          text: link['text'],
          url: link['target']
        };
      }
      return result
    }

    function linkIndexOf(id, nodes) {
      let index;
      nodes.map(function(n, i) {
        if (n == null) {
          index = 'NA';
        } else if (n.id === id) {
          index = i;
        }
      });
      return index
    }

    for (let i = 0; i < token_len; ) {
      token = tokens[i];
      let _children = [];
      if (token.type === 'heading_open' && token.tag[0] === 'h') {
        if (use_strong) {
          _children = findStrong(tokens[i+1].children);
          if (_children.length > 0) {
            block = {id: _children[0]['target'], text: _children[0]['text']};
          }
        } else {
          block = {id: slugify$1(tokens[i+1].content.replace(/\*\*/g, ''), {lower: true}), text: tokens[i+1].content.replace(/\*\*/g, '') };
        }
        blocks.push(block);
        i += 2;
      } else if (token.type === 'inline') {
        _children = findLinks(token.children);
        _children.map(function(child) {
          if (block) {
            let link = extractLink(block, child);
            if (link.type === 'url') {
              blocks.push(link.block);
            }
            links.push(link);
            // links.push({source: block['id'], text: c['text'], target: c['target'].replace('#', '')})
          }
        });
        i++;
      } else {
        i++;
      }
    }

    links = links.map(function(p) {
      return {
        source: linkIndexOf(p.source, blocks),
        target: linkIndexOf(p.target, blocks)
      }
    }).filter(function(p) {
      return p['source'] != undefined && p['target'] != undefined
    });

    let index = tokens
      .filter((token, idx) => {
        return token.type === 'heading_open' || (token.type === 'inline' && tokens[idx - 1].type == 'heading_open')
      })
      .map(token => {
        return {
          type: token.type,
          tag: token.tag,
          content: token.content,
          attrs: token.attrs
        }
      });
    return {
      nodes: blocks,
      links: links,
      index: index
    }
  };

  SemanticDocs.data = (filepath, use_strong) => {
    function parse(text) {
      let tokens = converter.parse(text, {});

      let parsed = SemanticDocs.parse(tokens, {
        use_strong: use_strong
      });

      return {
        nodes: parsed.nodes,
        links: parsed.links,
        index: parsed.index,
        text: converter.render(text)
      }
    }

    if (content_cache) {
      return new Promise((resolve, reject) => {
        resolve(parse(content_cache));
      })
    } else {
      let tasks = [];
      if (Array.isArray(filepath)) {
        filepath.map(file => {
          tasks.push(new Promise((resolve, reject) => {
            d3.text(file, text => { resolve(text); });
          }));
        });
      } else {
        tasks = [new Promise((resolve, reject) => {
          d3.text(file, text => { resolve(text); });
        })];
      }
      return Promise.all(tasks)
        .then(textArray => {
          let alltext = textArray.join('\n');
          content_cache = alltext;
          return parse(alltext)
        })
    }
  };

  SemanticDocs.slugify = slugify$1;

  // this file is based on https://github.com/auchenberg/dependo

  let DAG = {};
  let graph;
  let linkedByIndex = {};
  let layout, nodes, links;
  let zoom;
  let graphWidth = $('.graph').width();
  let graphHeight = $('.graph').height();

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
    let elm = findElementByNode('circle', d);
    elm.style("fill", '#b94431');

    // Highlight related nodes
    fadeRelatedNodes(d, .05, nodes, links);
  }

  function centerGraph() {
    graphWidth = window.innerWidth / 2;
    graphHeight = $('.graph').height();

    let centerTranslate = [
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
    let elm = findElementByNode('circle', d);
    elm.style("fill", '#b94431');

    // Highlight related nodes
    fadeRelatedNodes(d, .05, nodes, links);
  }

  function onNodeMouseOut(nodes, links, d) {

    // Highlight circle
    let elm = findElementByNode('circle', d);
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
      let dx = d.target.x - d.source.x,
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
    return prefix + '-' + SemanticDocs.slugify(object.text, {lower: true}).replace(/[^\w]/g, '')
  }

  function findElementByNode(prefix, node) {
    let selector = '.'+formatClassName(prefix, node);
    return graph.select(selector);
  }

  function isConnected(a, b) {
    return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
  }

  function fadeRelatedNodes(d, opacity, nodes, links) {

    // Clean
    $('path.link').removeAttr('data-show');

    nodes.style("stroke-opacity", function(o) {
      let thisOpacity = 1;
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
        let elmNodes = graph.selectAll('.'+formatClassName('node', o.target));
        elmNodes.attr('fill-opacity', 1);
        elmNodes.attr('stroke-opacity', 1);

        elmNodes.classed('dimmed', false);

        // Highlight arrows
        let elmCurrentLink = $('path.link[data-source=' + o.source.index + ']');
        elmCurrentLink.attr('data-show', true);
        elmCurrentLink.attr('marker-end', 'url(#regular)');

        return 1;

      }

      if (o.target === d) {
        // Highlight target/sources of the link
        let elmNodes = graph.selectAll('.'+formatClassName('node', o.source));
        elmNodes.attr('fill-opacity', 1);
        elmNodes.attr('stroke-opacity', 1);

        elmNodes.classed('dimmed', false);

        // Highlight arrows
        let elmCurrentLink = $('path.link[data-target=' + o.target.index + ']');
        elmCurrentLink.attr('data-show', true);
        elmCurrentLink.attr('marker-end', 'url(#regular)');

        return 1;
      }

      if (o.source !== d && o.target !== d) {
        let elmAllLinks = $('path.link:not([data-show])');

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
      nodes.attr("class", function(d) { return formatClassName('node', d) });
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
      .remove();

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

    // Resize
    resize();

    centerGraph();

    // Controlers
    return graph;
  };

  DAG.focus = focus;

  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
  });

  let GRAPH_WRITING_KEY = 'GRAPH_WRITING_CONTENT_TMP';
  let GRAPH_WRITING_OPTION_STRONG = 'GRAPH_WRITING_OPTION_STRONG';
  let node_history = [];
  let history_ptr = 0;
  let start = null;

  function saveContent() {
    let content = $('#content_editor').val();
    window.localStorage.setItem(GRAPH_WRITING_KEY, content);
  }

  function jump(h){
    document.getElementById(h).scrollIntoView();
  }

  function getRenderStrongNode() {
    let strong = localStorage.getItem(GRAPH_WRITING_OPTION_STRONG);
    return !!strong
  }

  function setRenderStrongNode(use_strong) {
    if (use_strong) {
      localStorage.setItem(GRAPH_WRITING_OPTION_STRONG, 'true');
    } else {
      localStorage.removeItem(GRAPH_WRITING_OPTION_STRONG);
    }
  }

  const startup = function(filepath, cache=true) {

    SemanticDocs.data(filepath, getRenderStrongNode())
    .then(data => {
      let nodes = data.nodes;
      let links = data.links;
      let index = data.index;
      let text = data.text;
      let graph, zoom;
      let graphWidth, graphHeight;

      graphWidth = $('.graph').width();
      graphHeight = $('.graph').height();

      let buildIndex = index => {
        let frag = document.createDocumentFragment();
        index.map((node, idx) => {
          if (node.type === 'heading_open') {
            frag.appendChild($(`<div class=${node.tag}><a href="#${node.attrs[0][1]}">${index[idx + 1].content}</a></div>`)[0]);
          }
        });
        $('#index').append(frag);
      };

      function readNode(node) {
        // Tree.render(buildTree(node));
        jump(SemanticDocs.slugify(node.text, {lower: true}));
      }

      function readPrevNode() {
        history_ptr -= 1;
        if (history_ptr < 0) {
          history_ptr = 0;
        } else {
          readNode(node_history[history_ptr]);
        }
      }

      function readNextNode() {
        history_ptr += 1;
        if (history_ptr > node_history.length - 1) {
          history_ptr = node_history.length - 1;
        } else {
          readNode(node_history[history_ptr]);
        }
      }

      function onZoomChanged() {
        let scale = d3.event.scale;
        // if (scale > SCALE_MAX) {
        //   scale = SCALE_MAX;
        // }
        // if (scale < SCALE_MIN) {
        //   scale = SCALE_MIN;
        // }
        graph.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + scale + ")");
      }

      function onControlZoomClicked(e) {
        let elmTarget = $(this);
        let scaleProcentile = 0.50;

        // Scale
        let currentScale = zoom.scale();
        let newScale;
        if(elmTarget.hasClass('control-zoom-in')) {
          newScale = currentScale * (1 + scaleProcentile);
        } else {
          newScale = currentScale * (1 - scaleProcentile);
        }
        newScale = Math.max(newScale, 0);

        // Translate
        graphWidth = $('.graph').width();
        graphHeight = $('.graph').height();

        let centerTranslate = [
          (graphWidth / 2) - (graphWidth * newScale / 2),
          (graphHeight / 2) - (graphHeight * newScale / 2)
        ];

        // Store values
        zoom
          .translate(centerTranslate)
          .scale(newScale);

        // Render transition
        graph.transition()
          .duration(500)
          .attr("transform", "translate(" + zoom.translate() + ")" + " scale(" + zoom.scale() + ")");
      }

      $('.control-zoom a').on('click', onControlZoomClicked);

      zoom = d3.behavior.zoom();
      zoom.on("zoom", onZoomChanged);

      function renderContent(text) {
        // $('#content_editor').val(text)
        $(".content-body").html(text);
        $('.content-body')
        .children()
        .each(function(e) {
          $(this).css({position: 'relative'});
          $(this).append($('<div class="marker"><svg class="icon icon-files-empty"><use xlink:href="#icon-files-empty"></use></svg></div>'));
        });
      }

      function renderGraph(nodes, links, start, zoom) {
        start = nodes[0];
        // tree = Tree.render(buildTree(start));
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

      renderContent(text);
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

      renderGraph(nodes, links, start, zoom);

      buildIndex(index);

      function attachToStash(mark) {
        $('#marker_stash').append(mark);
      }

      function toggle_graph() {
        // $('#graph').toggle()
        $('body').removeClass('index_visible');
        $('body').toggleClass('graph_visible');
      }

      function toggle_setting() {
        $('.modal.js').toggle();
      }

      function toggle_index() {
        // $('#index').toggle()
        $('body').removeClass('graph_visible');
        $('body').toggleClass('index_visible');
      }

      $('#control_panel #toggle_graph').on('click', toggle_graph);
      $('#control_panel #toggle_index').on('click', toggle_index);
      $('#control_panel #content_back').on('click', readPrevNode);
      $('#control_panel #content_forward').on('click', readNextNode);
      $('#control_panel #toggle_setting').on('click', toggle_setting);

      $('#rerender').on('click', function(e) {
        saveContent();
        renderGraph();
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      });

      $('.content').on('click', function(e) {
        if (e.target.nodeName !== 'A') return;
        let id = e.target.hash.replace('#', '');
        if (nodes.filter(function(n) { return n["id"] == id }).length > 0) {
          if (id !== node_history[node_history.length - 1]['id']) {
            node_history.push({"id": id});
            history_ptr += 1;
          }
          readNode({"id": id});
        }
      });

      $('.content-body').on('click', function(e) {
        if (e.target.parentNode.className === 'marker') {
          let mark = $(e.target).parent().parent().clone();
          let close = $(mark).find('.marker');
          $(close).text('x');
          attachToStash(mark);
        }
      });

      $('#marker_stash').on('click', function(e) {
        if (e.target.className === 'marker') {
          $(e.target).parent().remove();
        }
      });

      $('.modal.js .modal-close').on('click', function(e) {
        SemanticDocs.data(filepath, getRenderStrongNode())
        .then(data => {
          let nodes = data.nodes;
          let links = data.links;
          renderGraph(nodes, links, start, zoom);
        });

        toggle_setting();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      });

      $('#toggle_strong_node').on('click', function(e) {
        setRenderStrongNode(e.target.checked);
      });

      $('#toggle_strong_node').attr({ checked: getRenderStrongNode()});

    });
  };

  exports.demo = startup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
