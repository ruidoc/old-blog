# 直播流技术

直播流传输，不同于我们常见的 http 请求/响应传输，它是实时传输实时播放，并且也不是 http 中常见的 json 数据传输，而是二进制流数据传输，对应 Node.js 中的 `Stream` 和 `Buffer`。

### 常见直播协议

- **RTMP**: 底层基于 TCP，在浏览器端依赖 Flash。
- **HTTP-FLV**: 基于 HTTP 流式 IO 传输 FLV，依赖浏览器支持播放 FLV。
- **WebSocket-FLV**: 基于 WebSocket 传输 FLV，依赖浏览器支持播放 FLV。WebSocket 建立在 HTTP 之上，建立 WebSocket 连接前还要先建立 HTTP 连接。
- **HLS**: Http Live Streaming，苹果提出基于 HTTP 的流媒体传输协议。HTML5 可以直接打开播放。
- **RTP**: 基于 UDP，延迟 1 秒，浏览器不支持。

**性能与延迟对比：**
