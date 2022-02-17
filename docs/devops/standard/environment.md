# 环境规范

介绍一下开发过程中符合标准的软件环境。

常用的一共四个环境：

**pro 环境**：生产环境，面向外部用户的环境，连接上互联网即可访问的正式环境。

**pre 环境**：灰度环境，外部用户可以访问，但是服务器配置相对低，其它和生产一样。

**test 环境**：测试环境，外部用户无法访问，专门给测试人员使用的，版本相对稳定。

**dev 环境**：开发环境，外部用户无法访问，开发人员使用，版本变动很大。

### 环境与分支规范

正常情况下，一个环境对应一个 git 分支。

**develop 分支**：对应 dev 环境。

**staging 分支**：对应 test 环境。

**preview 分支**：对应 pre 环境。

**release 分支**：对应 pro 环境。