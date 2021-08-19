# 获取仓库

通常有两种获取 Git 项目仓库的方式：

1. 本地目录初始化 Git 仓库
2. 从远程克隆一个 Git 仓库

### 本地目录初始化

命令：

```sh
git init
```

该命令将创建一个名为 .git 的子目录。

仓库创建后，文件修改还没有被跟踪。下一步就是跟踪文件（git add）并初始提交（git commit）：

```sh
git add .
git commit -m 'first commit'
```

### 克隆现有的仓库

拷贝一份已经存在的 Git 仓库，用到 `git clone` 命令：

```sh
git clone https://github.com/ruidoc/js-corepower.git ./my-catalog-name
```

后面跟两个参数：第一个是仓库URL，第二个是指定新的目录名。

Git 支持多种数据传输协议。 上面的例子使用的是 https:// 协议，也可以使用 git:// 协议或者使用 SSH 传输协议