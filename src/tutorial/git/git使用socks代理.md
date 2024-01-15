---
title: git使用socks代理
category:
  - 软件/工具
  - 教程
tag:
  - git
---

## 参考链接

[git 命令 使用socks代理ip教程](https://baijiahao.baidu.com/s?id=1774286211377108594)

## 配置 Git 全局代理设置

```md
git config --global http.proxy socks5://proxy.example.com:1080

git config --global https.proxy socks5://proxy.example.com:1080
```

如果代理服务器需要用户名和密码认证，您可以在命令中加入用户名和密码

```md
git config --global http.proxy socks5://username:password@proxy.example.com:1080

git config --global https.proxy socks5://username:password@proxy.example.com:1080
```

## 验证设置

```md
git config --global --get http.proxy

git config --global --get https.proxy
```

## 取消代理设置

```md
git config --global --unset http.proxy

git config --global --unset https.proxy
```
