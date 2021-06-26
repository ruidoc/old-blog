# 发布 npm 包

上一节开发了一个简易脚手架，如果要共享给他人使用，则需要将代码发布到 npm 仓库。

### 注册账号

如果没有 npm 账号，先到 [这里](http://www.npmjs.com/signup) 注册。

然后，在终端执行 `npm login`，输入账号密码登录。

npm 是有不同的仓库源的，默认是官方源。如果之前切换过源地址，记得要切回来，因为后续的发布流程都是在官方源下进行的。

设置官方源方法：

```sh
npm config set registry http://registry.npmjs.org
```

### 发布前配置

主要是对 package.json 的配置。关键字段如下：

- name
- version
- main
- bin
- publishConfig

#### name

name 指包名，必须唯一，也就是在 npm 上面没有的，否则会发布失败（403错误）

如果是 scoped 包，包名的规范是 `@[scoped]/[package-name]`，比如这样：

```sh
@ruims/ham-cli
```

`ruims` 必须是你的 npm 用户名或 npm 组织名，否则会发布失败。`ham-cli` 是真正的包名。

安装时候也要加 scoped：

```sh
npm install @ruims/ham-cli
```

#### version

npm 包版本，这个非常重要。

第一次发包必须指定版本号。后续每一次更新包时，版本号也必须更新。

版本号遵循[语义化版本](https://semver.org/lang/zh-CN/)的规则，包括 3 个部分：

- major：不兼容的 API 修改
- minor：向下兼容的功能性新增
- patch：向下兼容的问题修正

这 3 部分组成字符 `major.minor.patch`，如 `0.1.1`，这就是符合规范的版本号。

除了手动修改版本号，也可以通过 `npm version` 命令管理版本。

```sh
// 假设当前版本号 v0.1.1

$ npm version patch
v0.1.2

$ npm version minor
v0.2.0

$ npm version major
v1.0.0
```

`npm version` 除了快捷管理版本外，还会在 git 中生成一个 `commit` 和 `tag`，便于查找和管理。

如果不需要，可以传入 `--no-git-tag-version` 来阻止。

