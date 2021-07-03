# create-react-app

记录一下从头开始，使用 create-react-app 脚手架，创建 pc 端项目。

### 安装脚手架

```sh
$ npm install -g create-react-app
```

安装好之后，就可以创建项目了。

### 创建项目

创建项目，无需更新 create-react-app，它会默认拉取最新的模板。

```sh
$ create-react-app [project-name] --template [template-name]
```

一般我会拉取 ts 模板的项目：

```sh
$ create-react-app react-ts --template typescript
```

默认情况下，模板拉取之后，会用 yarn 安装好依赖。

打开项目，运行 `yarn start`，启动项目。

此时，webpack 配置并未暴露，隐藏在 `react-script` 这个包下。此时先暴露 webpack 配置：

```sh
yarn run eject # 操作不可逆
```

### 更改目录结构

默认的目录结构不变，但是 src 目录的结构太简单，需要更改。

首先，在 src 下创建如下文件夹：

- assets：资源目录
- components：公共组件目录
- models：状态管理目录
- pages：页面组件目录
- router：路由相关目录
- styles：样式目录
- types：类型文件目录
- utils：工具函数目录

### 安装欠缺的模块

项目初始化之后，还有必备的几个模块需要安装：

- UI 框架：ant-design
- 路由：react-router-dom
- 状态管理：mobx
- 网络请求：axios

一并安装：

```sh
$ yarn add antd react-router-dom mobx mobx-react axios
```

注意：react-router-dom 默认不会安装类型文件，ts 会报错。所以额外装一下类型文件

```sh
$ yarn add @types/react-router-dom -D
```

项目使用 less 预编译，也要安装 less

```sh
$ yarn add less@3 less-loader@6 -D
```

### 稍加配置

在项目中导入文件时，一般用 `@/` 代替目录 `src/`。

像这种别名配置，需要在 webpack 和 typescript 中同时做。

#### webpack

在 `config/modules.js` 文件下，找到 `getWebpackAliases` 这个方法。

然后，修改：

```js
-- // src: paths.appSrc,
++ '@': paths.appSrc,
```

#### typescript

在根目录 `tsconfig.json` 配置文件中的 `compilerOptions` 属性下，增加两个值：

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```

### 进阶配置

默认的 webpack 配置中不支持 `less`，需要手动配一下：

在 `config/webpack.config.js` 中找到 `rules` 的配置，约在 485 行的位置增加一段：

```js
// resolve less
{
  test: /\.less$/,
  use: [
    require.resolve('style-loader'), {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1
      }
    }, {
      loader: require.resolve('less-loader'),
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      }
    }
  ]
}
```

在 mobx 写法中要用到装饰器，ts 默认不支持，也要手动配置。

在 `tsconfig.json` 文件中的 `compilerOptions` 属性下增加：

```json
{
  "experimentalDecorators": true
}
```

#### ant-design

配置教程：[这里](https://ant.design/docs/react/use-with-create-react-app-cn)

引入组件默认没有样式，需要单独引入样式。

我们使用 less 预编译，在全局 js 中引入 `less` 文件。

```js
import "~antd/dist/antd.less";
```

或者在全局 css 文件中引入：

```css
@import "~antd/dist/antd.less";
```
