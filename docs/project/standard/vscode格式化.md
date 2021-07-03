# vscode 格式化

vscode 中的用户设置 `setting.json` 中保存了用户的编辑器配置。

官网配置介绍：[这里](https://code.visualstudio.com/docs/getstarted/settings)

在项目开发中，往往需要统一编码风格。在项目根目录下新建 `.vscode/setting.json` 文件，用统一的配置来覆盖用户的编辑器配置。

配置主要分三类：

- `editor`：编辑器配置
- `prettier`：格式化配置
- `eslint`：代码检查

下面的所有配置，无特殊说明，都是写在 `.vscode/setting.json` 文件中

### editor

editor，就是编辑器的配置：

```json
{
  "editor.formatOnSave": true, // 保存自动格式化
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true // import 导入排序
  }
}
```

### prettier

prettier 是最流行的 vscode 代码格式化插件，用于制定团队编码规范。

比如设置 js 中统一使用单引号代替双引号，有 2 种配置方式：

`方法一`，setting.json 中配置：

```json
{
  "prettier.singleQuote": true,
  "prettier.semi": false
}
```

`方法二`，根目录新建 .prettierrc.json：

```json
{
  "singleQuote": true,
  "semi": false
}
```

列一下 prettier 的常用配置：

```json
{
  "singleQuote": true, // 是否单引号
  "semi": false, // 声明结尾使用分号(默认true)
  "printWidth": 100, // 每行代码长度（默认80）
  "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
  "useTabs": true, // 是否使用tab进行缩进（默认false）
  "trailingComma": "all", // 多行使用拖尾逗号（默认none）
  "bracketSpacing": true, // 对象字面量的大括号间使用空格（默认true）
  "jsxBracketSameLine": false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  "arrowParens": "avoid" // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
}
```

一次性格式化所有文件方法：

```js
// package.json
"scripts": {
  "format": "prettier --write \"src/**/*.js\" \"src/**/*.vue\"",
}
```

### vue

vue 的格式化，用另一款插件 `vetur`，在 vscode 中搜索安装即可。

然后就是配置 vetur：

```json
{
  // 用 vetur 来接管 vue 的格式（vetur 对 vue 语法的支持更好）
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "vetur.format.defaultFormatter.html": "prettyhtml", // vue 中 template 的格式化配置
  "vetur.format.defaultFormatter.js": "prettier", // vue 中 js 的格式化配置
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "wrap_attributes": "auto" // 属性自动换行
    },
    // 同 prettier 配置一致
    "prettier": {
      "semi": false,
      "printWidth": 140,
      "singleQuote": true,
      "trailingComma": "none",
      "arrowParens": "avoid"
    }
  }
}
```
