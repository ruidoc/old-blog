# 分支简介

先来了解一下分支的原理。

假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件：

```sh
a.js b.js c.js
```

第一步：暂存文件。

```sh
$ git add a.js b.js c.js
```

暂存操作大概有3个关键步骤：

1. 为每一个文件计算校验和（使用 SHA-1 哈希算法）
2. 每个文件生成 blob 对象，并指向对应的校验和
3. 将所有校验和加入暂存区等待提交

> 校验和，应该就是一个哈希字符串

第二步：提交文件。

```sh
$ git commit -m 'The initial commit of my project'
```

提交操作，大概有2个关键步骤：

1. 将上一步保存在暂存区的三个 blob 对象保存为树对象。
2. 创建一个提交对象，指向这个树对象。

现在，Git 仓库中有五个对象：三个 blob 对象（文件快照）、一个树对象、一个提交对象（指向树对象指针和提交信息）:

![commit-and-tree](../image/commit-and-tree.png)

### 分支创建

分支创建，实际上只是创建了一个新的指针。

创建一个 develop 分支：

```sh
$ git branch develop
```

这会在当前的提交对象上创建一个指针：

![two-branches](../image/two-branches.png)

看到这个图，你可能会有个疑问：**两个分支指向同一个提交，我怎么知道当前在哪个分支呢？**

也很简单，它有一个名为 `HEAD` 的特殊指针，指向哪个分支，当前就在哪个分支。

![head-to-master](../image/head-to-master.png)

一个命令查看分支指向情况：

```sh
$ git log --oneline --decorate
```

### 分支切换

使用 git checkout 命令切换分支。现在切换到 develop 分支去：

```sh
git checkout develop
```

这样 `HEAD` 就指向 develop 分支了。

### HEAD

HEAD 永远指向当前所在的分支。

当前分支每提交一次，HEAD 随着提交操作自动向前移动。

在 testing 分支新提交一次，如图：

![advance-testing](../image/advance-testing.png)

注意：此时由于 testing 分支比 master 多了一次提交，因此 **领先** master 分支一个提交。

### 分叉

接下来，切换到 master 分支，再修改文件并提交：

```sh
$ git checkout master
..... ## 修改文件
$ git commit -a -m 'made other changes'
```

此时的分支情况变成了这样：

![advance-master](../image/advance-master.png)

**注意**：这里有个关键点，就是分支产生了**分叉**。

多人协作中，这种情况非常普遍。因为基于同一个提交在不同分支做了修改，就会产生分叉。

查看分叉历史：

```sh
git log --oneline --decorate --graph --all
```

它会输出提交历史和分叉情况，便于查看分支的创建和合并历史，非常有用。