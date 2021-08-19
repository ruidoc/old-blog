# 分支新建与合并

Git 初始化之后，默认只有一个 master 分支，那么什么时候会创建新分呢？

这个看业务场景。我常用的分支原则是：

1. 每个项目成员一个分支
2. 每个环境一个分支
3. 开发新功能时创建一个分支

### 新建分支

比如此刻在 master 分支，要解决一个问题，此时新建一个分支：

```sh
$ git checkout -b iss53
```

它是下面两条命令的简写：

```sh
$ git branch iss53
$ git checkout iss53
```

iss53 分支是基于当前 master 分支创建的，未修改前，他两的版本保持一致。

### 合并分支

在 iss53 分支上修改文件后，提交：

```sh
$ vim index.html
$ git commit -a -m 'iss53 solution'
```
此时分支是这样的：

![basic-branching-3](../image/basic-branching-3.png)

提交之后，我们再切换回 master 分支。

> 注意：切换分支的时候，Git 会重置工作目录，所以记得提交

在 master 分支上，将刚才在 iss53 分支上修改的内容合并过来，这么做：

```sh
$ git merge iss53
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```

注意，这里有个关键词 **快进（fast-forward）**，非常重要。

如上图，因为 C3 是 C2 的直接后继，中间没有其他提交，所以合并时只会将 `HEAD` 指针前移一位，不会产生一个新的提交。

### 冲突合并

在上一步的基础上，分别再对 master 分支和 iss53 分支进行修改，修改后的分支如下：

![basic-branching-6](../image/basic-branching-6.png)

注意：C2 后的分支开始出现了分叉。
