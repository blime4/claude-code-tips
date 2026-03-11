---
id: 31
title: "Consider Opus for complex work"
act: 2
category: "workflow"
difficulty: "intermediate"
tags: ["models", "optimization", "performance"]
timestamp: "23:04"
description: "Use Opus for complex architectural decisions"
related: [30]
---

## 描述

对于复杂的架构决策，使用 Opus 模型。

## 何时使用 Opus

- **架构设计**
  - 系统架构
  - 数据库设计
  - API 设计

- **复杂重构**
  - 跨模块重构
  - 性能优化
  - 代码重组织

- **深度分析**
  - Bug 调试
  - 代码审查
  - 安全分析

## 模型选择决策树

```
任务类型？
├─ 简单查询 → Haiku
├─ 日常开发 → Sonnet（默认）
└─ 复杂决策 → Opus
```

## 成本权衡

```
Opus 成本 = Sonnet × ~6
但复杂任务用 Opus 可能更快（更少迭代）
```

## 使用方法

```bash
/model opus
# 或
/model opus <your complex request>
```

## 另见

- [Tip 32: 阅读 thinking 块](/tips/tip-32)
