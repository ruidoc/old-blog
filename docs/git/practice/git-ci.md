# 纯 Git 实现前端 CI/CD

最近要高效的把前端 react 项目部署到私有服务器上，研究了好几种持续部署方案，这里简单描述一下。

总的部署思路分两种：

- 编译后的文件部署
- 源码部署

编译后的文件部署，就是先在本地进行`npm run build`打包，生成 build 文件夹，然后将 build 文件夹传到服务器，再用 Nginx 配置一个静态解析即可。

这种方案用 rsync 直接上传就可以，这里不赘述。

源码部署就是把源文件部署到服务器上，然后：

```sh
npm install && npm run build
```

这种方式是将打包工作交给服务器（或其他构建工具），本地只是将源代码 push 上去，git 监听到推送然后自动开始构建。这是现在流行的方式，大多数持续集成工具都是这么干的。

今天的重头戏来了！我们不借助其他构建工具，只用纯 Git 实现监听 push 并自动构建。相信我，这一步非常好玩~

## Git 构建

首先准备一台服务器，安装好 `node` `git` `nginx`，开始动手

服务器信息如下：

> host：198.234.456.8（假的）  
> 项目目录：/home/react-test

### 创建裸仓库

登入服务器，在服务器的 /opt 目录下创建一个裸仓库

什么是裸仓库？裸仓库就是没有工作目录的仓库，说白了就是你的项目目录下的 `.git` 文件夹

执行命令创建：

```sh
$ cd /opt
$ git init --bare react-test.git
```

创建好后，会生成 react-test.git 文件夹，所以我们的裸仓库位置是 `/opt/react-test.git`，记住这里后面会用到。

接下来，进入 react-test.git 文件夹，发现里面有个 `hook` 文件夹。这个文件夹可不得了，是放 Git “钩子” 的地方。

所谓“钩子”，其实就是一个 shell 文件。在执行 git 操作（如：push，pull）时触发执行。

现在我们创建一个钩子。

### push 钩子

在 hook 目录下新建 `post-receive`，这个钩子会在代码 push 到这个裸仓库后执行，这里是本文最重要的重点。

```sh
$ cd /opt/react-test.git/hook
$ vim post-receive
```

post-receive 的具体内容如下：

```sh
#!/bin/bash
echo 'server: received code push...'
cd /home/react-test

echo 'server: checkout latest code from git...'

git --git-dir=/opt/react-test.git --work-tree=/home/react-test checkout -f release

echo 'server: running npm install...'

npm install \
&& echo 'server: buildding...' \
&& npm run build \
&& echo 'server: done...'
```

这个脚本最重要的就一条命令：

```sh
git --git-dir=/opt/react-test.git --work-tree=/home/react-test checkout -f release
```

什么意思呢？首先说下我们平时怎么用 git。

一般我们是在项目目录下用 `git init` 初始化 git 仓库。执行的 add，commit 等操作，默认就是与这个仓库交换文件。

这里有两个重要概念：`项目目录` 和 `git 仓库`。项目目录就是 package.json 文件所在的目录，我们的代码放在这里。git 仓库是项目目录下的 `.git` 文件夹，它是个隐藏目录，在 `npm init` 时自动生成。

那么，**有没有办法在当前项目目录下，使用其它目录的 git 仓库呢**？

是可以的，`--git-dir` 参数就允许你指定一个其他的 git 仓库。

比如说，我要将 `/home/react-test` 下修改的文件添加到暂存区：

```sh
# 默认加到 /home/react-test/.git
$ git add .
# 加到 /home/git-test/.git
$ git --git-dir /home/git-test/.git add .
```

既然项目目录可以指定其它的 git 仓库，那么 git 仓库可不可以指定其它的项目目录呢？

当然也可以，`--work-tree`参数就允许你指定其他的项目目录。

比如说，我要在 `/home/react-test` 下检出分支：

```sh
# 默认从 /home/react-test/.git 检出
$ git checkout dev-test
# 从 /home/git-test/.git 检出
$ git --work-tree /home/git-test/.git checkout dev-test
```

神奇吧，哈哈。这样就把项目和仓库分开了。

理解到这，再看上面那条命令的意思：将 `/opt/react-test.git` 这个 git 仓库的 `release` 分支，检出（checkout）到项目目录 `/home/react-test`，从而更新了该目录。

检出新代码之后，运行打包命令，更新部署文件夹，这样部署就实现了。

服务器的 git 仓库配好之后，下面就是接受本地代码的推送，然后自动触发检出，打包，部署了。

### 本地配置

上一步在私有服务器建了一个 git 裸仓库 `react-test.git`，现在，我们先在本地项目下，将这个裸仓库添加为远程仓库。

```sh
$ git remote add prod ssh://root@198.234.456.8/opt/react-test.git
```

第二步，我们直接将代码推送到这个远程仓库：

```sh
$ git checkout -b release
$ git push prod release
```

这里必须要切换到 release 分支再推送。因为在远程仓库钩子中，我们定义的是检出 release 分支，所以要推送的是 release 分支。

这里可能会要求你输入服务器密码，可以配置 `ssh免密登录` 来直接推送，这里不介绍。

推送后，会在控制台看到我们在 `post-receive` 中写好的输出。当推送完成，查看服务器下的 /home/react-test 目录，会看到源文件和打包后的 `build` 文件

此时，部署工作已经完成了。

后续的持续部署工作，只需要 push 一下即可。

### nginx 解析

上一部，部署完成，并打包了 build 文件夹，这个文件夹就是要部署的文件夹，每次打包后都会更新。

最后一步，则是配置一个域名，解析到这个文件夹.

```sh
$ cd /etc/nginx/conf.d
$ vim react-test.conf
```

react-test.conf 如下：

```nginx
server {
    listen 80;
    server_name yourhost; # 如 www.baidu.com
    root /home/react-test/build; # 指向打包后的目录

    location / {
        index index.html;
    }
}
```

保存并退出后，`nginx -s reload`，然后可以直接访问了！

> 本文参考视频整理，视频原地址：[这里](https://www.bilibili.com/video/BV1ck4y1B7Pw?t=95)
