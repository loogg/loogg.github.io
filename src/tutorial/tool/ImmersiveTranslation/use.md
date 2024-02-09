---
title: 沉浸式翻译使用
category:
  - 软件/工具
  - 教程
  - 浏览器插件
tag:
  - 翻译
---

## 教程

[免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展](https://immersivetranslate.com/docs/)

## 百度搜索翻译输入框内容

输入框增加设置中的 `选择一个输入结束的触发字符` 配置项无效，需要通过 `快捷键` 实现，如默认快捷键：`Alt+C`。

## 使用 DeepL 翻译服务

在某宝上可以购买 `API KEY`，分为两种：`DeepLX` 和 `DeepL API 密钥`

- DeepLX

  官方教程：[自建 DeepL API](https://immersivetranslate.com/docs/services/deepL/#%E8%87%AA%E5%BB%BA-deepl-api)

  **注意**：`It is not recommended, because the immersive-translate will send many requests in a short time, which will cause the DeepL API to block your IP.`

  **不建议这样做，因为 `沉浸式翻译` 会在短时间内发送大量请求，这会导致 `DeepL API` 封锁您的 `IP`。**

  实践：[沉浸式翻译使用自建DeepL：DeepLX 翻译服务](./DeepLX.md)

- DeepL API 密钥

  某宝卖的是 `Free API`：每月提供 50 万免费字符额度

## Nougat-OCR

官方教程：[Nougat-OCR + 沉浸式翻译](https://immersivetranslate.com/docs/pdf/nougat/)

:::tip
沉浸式网页翻译配合 Nougat，完美解决沉浸式的 PDF 双语对照翻译工具无法正确处理表格和数学公式的场景
:::

参考：[沉浸式翻译使用 Nougat-OCR 本地推理](./Nougat-OCR.md)

## 使用体验

如同它的介绍一样：**免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展**。

虽然有提供 `Pro 会员`，但完全是用爱发电，免费版本的许多翻译服务已经完全够用了，`OpenAI`、`DeepL` 等翻译服务只是翻译的更人性化一点，对这方面有需求的可以 `订阅 Pro` 或 自行获取 `API Key`
