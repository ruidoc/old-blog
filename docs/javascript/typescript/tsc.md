# 神器 tsc

在 Vue 或 React 的工程化项目中，负责 js 新旧语法转换的工具是 `Babel`。

那么，除了 babel，还有没有其他的 js 语法转换工具？

有，今天介绍 ts 编译器的 cli 命令 —— `tsc`

为什么说它是神器呢？

工程化的项目，一般都免不了 `webpack+babel` 的一堆配置。这些配置不仅繁琐，还要引入各种各样的第三方包，依赖复杂。

而 tsc 非常简单，尤其适用于命令行工具开发。不仅有 ts 的类型验证，同时不需要 webpack，直接将 ts 源码转换为 es5。

我第一次看 `taro-cli` 的源码，找了半天怎么没有 webpack 的命令呢？原来它们就是直接用 tsc 转译的。

`tsc -w` 还可以监听源码改动自动转译，效果类似 webpack 的 hot module，提高效率。

tsc 根据配置文件 `tsconfig.json` 的规则进行转译。
