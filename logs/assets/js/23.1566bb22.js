(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{226:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"ops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ops"}},[a._v("#")]),a._v(" Ops")]),a._v(" "),t("h2",{attrs:{id:"network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[a._v("#")]),a._v(" Network")]),a._v(" "),t("h2",{attrs:{id:"disable-ipv6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-ipv6"}},[a._v("#")]),a._v(" disable ipv6")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("net.ipv6.conf.all.disable_ipv6 = 1\nnet.ipv6.conf.default.disable_ipv6 = 1\nnet.ipv6.conf.lo.disable_ipv6 = 1\n\n> sysctl -w net.ipv4.ip_forward=1\n> sysctl --system\n\n> $ sysctl -a | grep kernel\n")])])]),t("h2",{attrs:{id:"mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[a._v("#")]),a._v(" mariadb")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo launchctl stop com.mariadb.server\nsudo launchctl start com.mariadb.server\n")])])]),t("blockquote",[t("p",[a._v("disk usage")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -csh *\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -csh .??*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" -csh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(".??*,*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("find file")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -iname "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*.c"')]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("restart audio macos")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("killall")]),a._v(" coreaudiod\n")])])]),t("p",[t("strong",[a._v("simple server")])]),a._v(" "),t("p",[t("code",[a._v("python -m SimpleHTTPServer 8080")])]),a._v(" "),t("p",[t("strong",[a._v("kill and recover")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("killall -STOP Slack\nkillall -CONT Slack\n")])])]),t("p",[t("strong",[a._v("delete all branch except current")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git branch | grep -v "^\\\\*" | xargs git branch -D\n')])])]),t("blockquote",[t("p",[t("a",{attrs:{href:"http://www.alecjacobson.com/weblog/?p=4700",target:"_blank",rel:"noopener noreferrer"}},[a._v("using github for course and assignment"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);