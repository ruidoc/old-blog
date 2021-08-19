# 声明文件

对于一些公共的函数或对象，要指定它们的类型，最好的方式是写一个单独的类型声明文件。

这样做的好处是，当你在其他组件里导入这类函数或对象时，它们的类型会自动导入，不需要你手动导入类型。

声明文件以 `.d.ts` 结尾。

### 声明语句

声明语句写在声明文件中，用于定义各种各样的类型。

假如我们要使用 Vue，通过 `<script>` 标签引入 vue.min.js，然后全局使用 `Vue` 构造函数。

```js
var v = new Vue();
```

但是此时 ts 编译器并不知道 Vue 是什么东西，因此会报类型错误。

怎么办呢？我们使用 `declare` 来声明一个全局的 `Vue` 类型：

```js
// global.d.ts
declare function Vue: (config: object)=> any
```

现在有了 Vue 类型，报错消失了。相当于 Vue 类型与 Vue 函数绑定到了一起。

> 注意：类型名称要和函数名称一致，才会自动绑定。

`declare function` 声明了一个全局的函数类型，并没有真的定义一个变量，仅用于编译时的静态检查。

除了函数类型，declare 还可以声明其他的全局类型：

```js
declare var       // 声明全局变量
declare function  // 声明全局函数
declare class     // 声明全局类
declare enum      // 声明全局枚举类型
declare namespace // 声明全局对象
declare global    // 扩展全局变量
declare module    // 扩展模块
```

### 第三方声明文件

上面举例的 script 方式引入 Vue 是没有类型的。

事实上，一些知名第三方库都有完整的类型文件，统一管理在 npm 仓库的 `@types` 这个命名空间下。通常使用 npm 安装时会默认安装类型文件。

可以从 [这里](https://www.typescriptlang.org/dt/search) 查找你需要的类型文件。

比如单独安装 Vue 的类型文件：

```sh
yarn add -D @types/vue
```
