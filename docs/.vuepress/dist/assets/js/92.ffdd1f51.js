(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{451:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"webpack5-升级指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5-升级指南"}},[s._v("#")]),s._v(" webpack5 升级指南")]),s._v(" "),a("p",[s._v("Webpack5 正式版发布，带来了很多优化和新功能，而且从 webpack4 升级也相对平滑，今天来记录下升级踩坑~")]),s._v(" "),a("p",[s._v("新功能：")]),s._v(" "),a("ol",[a("li",[s._v("尝试用持久性缓存来提高构建性能。")]),s._v(" "),a("li",[s._v("长期保持 v5 稳定。")])]),s._v(" "),a("p",[s._v("下面记录升级步骤。")]),s._v(" "),a("h3",{attrs:{id:"_1-升级依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-升级依赖"}},[s._v("#")]),s._v(" 1. 升级依赖")]),s._v(" "),a("p",[s._v("使用 npm-check-updates 这个包，自动检查 package.json 里的最新版本，并进行批量升级。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g npm-check-updates\n")])])]),a("p",[s._v("升级：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ncu "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可升级依赖")]),s._v("\nncu -u "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新到最新的版本号")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-typescript-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-typescript-类型"}},[s._v("#")]),s._v(" 2. Typescript 类型")]),s._v(" "),a("p",[s._v("Webpack4 的类型文件是 "),a("code",[s._v("@types/webpack")]),s._v(" ， 而 Webpack5 则自带类型文件，不需要装其他包。")]),s._v(" "),a("p",[s._v("所以修改：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" remove @types/webpack\n")])])]),a("h3",{attrs:{id:"_3-webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-dev-server"}},[s._v("#")]),s._v(" 3. webpack-dev-server")]),s._v(" "),a("p",[s._v("Webpack4 的 DevServer 命令是 "),a("code",[s._v("webpack-dev-server")]),s._v(" ， Webpack5 改成了 "),a("code",[s._v("webpack serve")])]),s._v(" "),a("h3",{attrs:{id:"_4-移除-node-模块的-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-移除-node-模块的-polyfills"}},[s._v("#")]),s._v(" 4. 移除 Node 模块的 Polyfills")]),s._v(" "),a("p",[s._v("webpack4 自带一些 node 模块的 polyfill，如：cypto、buffer、process 等。V5 版本中，移除了这些 polyfill，使用时需要手动添加：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProvidePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Buffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"buffer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Buffer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    process"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"process"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5-eslint-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-eslint-loader"}},[s._v("#")]),s._v(" 5. eslint-loader")]),s._v(" "),a("p",[s._v("V5 使用 "),a("code",[s._v("eslint-webpack-plugin")]),s._v(" 代替 eslint-loader")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" eslint-webpack-plugin -D\n")])])]),a("p",[s._v("使用：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ESLintPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eslint-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ESLintPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        lintDirtyModulesOnly"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);