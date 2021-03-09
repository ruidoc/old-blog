## for 循环的 n 种姿势

for 循环在我们日常开发中最最常用的一种，这里记录一下常用的四种姿势。

**1. 普通循环**

```js
for (let i = 0; i < array.length; i++) {}
```

普通循环是最早用的循环，大家都会。但是这里注意一点：`let i = 0` 与 `var i = 0` 是有区别的。

用 `var i = 0`，i 定义在 for 的同级作用域，for 自己没有作用域，i 可以在 for 循环的外面访问到。

```js
for (let i = 0; i < 4; i++) {}
console.log(i); // 4
```

用 `let i = 0`，for 后面的花括号会形成块级作用域。此时变量 i 只能在块级作用域访问，不能再 for 循环外面访问。

```js
for (let i = 0; i < 4; i++) {}
console.log(i); // Error: i is not defined
```

还有一点。不管如何声明 i，是否是严格模式，如果在花括号内使用 this，均指向全局变量 window。

**2. forEach**

```js
array.forEach((element) => {});
```

forEach 在使用上比用 for 循环精简的多，本质上是一个高阶函数。

高阶函数的函数参数体内使用 this，也是指向全局变量。

**3. for...in**

```js
for(let key in json)
```

一般在循环对象属性的时候使用，遍历出 key；循环数组时，遍历出下标。

可以遍历任意一个对象的可枚举属性。

但是问题是，会遍历出其他值：

1. 数组对象本身属性值
2. 原型上的属性

解决遍历原型属性的问题，可以通过 `hasOwnProperty` 判断：

```js
for (var i in arr) {
  if (arr.hasOwnProperty(i)) {
    console.log(i);
  }
}
```

**4. for...of**

```js
for(let value of array)
```
可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，遍历出 value，一般在循环数组的时候使用

for...of 是 ES6 新特性，修复 for...in 的不足。

**比较**

for...in 循环不仅遍历数组和对象本身，还会遍历手动添加的其它键，甚至包括原型链上的键。for...of 则不会这样。

for...in 还是 for...of 都不能遍历出 Symbol 类型的值，只能用 `Object.getOwnPropertySymbols()` 单独获取这个数组。
