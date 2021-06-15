# 基础 100 题

先刷 100 道基础面试题。

## 1. new 的实现原理

```js
function imitateNew(fun) {
  // fun是构造函数
  if (typeof fun != 'function') {
    throw new Error('type error')
  }
  let args = [].slice.call(arguments, 1)
  // 创建新对象并设置原型继承
  let obj = {}
  obj.__proto__ = fun.prototype
  // 上面两行等于这个：
  // let obj = Object.create(fun.prototype)
  let result = fun.apply(obj, args)
  return result ? result : obj
}

// 使用函数
var person = imitateNew(Person, '男');
```

## 2. 常用的正则表达式

```js
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

```

## 3. 类数组对象的定义

定义：拥有 length 属性和索引属性的对象

比如： arguments 对象，获取 DOM 的返回结果

常见类数组转换为数组的方法：

1. slice

```js
Array.prototype.slice.call(arrayLike);
// 等于：[].slice.call(arrayLike);
```

2. Array.from

```js
Array.from(arrayLike);
```

## 4. 实现对象路径查找

```js
var obj = {
    a: {
        b: {
            c: 'c'
        }
    }
}
// 写一个查找函数，路径为'a.b.c'
```

```js
function findPath(obj, path) {
    if(Object.prototype.toString.call(obj) != '[object Object]') {
        throw new Error('the first params is must object');
    }
    if(typeof path != 'string') {
        throw new Error('the second params is must object');
    };
    let paths = path.split('.')
    for (let i = 0; i < paths.length; i++) {
        if(paths[i] && obj[paths[i]]) {
            obj = oj[paths[i]]
        } else {
            break;
        }
    }
    return obj
}
```

## 5. localSotrage 实现 ttl 缓存

```js
class Catchs {
    constructor(timelong) {
        // 时长参数, 单位是秒
        this.timelong = timelong
    }
    static setItem(key, value) {
        var time = +new Date() // 13 位字符串
        localSotrage.setItem(key, JSON.stringify({
            value, expires: time + timelong*1000
        }))
    }
    static getItem(key) {
        let res = localSotrage.getItem(key)
        if(res) {
            res = JSON.parse(res)
            if(res.expires>new Date().getTime()) {
                return res.value
            } else {
                localStorage.removeItem(key)
                return 'expired'
            }
        }
        return null
    }
}
```

## 6. 单行居中，多行居左

父元素：
    text-align: center;
子元素：
    display: inline-block;
    text-align: left;

## 7. 一像素边框

目标元素：
    position: relative;
after伪类：
    position: absolute;
    left: 0; top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #ddd;
    transform: scale(0.5)
