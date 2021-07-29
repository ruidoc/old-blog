# axios 全解

axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

前端的 Vue 或 React 项目中，基本都在用 axios 做统一请求处理。

基本的例子：

```js
import axios from "axios";

// get 请求
axios
  .get("/user", {
    params: { id: 1 },
  })
  .then((res) => {})
  .catch((e) => e);

// post 请求
axios
  .post("/user", {
    id: 1,
  })
  .then((res) => {})
  .catch((e) => e);
```

### axios 实例

实例是一个封装了通用配置的请求对象，使用实例可以实现统一的请求配置和请求处理。

使用 `axios.create` 方法创建实例对象，传入请求配置。

```js
import axios from "axios";

// 创建实例，设置通用配置
const instance = axios.create({
  baseURL: "http://api.test.com",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
```

上面的请求配置，设置了该实例的请求 url 前缀，请求超时时间以及请求头。

请求配置还有很多，下面详细介绍。

### 请求配置

axios 提供了丰富的配置参数来满足不同场景的请求需要。

```js
{
  // 用于请求的服务器 URL
  url: '/user',

  // 请求方法
  method: 'get', // 默认值

  // 自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: 'https://api.test.com/v1/',

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // get请求携带的 URL 参数
  params: {
    ID: 12345
  },

  // 请求体的数据
  data: {
    firstName: 'Fred'
  },

  // 请求超时的毫秒数
  timeout: 1000, // 默认值是 `0` (永不超时)

  // 浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // 处理上传进度，浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // 处理下载进度，浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // 取消请求，后面详细介绍
  cancelToken: null

}
```

### 拦截器

在请求或响应被 then 或 catch 处理前拦截它们，先处理一次。

拦截器分为请求拦截器和响应拦截器。最常用的是为实例添加拦截器。

```js
const instance = axios.create({
  baseURL: "http://api.test.com",
});

// 请求拦截
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  (result) => {
    // 2xx 范围内的状态码会触发该函数。
    return result;
  },
  (error) => {
    // 超出 2xx 范围的状态码会触发该函数。
    return Promise.reject(error);
  }
);
```

拦截器最常用的就是对非 2xx 的响应进行统一的错误处理，如下：

```js
instance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (error) => {
    if (error.response) {
      // 请求成功且响应成功，但状态码是非 2xx；错误处理主要在这
      let res = error.response;
      switch (res.status) {
        case 404:
          alert("请求的网址不存在");
        case 400:
          alert(res.data.message);
          break;
        default:
          alert(`服务器异常(code: ${res.status})`);
          break;
      }
    } else if (error.request) {
      // 请求成功，但没有收到响应
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      console.log(error.request);
    } else {
      // 发送请求时出了问题
      console.log("请求错误", error.message);
    }

    // return Promise.reject 是为了在使用实例时在 catch 中捕获错误
    return Promise.reject(error);
  }
);
```

### 取消请求

取消请求非常有用。常用的场景是：当你的应用中任意一个接口 token 过期，则中断后面的其他请求。

axios 使用 cancel token 来取消一个请求。

可以使用 `axios.CancelToken.source` 工厂方法创建一个 cancel token，如下：

```js
const source = axios.CancelToken.source();

axios
  .get("/test/12345", {
    cancelToken: source.token,
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      // 取消请求时，同批已请求的接口会在这里响应
      console.log("请求已取消", err.message);
    } else {
      if (err.response.status == 401) {
        // 判断401时，取消请求
        source.cancel("token已失效");
      }
    }
  });
```

也可以直接通过 `axios.CancelToken` 构造函数来实现。

```js
var cancel = null;

axios
  .get("/test/12345", {
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      // 取消请求时，同批已请求的接口会在这里响应
      console.log("请求已取消", err.message);
    } else {
      if (err.response.status == 401) {
        // 判断401时，取消请求
        cancel("token已失效");
      }
    }
  });
```

需要特别说明一下 `axios.isCancel` 的作用：

当一批请求中的某一个请求被取消后，则其他的请求会返回错误的响应。那么这个取消的错误响应与其他的错误响应如何区分呢？就通过 `axios.isCancel` 来区分。

根据业务需要。可以在 response 响应拦截器里区分，也可以在请求的 catch 函数里区分。

最后，附上 axios [官方文档](https://axios-http.com/zh/docs/intro)，写的非常精简，推荐阅读。
