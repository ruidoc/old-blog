# Gitalk 评论集成

Gitalk 是一个评论组件，数据存储在 GitHub Issue 上，非常适合个人博客集成评论系统。

本博客的评论系统就是基于 Gitalk，效果看底部。

### 安装

可以直接引入 css 和 js：

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
```

也可以用 npm 安装：

```js
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
```

开始之前，还要去注册一个 `GitHub OAuth Application`，入口在 [这里](https://github.com/settings/applications/new)。

为什么要用它呢？因为我们要将评论信息写入 `GitHub Issue`，则必须要 GitHub 的授权。

OAuth Application 会提供一个 `clientId` 和 `clientSecret`，有了它，我们就可以申请 github 的各种权限。第三方网站接入 github 登录也是这么做的。

**注意一点**：注册时的 `callback URL` 字段必须是你的域名地址，精确到 `https://xxx.com` 即可。

### 接入

上一步的准备工作做好后，就可以接入 Gitalk 了。

首先创建一个存放评论组件的元素，也可以 js 创建：

```html
<div id="gitalk-container"></div>
```

然后实例化 Gitalk 并渲染：

```js
const gitalk = new Gitalk({
  clientID: '', // 上一步 OAuth Application 可以拿到
  clientSecret: '', // 上一步 OAuth Application 可以拿到
  repo: 'blog', // github 仓库名，不需要加用户名，如：blog
  owner: 'ruidoc', // github 用户名，我的是 ruidoc
  admin: ['ruidoc'], // 可以修改删除评论的 GitHub 用户名，数组
  id: location.pathname // 页面标识，直接用页面path即可
})

gitalk.render('gitalk-container')
```

上面的配置都是必填项，少填会报错的！全部配置看 [这里](https://github.com/gitalk/gitalk#options)

配置里的 `id` 字段要着重说一下。Gitalk 会为每一个不同的 id 初始化一条 issue，实现的效果就是每个页面对应一个 issue。因此要确定相同页面的 id 是一样的，也就是说不能把 url 参数加到 id 里。同时，每个 id 还对应一个评论的 tag，因此简短也是必要的。

`id` 还有一个注意事项是，不要包含特殊字符，如 `http://` 这样把全 url 加进去，Gitalk 会报解析错误。当然，也不建议包含中文。

除了上面这种 render 的方式，在 React 中，也支持直接使用组件：

```js
import GitalkComponent from 'gitalk/dist/gitalk-component'

return (
  <GitalkComponent
    options={{
      clientID: '...'
      // ...
    }}
  />
)
```

赶快动手试试吧！
