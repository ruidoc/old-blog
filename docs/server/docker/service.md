# service 服务

上节集群说过，任务（task）是一个容器，服务（service）则是一组容器。

集群初始化完成后，我们首先新建一个服务：

```sh
$ docker service create --name sev-test -p 80:80 nginx:1.13.7
```

根据这条命令来看，创建一个服务也是要基于一个镜像，然后起一个服务名称，基本操作和创建容器有点相似。

创建之后，可以查看服务：

```sh
$ docker service ls
```

也可以查看某个服务的详情：

```sh
$ docker service ps sev-test
```

也可以查看某个服务的运行日志：

```sh
$ docker service logs sev-test
```

不想要了，删除服务：

```sh
$ docker service rm sev-test
```

注意：删除服务，正在运行的所有容器都会被删除掉！

### 滚动升级

为什么要使用服务，而不是直接使用容器？最重要的一个原因是服务提供了滚动升级的功能。

也就是说，当你的新镜像要部署时，使用服务的滚动升级更顺滑，而容器的 stop-remove-start 流程太过繁琐。

滚动升级分两步：

**第一步：拉取镜像**

滚动升级前，肯定要构建一个新的镜像。所以第一步是要将新构建的镜像拉下来。


**第二步：升级镜像**

比如当前镜像是 `test:1.0.0`，上一步拉取的镜像是 `test:1.0.1`，升级命令如下：

```sh
$ docker service update --image test:1.0.1 [service-name]
```

等几秒钟，镜像就升级成功了，相关的容器也会基于新镜像重新启动，实现升级。

除了升级，还有一个功能是**回滚**。

```sh
$ docker service rollback [service-name]
```

回滚会直接回到升级前的上一个镜像。特别是在新版本镜像出问题的情况下，回滚非常有用。
