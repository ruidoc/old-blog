(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{437:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"时间操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间操作"}},[s._v("#")]),s._v(" 时间操作")]),s._v(" "),a("p",[s._v("时间是我们开发当中最常用的功能，但是总记不清API。这节统一总结下常用的时间函数。")]),s._v(" "),a("h3",{attrs:{id:"shell-中的时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-中的时间"}},[s._v("#")]),s._v(" shell 中的时间")]),s._v(" "),a("p",[s._v("打开终端，输入时间命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n")])])]),a("p",[s._v("输出结果：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("年 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("月13日 星期六 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("时00分38秒 CST\n")])])]),a("p",[s._v("这种格式显然是不友好的，格式化一下：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%y-%m-%d"')]),s._v("\n")])])]),a("p",[s._v("输出结果：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("-02-13\n")])])]),a("p",[s._v("这就是我们想要的时间格式了！")]),s._v(" "),a("p",[s._v("注意，时间变量是 "),a("code",[s._v("%")]),s._v(" 而不是 "),a("code",[s._v("$")]),s._v("，看清楚了。")]),s._v(" "),a("p",[s._v("具体的时间日期格式可以自己组合。常用的组合方式如下：")]),s._v(" "),a("p",[a("strong",[s._v("日期：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2021-02-13")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%x"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2021/02/13")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%y-%m-%d"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 21-02-13")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%D"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 02/13/21")]),s._v("\n")])])]),a("p",[a("strong",[s._v("时间：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%H:%M:%S"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 16:13:52")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%T"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 16:13:52")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%R"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 16:13")]),s._v("\n")])])]),a("p",[a("strong",[s._v("时间戳：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1613222959 10位时间戳")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);