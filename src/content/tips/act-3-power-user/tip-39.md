---
id: 39
title: "Subagents = isolated context"
act: 3
category: "power-user"
difficulty: "advanced"
tags: ["subagents", "context", "parallel"]
timestamp: "29:54"
description: "Subagents work in isolated contexts"
related: [38]
---

## 描述

Subagents 在隔离的上下文中工作，互不干扰。

## 为什么使用 Subagents

- **独立任务** - 并行处理不相关任务
- **隔离污染** - 避免上下文混乱
- **专业分工** - 不同 agent 专注不同领域
- **Token 效率** - 每个 agent 只加载需要的上下文

## 使用场景

```bash
# 场景 1：并行任务
"启动两个 agent：
1. 审查前端代码
2. 审查后端代码"

# 场景 2：独立研究
"用 agent 研究 React 19 的新特性"

# 场景 3：专业任务
"用 security-reviewer agent 审查认证代码"
```

## Subagent 类型

- `general-purpose` - 通用任务
- `code-reviewer` - 代码审查
- `security-reviewer` - 安全审查
- `test-runner` - 运行测试
- `planner` - 制定计划
- `architect` - 架构设计

## 另见

- [Tip 40: 避免指令过载](/tips/40)
