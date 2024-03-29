# 远程仓库

远程仓库是指托管在互联网中的你的项目的版本库。

你可以有好几个远程仓库。管理远程仓库包括添加远程仓库、移除远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 

### 查看远程仓库

一行命令，可以查看到远程仓库名称和 URL 地址。

```sh
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
```

### 添加远程仓库

除了克隆外，也可以自己手动添加远程仓库。

```sh
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

### 抓取与拉取

从仓库中获取数据，可以执行：

```sh
$ git fetch <remote>
```

抓取完成后，你将会拥有远程仓库中所有分支的最新引用，可以随时合并或查看。

注意：`git fetch` 命令只会将数据下载到你的本地仓库——它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作目录。

这样会有些繁琐。还有一个更高效的方法是 `git pull`：

```sh
git pull = git fetch + git merge
```

git pull 通常会从远程服务器上抓取数据并自动尝试合并到当前所在的分支。

### 推送到远程仓库

当你完成一部分功能，必须将其推送到远程服务器，供他人协作。

```sh
$ git push origin master
```

### 查看某个远程仓库

可以使用 `git remote show <remote>` 命令：

```sh
$ git remote show origin
```

### 重命名与移除

将 origin 重命名为 main：

```sh
$ git remote rename origin main
```

删除 main 仓库：

```sh
$ git remote remove main
```

