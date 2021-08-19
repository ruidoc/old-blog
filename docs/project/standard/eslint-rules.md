# eslint 规则

eslint 的代码检查规则，定义在 `.eslintrc` 配置文件的 rules 对象下。

比如，定义规则，只能使用双引号：

```json
{
  "rules": {
    "quotes": ["error", "double"]
  }
}
```

quotes 就是引号规则，值是一个数组。

数组第一项是错误级别，是以下 3 个值之一：

- "off" or 0 - 关闭规则
- "warn" or 1 - 警告级别规则
- "error" or 2 - 错误级别规则

数组第二项才是真正的规则，具体规则参考 [这里](https://eslint.bootcss.com/docs/rules/)

这里的规则，打绿钩的是已配置的。需要自定义直接写在 rules 里即可。
