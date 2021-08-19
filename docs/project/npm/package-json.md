# package.json 解析

package.json 文件是 nodejs 相关项目统一的配置清单。

### 属性分类

本节详细介绍了可以使用的属性。

基本属性：

- `name` 设置了应用程序/软件包的名称。
- `description` 是应用程序/软件包的简短描述。
- `main` 设置了应用程序的入口点。
- `private` 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
- `scripts` 定义了一组可以运行的 node 脚本。
- `dependencies` 设置了作为依赖安装的 npm 软件包的列表。
- `devDependencies` 设置了作为开发依赖安装的 npm 软件包的列表。
- `engines` 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- `browserslist` 用于告知要支持哪些浏览器（及其版本）。

#### name

设置软件包的名称。

#### author

软件包的作者名称。

```json
{
  "author": "ruims"
}
```

也可以使用以下格式：

```json
{
  "author": {
    "name": "ruims",
    "email": "ruims@gmail.com",
    "url": "https://ruims.top"
  }
}
```

#### contributors

除作者外的其他贡献者。

```json
{
  "contributors": ["八戒", "悟空"]
}
```

也可以使用以下格式：

```json
{
  "contributors": [
    {
      "name": "ruims",
      "email": "ruims@gmail.com",
      "url": "http://book.ruims.com"
    }
  ]
}
```

#### bugs

一般链接到 GitHub 的 issues 页面。

```json
{
  "bugs": "https://github.com/ruidoc/blog/issues"
}
```

#### homepage

设置软件包的主页。

```json
{
  "homepage": "http://book.ruims.top"
}
```

### version

指定软件包的当前版本。

版本号遵循[语义化版本](https://semver.org/lang/zh-CN/)的规则，包括 3 个部分：

- major：不兼容的 API 修改
- minor：向下兼容的功能性新增
- patch：向下兼容的问题修正

示例：

```json
{
  "version": "1.0.0"
}
```

#### license

指定软件包的许可证。

```json
{
  "license": "MIT"
}
```

#### keywords

与软件包功能相关的关键字数组。

```json
{
  "keywords": ["ruims", "blog", "javascript"]
}
```

#### repository

软件包仓库位置，一般是 GitHub 项目主页。

```json
{
  "repository": "github:ruims/blog"
}
```

注意这里 github 前缀。其它前缀还有：`gitlab`，`bitbucket`

也可以使用另一种格式：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/ruidoc/blog"
  }
}
```

#### main

软件包的入口，指定引入包时引入哪个文件。

比如，现有 hammer 包的 main 属性如下：

```json
{
  "main": "lib/index.js"
}
```

那么：

```js
import hammer from "hammer";
// 等同于
import hammer from "node_modules/hammer/lib/index.js";
```

#### private

如果设置为 true，则可以防止软件包被意外发布到 npm 上。

#### scripts

可以定义一组可以运行的 node 脚本。

```json
{
  "scripts": {
    "dev": "webpack-dev-server --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  }
}
```

#### dependencies

项目依赖的 npm 软件包列表。

写入方式：

```sh
$ npm install <package_name>
$ yarn add <package_name>
```

该软件包会被自动地插入此列表中。

#### devDependencies

开发环境下，项目依赖的 npm 软件包列表。

不同于 dependencies 的是，它们只在开发环境下使用，生产环境中不需要安装。

写入方式：

```sh
$ npm install --save-dev <package_name>
$ yarn add --dev <package_name>
```

#### engines

需要运行的 Node.js 或其他命令的版本。

```json
{
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0",
    "yarn": "^0.13.0"
  }
}
```

#### browserslist

用于告知要支持哪些浏览器（及其版本）。

Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。

```json
{
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

上面配置表示需要支持使用率超过 1％，的所有浏览器的最新的 2 个主版本，但不含 IE8 及更低的版本。
