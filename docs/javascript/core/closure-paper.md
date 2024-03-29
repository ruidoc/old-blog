# 闭包面试真题

### 循环体系利

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

console.log(i);
```

输出结果：

```js
5 5 5 5 5 5
```

解析：首先，setTimeout 的第二个参数最小值为 1。其次，从事件循环来看，setTimeout 最后执行。

### “复杂作用域” 系列

解题技巧：`画图 + 定位变量`

上真题：

```JavaScript
var a = 1;
function test(){
    a = 2;
    return function(){
        console.log(a);
    }
    var a = 3;
}
test()(); // a = 2
```

此题的关键是，test 作用域里的变量值，到底是 2 还是 3？

因为 **函数** 和 **变量** 都存在提升。所以 a=3 不会提升在匿名函数之前，此时 a=2。

再看一道：

```js
function test (){
    var num = []
    var i
    for (i = 0; i < 10; i++) {
        num[i] = function () {
            console.log(i)
        }
    }
    return num[9]
}
test()() // 10
```

解析：i 循环完毕之后等于10

再看一道：

```js
var test = (function() {
    var num = 0
    return () => {
        return num++
    }
}())
for (var i = 0; i < 10; i++) {
    test()
}
console.log(test()) // 10
```
