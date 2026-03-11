---
id: 14
title: "Let auto-compaction work"
act: 1
category: "workflow"
difficulty: "intermediate"
tags: ["context", "tokens", "optimization"]
timestamp: "10:13"
description: "Let Claude Code handle context compaction automatically"
related: [13]
---

## 描述

让 Claude Code 自动处理上下文压缩，不要手动 `/clear` 太频繁。

## 自动压缩机制

当上下文接近限制时，Claude Code 会：
1. 自动压缩旧消息
2. 保留重要上下文
3. 继续无缝对话

## 为什么不要频繁 /clear

- 压缩保留了重要信息
- `/clear` 会丢失所有上下文
- 自动压缩更智能

## 何时使用 /clear

- 切换到完全不同的任务
- 上下文已混乱
- 开始新的工作会话

## 最佳实践

```
# 好的做法：让自动压缩处理
# 自然地进行对话

# 偶尔检查
/context
# 如果压缩不够好，才考虑 /clear
```

## 另见

- [Tip 15: /model 切换模型](/tips/15)
