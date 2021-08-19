# phpstorm 格式化配置

> 说明：本节快捷键都是指 macOS 快捷键

### 保存时格式化

phpstorm 默认的格式化代码快捷键是 `command + option + L`。

我们的目标是：当保存，也就是 `command + S` 时自动格式化代码。

然而，`command + S` 这个快捷键默认被设置为保存全部文件，所以我们要分几步操作：

**第一步**：将保存全部文件快捷键由 `command + S` 改为 `command + option + S`：

点击右上角设置图标 --> Keymap --> Configure keymap

在弹出框的搜索框内，输入搜索 `save all`，会检索出一条快捷键。然后双击，选择 `add keyboard shortcut`，弹出快捷键添加。键盘点击 `command + option + S`，录入快捷键，保存。

现在添加了一个快捷键，再双击，选择移除 `command + S`，保存即可。

**第二步**：将格式化快捷键由 `command + option + L` 改为 `command + S`：

还是上一步的搜索框内，搜索 `format code`，检索出一条快捷键。

依照第一步的步骤，替换快捷键即可。

### 配置格式化规则

Preference --> Editor --> Code Style -> PHP

格式化配置主要分为七大块：

1. 缩进（Tabs and Indents）

配置 tab 缩进还是空格缩进，一个 tab 几个空格等。

2. 空格（Spaces）

配置各种情况下的空格规则。

3. 表达式规则（Spaces）

这个部分的配置比较关键，包含了函数，类，数组，for，if 等常用表达式的规则。

4. 换行（Blank Lines）

配置换行的规则。

5. 注释（PHPDoc）

php 的注释格式规范

6. 代码转换（Code Conversion）

某些字符的大小写转换（if，null，boolean）

7. 代码生成（Code Generation）

