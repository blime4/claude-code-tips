---
id: 7
title: "Escape interrupts"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["keyboard", "shortcuts", "interrupt"]
timestamp: "6:40"
description: "Press Escape to interrupt Claude's current action"
related: [6, 8]
---

## 描述

按 `Escape` 键可以中断 Claude 当前正在执行的操作。

## 使用场景

- Claude 正在生成你不想要的内容
- 意识到需要修改你的请求
- 想要停止长时间的思考/操作

## 工作原理

```
你: "帮我重构整个项目..."
# 意识到这太大了
你: <ESC>
# Claude 立即停止，等待新指令
```

## 注意

- Escape 只能中断正在进行的操作
- 已完成的文件修改不会被撤销
- 需要手动恢复被修改的文件

## 另见

- [Tip 8: 双 Escape 清空输入](/tips/8)
