(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{429:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"nexttick-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-原理"}},[t._v("#")]),t._v(" nextTick 原理")]),t._v(" "),a("p",[t._v("nextTick 是 Vue 异步更新策略的核心，同时也涉及到 Event-Loop。")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("假设一种情况：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 Vue 视图中， testNum 会发生变化，更新视图。")]),t._v(" "),a("p",[t._v("不过注意："),a("strong",[t._v("虽然循环修改了 10 次，但视图只更新一次，即最后一次修改后的值！")])]),t._v(" "),a("p",[t._v("为什么呢？")]),t._v(" "),a("p",[t._v("这里是重点："),a("strong",[t._v("数据更新时，不会立即更新视图")]),t._v("！而是先把这个更新“存起来”，等“时机成熟”再更新。")]),t._v(" "),a("p",[t._v("“存起来”的地方，叫做异步更新队列。来一个新值走一次入列。过一段时间（很短），把这些改变后的新值拿出来，一次性更新视图。")]),t._v(" "),a("p",[t._v("所以更新视图时，数据是“一批一批的”，而不是“一个一个的”。")]),t._v(" "),a("p",[t._v("做异步任务派发工作的，就是 “nextTick”。")]),t._v(" "),a("h3",{attrs:{id:"再来-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再来-event-loop"}},[t._v("#")]),t._v(" 再来 Event-Loop")]),t._v(" "),a("p",[t._v("说到“异步更新队列”，我们会立刻想起事件循环中的异步队列：")]),t._v(" "),a("p",[a("strong",[t._v("macro-task-queue")]),t._v(" 和 "),a("strong",[t._v("micro-task-queue")])]),t._v(" "),a("p",[t._v("Vue 没有自己实现和维护一套异步队列逻辑，而是依赖于浏览器暴露的 api 接口实现。")]),t._v(" "),a("p",[t._v("基于此，我们看看Vue如何派发队列的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("当前环境支持 Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("then 派发 timerFunc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("当前环境支持 MutationObserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MutationObserver 派发 timerFunc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("当前环境支持 setImmediate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    setImmediate 派发 timerFunc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    setTimeout 派发 timer Func\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("大家会发现它是优先派发 micro-task、次选 macro-task。")]),t._v(" "),a("p",[a("strong",[t._v("为什么 Vue 优先派发的是 micro-task？")])]),t._v(" "),a("p",[t._v("这个问题的根源是事件循环的流程。")]),t._v(" "),a("p",[t._v("首先，macro-task 和 micro-task 是交替循环执行的。script 脚本执行是一个 macro-task，那么接下来执行的就是 micro-task，所以优先。")]),t._v(" "),a("p",[t._v("所有 micro-task 任务执行完毕，一个事件循环完成。")]),t._v(" "),a("p",[t._v("这里有个问题：")]),t._v(" "),a("p",[a("strong",[t._v("如果我们在 setTimeout 里执行更新操作，是不能立即获取到更新后的dom 的！")])]),t._v(" "),a("p",[t._v("为什么？因为 setTimeout 派发 macro-task，会导致我们的界面更新延迟一个事件循环。")])])}),[],!1,null,null,null);s.default=e.exports}}]);