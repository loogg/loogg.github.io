---
title: C/C++代码格式化
category:
  - 笔记
tag:
  - C/C++
  - VS Code
---

## 设置方式

打开 `文件->首选项->设置`, 搜索 `C_Cpp.clang_format_style`

![C_Cpp.clang_format_style](/VSCode/C_Cpp.clang_format_style.png)

## Linux 内核排版样式

```json
{ BasedOnStyle: LLVM, IndentWidth: 4, ColumnLimit: 0, UseTab: Never, SortIncludes: false, BreakBeforeBraces: Linux, AllowShortIfStatementsOnASingleLine: false, IndentCaseLabels: false, AlignConsecutiveMacros: true }
```

## Google排版方式

```json
{BasedOnStyle: Google,UseTab: Never, IndentWidth: 4, TabWidth: 4, SortIncludes: false, AlignConsecutiveMacros : true,ColumnLimit: 100}
```
