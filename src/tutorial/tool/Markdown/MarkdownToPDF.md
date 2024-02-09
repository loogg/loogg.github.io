---
title: Markdown 导出带标签的 PDF 文件
category:
  - 软件/工具
  - 教程
tag:
  - Markdown
  - VS Code
  - PDF
---

## 参考链接

[使用 wkhtmltopdf 将 Markdown 文件转为带有标签的 PDF 文件](https://www.jianshu.com/p/722b56b4c5c7)

## 导出为 HTML

使用 `VS Code` 插件 `Markdown PDF` 将文件导出为 `HTML` 文件。

![Markdown PDF](/MarkdownToPDF/MarkdownPDF.png)

## 使用 `wkhtmltopdf` 转换为 PDF

- 下载 `wkhtmltopdf`

  下载地址为：[wkhtmltopdf](https://link.jianshu.com/?t=https://wkhtmltopdf.org/downloads.html)

- 设置环境变量以便全局使用，以 `Windows` 为例

  ![环境变量](/MarkdownToPDF/Environment.png)

- **进入 `HTML` 文件所在目录**，使用命令

  以 `Windows` 为例：

  ```md
  .\wkhtmltopdf.exe index.html 编码规范.pdf
  ```
