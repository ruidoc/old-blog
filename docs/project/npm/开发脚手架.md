# 开发一个脚手架

脚手架，其实是一个命令行工具。

常见的脚手架如 `vue-cli`，`webpack-cli`，它们提供一个命令，用来实现一些文件处理相关的任务。

### 初始化项目

脚手架要通过 npm 安装使用。

所以第一步，用 `npm init` 命令初始化项目，生成默认的 package.json 文件。

```json
{
  "name": "hammer-cli",
  "author": "ruims",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {}
}
```

然后创建文件 `bin/hammer-cli.js`，作为要开发命令的执行文件：

```js
#!/usr/bin/env node

const chalk = require('chalk')
const shell = require('shelljs')
const program = require('commander')
const ora = require('ora')

program
  .version('0.1.0','-v --version')
  .description(chalk.yellow('welcome to use hammer！'))

// 解析参数并触发commands
program.parse(process.argv);
```

这里用到几个常用的命令行工具包，逐个解释一下：

- **chalk**：输出有颜色的文字
- **shelljs**：执行 shell 命令，强大
- **commander**：配置命令行的参数，版本，命令，帮助等
- **ora**：加载中动画

安装这些包：

```sh
npm install chalk shelljs commander ora --save
```

最后，在 `package.json` 里配置一个命令，指向执行文件：

```json
{
  "bin": {
    "hammer": "bin/hammer-cli.js"
  }
}
```

现在，我们实现了一个简单的 `hammer` 命令。

本质上说，终端执行 `hammer` 命令，就等于执行 `node bin/hammer-cli.js`

### 调试命令

通常情况下，是在 npm 安装脚手架之后，才能使用命令。

现在是本地开发了命令，并没有发布，该如何调试呢？

别急，用 `npm link`。

`npm link` 相当于 `npm install`，区别是它会把本地的命令装到当前用户的环境变量下，允许你在控制台中使用命令。

```sh
npm link hammer
```

使用 `hammer` 命令：

```sh
$ hammer -v
0.1.0
```

现在可以边开发边调试了！