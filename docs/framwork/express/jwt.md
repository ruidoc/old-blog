# express-jwt

首先来认识一下，什么是 JWT？

JWT，全称 JSON Web Tokens，是目前最流行的跨域认证解决方案。它提供了一个 json 对象，用于在访问接口时认证用户身份。

传统的认证方式是 _cookie + session_。基本流程是，用户登录后，将用户信息存在 session 里，然后把查找这条 session 的 **session_id** 写入浏览器的 cookie 中。之后每次发起请求都带上 cookie，服务端便可根据此查找 session，验证用户是否合格。

在现代的前后端分离出现之后，这种认证方式就出现了弊端。比如前后端分开部署，不同的域名，则服务端会因为跨域，无法向浏览器写入 cookie，因此这种认证方式失效。
