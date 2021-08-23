# 其他杂项

记录一些常用的 git 小妙招。

### 仓库迁移

准备仓库迁移的时候，要考虑一个问题：是否需要保留原有仓库的 branch，commit，tag，issues 等？

如果不需要，直接把最新的代码推到新仓库即可；如果需要，则要按照下面的步骤迁移：

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

这样迁移后，就仓库的 branch，commit 等信息都会保留。

### 大小写不敏感

git 默认对字母大小写不敏感。

比如，将文件名 `Test` 修改成 `test`，git 不会记录变更。也就是说，如果你想把这个修改推送到远程仓库，是推不上去的，因为 git 认为没有修改。

怎么办呢？解决方案也简单：

```sh
git config core.ignorecase false
```

然后 git 就会跟踪大小写变更。

不过这种方式有个问题：虽然是跟踪了变更，但变更内容是新增 `test` 文件。这样的结果是推送后远程仓库同时有 `Test` 和 `test` 两个文件，而本地只有 `test` 一个文件，这会造成莫名的异常。

我常用的解决方式，分两步：

- 第一步：修改 `test` 为 `test_temp`，然后创建一个提交，推送。
- 第二步：再修改 `test_temp` 为 `test`，创建一个提交，推送。

第一步的修改实际是：删除 `Test` 和 `test`，新增 `test_temp`；第二步再把名字改回来。通过新增两个提交，解决这个问题。

### 提交规范

提交规范是指 git commit 时填写的描述信息，要遵循一定到规范，不能乱写。

为了直观的看出 commit 的更新内容，一般加一些固定前缀，如 `fix:`，`feat:`，

这里提供一个 npm 工具用于快捷添加前缀：

1. 全局安装

```sh
npm install -g commitizen cz-conventional-changelog
```

2. 创建 `~/.czrc` 文件，写入如下内容：

```js
{ "path": "cz-conventional-changelog" }
```

3. 用 `git cz` 命令来代替 `git commit` 命令
