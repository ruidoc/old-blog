# 误操作撤回

开发中经常会遇到一种情况，git 提交之后，发现修改错误，要恢复到提交前的状态，怎么办？

不要慌，`git reset` 帮你解决。

因为每一次提交都会产生一个 commit，根据 commit 可以恢复到之前的任何一个版本。

### 恢复命令

如果刚发现提交错误，直接恢复上一步就行：

```sh
git reset --soft HEAD^
```

这样就能撤回提交，并且还原工作区代码。

HEAD^ 的意思是上一个版本，还可以这样写：

- **HEAD^**：回到上一个版本
- **HEAD~n**：回到前 n 个版本
- **\<commitId>**：回到某次提交

如果需要恢复到之前的某个 commit，首先通过 `git log` 命令查看提交记录，可以看到这些内容：

- commitId
- 提交人
- 提交时间
- 提交时书写的描述

书写描述可以帮助我们找到正确的 commitId。

commitId 是一个又长又臭的 hash 值，它是这样的：

```sh
cc7b5be253b511f508e52c5d770ec7b9c4005f3c
```

使用它不需要全部复制，取前 `7` 位就可以。比如要恢复到上面这个 commit，可以这样用：

```sh
git reset --hard cc7b5be
```

### 三个参数

上面只说了如何恢复到某次提交，事实上在执行 reset 之前，还要考虑两种情况：

1. 工作区有代码（未执行 add）
2. 暂存区有代码（未执行 commit）

三个参数的作用，就是决定在撤销之后是否保留工作区和暂存区的代码。

#### --hard

撤销 commit，撤销 add，删除工作区改动代码，

这个参数慎用，会直接恢复到某次的 commit 状态，同时删除工作区和暂存区的代码。

#### --mixed 

默认参数。撤销 commit，撤销 add，还原工作区改动代码，

#### --soft

撤销 commit，不撤销 add，还原工作区改动代码。

### 撤销 reset？

在执行 reset 过程中，可能因为操作失误，恢复到了更早的一个 commit。

什么意思呢？比如有 4 个commit `a，b，c，d`，按照时间从早到晚的顺序是：

```js
a > b > c > d
```

当前所在的 commit 是 d，我想恢复到 c。

正确操作的话，恢复到 c 后的 commit 记录是这样的：

```js
a > b > c
```

但是我操作失误，直接恢复到了 b，此时的记录成了这样：

```js
a > b
```

因为恢复到了更早的 b，**此时 commit 记录已经没有了 c**，那我想回到 c，应该怎么办？

#### git reflog

上面的情况，用 `git reflog` 解决。

git reflog 可以查看近期的操作记录。尽管 `git log` 查不到 c，但是 c 存在过，是有记录的，所以 git reflog 能查到 c 的 commitId。

找到 commitid，再通过 git reset，就能恢复到 c。

因此，git reflog 被称为万能后悔药。

