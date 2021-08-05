# docker-compose

docker-compose 是 Docker 官方编排工具，负责实现对多个 Docker 容器快速编排。

我们知道，`Dockerfile` 用于定义单个容器。但有时一个应用常常需要多个容器相互关联协调，比如说前端应用部署需要 `nodejs + nginx`，此时无法使用 Dockerfile 定义，于是出现了 docker-compose。

docker-compose 通过一个单独的 `docker-compose.yml` 配置文件进行多个容器的关联配置。

### 版本说明

docker-compose 是一个单独的包，目前主包是 `1.x` 的版本，提供了 `docker-compose` 命令。

最新的 Docker 官方用 GO 语言 重写 了 Docker Compose，将其作为了 docker cli 的子命令，称为 `Compose V2`，用 `docker compose` 命令替换了 `docker-compose`。

不过目前 Compose V2 还是 beta 版本，项目中使用还用 v1 比较好。

### 安装

Compose 有两种安装方式。第一种是直接下载二进制包，第二种是通过 Python 的包管理工具 pip 进行安装，两种方式都介绍一下。

**二进制包**

Linux 系统下，切换目录至 `/usr/local/src`，这个目录是简历的源文件下载目录。

```sh
$ sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose
```

然后就可以使用 `docker-compose` 命令了。

**PIP 安装**

一般情况下，建议使用下载二进制包的方式安装。PIP 安装适用于如树莓派这样的应用。

执行安装命令：

```sh
$ sudo pip install -U docker-compose
```
