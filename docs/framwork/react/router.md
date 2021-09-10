# react 路由

react 的 web 端使用 `react-router-dom` 这个库作为路由组件。

参考文档：[这里](https://reactrouter.com/web/guides/quick-start)

安装之后，下面来说使用方法。

### 入口文件

首先需要在入口文件配置根路由。

```js
import { BrowserRouter, HashRouter } from 'react-router-dom'
```

`BrowserRouter` 代表 history 路由，`HashRouter` 代表 hash 路由，这两种根路由组件二选一。

然后导入路由配置组件，用根路由组件包裹一下即可。

### 路由配置

路由配置单独抽取为一个文件，我们叫它路由文件。

路由文件中引入另外两个组件：

```js
import { Switch, Route } from 'react-router-dom'
```

`Switch` 组件下包裹多个 `Route` 组件，作用是从上到下匹配对应的 Route；一旦匹配到某个路由，则停止匹配后面的其他路由，直接渲染匹配到的路由。

`Route` 组件时真正定义路由的组件，基本属性如下：

- path：路由地址
- exact：是否完全匹配路由地址

简单的栗子：

```js
// Home，About 是导入的页面组件
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
```

### 页面组件

路由配置中，每一个匹配到的 Route 都会渲染一个页面组件。

在页面组件中，使用路由的功能主要是三部分：

- 跳转路由
- 定义子路由
- 获取当前路由

```js
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom'
```

**跳转路由**有两种方式：组件跳转和 js 跳转。

```js
// 第一种，组件跳转
<Link to="/about">跳转</Link>
```

一般在页面组件里，使用 js 跳转更灵活：

```js
let history = useHistory()

history.push('/about')

// 重定向
history.redirect('/about')

// 返回上一页
history.goBack()
```

**定义子路由**就是说，在路由匹配到当前页面组件时，还可以再定义一层路由。

啥意思呢？比如匹配到当前页面组件的路由地址是 `/about`，现在我想加两个路由：

- `/about/my`
- `/about/you`

那么只需要在我当前的页面组件中配置：

```js
<Route path="/my">
  <My />
</Route>
<Route path="/you">
  <You />
</Route>
```

注意：react 中子路由的这个概念，与 vue 中的大不相同。vue 是把全部路由都定义在一个配置里，而 react 在各级页面组件中定义子路由，要注意区分啊！

**获取当前路由**

主要用的两个函数，`useLocation` 和 `useParams`

useLocation 用于获取当前路由信息，包括路由地址等。

useParams 用于获取路由参数。

比如我们定义的路由地址是 `about/my/:id`，实际地址是 `about/my/2`

```js
const location = useLocation()
const params = useParams()

console.log(location.pathname) // about/my/2
console.log(params) // { "id": 2 }
```

基本使用就这些了。
