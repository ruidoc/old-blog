# 搭建 HTTP 服务器

一个简单的 HTTP web 服务器的示例：

```js
const http = require("http");

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end("hello world");
});

server.listen(3000);
```

这里引入了 [http](http://nodejs.cn/api/http.html) 模块，提供了 `createServer` 方法，传入一个回调函数，创建了一个服务器。

回调函数有两个参数，第一个是请求对象（http.IncomingMessage），第二个是响应对象（http.ServerResponse）。该函数在每次接收到请求时被执行。

请求对象 `request` 提供了请求的详细信息。通过它可以访问请求头和请求的数据。

响应对象 `response` 用于构造要返回给客户端的数据。

事实上，createServer 返回的是一个 `EventEmitter`，因此上面的写法等同于这样：

```js
const server = http.createServer();

server.on("request", (request, response) => {
  response.statusCode = 200;
  response.end("hello world");
});
```

### 请求解析

用户发起请求的相关数据，都包含在 request 对象中。

这些数据包含常用的请求方法，请求头，url，请求体等等数据。

```js
const { method, url, headers } = request;
```

method 表示请求方法可直接使用，headers 返回请求头对象，使用也比较简便：

```js
const { headers } = request;
const userAgent = headers["user-agent"]; // 请求头全是小写字母
```

唯独 url 字符串不好解析，里面包含了协议，hostname，path，query 等等。

所幸 Node 提供了 `url` 和 `querystring` 两个模块解析 url 字符串。

```js
const url = require("url"); // 解析url字符串
const querystring = require("querystring"); // 解析query字符串

var string = "http://localhost:8888/start?foo=bar&hello=world";

var url_object = url.parse(string);
// { pathname: '/start', query: 'foo=bar&hello=world' }

var query_object = querystring.parse(url_object.query);
// { foo: 'bar', hello: 'world' }
```

对于 `POST` 或者 `PUT` 请求，我们需要接收请求体的数据。

请求体比较特殊，是通过 ReadableStream 可读流的方式传过来的，不能直接获取，要通过监听 'data' 和 'end' 事件分步获取。

```js
let body = [];
request.on("data", (chunk) => {
  // 这里的 chunk 是一个 Buffer
  body.push(chunk);
});
request.on("end", () => {
  body = Buffer.concat(body);
});
```

### 发送 http 请求

发送 http 请求是指，在 Node.js 中请求其他接口获取数据。

任何请求方法都通过 `http.request` 来实现。

**get 请求**

```js
const http = require("http");
const options = {
  hostname: "nodejs.cn",
  port: 80,
  path: "/todos",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
  res.on("end", () => {});
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
```
