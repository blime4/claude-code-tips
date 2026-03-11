---
id: 15
title: "/model switches models"
act: 1
category: "workflow"
difficulty: "intermediate"
tags: ["commands", "models", "optimization"]
timestamp: "11:42"
description: "Use /model to switch between Claude models"
related: [14, 16]
---

## 描述

使用 `/model` 命令在不同 Claude 模型之间切换。

## 使用方法

```bash
/model sonnet    # 默认，最佳编程模型
/model opus      # 最强推理能力
/model haiku     # 最快，轻量任务
```

## 模型选择指南

| 模型 | 用途 | 特点 |
|------|------|------|
| Haiku | 轻量任务 | 快，便宜，90% 能力 |
| Sonnet | 日常开发 | 平衡，推荐默认 |
| Opus | 复杂任务 | 最强推理，较慢 |

## 使用场景

```bash
# 简单查询
/model haiku
> 这个函数是做什么的？

# 日常开发
/model sonnet  # 默认
> 帮我实现用户认证

# 复杂架构决策
/model opus
> 设计一个支持千万用户的系统架构
```

## 另见

- [Tip 16: /resume 恢复会话](/tips/16)
