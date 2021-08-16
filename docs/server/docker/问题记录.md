# 踩坑记录

### 容器/服务启动失败

报错信息：

> The requested image's platform (linux/arm64/v8) does not match the detected host platform (linux/amd64) and no specific platform was requested

啥意思呢？镜像的适用平台于服务器平台不符。

最后找到原因：M1 构建的镜像，直接推到服务器上是不兼容的！坑！