## babel 基础概念

Babel 是一个转码器，可以将 ES6 代码转为 ES5 代码。

Babel 核心大概分为三大部分:

- 解析(parser)：将代码(其实就是字符串)转换成 AST(抽象语法树)
- 转换(transformer)：访问 AST 的节点进行变换操作生成新的 AST
- 生成(generator)：以新的 AST 为基础生成代码

### 1. 解析(parser)

首先，代码本身就是一串字符串，没有任何意义，是 js 引擎解析时赋予了它意义。

解析过程有两步：

- 词法分析: 将代码(字符串)分割为 token 流，即**语法单元**成的数组
- 语法分析: 分析 token 流并生成 AST

> 语法单元，包括括号，标识符（常量，变量，关键字），运算符等

babel负责解析的包是 `@babel/parser`

**AST（抽象语法树）其实就是一个用 json 表示的代码结构和组成。**

### 2. 代码转换

常用的 *Babel 插件* 就是用于定义代码转换规则，是程序员最常用的。而代码解析和生成这一头一尾都主要是 Babel 负责。

比如要将 React 语法转换成小程序，babel的工作流程大概是这样：

1. babel 将 React 代码解析为抽象语法树
2. 开发者编写 babel 插件，依据 React 抽象语法树生成新的小程序抽象语法树
3. babel 根据小程序抽象语法树生成最终代码

例如 Taro 就是用 babel 完成的小程序语法转换.

### 3. 代码生成

遍历新的抽象语法树，生成代码。

### 其他资源

babel 属于编译原理的范畴，基础知识可以复习大学课程《编译原理》

参考和学习的GitHub仓库：[super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

本文总结于：[这里](https://juejin.cn/post/6844903849442934798)
