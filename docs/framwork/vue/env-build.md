# 环境与打包

Vue CLI 项目有三个模式：

- development
- production
- test

也可以通过命令行 --mode 参数指定：

```sh
$ vue-cli-service build --mode development
```

上面三个模式默认都对应着一个 `NODE_ENV` 环境变量：

- development：NODE_ENV=development
- production：NODE_ENV=production
- test：NODE_ENV=test

不同的模式可以读取根目录下不同的 `.dev` 前缀文件的环境变量。如 production 模式，可以读取 `.dev.production` 文件内定义的环境变量。

### NODE_ENV

NODE_ENV 是内置的环境变量，默认值是 development。

webpack 打包时会根据 NODE_ENV 的值来进行不同配置的打包。当 NODE_ENV=development 时，会启动热更新，且不会压缩代码；而当 NODE_ENV=production 时，则会进行压缩，减小打包体积。

### 自定义模式

为什么要自定义一个模式？

一个实际场景是：我们在发布版本时会分为预发版本（staging）和正式版本（release）。这两个版本要发布到线上，所以 NODE_ENV=development
