# 时间操作

时间是我们开发当中最常用的功能，但是总记不清 API。这节统一总结下常用的时间函数。

### shell 中的时间

打开终端，输入时间命令：

```sh
$ date
```

输出结果：

```sh
2021年 2月13日 星期六 16时00分38秒 CST
```

这种格式显然是不友好的，格式化一下：

```sh
$ date +"%y-%m-%d"
```

输出结果：

```sh
21-02-13
```

这就是我们想要的时间格式了！

注意，时间变量是 `%` 而不是 `$`，看清楚了。

具体的时间日期格式可以自己组合。常用的组合方式如下：

**日期：**

```sh
$ date +"%Y-%m-%d"  # 2021-02-13
$ date +"%x"        # 2021/02/13
$ date +"%y-%m-%d"  # 21-02-13
$ date +"%D"        # 02/13/21
```

**时间：**

```sh
$ date +"%H:%M:%S"  # 16:13:52
$ date +"%T"        # 16:13:52
$ date +"%R"        # 16:13
```

**时间戳：**

```sh
$ date +"%s"    # 1613222959 10位时间戳
```

### js 中的时间

创建时间对象：

```js
var d = new Date()
```

时间对象上包含了大量的内置时间操作函数，可以获取各种时间格式。

先看一下时间对象的默认格式长什么样：

```js
console.log(d.toString())
// "Fri Sep 03 2021 23:53:22 GMT+0800 (中国标准时间)"
```

也可以返回 ISO 标准格式：

```js
console.log(d.toISOString())
// "2021-09-03T16:05:01.991Z"
```

除此之外，最常用的还是获取时间戳。

时间戳分两类：

1. 秒级时间戳（10 位）
2. 毫秒级时间戳（13 位）

js 一般获取毫秒级时间戳，如下：

```js
var timestamp = new Date().getTime() // 方式一
var timestamp = +new Date() // 方式二
var timestamp = Date.now() // 方式三
```

没有直接获取秒级时间戳，但可以这样处理：

```js
var timestamp = parseInt(Date.now() / 1000)
```

### dayjs 集成

js 内置的时间对象，只能处理上面那样简单的转换。

比如说要将时间转换成 `2021-02-03` 这样的格式，Date 函数就比较费劲，因此我们需要一个强大的时间处理函数，dayjs 就是最佳选择。

先来看它强大的格式化能力：

```js
dayjs(new Date()).format('YYYY-MM-DD HH:mm') // 2021-08-02 12:21
```

还有强大的时间操作能力，比如对年，月，日的时间推移：

```js
dayjs().add(7, 'day') // 时间后移7天
dayjs().subtract(1, 'year') // 时间前移一年
dayjs().startOf('month') // 本月的开始时间
dayjs().endOf('week') // 本周的结束时间
```

更详细的时间操作参考[文档](https://dayjs.gitee.io/docs/zh-CN/manipulate/manipulate)
