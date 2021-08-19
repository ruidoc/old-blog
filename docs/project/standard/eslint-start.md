# eslint 入门

团队协作开发项目，由于每个人的编码习惯不同，会写出各种各样的代码。这样的代码又乱又难以维护。

所以我们需要一个工具，制定一套强制性的规范，统一整个项目的代码风格。

这个工具之一，就是 **eslint**

eslint 有两种能力：

- **检查代码质量**，如是否有已定义但未使用的变量。
- **检查代码风格**，换行，逗号，缩进相关。

**问**：eslint 检查与 typescript 检查有啥区别？

typescript 只会检查`类型错误`，而 eslint 会检查`风格错误`。

**问**：eslint 与 prettier 有啥区别？

相同点：都是定义一套代码风格。

不同点：eslint 会在检查时对不规范的代码提示错误；而 prettier 会直接按照规范格式化代码。

所以，eslint 和 prettier 定义的风格要一致，不能冲突。

### 尝试 eslint

首先在项目下安装：

```sh
$ npm install eslint --save-dev
```

然后运行命令初始化配置：`eslint --init`

eslint 是一个交互式命令，可以上下切换选择适合项目的选项。完成会生成 `.eslintrc.json`

### 基本配置

.eslintrc.json 的基本配置如下：

```json
{
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "rules": {},
};
```

### react 配置

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
+   "plugin:react/recommended"
  ],
  "parserOptions": {
+   "ecmaFeatures": {
+     "jsx": true
+   },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
+ "plugins": [
+   "react"
+ ],
  "rules": {
  }
};
```

### react+ts 配置

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
+   "plugin:@typescript-eslint/recommended"
  ],
+ "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
+   "@typescript-eslint"
  ],
  "rules": {
  }
};
```

### 代码检查

新建 `index.js` 文件，写入内容：

```js
const a = "13";
function add() {
  return "1";
}
```

从 js 角度讲，这两行代码是没问题的。然后我们运行检查命令：

```sh
$ npx eslint index.js
```

这时会报错：

```sh
2:7   error  'a' is assigned a value but never used  no-unused-vars
4:10  error  'add' is defined but never used         no-unused-vars

2 problems (2 errors, 0 warnings)
```

错误说明代码不符合约定的规范。`npm run dev` 和 `npm start` 时就会执行上面的检查命令。

#### 编辑器自动检查

事实上，除了运行命令检查，在编辑器中直接提示错误更友好。

如果你用 vscode，直接搜索插件 `eslint`，安装后就会读取项目根目录的 `.eslintrc.json` 配置自动检查代码。

如果没有配置，则绕过检查。
