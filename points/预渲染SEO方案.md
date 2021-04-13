## 预渲染SEO方案

看这篇文章前，首先搞明白一个问题，为什么单页面应用的 SEO 很差？

首先，搜索引擎在爬取内容的时候，是爬取的HTML内容，但不会解析js的脚本

单页面应用有 4 中 SEO 方案：

1. SSR服务器渲染；
2. 静态化；
3. 预渲染 prerender-spa-plugin；
4. 使用 Phantomjs 针对爬虫做处理；

最适合官网的是第 3 项，使用预渲染。

参考博客：https://zhuanlan.zhihu.com/p/116102502

### prerender-spa-plugin 采坑

坑主要体现在以下几个方向：

1. publicPath 是否是二级目录
2. headless: true，Mac 为 false 时会报 `Unable to prerender all routes!` 的错误。
3. renderAfterDocumentEvent 事件，和 renderAfterTime，二选一