# 面试算法

面试遇到过的算法，记在这里。

### 实现一个Range()

```js
// 题目要求：实现一个 Range(from, to, step)
// 预期效果：
Range(1, 10, 3);      // 输出：[1,4,7,10]
Range("A", "F", 2);   // 输出：["A","C","E"]
```

实现方法：

```js
var range = (from, to, step)=> {
    var arr = []
    if(typeof from == 'number' && typeof to == 'number' ){
        for(let i = min; i<=max; i=i+step){
            arr.push(i)
        }
    }
    if(typeof from == 'string' && typeof to == 'string' ){
        var minIndex = from.charCodeAt();
        var maxIndex = to.charCodeAt();
        for (let i = minIndex; i <= maxIndex; i=i+step) {
            arr.push(String.fromCharCode(i))
        }
    }
}
```

`charCodeAt()` 方法返回字母的 Unicode 编码，连续字母的 Unicode 编码之差为 **1**。如：

- A 的编码为 65
- B 的编码为 66
- C 的编码为 67

`String.fromCharCode` 方法根据 Unicode 编码返回字母字符串。

### 实现 sleep 函数

首先，promise 实现方法：

```js
function sleep(ms) {
    return new Promise(resolve=> setTimeout(resolve, ms))
}
```

async/await 实现方法：

```js
async function sleep(ms) {
    await new Promise(resolve=> setTimeout(resolve, ms))
}
```

函数用法：

```js
(async function() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
})()
```

