---
id: 13
title: "/context shows token usage"
act: 1
category: "workflow"
difficulty: "beginner"
tags: ["commands", "tokens", "monitoring"]
timestamp: "9:41"
description: "Use /context to see current token usage"
related: [12, 14]
---

## 描述

使用 `/context` 命令查看当前对话的 token 使用情况。

## 使用方法

```bash
/context
```

## 输出示例

```
Session Context Usage:
- Messages: 45,231 / 200,000 tokens
- Remaining: 154,769 tokens
- Last messages: ~2,000 tokens
```

## 使用场景

- 检查是否接近上下文限制
- 估算还能进行多少对话
- 决定是否需要 `/clear`

## 最佳实践

- 剩余 < 20% 时考虑 `/clear`
- 重要任务前先检查
- 大量代码操作后检查

## 另见

- [Tip 14: 让自动压缩工作](/tips/14)
