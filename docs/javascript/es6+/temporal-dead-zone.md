# 暂时性死区

本节是 let 和 const 关键字相关的考点

考点，是它背后所牵扯出的变量提升、暂时性死区等知识点

### 从变量提升说起

在 “var” 时代，有一个特别的现象：无论变量声明写在哪，最后都会被提到作用域的顶端。

```javascript
console.log(num);
var num = 1;
```

这段代码不会报错，反而会输出一个 undefined，因为它等价于：

```javascript
var num;
console.log(num);
num = 1;
```

这是全局作用域的情况，函数作用域同理

### 变量提升的原理

之前学过这方面相关的知识

js 分编译阶段和执行阶段，在代码执行前都会有个短暂的编译阶段，就在这个编译阶段完成了变量声明，所以变量才会提到作用域的顶端

### 被禁用的变量提升

而 let 和 const 的一个重要特征，就是它们**不存在变量提升**

它们的声明生效时机和具体代码的执行时机保持一致

### let 与 const

let 与 const 除了不存在变量提升，还和块作用域（局部作用域）有关

#### let 关键字

let 声明变量时，会绑定到块作用域上，而 var 不会感知块作用域

> 在函数里，var 声明的变量也只在函数作用域中有效

#### const 关键字

const 声明的变量，也会绑定到块作用域上

const 关键字还有两个特点：

- 声明时必须赋值
- 赋值后不可更改

注意：赋值后不可更改得分情况。

如果值是基本类型，不可更改；
如果是引用类型，比如对象，修改对象的属性是可以的，但是重新赋值对象是不允许的

### 暂时性死区

在上文的基础上，理解暂时性死区

```js
var me = "xiuyan";
{
  me = "bear";
  let me;
}
```

这段代码运行会报错，为什么呢？

块作用域中用 let 和 const 声明的变量，该变量会被封闭在块作用域中，不会“探出头去”寻找全局变量

同时，let 声明的变量不存在变量提升，所以会报错。

因此，在这个块作用域 let 关键字前，使用 let 变量的部分，就是暂时性死区。

暂时性死区的本质：当我们进入当前作用域时，let 或者 const 声明的变量已经存在了——它们只是不允许被获取而已