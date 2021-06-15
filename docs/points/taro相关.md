# taro 相关

taro 是一个使用一套 React 语法代码同时生成多端代码的跨端框架。

taro 自己封装了一套类似小程序组件的组件库，如 View，Text，不能使用 div 等原生标签。

类组件的 `config` 属性，用来配置导航栏，标题等小程序的配置。

提供 Taro 库，包含了小程序的能力：比如获取 localStorage，路由跳转等。

```js
import Taro, { Component, Config } from '@tarojs/taro'
```

支持 npm 安装和 redux。

## taro3 升级

同时支持 Vue 和 React 语法，并且是原生支持。而不是 3.0 之前的类 React 语法。

归因于 Taro 3.0 是重运行时架构，它通过模拟实现浏览器的 BOM 和 DOM API 实现了对 React、Vue 等 Web 开发框架的兼容。

去掉类组件的 `config` 属性，新增 `index.config.js` 文件返回配置

