# 初识 webpack

这一节介绍一下前端大家庭中的重量级成员——**webpack**

webpack 是一款打包模块化 JavaScript 的工具，专注构建模块化项目。在 webpack 里一切文件皆模块.

上一张官网截图：

![企业微信20210208-155704@2x](/assets/20210208-155704@2x.png)

webpack 可以将任何类型文件打包成 css, js 和图片，供浏览器解析。

开始接触 webpack 应该是在 react 或 vue 的脚手架中。当运行 `npm run build` 时，就是 webpack 在解析和打包源文件。

那么 webpack 是如何打包的？具体流程是什么？

下面我们一步步探索。

### 版本介绍

写这篇笔记时，webpack5 已经发布，所以后面代码中用到的包版本都是基于最新的 webpack5。

webpack4 升级到 webpack5 的指南在 [这里](./webpack5升级.md)

### 核心概念

4 个核心概念：

1. 入口(entry)
2. 输出(output)
3. loader
4. 插件(plugins)

#### 入口(entry)

从哪个文件开始构建，直接写相对路径字符串。默认值为 `./src`

分为单入口和多入口：

```js
// 单入口
module.exports = {
  enrty: "./***",
};
```

```js
// 多入口
module.exports = {
  enrty: {
    main: "./***",
    other: "./***",
  },
};
```

#### 输出(output)

在哪里输出创建的 bundles，以及如何命名。

默认值为 `./dist`

```js
const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"), // 输出路径
    filename: "webpack.bundle.js", // 输出文件名
  },
};
```

`output.path` 属性必须是绝对路径，所以需要用 path 模块解析。

`output.filename` 可以用占位符命名，方式如下：

```js
// 静态名称
filename: "bundle.js";
// 使用入口名称
filename: "[name].bundle.js";
// 使用内部 chunk id
filename: "[id].bundle.js";
// 使用唯一的 hash
filename: "[name].[hash].bundle.js";
// 使用基于每个 chunk 内容的 hash
filename: "[chunkhash].bundle.js";
```

#### loader

webpack 自身只理解 JavaScrip，loader 让 webpack 能够去处理非 JavaScript 文件。

loader 配置有两个属性：

- test：文件匹配规则，正则表达式。
- use：使用哪个 loader。

webpack.config.js

```js
const config = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};

module.exports = config;
```

这个配置告诉 webpack 解析器：当 require() 或 import 一个 `*.txt` 的文件时，先使用 raw-loader 转换一下。

**常用 loader**

1. `file-loader`：解析资源文件，输出到一个文件夹。
2. `url-loader`：和 file-loader 类似，但只解析小文件，转换成 base64 注入代码中。
3. `babel-loader`：把 ES6 转换成 ES5
4. `css-loader`：加载 CSS 模块
5. `style-loader`：将所有 CSS 代码生成 style 样式，放到 head 标签里。
6. `eslint-loader`：通过 ESLint 检查 JavaScript 代码
7. `ts-loader`： 将 TypeScript 转换成 JavaScript
8. `vue-loader`：加载 Vue.js 单文件组件

#### 插件(plugins)

plugins 用于以各种方式自定义 webpack 构建流程，在构建流程中加入自己的逻辑。

插件分类：

- 内置插件：webpack.[plugin-name]
- 第三方插件：需要导入使用

常用的插件:

1. `html-webpack-plugin`：创建 HTML 文件
2. `commons-chunk-plugin`：提取公共代码
3. `clean-webpack-plugin`：删除打包文件
4. `define-plugin`：定义环境变量
5. `mini-css-extract-plugin`：将 css 提取为独立文件
6. `ignore-plugin`：忽略部分文件

### 其他资源

1. 这篇面试总结的很好：[这里](https://www.jianshu.com/p/216ed82a3e49)
2. webpack 原理和 loader/plugin 实现：[这里](https://juejin.cn/post/6844904146827476999)
