# 使用别名

如果你平时会频繁使用 Git 命令的话，那么这一节介绍一个可以大大提高效率的小技巧——别名。

给常用的 checkout 命令设置别名。

```sh
$ git config --global alias.cp cherry-pick
```

那么，此时这两个命令等价：

```sh
$ git cherry-pick 5dr765h
$ git co dev
```

除此之外，还可以对一串命令进行别名：

```sh
$ git config --global alias.pudev 'pull --rebase origin develop'
```

