# Git 跟踪文件修改

本地仓库创建之后，工作目录下的文件就可以被 Git 跟踪了。

全局来看，工作目录下的每一个文件都不外乎两种状态：`已跟踪` 或 `未跟踪`。

已跟踪是被 Git 纳入版本控制的文件，又包含三种状态：

- 未修改
- 已修改
- 已暂存

未跟踪的文件是没有被 `git add` 命令执行过的文件，不受版本控制，与 Git 无关。

这四种状态的关系图如下：

![lifecycle](../image/lifecycle.png)

### 四种状态解析

在工作目录下新建一个 `my.txt` 的文件，然后执行命令：

```sh
$ git status
```

`git status` 用于查看工作目录的文件状态，结果如下：

```sh
On branch master

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	my.txt
```

提示很明确，因为是新建的文件，所以是**未跟踪**（untracked）的状态，需要用 `git add` 将文件加入到暂存区，使其包含在 Git 版本控制系统中。

我们来添加一下，然后再看状态：

```sh
$ git add my.txt
$ git status
```

此时状态变成了**已暂存**（staged），输出如下：

```sh
On branch master

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   my.txt
```
