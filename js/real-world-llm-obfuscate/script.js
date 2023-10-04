var e = {
  893(e) {
      var t = {
          unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
          okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
      };
      function i(e) {
          return (!e.style || "none" != e.style.display) && !e.hasAttribute("hidden") && (!e.hasAttribute("aria-hidden") || "true" != e.getAttribute("aria-hidden") || e.className && e.className.indexOf && -1 !== e.className.indexOf("fallback-image"))
      }
      e.exports = function(e, a = {}) {
          "function" == typeof a && (a = {
              visibilityChecker: a
          }), a = Object.assign({
              minScore: 20,
              minContentLength: 140,
              visibilityChecker: i
          }, a);
          var r = e.querySelectorAll("p, pre, article"),
              n = e.querySelectorAll("div > br");
          if (n.length) {
              var s = new Set(r);
              [].forEach.call(n, (function(e) {
                  s.add(e.parentNode)
              })), r = Array.from(s)
          }
          var o = 0;
          return [].some.call(r, (function(e) {
              if (!a.visibilityChecker(e)) return !1;
              var i = e.className + " " + e.id;
              if (t.unlikelyCandidates.test(i) && !t.okMaybeItsACandidate.test(i) || e.matches("li p")) return !1;
              var r = e.textContent.trim()
                  .length;
              return !(r < a.minContentLength) && (o += Math.sqrt(r - a.minContentLength)) > a.minScore
          }))
      }
  },
  174(e) {
      function t(e, t) {
          if (t && t.documentElement) e = t, t = arguments[2];
          else if (!e || !e.documentElement) throw Error("First argument to Readability constructor should be a document object.");
          if (t = t || {}, this._doc = e, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._debug = !!t.debug, this._maxElemsToParse = t.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = t.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = t.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(t.classesToPreserve || []), this._keepClasses = !!t.keepClasses, this._serializer = t.serializer || function(e) {
                  return e.innerHTML
              }, this._disableJSONLD = !!t.disableJSONLD, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug) {
              let e = function(e) {
                  return e.nodeType == e.TEXT_NODE ? `${e.nodeName} ("${e.textContent}")` : `<${e.localName} ${Array.from(e.attributes||[],(function(e){return`${e.name}="${e.value}"`})).join(" ")}>`
              };
              this.log = function() {
                  if ("undefined" != typeof dump) {
                      var t = Array.prototype.map.call(arguments, (function(t) {
                              return t && t.nodeName ? e(t) : t
                          }))
                          .join(" ");
                      dump("Reader: (Readability) " + t + "\n")
                  } else if ("undefined" != typeof console) {
                      Array.from(arguments, (t => t && t.nodeType == this.ELEMENT_NODE ? e(t) : t))
                          .unshift("Reader: (Readability)")
                  }
              }
          } else this.log = function() {}
      }
      t.prototype = {
          FLAG_STRIP_UNLIKELYS: 1,
          FLAG_WEIGHT_CLASSES: 2,
          FLAG_CLEAN_CONDITIONALLY: 4,
          ELEMENT_NODE: 1,
          TEXT_NODE: 3,
          DEFAULT_MAX_ELEMS_TO_PARSE: 0,
          DEFAULT_N_TOP_CANDIDATES: 5,
          DEFAULT_TAGS_TO_SCORE: "SECTION,H2,H3,H4,H5,H6,P,TD,PRE".split(","),
          DEFAULT_CHAR_THRESHOLD: 500,
          REGEXPS: {
              unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
              okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
              positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
              negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
              extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
              byline: /byline|author|dateline|writtenby|p-author/i,
              replaceFonts: /<(\/?)font[^>]*>/gi,
              normalize: /\s{2,}/g,
              videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
              shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
              nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
              prevLink: /(prev|earl|old|new|<|«)/i,
              tokenize: /\W+/g,
              whitespace: /^\s*$/,
              hasContent: /\S$/,
              hashUrl: /^#.+/,
              srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
              b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
              jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
          },
          UNLIKELY_ROLES: ["menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog"],
          DIV_TO_P_ELEMS: new Set(["BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL"]),
          ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
          PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
          DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
          PHRASING_ELEMS: ["ABBR", "AUDIO", "B", "BDO", "BR", "BUTTON", "CITE", "CODE", "DATA", "DATALIST", "DFN", "EM", "EMBED", "I", "IMG", "INPUT", "KBD", "LABEL", "MARK", "MATH", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PROGRESS", "Q", "RUBY", "SAMP", "SCRIPT", "SELECT", "SMALL", "SPAN", "STRONG", "SUB", "SUP", "TEXTAREA", "TIME", "VAR", "WBR"],
          CLASSES_TO_PRESERVE: ["page"],
          HTML_ESCAPE_MAP: {
              lt: "<",
              gt: ">",
              amp: "&",
              quot: '"',
              apos: "'"
          },
          _postProcessContent: function(e) {
              this._fixRelativeUris(e), this._simplifyNestedElements(e), this._keepClasses || this._cleanClasses(e)
          },
          _removeNodes: function(e, t) {
              if (this._docJSDOMParser && e._isLiveNodeList) throw Error("Do not pass live node lists to _removeNodes");
              for (var i = e.length - 1; i >= 0; i--) {
                  var a = e[i],
                      r = a.parentNode;
                  r && (!t || t.call(this, a, i, e)) && r.removeChild(a)
              }
          },
          _replaceNodeTags: function(e, t) {
              if (this._docJSDOMParser && e._isLiveNodeList) throw Error("Do not pass live node lists to _replaceNodeTags");
              for (let i of e) this._setNodeTag(i, t)
          },
          _forEachNode: function(e, t) {
              Array.prototype.forEach.call(e, t, this)
          },
          _findNode: function(e, t) {
              return Array.prototype.find.call(e, t, this)
          },
          _someNode: function(e, t) {
              return Array.prototype.some.call(e, t, this)
          },
          _everyNode: function(e, t) {
              return Array.prototype.every.call(e, t, this)
          },
          _concatNodeLists: function() {
              var e = Array.prototype.slice,
                  t = e.call(arguments),
                  i = t.map((function(t) {
                      return e.call(t)
                  }));
              return Array.prototype.concat.apply([], i)
          },
          _getAllNodesWithTag: function(e, t) {
              return e.querySelectorAll ? e.querySelectorAll(t.join(",")) : [].concat.apply([], t.map((function(t) {
                  var i = e.getElementsByTagName(t);
                  return Array.isArray(i) ? i : Array.from(i)
              })))
          },
          _cleanClasses: function(e) {
              var t = this._classesToPreserve,
                  i = (e.getAttribute("class") || "")
                  .split(/\s+/)
                  .filter((function(e) {
                      return -1 != t.indexOf(e)
                  }))
                  .join(" ");
              for (i ? e.setAttribute("class", i) : e.removeAttribute("class"), e = e.firstElementChild; e; e = e.nextElementSibling) this._cleanClasses(e)
          },
          _fixRelativeUris: function(e) {
              var t = this._doc.baseURI,
                  i = this._doc.documentURI;
              function a(e) {
                  if (t == i && "#" == e.charAt(0)) return e;
                  try {
                      return new URL(e, t)
                          .href
                  } catch (e) {}
                  return e
              }
              var r = this._getAllNodesWithTag(e, ["a"]);
              this._forEachNode(r, (function(e) {
                  var t = e.getAttribute("href");
                  if (t)
                      if (0 === t.indexOf("javascript:"))
                          if (1 === e.childNodes.length && e.childNodes[0].nodeType === this.TEXT_NODE) {
                              var i = this._doc.createTextNode(e.textContent);
                              e.parentNode.replaceChild(i, e)
                          } else {
                              for (var r = this._doc.createElement("span"); e.firstChild;) r.appendChild(e.firstChild);
                              e.parentNode.replaceChild(r, e)
                          }
                  else e.setAttribute("href", a(t))
              }));
              var n = this._getAllNodesWithTag(e, ["img", "picture", "figure", "video", "audio", "source"]);
              this._forEachNode(n, (function(e) {
                  var t = e.getAttribute("src"),
                      i = e.getAttribute("poster"),
                      r = e.getAttribute("srcset");
                  if (t && e.setAttribute("src", a(t)), i && e.setAttribute("poster", a(i)), r) {
                      var n = r.replace(this.REGEXPS.srcsetUrl, (function(e, t, i, r) {
                          return a(t) + (i || "") + r
                      }));
                      e.setAttribute("srcset", n)
                  }
              }))
          },
          _simplifyNestedElements: function(e) {
              for (var t = e; t;) {
                  if (t.parentNode && ["DIV", "SECTION"].includes(t.tagName) && (!t.id || !t.id.startsWith("readability"))) {
                      if (this._isElementWithoutContent(t)) {
                          t = this._removeAndGetNext(t);
                          continue
                      }
                      if (this._hasSingleTagInsideElement(t, "DIV") || this._hasSingleTagInsideElement(t, "SECTION")) {
                          for (var i = t.children[0], a = 0; a < t.attributes.length; a++) i.setAttribute(t.attributes[a].name, t.attributes[a].value);
                          t.parentNode.replaceChild(i, t), t = i;
                          continue
                      }
                  }
                  t = this._getNextNode(t)
              }
          },
          _getArticleTitle: function() {
              var e = this._doc,
                  t = "",
                  i = "";
              try {
                  "string" != typeof(t = i = e.title.trim()) && (t = i = this._getInnerText(e.getElementsByTagName("title")[0]))
              } catch (e) {}
              var a = !1;
              function r(e) {
                  return e.split(/\s+/)
                      .length
              }
              if (/ [\|\-\\\/>»] /.test(t)) a = / [\\\/>»] /.test(t), 3 > r(t = i.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1")) && (t = i.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1"));
              else if (-1 !== t.indexOf(": ")) {
                  var n = this._concatNodeLists(e.getElementsByTagName("h1"), e.getElementsByTagName("h2")),
                      s = t.trim();
                  !this._someNode(n, (function(e) {
                      return e.textContent.trim() === s
                  })) && (3 > r(t = i.substring(i.lastIndexOf(":") + 1)) ? t = i.substring(i.indexOf(":") + 1) : r(i.substr(0, i.indexOf(":"))) > 5 && (t = i))
              } else if (t.length > 150 || t.length < 15) {
                  var o = e.getElementsByTagName("h1");
                  1 === o.length && (t = this._getInnerText(o[0]))
              }
              var l = r(t = t.trim()
                  .replace(this.REGEXPS.normalize, " "));
              return l <= 4 && (!a || l != r(i.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (t = i), t
          },
          _prepDocument: function() {
              var e = this._doc;
              this._removeNodes(this._getAllNodesWithTag(e, ["style"])), e.body && this._replaceBrs(e.body), this._replaceNodeTags(this._getAllNodesWithTag(e, ["font"]), "SPAN")
          },
          _nextNode: function(e) {
              for (var t = e; t && t.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(t.textContent);) t = t.nextSibling;
              return t
          },
          _replaceBrs: function(e) {
              this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                  for (var t = e.nextSibling, i = !1;
                      (t = this._nextNode(t)) && "BR" == t.tagName;) {
                      i = !0;
                      var a = t.nextSibling;
                      t.parentNode.removeChild(t), t = a
                  }
                  if (i) {
                      var r = this._doc.createElement("p");
                      for (e.parentNode.replaceChild(r, e), t = r.nextSibling; t;) {
                          if ("BR" == t.tagName) {
                              var n = this._nextNode(t.nextSibling);
                              if (n && "BR" == n.tagName) break
                          }
                          if (!this._isPhrasingContent(t)) break;
                          var s = t.nextSibling;
                          r.appendChild(t), t = s
                      }
                      for (; r.lastChild && this._isWhitespace(r.lastChild);) r.removeChild(r.lastChild);
                      "P" === r.parentNode.tagName && this._setNodeTag(r.parentNode, "DIV")
                  }
              }))
          },
          _setNodeTag: function(e, t) {
              if (this.log("_setNodeTag", e, t), this._docJSDOMParser) return e.localName = t.toLowerCase(), e.tagName = t.toUpperCase(), e;
              for (var i = e.ownerDocument.createElement(t); e.firstChild;) i.appendChild(e.firstChild);
              e.parentNode.replaceChild(i, e), e.readability && (i.readability = e.readability);
              for (var a = 0; a < e.attributes.length; a++) try {
                  i.setAttribute(e.attributes[a].name, e.attributes[a].value)
              } catch (e) {}
              return i
          },
          _prepArticle: function(e) {
              this._cleanStyles(e), this._markDataTables(e), this._fixLazyImages(e), this._cleanConditionally(e, "form"), this._cleanConditionally(e, "fieldset"), this._clean(e, "object"), this._clean(e, "embed"), this._clean(e, "footer"), this._clean(e, "link"), this._clean(e, "aside");
              var t = this.DEFAULT_CHAR_THRESHOLD;
              this._forEachNode(e.children, (function(e) {
                  this._cleanMatchedNodes(e, (function(e, i) {
                      return this.REGEXPS.shareElements.test(i) && e.textContent.length < t
                  }))
              })), this._clean(e, "iframe"), this._clean(e, "input"), this._clean(e, "textarea"), this._clean(e, "select"), this._clean(e, "button"), this._cleanHeaders(e), this._cleanConditionally(e, "table"), this._cleanConditionally(e, "ul"), this._cleanConditionally(e, "div"), this._replaceNodeTags(this._getAllNodesWithTag(e, ["h1"]), "h2"), this._removeNodes(this._getAllNodesWithTag(e, ["p"]), (function(e) {
                  return 0 === e.getElementsByTagName("img")
                      .length + e.getElementsByTagName("embed")
                      .length + e.getElementsByTagName("object")
                      .length + e.getElementsByTagName("iframe")
                      .length && !this._getInnerText(e, !1)
              })), this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                  var t = this._nextNode(e.nextSibling);
                  t && "P" == t.tagName && e.parentNode.removeChild(e)
              })), this._forEachNode(this._getAllNodesWithTag(e, ["table"]), (function(e) {
                  var t = this._hasSingleTagInsideElement(e, "TBODY") ? e.firstElementChild : e;
                  if (this._hasSingleTagInsideElement(t, "TR")) {
                      var i = t.firstElementChild;
                      if (this._hasSingleTagInsideElement(i, "TD")) {
                          var a = i.firstElementChild;
                          a = this._setNodeTag(a, this._everyNode(a.childNodes, this._isPhrasingContent) ? "P" : "DIV"), e.parentNode.replaceChild(a, e)
                      }
                  }
              }))
          },
          _initializeNode: function(e) {
              switch (e.readability = {
                      contentScore: 0
                  }, e.tagName) {
                  case "DIV":
                      e.readability.contentScore += 5;
                      break;
                  case "PRE":
                  case "TD":
                  case "BLOCKQUOTE":
                      e.readability.contentScore += 3;
                      break;
                  case "ADDRESS":
                  case "OL":
                  case "UL":
                  case "DL":
                  case "DD":
                  case "DT":
                  case "LI":
                  case "FORM":
                      e.readability.contentScore -= 3;
                      break;
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                  case "H5":
                  case "H6":
                  case "TH":
                      e.readability.contentScore -= 5
              }
              e.readability.contentScore += this._getClassWeight(e)
          },
          _removeAndGetNext: function(e) {
              var t = this._getNextNode(e, !0);
              return e.parentNode.removeChild(e), t
          },
          _getNextNode: function(e, t) {
              if (!t && e.firstElementChild) return e.firstElementChild;
              if (e.nextElementSibling) return e.nextElementSibling;
              do {
                  e = e.parentNode
              } while (e && !e.nextElementSibling);
              return e && e.nextElementSibling
          },
          _textSimilarity: function(e, t) {
              var i = e.toLowerCase()
                  .split(this.REGEXPS.tokenize)
                  .filter(Boolean),
                  a = t.toLowerCase()
                  .split(this.REGEXPS.tokenize)
                  .filter(Boolean);
              return i.length && a.length ? 1 - a.filter((e => !i.includes(e)))
                  .join(" ")
                  .length / a.join(" ")
                  .length : 0
          },
          _checkByline: function(e, t) {
              if (this._articleByline) return !1;
              if (void 0 !== e.getAttribute) var i = e.getAttribute("rel"),
                  a = e.getAttribute("itemprop");
              return !(!("author" === i || a && -1 !== a.indexOf("author") || this.REGEXPS.byline.test(t)) || !this._isValidByline(e.textContent) || (this._articleByline = e.textContent.trim(), 0))
          },
          _getNodeAncestors: function(e, t) {
              t = t || 0;
              for (var i = 0, a = []; e.parentNode && (a.push(e.parentNode), !t || ++i !== t);) e = e.parentNode;
              return a
          },
          _grabArticle: function(e) {
              this.log("**** grabArticle ****");
              var t = this._doc,
                  i = null !== e;
              if (!(e = e || this._doc.body)) return this.log("No body found in document. Abort."), null;
              for (var a = e.innerHTML;;) {
                  this.log("Starting grabArticle loop");
                  var r, n = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),
                      s = [],
                      o = this._doc.documentElement;
                  let V = !0;
                  for (; o;) {
                      "HTML" === o.tagName && (this._articleLang = o.getAttribute("lang"));
                      var l = o.className + " " + o.id;
                      if (this._isProbablyVisible(o))
                          if (this._checkByline(o, l)) o = this._removeAndGetNext(o);
                          else if (V && this._headerDuplicatesTitle(o)) this.log("Removing header: ", o.textContent.trim(), this._articleTitle.trim()), V = !1, o = this._removeAndGetNext(o);
                      else {
                          if (n) {
                              if (this.REGEXPS.unlikelyCandidates.test(l) && !this.REGEXPS.okMaybeItsACandidate.test(l) && !this._hasAncestorTag(o, "table") && !this._hasAncestorTag(o, "code") && "BODY" !== o.tagName && "A" !== o.tagName) {
                                  this.log("Removing unlikely candidate - " + l), o = this._removeAndGetNext(o);
                                  continue
                              }
                              if (this.UNLIKELY_ROLES.includes(o.getAttribute("role"))) {
                                  this.log("Removing content with role " + o.getAttribute("role") + " - " + l), o = this._removeAndGetNext(o);
                                  continue
                              }
                          }
                          if ("DIV" !== o.tagName && "SECTION" !== o.tagName && "HEADER" !== o.tagName && "H1" !== o.tagName && "H2" !== o.tagName && "H3" !== o.tagName && "H4" !== o.tagName && "H5" !== o.tagName && "H6" !== o.tagName || !this._isElementWithoutContent(o)) {
                              if (-1 !== this.DEFAULT_TAGS_TO_SCORE.indexOf(o.tagName) && s.push(o), "DIV" === o.tagName) {
                                  for (var d = null, h = o.firstChild; h;) {
                                      var c = h.nextSibling;
                                      if (this._isPhrasingContent(h)) null !== d ? d.appendChild(h) : this._isWhitespace(h) || (d = t.createElement("p"), o.replaceChild(d, h), d.appendChild(h));
                                      else if (null !== d) {
                                          for (; d.lastChild && this._isWhitespace(d.lastChild);) d.removeChild(d.lastChild);
                                          d = null
                                      }
                                      h = c
                                  }
                                  if (this._hasSingleTagInsideElement(o, "P") && .25 > this._getLinkDensity(o)) {
                                      var g = o.children[0];
                                      o.parentNode.replaceChild(g, o), o = g, s.push(o)
                                  } else this._hasChildBlockElement(o) || (o = this._setNodeTag(o, "P"), s.push(o))
                              }
                              o = this._getNextNode(o)
                          } else o = this._removeAndGetNext(o)
                      } else this.log("Removing hidden node - " + l), o = this._removeAndGetNext(o)
                  }
                  var u = [];
                  this._forEachNode(s, (function(e) {
                      if (e.parentNode && void 0 !== e.parentNode.tagName) {
                          var t = this._getInnerText(e);
                          if (!(t.length < 25)) {
                              var i = this._getNodeAncestors(e, 5);
                              if (0 !== i.length) {
                                  var a = 0;
                                  a += 1, a += t.split(",")
                                      .length, a += Math.min(Math.floor(t.length / 100), 3), this._forEachNode(i, (function(e, t) {
                                          if (e.tagName && e.parentNode && void 0 !== e.parentNode.tagName) {
                                              if (void 0 === e.readability && (this._initializeNode(e), u.push(e)), 0 === t) var i = 1;
                                              else i = 1 === t ? 2 : 3 * t;
                                              e.readability.contentScore += a / i
                                          }
                                      }))
                              }
                          }
                      }
                  }));
                  for (var m = [], _ = 0, p = u.length; _ < p; _ += 1) {
                      var f = u[_],
                          v = f.readability.contentScore * (1 - this._getLinkDensity(f));
                      f.readability.contentScore = v, this.log("Candidate:", f, "with score " + v);
                      for (var N = 0; N < this._nbTopCandidates; N++) {
                          var b = m[N];
                          if (!b || v > b.readability.contentScore) {
                              m.splice(N, 0, f), m.length > this._nbTopCandidates && m.pop();
                              break
                          }
                      }
                  }
                  var E = m[0] || null,
                      T = !1;
                  if (null === E || "BODY" === E.tagName) {
                      for (E = t.createElement("DIV"), T = !0; e.firstChild;) this.log("Moving child out:", e.firstChild), E.appendChild(e.firstChild);
                      e.appendChild(E), this._initializeNode(E)
                  } else if (E) {
                      for (var y = [], A = 1; A < m.length; A++) m[A].readability.contentScore / E.readability.contentScore >= .75 && y.push(this._getNodeAncestors(m[A]));
                      if (y.length >= 3)
                          for (r = E.parentNode;
                              "BODY" !== r.tagName;) {
                              for (var C = 0, S = 0; S < y.length && C < 3; S++) C += Number(y[S].includes(r));
                              if (C >= 3) {
                                  E = r;
                                  break
                              }
                              r = r.parentNode
                          }
                      E.readability || this._initializeNode(E), r = E.parentNode;
                      for (var L = E.readability.contentScore, x = L / 3;
                          "BODY" !== r.tagName;)
                          if (r.readability) {
                              var I = r.readability.contentScore;
                              if (I < x) break;
                              if (I > L) {
                                  E = r;
                                  break
                              }
                              L = r.readability.contentScore, r = r.parentNode
                          } else r = r.parentNode;
                      for (r = E.parentNode;
                          "BODY" != r.tagName && 1 == r.children.length;) r = (E = r)
                          .parentNode;
                      E.readability || this._initializeNode(E)
                  }
                  var D = t.createElement("DIV");
                  i && (D.id = "readability-content");
                  for (var R = Math.max(10, .2 * E.readability.contentScore), O = (r = E.parentNode)
                          .children, P = 0, w = O.length; P < w; P++) {
                      var B = O[P],
                          k = !1;
                      if (this.log("Looking at sibling node:", B, B.readability ? "with score " + B.readability.contentScore : ""), this.log("Sibling has score", B.readability ? B.readability.contentScore : "Unknown"), B === E) k = !0;
                      else {
                          var M = 0;
                          if (B.className === E.className && "" !== E.className && (M += .2 * E.readability.contentScore), B.readability && B.readability.contentScore + M >= R) k = !0;
                          else if ("P" === B.nodeName) {
                              var G = this._getLinkDensity(B),
                                  H = this._getInnerText(B),
                                  U = H.length;
                              (U > 80 && G < .25 || U < 80 && U > 0 && 0 === G && -1 !== H.search(/\.( |$)/)) && (k = !0)
                          }
                      }
                      k && (this.log("Appending node:", B), -1 === this.ALTER_TO_DIV_EXCEPTIONS.indexOf(B.nodeName) && (this.log("Altering sibling:", B, "to div."), B = this._setNodeTag(B, "DIV")), D.appendChild(B), O = r.children, P -= 1, w -= 1)
                  }
                  if (this._debug && this.log("Article content pre-prep: " + D.innerHTML), this._prepArticle(D), this._debug && this.log("Article content post-prep: " + D.innerHTML), T) E.id = "readability-page-1", E.className = "page";
                  else {
                      var W = t.createElement("DIV");
                      for (W.id = "readability-page-1", W.className = "page"; D.firstChild;) W.appendChild(D.firstChild);
                      D.appendChild(W)
                  }
                  this._debug && this.log("Article content after paging: " + D.innerHTML);
                  var F = !0,
                      X = this._getInnerText(D, !0)
                      .length;
                  if (X < this._charThreshold)
                      if (F = !1, e.innerHTML = a, this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) this._removeFlag(this.FLAG_STRIP_UNLIKELYS), this._attempts.push({
                          articleContent: D,
                          textLength: X
                      });
                      else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) this._removeFlag(this.FLAG_WEIGHT_CLASSES), this._attempts.push({
                      articleContent: D,
                      textLength: X
                  });
                  else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY), this._attempts.push({
                      articleContent: D,
                      textLength: X
                  });
                  else {
                      if (this._attempts.push({
                              articleContent: D,
                              textLength: X
                          }), this._attempts.sort((function(e, t) {
                              return t.textLength - e.textLength
                          })), !this._attempts[0].textLength) return null;
                      D = this._attempts[0].articleContent, F = !0
                  }
                  if (F) {
                      var j = [r, E].concat(this._getNodeAncestors(r));
                      return this._someNode(j, (function(e) {
                          if (!e.tagName) return !1;
                          var t = e.getAttribute("dir");
                          return !!t && (this._articleDir = t, !0)
                      })), D
                  }
              }
          },
          _isValidByline: function(e) {
              return ("string" == typeof e || e instanceof String) && (e = e.trim())
                  .length > 0 && e.length < 100
          },
          _unescapeHtmlEntities: function(e) {
              if (!e) return e;
              var t = this.HTML_ESCAPE_MAP;
              return e.replace(/&(quot|amp|apos|lt|gt);/g, (function(e, i) {
                      return t[i]
                  }))
                  .replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, (function(e, t, i) {
                      return String.fromCharCode(parseInt(t || i, t ? 16 : 10))
                  }))
          },
          _getJSONLD: function(e) {
              var t, i = this._getAllNodesWithTag(e, ["script"]);
              return this._forEachNode(i, (function(e) {
                  if (!t && "application/ld+json" === e.getAttribute("type")) try {
                      var i = e.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, ""),
                          a = JSON.parse(i);
                      if (!(a["@context"] && a["@context"].match(/^https?\:\/\/schema\.org$/) && (!a["@type"] && Array.isArray(a["@graph"]) && (a = a["@graph"].find((function(e) {
                              return (e["@type"] || "")
                                  .match(this.REGEXPS.jsonLdArticleTypes)
                          }))), a && a["@type"] && a["@type"].match(this.REGEXPS.jsonLdArticleTypes)))) return;
                      if (t = {}, "string" == typeof a.name && "string" == typeof a.headline && a.name !== a.headline) {
                          var r = this._getArticleTitle(),
                              n = this._textSimilarity(a.name, r) > .75;
                          this._textSimilarity(a.headline, r) > .75 && !n ? t.title = a.headline : t.title = a.name
                      } else "string" == typeof a.name ? t.title = a.name.trim() : "string" == typeof a.headline && (t.title = a.headline.trim());
                      return a.author && ("string" == typeof a.author.name ? t.byline = a.author.name.trim() : Array.isArray(a.author) && a.author[0] && "string" == typeof a.author[0].name && (t.byline = a.author.filter((function(e) {
                              return e && "string" == typeof e.name
                          }))
                          .map((function(e) {
                              return e.name.trim()
                          }))
                          .join(", "))), "string" == typeof a.description && (t.excerpt = a.description.trim()), void(a.publisher && "string" == typeof a.publisher.name && (t.siteName = a.publisher.name.trim()))
                  } catch (e) {
                      this.log(e.message)
                  }
              })), t || {}
          },
          _getArticleMetadata: function(e) {
              var t = {},
                  i = {},
                  a = this._doc.getElementsByTagName("meta"),
                  r = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,
                  n = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
              return this._forEachNode(a, (function(e) {
                  var t = e.getAttribute("name"),
                      a = e.getAttribute("property"),
                      s = e.getAttribute("content");
                  if (s) {
                      var o = null,
                          l = null;
                      a && (o = a.match(r)) && (i[l = o[0].toLowerCase()
                          .replace(/\s/g, "")] = s.trim()), !o && t && n.test(t) && (l = t, s && (i[l = l.toLowerCase()
                          .replace(/\s/g, "")
                          .replace(/\./g, ":")] = s.trim()))
                  }
              })), t.title = e.title || i["dc:title"] || i["dcterm:title"] || i["og:title"] || i["weibo:article:title"] || i["weibo:webpage:title"] || i.title || i["twitter:title"], t.title || (t.title = this._getArticleTitle()), t.byline = e.byline || i["dc:creator"] || i["dcterm:creator"] || i.author, t.excerpt = e.excerpt || i["dc:description"] || i["dcterm:description"] || i["og:description"] || i["weibo:article:description"] || i["weibo:webpage:description"] || i.description || i["twitter:description"], t.siteName = e.siteName || i["og:site_name"], t.title = this._unescapeHtmlEntities(t.title), t.byline = this._unescapeHtmlEntities(t.byline), t.excerpt = this._unescapeHtmlEntities(t.excerpt), t.siteName = this._unescapeHtmlEntities(t.siteName), t
          },
          _isSingleImage: function(e) {
              return "IMG" === e.tagName || 1 === e.children.length && "" === e.textContent.trim() && this._isSingleImage(e.children[0])
          },
          _unwrapNoscriptImages: function(e) {
              var t = Array.from(e.getElementsByTagName("img"));
              this._forEachNode(t, (function(e) {
                  for (var t = 0; t < e.attributes.length; t++) {
                      var i = e.attributes[t];
                      switch (i.name) {
                          case "src":
                          case "srcset":
                          case "data-src":
                          case "data-srcset":
                              return
                      }
                      if (/\.(jpg|jpeg|png|webp)/i.test(i.value)) return
                  }
                  e.parentNode.removeChild(e)
              }));
              var i = Array.from(e.getElementsByTagName("noscript"));
              this._forEachNode(i, (function(t) {
                  var i = e.createElement("div");
                  if (i.innerHTML = t.innerHTML, this._isSingleImage(i)) {
                      var a = t.previousElementSibling;
                      if (a && this._isSingleImage(a)) {
                          var r = a;
                          "IMG" !== r.tagName && (r = a.getElementsByTagName("img")[0]);
                          for (var n = i.getElementsByTagName("img")[0], s = 0; s < r.attributes.length; s++) {
                              var o = r.attributes[s];
                              if ("" !== o.value && ("src" === o.name || "srcset" === o.name || /\.(jpg|jpeg|png|webp)/i.test(o.value))) {
                                  if (n.getAttribute(o.name) === o.value) continue;
                                  var l = o.name;
                                  n.hasAttribute(l) && (l = "data-old-" + l), n.setAttribute(l, o.value)
                              }
                          }
                          t.parentNode.replaceChild(i.firstElementChild, a)
                      }
                  }
              }))
          },
          _removeScripts: function(e) {
              this._removeNodes(this._getAllNodesWithTag(e, ["script"]), (function(e) {
                  return e.nodeValue = "", e.removeAttribute("src"), !0
              })), this._removeNodes(this._getAllNodesWithTag(e, ["noscript"]))
          },
          _hasSingleTagInsideElement: function(e, t) {
              return 1 == e.children.length && e.children[0].tagName === t && !this._someNode(e.childNodes, (function(e) {
                  return e.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(e.textContent)
              }))
          },
          _isElementWithoutContent: function(e) {
              return e.nodeType === this.ELEMENT_NODE && 0 == e.textContent.trim()
                  .length && (0 == e.children.length || e.children.length == e.getElementsByTagName("br")
                      .length + e.getElementsByTagName("hr")
                      .length)
          },
          _hasChildBlockElement: function(e) {
              return this._someNode(e.childNodes, (function(e) {
                  return this.DIV_TO_P_ELEMS.has(e.tagName) || this._hasChildBlockElement(e)
              }))
          },
          _isPhrasingContent: function(e) {
              return e.nodeType === this.TEXT_NODE || -1 !== this.PHRASING_ELEMS.indexOf(e.tagName) || ("A" === e.tagName || "DEL" === e.tagName || "INS" === e.tagName) && this._everyNode(e.childNodes, this._isPhrasingContent)
          },
          _isWhitespace: function(e) {
              return e.nodeType === this.TEXT_NODE && 0 === e.textContent.trim()
                  .length || e.nodeType === this.ELEMENT_NODE && "BR" === e.tagName
          },
          _getInnerText: function(e, t) {
              t = void 0 === t || t;
              var i = e.textContent.trim();
              return t ? i.replace(this.REGEXPS.normalize, " ") : i
          },
          _getCharCount: function(e, t) {
              return t = t || ",", this._getInnerText(e)
                  .split(t)
                  .length - 1
          },
          _cleanStyles: function(e) {
              if (e && "svg" !== e.tagName.toLowerCase()) {
                  for (var t = 0; t < this.PRESENTATIONAL_ATTRIBUTES.length; t++) e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[t]); - 1 !== this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) && (e.removeAttribute("width"), e.removeAttribute("height"));
                  for (var i = e.firstElementChild; null !== i;) this._cleanStyles(i), i = i.nextElementSibling
              }
          },
          _getLinkDensity: function(e) {
              var t = this._getInnerText(e)
                  .length;
              if (0 === t) return 0;
              var i = 0;
              return this._forEachNode(e.getElementsByTagName("a"), (function(e) {
                  var t = e.getAttribute("href"),
                      a = t && this.REGEXPS.hashUrl.test(t) ? .3 : 1;
                  i += this._getInnerText(e)
                      .length * a
              })), i / t
          },
          _getClassWeight: function(e) {
              if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;
              var t = 0;
              return "string" == typeof e.className && "" !== e.className && (this.REGEXPS.negative.test(e.className) && (t -= 25), this.REGEXPS.positive.test(e.className) && (t += 25)), "string" == typeof e.id && "" !== e.id && (this.REGEXPS.negative.test(e.id) && (t -= 25), this.REGEXPS.positive.test(e.id) && (t += 25)), t
          },
          _clean: function(e, t) {
              var i = -1 !== ["object", "embed", "iframe"].indexOf(t);
              this._removeNodes(this._getAllNodesWithTag(e, [t]), (function(e) {
                  if (i) {
                      for (var t = 0; t < e.attributes.length; t++)
                          if (this.REGEXPS.videos.test(e.attributes[t].value)) return !1;
                      if ("object" === e.tagName && this.REGEXPS.videos.test(e.innerHTML)) return !1
                  }
                  return !0
              }))
          },
          _hasAncestorTag: function(e, t, i, a) {
              i = i || 3, t = t.toUpperCase();
              for (var r = 0; e.parentNode && (!(i > 0) || !(r > i));) {
                  if (e.parentNode.tagName === t && (!a || a(e.parentNode))) return !0;
                  e = e.parentNode, r++
              }
              return !1
          },
          _getRowAndColumnCount: function(e) {
              for (var t = 0, i = 0, a = e.getElementsByTagName("tr"), r = 0; r < a.length; r++) {
                  var n = a[r].getAttribute("rowspan") || 0;
                  n && (n = parseInt(n, 10)), t += n || 1;
                  for (var s = 0, o = a[r].getElementsByTagName("td"), l = 0; l < o.length; l++) {
                      var d = o[l].getAttribute("colspan") || 0;
                      d && (d = parseInt(d, 10)), s += d || 1
                  }
                  i = Math.max(i, s)
              }
              return {
                  rows: t,
                  columns: i
              }
          },
          _markDataTables: function(e) {
              for (var t = e.getElementsByTagName("table"), i = 0; i < t.length; i++) {
                  var a = t[i];
                  if ("presentation" != a.getAttribute("role") && "0" != a.getAttribute("datatable"))
                      if (a.getAttribute("summary")) a._readabilityDataTable = !0;
                      else {
                          var r = a.getElementsByTagName("caption")[0];
                          if (r && r.childNodes.length > 0) a._readabilityDataTable = !0;
                          else if (["col", "colgroup", "tfoot", "thead", "th"].some((function(e) {
                                  return !!a.getElementsByTagName(e)[0]
                              }))) this.log("Data table because found data-y descendant"), a._readabilityDataTable = !0;
                          else if (a.getElementsByTagName("table")[0]) a._readabilityDataTable = !1;
                          else {
                              var n = this._getRowAndColumnCount(a);
                              n.rows >= 10 || n.columns > 4 ? a._readabilityDataTable = !0 : a._readabilityDataTable = n.rows * n.columns > 10
                          }
                      }
                  else a._readabilityDataTable = !1
              }
          },
          _fixLazyImages: function(e) {
              this._forEachNode(this._getAllNodesWithTag(e, ["img", "picture", "figure"]), (function(e) {
                  if (e.src && this.REGEXPS.b64DataUrl.test(e.src)) {
                      if ("image/svg+xml" === this.REGEXPS.b64DataUrl.exec(e.src)[1]) return;
                      for (var t = !1, i = 0; i < e.attributes.length; i++) {
                          var a = e.attributes[i];
                          if ("src" !== a.name && /\.(jpg|jpeg|png|webp)/i.test(a.value)) {
                              t = !0;
                              break
                          }
                      }
                      if (t) {
                          var r = e.src.search(/base64\s*/i) + 7;
                          e.src.length - r < 133 && e.removeAttribute("src")
                      }
                  }
                  if (!e.src && (!e.srcset || "null" == e.srcset) || -1 !== e.className.toLowerCase()
                      .indexOf("lazy"))
                      for (var n = 0; n < e.attributes.length; n++)
                          if ("src" !== (a = e.attributes[n])
                              .name && "srcset" !== a.name && "alt" !== a.name) {
                              var s = null;
                              if (/\.(jpg|jpeg|png|webp)\s+\d/.test(a.value) ? s = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(a.value) && (s = "src"), s)
                                  if ("IMG" === e.tagName || "PICTURE" === e.tagName) e.setAttribute(s, a.value);
                                  else if ("FIGURE" === e.tagName && !this._getAllNodesWithTag(e, ["img", "picture"])
                                  .length) {
                                  var o = this._doc.createElement("img");
                                  o.setAttribute(s, a.value), e.appendChild(o)
                              }
                          }
              }))
          },
          _getTextDensity: function(e, t) {
              var i = this._getInnerText(e, !0)
                  .length;
              if (0 === i) return 0;
              var a = 0,
                  r = this._getAllNodesWithTag(e, t);
              return this._forEachNode(r, (e => a += this._getInnerText(e, !0)
                  .length)), a / i
          },
          _cleanConditionally: function(e, t) {
              this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) && this._removeNodes(this._getAllNodesWithTag(e, [t]), (function(e) {
                  var i = function(e) {
                          return e._readabilityDataTable
                      },
                      a = "ul" === t || "ol" === t;
                  if (!a) {
                      var r = 0,
                          n = this._getAllNodesWithTag(e, ["ul", "ol"]);
                      this._forEachNode(n, (e => r += this._getInnerText(e)
                              .length)), a = r / this._getInnerText(e)
                          .length > .9
                  }
                  if ("table" === t && i(e) || this._hasAncestorTag(e, "table", -1, i) || this._hasAncestorTag(e, "code")) return !1;
                  var s = this._getClassWeight(e);
                  if (this.log("Cleaning Conditionally", e), s + 0 < 0) return !0;
                  if (10 > this._getCharCount(e, ",")) {
                      for (var o = e.getElementsByTagName("p")
                              .length, l = e.getElementsByTagName("img")
                              .length, d = e.getElementsByTagName("li")
                              .length - 100, h = e.getElementsByTagName("input")
                              .length, c = this._getTextDensity(e, ["h1", "h2", "h3", "h4", "h5", "h6"]), g = 0, u = this._getAllNodesWithTag(e, ["object", "embed", "iframe"]), m = 0; m < u.length; m++) {
                          for (var _ = 0; _ < u[m].attributes.length; _++)
                              if (this.REGEXPS.videos.test(u[m].attributes[_].value)) return !1;
                          if ("object" === u[m].tagName && this.REGEXPS.videos.test(u[m].innerHTML)) return !1;
                          g++
                      }
                      var p = this._getLinkDensity(e),
                          f = this._getInnerText(e)
                          .length;
                      return l > 1 && o / l < .5 && !this._hasAncestorTag(e, "figure") || !a && d > o || h > Math.floor(o / 3) || !a && c < .9 && f < 25 && (0 === l || l > 2) && !this._hasAncestorTag(e, "figure") || !a && s < 25 && p > .2 || s >= 25 && p > .5 || 1 === g && f < 75 || g > 1
                  }
                  return !1
              }))
          },
          _cleanMatchedNodes: function(e, t) {
              for (var i = this._getNextNode(e, !0), a = this._getNextNode(e); a && a != i;) a = t.call(this, a, a.className + " " + a.id) ? this._removeAndGetNext(a) : this._getNextNode(a)
          },
          _cleanHeaders: function(e) {
              let t = this._getAllNodesWithTag(e, ["h1", "h2"]);
              this._removeNodes(t, (function(e) {
                  let t = 0 > this._getClassWeight(e);
                  return t && this.log("Removing header with low class weight:", e), t
              }))
          },
          _headerDuplicatesTitle: function(e) {
              if ("H1" != e.tagName && "H2" != e.tagName) return !1;
              var t = this._getInnerText(e, !1);
              return this.log("Evaluating similarity of header:", t, this._articleTitle), this._textSimilarity(this._articleTitle, t) > .75
          },
          _flagIsActive: function(e) {
              return (this._flags & e) > 0
          },
          _removeFlag: function(e) {
              this._flags = this._flags & ~e
          },
          _isProbablyVisible: function(e) {
              return (!e.style || "none" != e.style.display) && !e.hasAttribute("hidden") && (!e.hasAttribute("aria-hidden") || "true" != e.getAttribute("aria-hidden") || e.className && e.className.indexOf && -1 !== e.className.indexOf("fallback-image"))
          },
          parse: function() {
              if (this._maxElemsToParse > 0) {
                  var e = this._doc.getElementsByTagName("*")
                      .length;
                  if (e > this._maxElemsToParse) throw Error("Aborting parsing document; " + e + " elements found")
              }
              this._unwrapNoscriptImages(this._doc);
              var t = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
              this._removeScripts(this._doc), this._prepDocument();
              var i = this._getArticleMetadata(t);
              this._articleTitle = i.title;
              var a = this._grabArticle();
              if (!a) return null;
              if (this.log("Grabbed: " + a.innerHTML), this._postProcessContent(a), !i.excerpt) {
                  var r = a.getElementsByTagName("p");
                  r.length > 0 && (i.excerpt = r[0].textContent.trim())
              }
              var n = a.textContent;
              return {
                  title: this._articleTitle,
                  byline: i.byline || this._articleByline,
                  dir: this._articleDir,
                  lang: this._articleLang,
                  content: this._serializer(a),
                  textContent: n,
                  length: n.length,
                  excerpt: i.excerpt,
                  siteName: i.siteName || this._articleSiteName
              }
          }
      }, e.exports = t
  },
  107(e, t, i) {
      var a = i(174),
          r = i(893);
      e.exports = {
          Readability: a,
          isProbablyReaderable: r
      }
  }
},
t = {};
function i(a) {
var r = t[a];
if (void 0 !== r) return r.exports;
var n = t[a] = {
  exports: {}
};
return e[a](n, n.exports, i), n.exports
}
i.n = e => {
var t = e && e.__esModule ? () => e.default : () => e;
return i.d(t, {
  a: t
}), t
}, i.d = (e, t) => {
for (var a in t) i.o(t, a) && !i.o(e, a) && Object.defineProperty(e, a, {
  enumerable: !0,
  get: t[a]
})
}, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
"use strict";
var e = i(107);
i.n(e);
let t = "readergpt__shadowRoot";
var a = new e.Readability(document.cloneNode(!0))
  .parse();
