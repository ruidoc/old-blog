# 提交历史

查看提交记录用 `git log` 命令。

默认情况下，执行 git log 不加任何参数，返回如下：

```sh
$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date: Mon Mar 17 21:52:11 2008 -0700

    changed the version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date: Sat Mar 15 16:40:33 2008 -0700

    removed unnecessary test
```

这个命令会列出每个提交的 commitId，作者，电子邮件、提交时间以及提交说明。

git log 有许多选项可以帮助提高检索效率。下面我们介绍几个最常用的选项。

### -p

-p 或 --patch ，它会显示每次提交所引入的差异（按 补丁 的格式输出）
