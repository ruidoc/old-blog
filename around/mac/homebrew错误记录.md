## 错误记录

### homebrew-core is a shallow clone

Mac 更新完系统后，使用 homebrew 就报错：

```sh
Error:
  homebrew-core is a shallow clone.
  homebrew-cask is a shallow clone.
```

解决方案：删除后更新

```sh
cd /usr/local/Homebrew/Library/Taps/homebrew
rm -rf homebrew-core
rm -rf homebrew-cask
```

