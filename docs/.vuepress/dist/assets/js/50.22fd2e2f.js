(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{406:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"变量与作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量与作用域"}},[s._v("#")]),s._v(" 变量与作用域")]),s._v(" "),a("p",[s._v("变量是存储数据的地方。声明一个变量，相当于申请了一块内存地址，变量赋值就是将数据存储于这块内存之中。")]),s._v(" "),a("h3",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("p",[s._v("我们使用 var 关键词来声明变量：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ruims'")]),s._v("\n")])])]),a("h4",{attrs:{id:"从编译原理的角度理解变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从编译原理的角度理解变量声明"}},[s._v("#")]),s._v(" 从编译原理的角度理解变量声明")]),s._v(" "),a("p",[s._v("先看一个简单的声明语句：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiuyan'")]),s._v("\n")])])]),a("p",[s._v("在 JS 引擎眼里，它却包含了两个声明：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//（编译时处理）")]),s._v("\nname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xiuyan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//（运行时处理）")]),s._v("\n")])])]),a("p",[s._v("此处的编译时处理和运行时处理，分别对应编译阶段和执行阶段，下面详细解释：")]),s._v(" "),a("p",[a("strong",[s._v("编译阶段")])]),s._v(" "),a("p",[s._v("主角："),a("code",[s._v("编译器")]),s._v("登场！")]),s._v(" "),a("ul",[a("li",[s._v("查看当前作用域是否有 "),a("code",[s._v("name")]),s._v("变量")]),s._v(" "),a("li",[s._v("如果有，忽略当前变量声明")]),s._v(" "),a("li",[s._v("如果没有，在当前作用域里新增一个 name")])]),s._v(" "),a("p",[a("strong",[s._v("执行阶段")])]),s._v(" "),a("p",[s._v("主角："),a("code",[s._v("JS引擎")]),s._v("登场！")]),s._v(" "),a("ul",[a("li",[s._v("查看当前作用域是否有 "),a("code",[s._v("name")]),s._v("变量")]),s._v(" "),a("li",[s._v("如果有，进行赋值")]),s._v(" "),a("li",[s._v("如果没有，递归查找父作用域")]),s._v(" "),a("li",[s._v("如果全局也没有，就在全局作用域创建该变量")])]),s._v(" "),a("p",[s._v("这就是变量声明的逻辑。")]),s._v(" "),a("h3",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[s._v("#")]),s._v(" 作用域")]),s._v(" "),a("p",[s._v("作用域存储和访问变量的一套规则，一个区域。")]),s._v(" "),a("p",[s._v("变量声明是在一个作用域内，变量访问也是在一个作用域内。")]),s._v(" "),a("p",[s._v("作用域分为这几种：")]),s._v(" "),a("h4",{attrs:{id:"_1-全局作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局作用域"}},[s._v("#")]),s._v(" 1. 全局作用域")]),s._v(" "),a("p",[s._v("全局变量：声明在任何函数之外的顶层作用域的变量。全局变量拥有全局作用域")]),s._v(" "),a("h4",{attrs:{id:"_2-函数作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数作用域"}},[s._v("#")]),s._v(" 2. 函数作用域")]),s._v(" "),a("p",[s._v("在函数内部定义的变量，拥有函数作用域")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hello 被定义成局部作用域变量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello everyone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抛出错误：hello 在全局作用域未定义")]),s._v("\n")])])]),a("h4",{attrs:{id:"_3-块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-块级作用域"}},[s._v("#")]),s._v(" 3. 块级作用域")]),s._v(" "),a("ul",[a("li",[s._v("必须用块写法")]),s._v(" "),a("li",[s._v("必须是"),a("code",[s._v("let")]),s._v("或者"),a("code",[s._v("const")]),s._v("声明")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"_4-模块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-模块作用域"}},[s._v("#")]),s._v(" 4. 模块作用域")]),s._v(" "),a("p",[s._v("模块作用域是 CommonJS 中的作用域规则。在 nodejs 中，任何独立的脚本文件中声明的变量都相互独立，互不污染")])])}),[],!1,null,null,null);t.default=e.exports}}]);