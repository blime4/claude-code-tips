---
id: 9
title: "Double Escape on empty = rewind"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["keyboard", "shortcuts", "rewind"]
timestamp: "7:59"
description: "Double Escape on empty input rewinds the conversation"
related: [8]
---

## 描述

当输入框为空时，双击 `Escape` 会回退对话历史。

## 工作原理

```
对话历史:
1. 你: Hello
2. Claude: Hi!
3. 你: Help me
4. Claude: Sure! [当前状态]

# 输入框空，双击 Escape
# 回退到步骤 2
```

## 使用场景

- 想要回到之前的状态
- 重新开始某个话题
- 撤销几轮对话

## 注意

- 回退后可以继续对话
- 被回退的内容不会丢失，可以 forward 恢复

## 另见

- [Tip 10: 截图并拖拽](/tips/tip-10)
