(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("p",[t._v("远程仓库是指托管在互联网中的你的项目的版本库。")]),t._v(" "),a("p",[t._v("你可以有好几个远程仓库。管理远程仓库包括添加远程仓库、移除远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。")]),t._v(" "),a("h3",{attrs:{id:"查看远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[t._v("#")]),t._v(" 查看远程仓库")]),t._v(" "),a("p",[t._v("一行命令，可以查看到远程仓库名称和 URL 地址。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin\thttps://github.com/schacon/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin\thttps://github.com/schacon/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"添加远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),a("p",[t._v("除了克隆外，也可以自己手动添加远程仓库。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" pb https://github.com/paulboone/ticgit\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\norigin\thttps://github.com/schacon/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norigin\thttps://github.com/schacon/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npb\thttps://github.com/paulboone/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npb\thttps://github.com/paulboone/ticgit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"抓取与拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓取与拉取"}},[t._v("#")]),t._v(" 抓取与拉取")]),t._v(" "),a("p",[t._v("从仓库中获取数据，可以执行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("抓取完成后，你将会拥有远程仓库中所有分支的最新引用，可以随时合并或查看。")]),t._v(" "),a("p",[t._v("注意："),a("code",[t._v("git fetch")]),t._v(" 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作目录。")]),t._v(" "),a("p",[t._v("这样会有些繁琐。还有一个更高效的方法是 "),a("code",[t._v("git pull")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch + "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge\n")])])]),a("p",[t._v("git pull 通常会从远程服务器上抓取数据并自动尝试合并到当前所在的分支。")]),t._v(" "),a("h3",{attrs:{id:"推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[t._v("#")]),t._v(" 推送到远程仓库")]),t._v(" "),a("p",[t._v("当你完成一部分功能，必须将其推送到远程服务器，供他人协作。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),a("h3",{attrs:{id:"查看某个远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看某个远程仓库"}},[t._v("#")]),t._v(" 查看某个远程仓库")]),t._v(" "),a("p",[t._v("可以使用 "),a("code",[t._v("git remote show <remote>")]),t._v(" 命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show origin\n")])])]),a("h3",{attrs:{id:"重命名与移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名与移除"}},[t._v("#")]),t._v(" 重命名与移除")]),t._v(" "),a("p",[t._v("将 origin 重命名为 main：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" origin main\n")])])]),a("p",[t._v("删除 main 仓库：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove main\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);