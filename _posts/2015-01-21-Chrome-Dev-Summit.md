---
layout: post
title:  "Chrome Dev Summit总结"
description: "Chrome Dev Summit总结"
date:   2015-01-21 20:02:39
categories: FE
tags: [Frontend, Chrome, Google]
---

> 最近大致扫了一遍 Chrome Dev Summit 的 talk 们，并没有太多新东西，但 Service Work 和 Web Components 作为这个 Summit 的重点，也是将来很长一段时间 Web 的重点，Google 眼中的 Web 在原生客户端的路上越走越远。

[http://css-tricks.com/things-chrome-dev-summit-2014/](CSS-tricks 原文)

##manifest.json
每个单页应用都有一个 manifest.json，类似 Chrome 中的做法。
比起在head里塞进一堆 meta 标签，manifest 文件显然是更好的配置声明方式，这也是原生应用的做法。

##在head中设置页面背景 <meta name="theme-color" content="#db5945">
其实只是设置 Chrome 的 Tab 选择效果中的工具栏颜色，有些小题大做。
![theme-color](http://updates.html5rocks.com/assets/theme-color-ss-9950fd13a0c52b32b6bd580309d55a6b.png)
Chrome可显示高清favicon， `<link rel="icon" sizes="192x192" href="nice-highres.png">`

##页面间的动画

画面间的 loading
![draft](https://docs.google.com/document/d/17jg1RRL3RI969cLwbKBIcoGDsPwqaEdBxafGNYGwiY4/edit#heading=h.pcll678prpwu)

##两大重点：离线缓存，通知

- Service Worker，相当于在本地响应 Ajax 请求，达到自定义的离线效果。
- 完整的通知API，还有不依赖网络的本地通知。

## 达到60帧

### Paul Lewis 提出的一个技巧：
1. 用 getBoundingClientRect() 得到动画前后的尺寸
2. 运行动画

### 用 DevTools 控制CSS动画

## Web Animation API

统一三种动画方式：

- transition
- animation
- SVG animation

## Polymers

自称达到可用于产品的质量和效率
两大改进，效率提高，体积变小

