---
title: 沉浸式翻译使用自建DeepL：DeepLX 翻译服务
category:
  - 软件/工具
  - 教程
tag:
  - DeepL
  - 翻译
---

## 教程

[自建 DeepL API](https://immersivetranslate.com/docs/services/deepL/#%E8%87%AA%E5%BB%BA-deepl-api)

## 安装 DeepLX

Github地址：https://github.com/OwO-Network/DeepLX

windows 安装：

64 位电脑下载：`deeplx_windows_amd64.exe`

![DeepLX 下载](/ImmersiveTranslate/DeepLX_download.png)

## 使用

双击 `deeplx_windows_amd64.exe`

![DeepLX 运行](/ImmersiveTranslate/DeepLX_run.png)

- 测试

  使用 Postman 测试

  POST:

  url: localhost:1188/translate

  body:

  ```json
  {
    "text": "Hello World",
    "source_lang": "EN",
    "target_lang": "ZH"
  }
  ```

  ![DeepLX 测试](/ImmersiveTranslate/DeepLX_test.png)

## 沉浸式翻译设置

- `开发者设置` 中，打开 `开启 Beta 测试特性`

  ![沉浸式翻译开启 Beta 测试特性](/ImmersiveTranslate/ImmersiveTranslateBeta.png)

- 基本设置，翻译服务选择 `DeepLX`

  ![沉浸式翻译 DeepLX 翻译服务](/ImmersiveTranslate/ImmersiveTranslateDeepLX.png)

## 性能测试

使用 `沉浸式翻译` 翻译整个网页，控制台打印日志如图。

会在短时间内发送大量请求，每条请求的应道 `300-500ms` 区间，整个页面翻译消耗时间比较长，且容易导致 `DeepL API` 屏蔽 IP。

![DeepLX 性能](/ImmersiveTranslate/DeepLX_bench.png)
