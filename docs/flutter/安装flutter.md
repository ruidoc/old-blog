# 安装 flutter

开发 flutter 的第一步，自然是安装环境。

下载地址：[这里](https://flutter.dev/docs/get-started/install)

选择要下载的平台，以 Mac 为例，会下载下来一个大约 1G 的 SDK，解压后是一个名为 flutter 的文件夹。

现在，首先把这个文件夹挪到 `/usr/local/lib` 这个目录下。

挪完后，配置下环境变量。

假设你的 shell 是 zsh，那么配置文件就是 `~/.zshrc`。编辑这个文件，再后面加一行：

```sh
export PATH="$PATH:/usr/local/lib/flutter/bin"
```

完成后，重载配置：

```sh
$ source ~/.zshrc
```

现在 flutter 命令就可以用了。检查 flutter 环境情况：

```sh
$ flutter doctor
```

这个命令可以查看环境是否有缺失，根据提示安装缺失的部分就可以。