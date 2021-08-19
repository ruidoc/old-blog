# 跨域方案

其实解决方案很多，这里只讲几个典型的

### 什么是跨域

关于跨域，要从“同源策略”说起。

这里的 **源** 可分三个部分：

- 协议
- 域名
- 端口号

只要 URL 满足这三部分相同，就是同源。

同源策略是浏览器的一个安全功能。不同源，就是不同的”域“，不能读写对方资源。如果非要数据交换，就产生了所谓的”跨域“。

”不能读写资源“包含三个方面：

- Cookie、LocalStorage 和 IndexDB 无法读取
- DOM 和 JS 对象无法获取
- Ajax 请求发送不出去

### 跨域解决方案

#### JSONP

js 调用跨域文件是被允许的。比如引用一个 jQuery 的 CDN。

JSONP 就是依据此实现的。两步：

1. 浏览器脚本 —— 定义：定义 callback，在函数体内拿到参数做数据处理
2. 服务端 —— 调用：调用 callback，参数是需要返回的数据

```html
<body>
  <script type="text/javascript">
    function callback(data) {
      console.log(data);
    }
  </script>
  // 这里引入服务端代码
  <script
    src="http://www.imooc.com/jsonp.shtml"
    type="text/javascript"
    charset="utf-8"
  ></script>
</body>

// 服务器代码 return "callback('我是目标字符串')";
```

#### CORS

CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

它允许浏览器向不同源的服务器，发出 XMLHttpRequest 请求。但是需要浏览器和服务器同时配置支持。

其实浏览器是自动实现的。当跨域时，会自动加一些头部信息。

因此能否实现 CORS 的关键，其实在于**服务器如何配置**。

请求分为**简单请求**和**非简单请求**，这两者的 CORS 处理不相同：

##### 简单请求的 CORS

- 请求方式：HEAD、POST 或者 GET
- 请求头只包括：
  -- Accept
  -- Accept-Language
  -- Content-Language
  -- Last-Event-ID
  -- Content-Type

Content-Type 仅限于三个值：

- application/x-www-form-urlencoded（表单提交）
- multipart/form-data（文件上传）
- text/plain

方式是在头部加一个 Origin 字段：

```
Origin: http://imooc.com
```

这个字段标明请求的源（协议 + 域名 + 端口）

如果这个源不在服务器许可范围内，就会返回一个报错。

如果在，则正常响应。响应头中会包含：

```
Access-Control-Allow-Origin: http://imooc.com
```

##### 复杂请求的 CORS

复杂请求的条件：

- 请求方法：PUT 或 DELETE
- Content-Type：application/json

在复杂请求之前，HTTP 首先要做一次预请求。

预请求要检查的内容：

- **请求源** 是否被许可
- **请求方法** 是否允许
- **请求头字段** 是否允许

预请求成功，才会发起正式请求。否则请求失败。

正式请求的过程就和简单请求一样啦！

> 预请求的方法：OPTIONS

#### CORS 和 JSONP 的对比

JSONP 只支持 GET 请求，而 CORS 支持所有类型的 HTTP 请求

JSONP 兼容低版本 IE ，CORS 不行

#### postMessage 跨域

H5 的新 API，支持跨窗口通信。

直接上例子：

```html
// a页面
<iframe id="iframe" src="http://www.b.com" style="display:none;"></iframe>
<script>
   var iframe = document.getElementById('iframe');
   var contentWindow = iframe.contentWindow; // b页面窗口的引用
   iframe.onload = function() {
     // a 页面向 b 页面派发消息
     contentWindow.postMessage('a-date', 'http://www.a.com);
   };

   // a 页面接受 b 页面的消息
  window.addEventListener("message", function( event ) {
     console.log('data from b is', event.data)
  });
</script>
```

```js
// b页面
window.addEventListener(
  "message",
  function (e) {
    console.log("data from a is", event.data);
    if (data.origin == "http://www.a.com") {
      // 派发数据到 a 页面
      window.parent.postMessage("b-data", "http://www.b.com");
    }
  },
  false
);
```
