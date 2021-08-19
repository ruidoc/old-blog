# 其他杂项

### 仓库迁移

第一步，克隆旧的裸仓库：

```sh
git clone --bare [old-repo-url] dir
cd dir
```

第二步，设置新仓库地址并推送：

```sh
git remote set-url origin [new-repo-url]
git push --mirror
```

### 大小写不敏感

git 默认对字母大小写不敏感。

比如，将文件名中的字母 `a` 修改成 `A`，git 不会记录变更。也就是说，如果你想把这个修改推送到远程仓库，是推不上去的，因为 git 认为没有修改。

怎么办呢？解决方案也超简单：

```sh
git config core.ignorecase false
```

### 提交规范

全局安装

1. 下载

```sh
npm install -g commitizen cz-conventional-changelog
```

2. 创建 `~/.czrc` 文件，写入如下内容：

```js
{ "path": "cz-conventional-changelog" }
```

3. 用 `git cz` 命令来代替 `git commit` 命令了
