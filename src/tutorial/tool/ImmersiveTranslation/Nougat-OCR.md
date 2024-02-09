---
title: 沉浸式翻译使用 Nougat-OCR 本地推理
category:
  - 软件/工具
  - 教程
tag:
  - 翻译
---

## 教程

[Nougat-OCR + 沉浸式翻译](https://immersivetranslate.com/docs/pdf/nougat/)

## 细节处理

### Python 安装

使用 Anaconda 安装，下载地址：https://www.anaconda.com/download/

[教程](#教程) 中提到

>(Pyhton 3.12.0 有兼容性问题不建议下载，建议下载 3.12.0 以下版本)

创建虚拟环境时选择 `3.11.7`

![Python 安装](/ImmersiveTranslate/PythonInstall.png)

### 查看 CUDA Toolkit 是否安装及版本

在命令行中输入如下指令：

```md
nvcc -V
```

![CUDA Toolkit 查看](/ImmersiveTranslate/CudaToolkitVer.png)
