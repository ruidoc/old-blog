本文从前端工程，团队协作，生产部署的角度，介绍架构人员需要掌握的 git 实践能力。

## 大纲预览

本文介绍的内容包括以下方面：

- 分支管理策略
- commit 规范与提交验证
- 各种误操作的撤回方案
- Tag 与生产环境
- 永久杜绝 443 Timeout
- hook 实现部署？
- 终极应用: CI/CD

## 分支管理策略

git 分支强大的同时也非常灵活，如果没有一个好的分支管理策略，团队人员随意合并推送，就会造成分支混乱，各种覆盖，冲突，丢失等问题。

目前最流行的分支管理策略，也称工作流（Workflow），主要包含三种：

- Git Flow
- GitHub Flow
- GitLab Flow

我司前端团队有自己的一套分支管理策略。我们将分支分为 4 个大类：

- dev-\*
- develop
- staging
- release

`dev-*` 是一组开发分支的统称，包括个人分支，模块分支，修复分支等，团队开发人员在这组分支上进行开发。

开发前，先通过 `merge` 合并 develop 分支的最新代码；开发完成后，必须通过 `cherry-pick` 合并回 `develop` 分支。

`develop` 是一个单独分支，对应开发环境，保留最新的完整的开发代码。它只接受 `cherry-pick` 的合并，不允许使用 merge。

`staging` 分支对应测试环境。当 develop 分支有更新并且准备发布测试时，staging 要通过 `rebase` 合并 develop 分支，然后将最新代码发布到测试服务器，供测试人员测试。

测试发现问题后，再走 **dev-\* -> develop -> staging** 的流程，直到测试通过。

测试通过后，`release` 分支通过 `rebase` 合并 staging 分支，然后将最新代码发布到生产服务器。

总结下合并规则：

- develop -> (merge) -> dev-\*
- dev-\* -> (cherry-pick) -> develop
- develop -> (rebase) -> staging
- staging -> (rebase) -> release

## commit 规范与提交验证

commit 规范是指 git commit 时填写的描述信息，要遵循一定到规范，不能乱写。

为了直观的看出 commit 的更新内容，一般加一些固定前缀，如 `fix:`，`feat:`，
