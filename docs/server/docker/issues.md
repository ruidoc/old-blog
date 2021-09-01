# 踩坑记录

### 容器/服务启动失败

报错信息：

> The requested image's platform (linux/arm64/v8) does not match the detected host platform (linux/amd64) and no specific platform was requested

啥意思呢？镜像的适用平台于服务器平台不符。

最后找到原因：M1 构建的镜像，直接推到服务器上是不兼容的！坑！

### 同版本镜像升级失败

docker service 升级时，更新相同版本的镜像，会出错。报错信息如下：

> could not be accessed on a registry to record its digest.

解决方案时加 `--with-registry-auth` 参数。

当然，这个仅限于你的 docker 私有仓库是 registry 搭建的。
