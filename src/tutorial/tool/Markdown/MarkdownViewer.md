---
title: 浏览器使用 Markdown Viewer 插件不会预览问题
category:
  - 软件/工具
  - 教程
  - 浏览器插件
tag:
  - Markdown
---

## 参考链接

[记一次浏览器打开markdown文件自动下载不会预览问题](https://www.cnblogs.com/jianzhan/p/16575984.html)

## 问题描述

根据插件文档描述，需要打开对文件的访问权限。

但配置后将文件拖入浏览器依旧自动下载。

- 插件

  ![插件配置](/MarkdownViewer/FileAccess.png)

- 浏览器

  ![浏览器配置](/MarkdownViewer/Chrome.png)

## 原因

插件中对 `Content Type` 的检测为：`text/markdown, text/x-markdown, text/plain`，但文件拖入浏览器时的 `Content Type` 为 `application/markdown`。

![ContentType](/MarkdownViewer/ContentType.png)

## 解决方法

注册表 `HKEY_CLASSES_ROOT\.md` 名为 `Content Type` 的 `字符串值` 设置为 `text/markdown`。

如果你的 `md` 打开是乱码，可以尝试将 `Content Type` 的 `字符串值` 设置为 `text/markdown;charset=utf-8`。

### PowerShell命令修改

- 获取当前注册表

```md
Get-ItemProperty -Path "Registry::HKEY_CLASSES_ROOT\.md"
```

- 设置注册表

```md
Set-ItemProperty -Path "Registry::HKEY_CLASSES_ROOT\.md" -Name "Content Type" -Value "text/markdown"
```
