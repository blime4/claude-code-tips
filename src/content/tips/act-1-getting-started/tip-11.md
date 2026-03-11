---
id: 11
title: "Add context to screenshots"
act: 1
category: "setup"
difficulty: "intermediate"
tags: ["screenshot", "context", "prompt"]
timestamp: "8:44"
description: "Always add context when sending screenshots"
related: [10]
---

## 描述

发送截图时，务必添加文字说明来补充上下文。

## 好的做法

```
[拖拽截图]

上面是我们新组件的 UI 设计，请实现它。
颜色使用品牌色 #D97757，圆角 8px。
```

## 不好的做法

```
[拖拽截图]
# 没有任何说明
```

## 为什么重要

- 截图缺少执行上下文
- Claude 不知道你想做什么
- 文字说明可以澄清意图

## 模板

```
[截图]

上下文：[这是什么的截图]
任务：[你想让 Claude 做什么]
要求：[任何特殊要求]
```

## 另见

- [Essential Commands](#)
