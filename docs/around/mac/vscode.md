# vscode 开始

使用 vscode 第一步，先从官网下载：

下载地址：[这里](https://code.visualstudio.com/)

开始的时候默认是英文，现在会自动询问你是否安装中文插件。

### 配置 code 命令

code 命令用于在命令行中，快速的用 vscode 打开文件夹。

比如你有一个项目文件夹 demo，你只要：

```sh
$ cd demo && code .
```

就可以快速用 vscode 打开 demo 文件夹。

### 安装插件

安装插件是必不可少的一个环节，直接列举。

**1. Vutur**

开发 Vue 必备插件，否则 vue 单文件组件不会有高亮。

除了高亮，还有格式化功能。不过我们格式化不用它，用下面的 Prettier

**2. Prettier**

最好用的代码格式化插件，可以通过配置文件制定格式化规则。

它的最佳搭配，是在用户配置中配置 `"editor.formatOnSave": true`，保存时自动格式化，威力强大。

**3. ESLint**

编辑器中自动检查代码，提示语法错误，也可以通过配置文件制定语法规则。

注意：ESLint 规则要与 Prettier 规则一致！否则保存时 Prettier 格式化后的代码不能通过 ESLint 规则检查。

**4. Material Icon Theme**

编辑器默认的文件图标太难看？别急，有酷酷的插件，就是这款：`Material Icon Theme`

扩展中直接搜索安装即可。

**5. Markdown All in One**

用 vscode 写 Markdown 文档或笔记，用这个插件可以获得最全的语法提示和实时预览等功能。

一般情况下，Markdown 最常用于写 README.md。所以这里可以再配合一个 github 样式插件：

_Markdown Preview Github Styling_

这个插件使用 GitHub 的样式渲染 Markdown。
