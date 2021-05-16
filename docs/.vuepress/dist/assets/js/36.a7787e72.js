(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{393:function(_,v,t){"use strict";t.r(v);var i=t(44),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"项目亮点描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目亮点描述"}},[_._v("#")]),_._v(" 项目亮点描述")]),_._v(" "),t("p",[_._v("项目亮点描述，是在面试中比较难回答的问题。就因为之前没有准备，说的支支吾吾，所以面试官给我打 60 分，委屈。")]),_._v(" "),t("p",[_._v("亮点分几个方向回答：")]),_._v(" "),t("ol",[t("li",[_._v("难点")]),_._v(" "),t("li",[_._v("性能优化")]),_._v(" "),t("li",[_._v("提升效率")])]),_._v(" "),t("h3",{attrs:{id:"_1-分支合并错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分支合并错误"}},[_._v("#")]),_._v(" 1. 分支合并错误")]),_._v(" "),t("p",[_._v("有一次负责更新生产环境，因为沟通协调问题，staging 分支和 release 分支没有同步，合并完部署后，发现线上不一致，导致卖家定价格的时候，使用的老接口。这是一次生产事故。")]),_._v(" "),t("p",[_._v("发生了这次事故之后，我们第一件事情是全公司开始解决问题：")]),_._v(" "),t("ol",[t("li",[_._v("前端立刻撤销上一次合并，重新部署")]),_._v(" "),t("li",[_._v("后端排查这段期间产生的数据错误，尤其是金额错误，找出错误订单")]),_._v(" "),t("li",[_._v("筛选出问题的商家，统计金额错误出赔偿方案。")])]),_._v(" "),t("p",[_._v("做完了这三步之后，我们开始复盘这一次出问题的原因：")]),_._v(" "),t("ol",[t("li",[_._v("git 流程和分支有规范，但是没有强制执行。")]),_._v(" "),t("li",[_._v("前端缺少快速回滚，以及对冲突的警惕性不够")]),_._v(" "),t("li",[_._v("后端缺少对不同版本的接口检验")])]),_._v(" "),t("p",[_._v("复盘问题之后，我们做出了一下几个实施方案：")]),_._v(" "),t("ol",[t("li",[_._v("强制后续所有生产和测试的更新都走git flow 流程。")]),_._v(" "),t("li",[_._v("前端容器化，接入k8s系统，实现快速回滚。")]),_._v(" "),t("li",[_._v("后端接口对版本号，平台，都要加验证。")])]),_._v(" "),t("h3",{attrs:{id:"_2-自动部署的演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动部署的演进"}},[_._v("#")]),_._v(" 2. 自动部署的演进")]),_._v(" "),t("p",[_._v("前端自动化方面，因为频繁更新就有频繁部署，所以记录下我们经历的部署方案。")]),_._v(" "),t("p",[t("strong",[_._v("1. 前端打包上传")])]),_._v(" "),t("p",[_._v("最开始，前端项目在打包之后生成 "),t("code",[_._v("dist")]),_._v(" 文件夹，我们的部署方式就是用 "),t("code",[_._v("rsync")]),_._v(" 命令直接将 dist 文件夹传到服务器，当然这是静态部署方案。")]),_._v(" "),t("p",[t("strong",[_._v("2. 写shell脚本，服务器打包")])]),_._v(" "),t("p",[_._v("在本地写一个 sh 脚本文件，然后两个步骤：")]),_._v(" "),t("ul",[t("li",[_._v("将代码推送到 git 仓库")]),_._v(" "),t("li",[_._v("本地执行 sh 脚本文件")])]),_._v(" "),t("p",[_._v("脚本内容就是登录服务器，git pull 拉取仓库最新内容，最后执行 build 命令。")]),_._v(" "),t("p",[_._v("缺点：依赖更新会不好处理。")]),_._v(" "),t("p",[t("strong",[_._v("2. 服务器建 git 裸仓库")])]),_._v(" "),t("p",[_._v("这种方案是，在服务器建立一个裸仓库，然后写一个 push 推送的钩子，钩子其实就是一个 shell 脚本文件，收到推送后执行构建命令，完成后拷贝到服务器上的部署目录。")]),_._v(" "),t("p",[_._v("客户端将这个裸仓库添加为远程仓库，部署时推送到这个仓库就可以了。")]),_._v(" "),t("p",[_._v("缺点：部署仓库和代码仓库分开。")]),_._v(" "),t("p",[_._v("这中方式是当前 CI/CD 方案的原型。")]),_._v(" "),t("p",[t("strong",[_._v("3. GitHub Action 构建方案")])]),_._v(" "),t("p",[_._v("这是我们的终极自动部署方案，也是最好用的一个方案。")]),_._v(" "),t("p",[_._v("如果你的代码仓库在 GitHub 上，那么 GitHub Action 是你最有利的武器，没有之一。")]),_._v(" "),t("p",[_._v("GitHub Action 是在项目下写一个 yml 文件，然后推送时触发，你可以定义自己的构建流程。")]),_._v(" "),t("p",[_._v("同时 GitHub 也提供了许多现成的 Action供你使用，一般有这3种部署方式：")]),_._v(" "),t("ul",[t("li",[_._v("GitHub Pages 部署")]),_._v(" "),t("li",[_._v("私有服务器部署")]),_._v(" "),t("li",[_._v("docker 部署")])]),_._v(" "),t("p",[_._v("这三种方式任选，并且能看到构建流程，极力推荐。")])])}),[],!1,null,null,null);v.default=l.exports}}]);