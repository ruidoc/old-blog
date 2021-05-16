## npm 常见问题汇总

这里整理下 npm 的常见问题。

### node-sass 问题

在 node 版本更换或者升级依赖之后，总会遇到 node-sass 与当前环境不兼容的报错。

解决方案也很简单，一行命令：

```js
npm rebuild node-sass
```

需要等一会，然后就可以了。