function r(e) {
  let t = chrome.runtime.getURL(e),
      i = document.createElement("link");
  return i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", t), i
}
function n(e) {
  var t, i, a;
  null === (t = o("readergpt__readableText")) || void 0 === t || t.classList.remove("d-none"), null === (i = o("readergpt__readableText")) || void 0 === i || i.classList.remove("alert-secondary"), null === (a = o("readergpt__readableText")) || void 0 === a || a.classList.add("alert-warning"), o("readergpt__readableText")
      .innerText = e
}
function s() {
  var e, t, i;
  null === (e = o("readergpt__gifContainer")) || void 0 === e || e.classList.add("d-none"), null === (t = o("readergpt__gifContainer")) || void 0 === t || t.classList.remove("loading"), null === (i = o("readergpt__loginContainer")) || void 0 === i || i.classList.remove("loading")
}
function o(e) {
  var t, i;
  return null === (i = null === (t = document.getElementById("readergpt__shadowRoot")) || void 0 === t ? void 0 : t.shadowRoot) || void 0 === i ? void 0 : i.getElementById(e)
}
chrome.runtime.onMessage.addListener(((e, t, i) => {
      "getReadableContent" !== e.command || i(a)
  })),
  function() {
      var e, i;
      if (document.getElementById(t)) return;
      let a = document.createElement("div");
      a.id = t, a.style.cssText = "font-size: 16px;", a.attachShadow({
          mode: "open"
      }), (null == a ? void 0 : a.shadowRoot) && (a.shadowRoot.appendChild(r("content.css")), a.shadowRoot.appendChild(r("popup.css")));
      let n = document.createElement("div");
      n.id = "readergpt__container", n.className = "readergpt__container readergpt-styles";
      let s = chrome.runtime.getURL("svgfiles/aigpt.svg"),
          l = chrome.runtime.getURL("settings.html");
      n.innerHTML = `<nav class="navbar navbar-light bg-light sticky-top pt-0 pb-0">  <div id="readergpt__navContainer" class="container">    <div class="navbar-brand">      <img src="${s}" style="width: 24px; height: 24px;" class="d-inline-block align-text-middle">      <span id="readergpt__navbarTitle" class="align-middle h6">Summary with ChatGPT</span>    </div>    <button id="readergpt__closeButton" type="button" class="btn btn-close d-flex"></button>  </div></nav><div id="readergpt__summarySection">  <div class="card d-none" id="readergpt__loginContainer">    <div class="card-body">      <p class="card-text">Please <a href="https://chat.openai.com" target="_blank" rel="noreferrer" id="readergpt__loginButton" class="card-link">Login</a> to OpenAI. Do refresh this page after login.</p>      <p class="card-text mt-2"><small class="text-muted">ChatGPT requires logging in to OpenAI once in a          while to use.</small>      </p>      <div class="alert alert-success" role="alert">         Now you can use OpenAI API Key to avoid repeat login and super fast response.<br/><a href="${l}" target="_blank" class="alert-link">Click here</a> for one time setup.      </div>      <p id="readergpt__braveWarning" class="card-text mt-2 alert alert-warning d-none">        To use it on Brave, please ensure that the <a href="https://i.imgur.com/9F6cTvD.png" target="_blank">fingerprinting setting</a> is disabled in brave://settings/shields      </p>    </div>  </div>  <div id="readergpt__gifContainer" class="align-middle mt-3 mb-3 d-none">    <span class="spinner-border text-primary mt-2" role="status"></span>    <span class="align-middle readergpt__readableText">Summarising with ChatGPT</span>  </div>  <div id="readergpt__summaryTextHeader" class="m-3 d-none lead">    Used ChatGPT (<a href="${l}" target="_blank">Settings</a>)  </div>  <p id="readergpt__readableText" role="alert" class="readergpt__readableText alert alert-secondary d-none"></p>  <a id="readergpt__buyMeACoffee" href="https://chrome.google.com/webstore/detail/summary-with-chatgpt-open/mikcekmbahpbehdpakenaknkkedeonhf/reviews" target="_blank" class="d-none d-flex justify-content-end m-3 link-secondary text-decoration-none">Rate us!</p></div>`, null === (e = a.shadowRoot) || void 0 === e || e.appendChild(n), null === (i = document.getElementsByTagName("body")[0]) || void 0 === i || i.append(a), setTimeout((() => {
          var e;
          null === (e = o("readergpt__closeButton")) || void 0 === e || e.addEventListener("click", (async () => {
              ! function() {
                  var e;
                  let i = document.getElementById(t);
                  null === (e = null == i ? void 0 : i.parentNode) || void 0 === e || e.removeChild(i)
              }()
          }));
          let i = window.navigator;
          i && i.brave && i.brave.isBrave && i.brave.isBrave()
              .then((e => {
                  var t;
                  e && (null === (t = o("readergpt__braveWarning")) || void 0 === t || t.classList.remove("d-none"))
              }))
      }), 500)
  }(), a && a.textContent ? function(e) {
      let t = chrome.runtime.connect();
      t.onMessage.addListener((e => {
              var t, i;
              if ("DONE" === e.event) return s(), null === (t = o("readergpt__summaryTextHeader")) || void 0 === t || t.classList.remove("d-none"), void(null === (i = o("readergpt__buyMeACoffee")) || void 0 === i || i.classList.remove("d-none"));
              if (e.text) ! function(e) {
                  var t, i, a;
                  null === (t = o("readergpt__readableText")) || void 0 === t || t.classList.remove("d-none"), null === (i = o("readergpt__readableText")) || void 0 === i || i.classList.add("alert-secondary"), null === (a = o("readergpt__readableText")) || void 0 === a || a.classList.remove("alert-warning"), o("readergpt__readableText")
                      .innerText = e
              }(e.text);
              else if (e.error) {
                  s();
                  try {
                      let t = e.error,
                          i = null == t ? void 0 : t.code,
                          a = null == t ? void 0 : t.message;
                      if ("CLOUDFLARE" === i || "UNAUTHORIZED" === i) return void
                      function() {
                          var e;
                          null === (e = o("readergpt__loginContainer")) || void 0 === e || e.classList.remove("d-none")
                      }();
                      if ("message_length_exceeds_limit" === i) return void n("Article is too long and is not supported by ChatGPT yet. Stay tuned for a workaround.");
                      if (a) return void n(a)
                  } catch (e) {}
                  n("Something went wrong, please refresh the page.")
              }
          })),
          function() {
              var e, t, i;
              null === (e = o("readergpt__loginContainer")) || void 0 === e || e.classList.add("d-none"), null === (t = o("readergpt__summaryTextHeader")) || void 0 === t || t.classList.add("d-none"), null === (i = o("readergpt__buyMeACoffee")) || void 0 === i || i.classList.add("d-none")
          }(),
          function() {
              var e, t, i, a;
              null === (e = o("readergpt__gifContainer")) || void 0 === e || e.classList.remove("d-none"), null === (t = o("readergpt__gifContainer")) || void 0 === t || t.classList.add("loading"), null === (i = o("readergpt__loginContainer")) || void 0 === i || i.classList.add("loading"), null === (a = o("readergpt__readableText")) || void 0 === a || a.classList.add("d-none")
          }(), t.postMessage({
              pageContent: e
          })
  }(a.textContent) : n("No readable text found on the page.")
})()