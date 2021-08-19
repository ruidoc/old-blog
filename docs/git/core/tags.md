# 打标签

Git 可以给仓库历史中的某一个提交打上标签，以示重要。

比如，开源仓库中，`v1.0`，`v2.0` 就是标签，用来标示版本。

### 列出标签

只需要输入 `git tag`

```sh
$ git tag
v1.0
v2.0
```

也可以模糊筛选：

```sh
$ git tag -l "v1.8.5*"
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
```

### 创建标签

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）

轻量标签：

```sh
$ git tag v1.4-l
```

附注标签，相比于轻量标签，是可以被校验的。此外还多了一个标签信息。

```sh
$ git tag -a v1.4-l -m "my version 1.4"
```

使用 git show 命令查看标签信息和对应的提交信息：

```sh
$ git show v1.4
tag v1.4
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.4

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

### 后期打标签

你也可以对过去的提交打标签。

```sh
$ git log --pretty=oneline
15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'
a6b4c97498bd301d84096da251c98a07c7723e65 beginning write support
0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
```

现在要对 `a6b4c97` 这个提交打标签：

```sh
$ git tag -a v1.2 9fceb02
```

### 共享标签

默认情况下，git push 命令不会推送标签，需要手动推送：

```sh
$ git push origin v1.5
```

如果标签比较多，一次性推送所有标签，可以这么操作：

```sh
$ git push origin --tags
```

标签推送后，当其他人拉取仓库，就能获得这些标签。

### 删除标签

本地删除：

```sh
$ git tag -d v1.4-lw
```

这个操作只会删除本地，删除远程还要 push 一下。

```sh
$ git push origin --delete <tagname>
```

### 检出标签

如果想检出标签，可以使用 git checkout 命令

检出标签和检出分支的作用基本一致。

#### git version

打标签更规范的方式，是使用 git version 命令。

第一次发包必须指定版本号。后续每一次更新包时，版本号也必须更新。

版本号遵循[语义化版本](https://semver.org/lang/zh-CN/)的规则，包括 3 个部分：

- major：不兼容的 API 修改
- minor：向下兼容的功能性新增
- patch：向下兼容的问题修正

这 3 部分组成字符 `major.minor.patch`，如 `0.1.1`，这就是符合规范的版本号。

除了手动修改版本号，也可以通过 `npm version` 命令管理版本。

```sh
// 假设当前版本号 v0.1.1

$ npm version patch
v0.1.2

$ npm version minor
v0.2.0

$ npm version major
v1.0.0
```

`npm version` 除了快捷管理版本外，还会在 git 中生成一个 `commit` 和 `tag`，便于查找和管理。

如果不需要，可以传入 `--no-git-tag-version` 来阻止。