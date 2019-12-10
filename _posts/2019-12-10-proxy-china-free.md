---
layout: post
title:  "一个翻墙回国代理的正确使用方式"
description: "一般 Chrome 扩展的修改方式，和一种适可而止的反抗"
date:   2019-12-10 14:02:39
categories: Reading
tags: [free, extension, chrome, cn]
---

这次的需求是修改一个 Chrome 扩展的代码，以绕过账户验证。

1. 在 Chrome 商店安装 用来下载 extension 压缩包的 extension：

[Chrome extension source viewer](https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin)

2. 使用 `Chrome extension source viewer` 下载需要修改的扩展，这里以翻墙回国代理红豆为例：

[红豆](https://chrome.google.com/webstore/detail/%E7%BA%A2%E8%B1%86/djablhagmfpheajnlpmpanebakihiama)

3. 解压 zip 文件，大致浏览代码后，发现没有做模块级别的混淆压缩。首先想到的是搜索一些账户相关的关键词，例如 `expired`, `account`。在`background.js`和`commons.js`中找到了一些相关的函数。非常幸运地马上找到了目标。

```js
function serviceDuration() { var e = v.get(),
        t = (e && e.serviceDue ? e.serviceDue : 0) - d.now() + b.get(); return 0 < t ? t : 0 }
```

将函数的返回值改成常数就完成了目标。再次观察函数可知，如果代码做了全局级别的混淆压缩，对于这类事件判断逻辑，仍然可以搜索 `time.now()`, `time > 0` 等关键词。

4. 保存代码，用Chrome载入这个未打包的 extension。