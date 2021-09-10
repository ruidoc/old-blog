# express-jwt

首先来认识一下，什么是 JWT？

JWT，全称 JSON Web Tokens，是目前最流行的跨域认证解决方案。它提供了一个 json 对象，用于在访问接口时认证用户身份。

传统的认证方式是 _cookie + session_。基本流程是，用户登录后，将用户信息存在 session 里，然后把查找这条 session 的 **session_id** 写入浏览器的 cookie 中。之后每次发起请求都带上 cookie，服务端便可根据此查找 session，验证用户是否合法。

在现代的前后端分离出现之后，这种认证方式就出现了弊端。比如前后端分开部署，不同的域名，则服务端会因为跨域，无法向浏览器写入 cookie，因此这种认证方式失效。

### 添加 jwt 验证

express 提供了 `express-jwt` 模块，用于对一个请求的合法验证和过滤，以及自动解密 token。

第一步，实例化 `express-jwt`，返回一个中间件实例：

```js
const exjwt = require('express-jwt')
const SECRET_KEY = 'MY_CUSTOM_SECRET_KEY'

function verifyJwt() {
  return exjwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'],
    requestProperty: 'auth'
  })
}
```

第二步，在入口文件加载这个中间件实例：

```js
const app = express()
app.use(
  verifyJwt().unless({
    path: ['/user/login', '/user/regis', /^(\/notify\/)/]
  })
)
```

`unless` 方法的作用是配置一组 path，绕过 jwt 验证。常用的比如登录接口，注册接口等。

现在，访问任意一个接口地址（unless 配置的除外），就会返回 401 错误，表示 token 认证失败。

### 生成 jwt

上一步，添加 jwt 验证后，访问接口会返回 401 错误。

那么如何通过验证呢？

其实只需要在 http 请求中加一个请求头字段即可：

```js
var token = 'xxx'
const headers = {
  Authorization: 'Bearer ' + token
}
```

这里用到一个 token 变量，需要我们用另一个包 `jsonwebtoken` 生成。

先附上包地址：[这里](https://github.com/auth0/node-jsonwebtoken)

安装这个包，然后生成方式如下：

```js
var jwt = require('jsonwebtoken')
function genoJwt(data) {
  let token = jwt.sign(data, SECRET_KEY, { expiresIn: '7d' })
  return token
}
```

这里的 `SECRET_KEY` 和上一步实例化 exjwt 的 secret 字段的值必须是同一个，否则不能通过验证！

还有字段 `expiresIn` 表示生成的 token 的有效时间，`7d` 表示七天。

其他时间配置，参考[这里](https://github.com/vercel/ms)
