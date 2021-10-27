# FFmpeg 视频处理

FFmpeg 是视频处理最常用的开源软件，它提供了最全面的不同格式的视频/音频编码和转码的命令。

官方文档在 [这里](https://www.ffmpeg.org/)

最近在做摄像头监控直播，需要做视频格式转换处理，核心就是用 FFmpeg 实现，这里记录一下视频处理相关的知识。

## 视频基础知识

使用 FFmpeg 之前要了解视频处理的基本概念，否则各种命令行参数看不懂。

### 容器

视频文件本身就是一个容器（container），里面包括了**视频**和**音频**，也可能有字幕等其他内容。

常见的**容器格式**有：

- MP4
- MKV
- WebM
- AVI

一般视频文件的后缀就代表了对应的格式。如 `test-video.avi`，那么就表示容器格式为 AVI 的视频。

查看 FFmpeg 支持的容器：

```sh
$ ffmpeg -formats
```

### 编码格式

视频和音频都需要经过编码，才能保存成文件，编码有不同的编码格式（codec）。

常用的视频编码格式如下：

- H.262
- H.264
- H.265

常用的音频编码格式如下：

- MP3
- AAC

查看 FFmpeg 支持的编码格式，包括视频编码和音频编码：

```sh
$ ffmpeg -codecs
```

### 编码器

编码器（encoders）是实现某种编码格式的编码/解码工具。

FFmpeg 内置的主流视频编码器：

- libx264：最流行的开源 H.264 编码器
- NVENC：基于 NVIDIA GPU 的 H.264 编码器
- libx265：开源的 HEVC 编码器
- libvpx：谷歌的 VP8 和 VP9 编码器
- libaom：AV1 编码器

也有音频编码器：

- libfdk-aac
- aac

查看 FFmpeg 已安装的编码器：

```sh
$ ffmpeg -encoders
```

## FFmpeg 命令解析

FFmpeg 的命令行参数非常多，可以分成五个部分：

```sh
$ ffmpeg {1} {2} -i {3} {4} {5}
```

五个部分的参数依次如下：

1. 全局参数
2. 输入文件参数
3. 输入文件
4. 输出文件参数
5. 输出文件

举个例子：

```sh
$ ffmpeg \
-y \ # 全局参数
-c:a libfdk_aac -c:v libx264 \ # 输入文件参数
-i input.mp4 \ # 输入文件
-c:v libvpx-vp9 -c:a libvorbis \ # 输出文件参数
output.webm # 输出文件
```

如果不指明编码格式，FFmpeg 会自己判断输入文件的编码：

```sh
$ ffmpeg -i input.avi output.mp4
```

### 常用命令行参数

FFmpeg 常用的命令行参数如下：

- -c：指定编码器
- -c copy：直接复制，不经过重新编码（这样比较快）
- -c:v：指定视频编码器
- -c:a：指定音频编码器
- -i：指定输入文件
- -an：去除音频流
- -vn： 去除视频流
- -preset：指定输出的视频质量
- -y：不经过确认，输出时直接覆盖同名文件
