---
id: 33
title: "Four composability primitives"
act: 3
category: "power-user"
difficulty: "advanced"
tags: ["skills", "commands", "mcp", "subagents"]
timestamp: "25:15"
description: "Claude Code has four composability primitives"
related: [34]
---

## 描述

Claude Code 有四个可组合原语：Skills、Commands、MCPs、Subagents。

## 四大原语

| 原语 | 用途 | 复杂度 |
|------|------|--------|
| **Skills** | 可复用��作流 | 中 |
| **Commands** | 快速简写 | 低 |
| **MCPs** | 外部服务集成 | 高 |
| **Subagents** | 隔离上下文 | 高 |

## 组合示例

```bash
# 单一原语
/commit

# 组合使用
Plan Mode → brainstorming skill → Subagents → /commit command
```

## 选择原则

- **简单任务** → Commands
- **重复流程** → Skills
- **外部数据** → MCPs
- **独立任务** → Subagents

## 另见

- [Tip 34: Skills = 可复用工作流](/tips/34)
