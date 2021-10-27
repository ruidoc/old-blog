# Fetch API

`fetch()` 是 XMLHttpRequest 的升级版，用于在 JS 中发送 HTTP 请求。

fetch() 的功能与 XMLHttpRequest 基本相同，但有三个主要的差异：

- 使用 Promise，不使用回调函数
- 采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象）
- 通过数据流（Stream 对象）处理数据，可以分块读取，尤其适用直播；Ajax 不支持数据流，只能获取完毕后一次性返回

###
