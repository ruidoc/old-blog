# 前端必备环境

作为一个前端开发工程师，拿到一台崭新的 mac 电脑，要怎么装环境，这里记录一下。

### Node.js

首先要装的肯定是 Node.js 了。

打开官网（英文官网，不是中文官网），选择第一个按钮的 node 版本（LTS 版本），这是最新最稳定的，直接下载安装即可。

官网地址：[这里](https://nodejs.org/en/)

### git

git 自然也是必备的。不过 git 不需要你手动去装。在终端下执行一下 `git -v`，系统会检测到当前没有 git 命令，询问你是否安装 xcode 命令行工具。

xcode 命令行工具是一个开发必备的命令工具包，包含 git，直接确定安装就好。可能稍微慢一些，耐心等待。

### homebrew

homebrew 是 Mac 系统最好用的包管理工具。homebrew 与 Node.js 中的 npm 作用类似。

安装也简单，打开官网，首页就有安装命令，将命令粘贴到终端运行即可。

官网地址：[这里](https://brew.sh/)

**注意**：最近的情况，安装命令运行失败，报错信息:

> Failed to connect to raw.githubusercontent.com port 443: Connection refused

这是域名被污染的问题。别急，两个步骤解决：

1. 首先，浏览器打开 [这里](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)，能看到页面返回的内容。

2. 新建 `brew.sh` 文件，将上一步的页面内容全部粘贴进去。

3. 在终端执行 `bash brew.sh`，直接安装即可。

### yarn

前端项目常用 yarn 来代替 npm。安装好 homebrew 后，可直接安装 yarn：

```sh
$ brew install yarn
```

### zsh

Mac 默认的 shell 是 Bash，我们改用更强大的 `zsh`。

首先查看是否安装 zsh：

```sh
$ cat /etc/shells;
```

如果返回列表里有 `/bin/zsh`，说明已安装。

然后再查看当前 shell：

```sh
$ echo $SHELL;
```

如果不是 `/bin/zsh`，则切换一下：

```sh
$ chsh -s /bin/zsh
```

切换 zsh 不是最终目的。最终目的是使用这个更强大的工具：[oh-my-zsh](https://ohmyz.sh)

立即安装：

```sh
$ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

如果也报 `Connection refused` 的错误，在浏览器打开上面命令行中的 URL，按照上面 homebrew 的解决方案操作即可。

安装好后，你会发现终端中的 git 显示更友好了！

### iTerm2

Mac 自带终端黑乎乎的难看死了。最为程序员的艺术家们，自然要想办法美化一下。

这个美化的集大成，就是 [iTerm2](https://iterm2.com/)

打开上面官网，直接下载安装。

下载下来后，将下载好的包直接拖到应用程序里，然后打开。

下一步，就是你的外观配置了：

