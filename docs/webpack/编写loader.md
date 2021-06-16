# 编写一个 loader

loader 本质上就是一个函数，这个函数会在加载一些文件时执行

首先新建 `loaders` 目录，在这个目录下存放自己编写的 loader。然后配置 webpack 在这个目录下查找 loader。

```js
module.exports = {
  resolveLoader: {
    // loader路径查找顺序从左往右
    modules: ["node_modules", "./loaders"],
  },
};
```

### 同步 loader

loaders 目录下新建 `sync-loader.js`

然后配置 webpack 指定这个 loader:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "sync-loader",
      },
    ],
  },
};
```

接下来编写 loader：

```js
// loaders/sync-loader.js
module.exports = function (source) {
  console.log("解析的文件：", source);
  return source;
};
```

编译后，就能看到打印出来的文件内容。

其中参数 source 就是文件内容。根据该文件内容，我们进行逻辑改造，改造完成后返回新的文件内容即可。

loader 也可以传递参数，复杂的 loader 逻辑可以用 `loader-utils` 包去辅助编写。

```js
// webpack loader 传参配置
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "sync-loader",
          options: {
            text: "ruims",
          },
        },
      },
    ],
  },
};
```

loader 中接收参数：

```js
// loaders/sync-loader.js
const loaderUtils = require("loader-utils");

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(options);
  source += options.message;
  this.callback(null, source); // 基本等于 return source;
};
```

### 异步 loader

和同步配置一样，关键是返回结果。

`this.async()` 是关键，它有两个作用：

1. 告诉 webpack 这是个异步 loader
2. 返回和同步一样的 `this.callback`

```js
const loaderUtils = require("loader-utils");
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const asyncfunc = this.async();
  setTimeout(() => {
    source += "by ruims";
    asyncfunc(null, source);
  }, 200);
};
```
