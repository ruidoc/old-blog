## webpack5 升级指南

Webpack5 正式版发布，带来了很多优化和新功能，而且从 webpack4 升级也相对平滑，今天来记录下升级踩坑~

新功能：

1. 尝试用持久性缓存来提高构建性能。
2. 长期保持 v5 稳定。

下面记录升级步骤。

### 1. 升级依赖

使用 npm-check-updates 这个包，自动检查 package.json 里的最新版本，并进行批量升级。

```sh
npm install -g npm-check-updates
```

升级：

```sh
ncu # 查看可升级依赖
ncu -u # 更新到最新的版本号
```

### 2. Typescript 类型

Webpack4 的类型文件是 `@types/webpack` ， 而 Webpack5 则自带类型文件，不需要装其他包。

所以修改：

```sh
yarn remove @types/webpack
```

### 3. webpack-dev-server

Webpack4 的 DevServer 命令是 `webpack-dev-server` ， Webpack5 改成了 `webpack serve`

### 4. 移除 Node 模块的 Polyfills

webpack4 自带一些 node 模块的 polyfill，如：cypto、buffer、process 等。V5 版本中，移除了这些 polyfill，使用时需要手动添加：

```js
plugins: [
  new ProvidePlugin({
    Buffer: ["buffer", "Buffer"],
    process: "process",
  }),
];
```

### 5. eslint-loader

V5 使用 `eslint-webpack-plugin` 代替 eslint-loader

```sh
yarn add eslint-webpack-plugin -D
```

使用：
```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    plugins: [new ESLintPlugin({
        fix: true,
        lintDirtyModulesOnly: true,
    })],
};
```