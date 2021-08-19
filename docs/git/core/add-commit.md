# 追踪文件

每当完成一部分编码，想要记录下来时，就将它提交到到仓库。

工作目录下的每一个文件都不外乎这两种状态：**已跟踪** 或 **未跟踪**。

已跟踪，是通过 `git add` 命令加入暂存区的文件。它们的状态可能是未修改，已修改。未加入暂存区就是未跟踪。

### 检查文件状态

使用 `git status` 命令查看哪些文件处于什么状态。

刚克隆的仓库执行此命令，会看到如下状态：

```sh
$ git status
On branch master  # 当前分支
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```

这里显示的信息有：

- 当前分支是哪个
- 当前本地分支与远程分支是否偏离
- 跟踪与未跟踪的文件状态

如果只是想看文件的状态，可以用简短模式：

```sh
$ git status -s
```

显示结果是这样：

```sh
A  lib/git.rb       # Add
M  lib/simplegit.rb # Modify
?? LICENSE.txt      # Untracked
```

### 跟踪文件

使用 `git add` 命令开始跟踪一个文件。

git add 命令使用文件或目录作为参数；如果参数是目录，则递归跟踪该目录下的所有文件

参数为 `.` 是跟踪所有已修改文件。

git add 是个多功能命令：

- 可以跟踪新文件
- 已跟踪的文件放到暂存区
- 合并时把有冲突的文件标记为已解决状态

### 查看已暂存和未暂存的修改

查看 **已跟踪，未暂存** 的文件更新了哪些部分，直接输入：

```sh
git diff
```

查看 **已暂存，未提交** 的文件更新了哪些部分，输入：

```sh
git diff --staged
```

### 跳过使用暂存区域

提交文件，需要先暂存再提交，要走两步：

1. `git add .`
2. `git commit -m 'my desc'`

每次提交文件走两步，略显繁琐。其实这两个命令可以合成一个：

```sh
git commit -a -m 'my desc'
```

### 移除文件

从 Git 中移除某个文件，也就是从暂存区域移除，解除跟踪。

两种情况。

第一种：我们想把文件同时从 Git 仓库和项目目录中删除：

```sh
git rm -f test.md
```

第二种：我们只想把文件同时从 Git 仓库中删除，在项目目录中保存。

最常见的情况是，忘记添加 .gitignore 文件，不小心把 node_modules 目录添加到暂存区了。此时应该这样做：

```sh
git rm --cached node_modules
```

### 移动文件

Git 并不显式跟踪文件移动操作。当要重命名某个文件时，可以这么做：

```sh
git mv file_from file_to
```

其实，运行 git mv 就相当于运行了下面三条命令：

```sh
mv file_from file_to
git rm file_from
git add file_to
```

当然，在 vscode 编辑器中，直接重命名文件也会达到这个效果。

**注意**：当重命名只改了一个字母的大小写时，必须用 `git mv` 命令才能达到效果。

