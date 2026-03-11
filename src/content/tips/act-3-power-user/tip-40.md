---
id: 40
title: "Avoid instruction overload"
act: 3
category: "power-user"
difficulty: "intermediate"
tags: ["claudemd", "config", "simplicity"]
timestamp: "31:15"
description: "Keep CLAUDE.md concise to avoid instruction overload"
related: [39]
---

## 描述

避免指令过载，保持 `CLAUDE.md` 简洁。

## 指令过载的信号

- Claude 忽略某些规则
- 响应变得不一致
- 需要重复指令
- Claude 问了很多确认问题

## 解决方案

```markdown
# 不好：太多规则
## 前端规则
1. 使用 TypeScript
2. 使用 Prettier
3. 使用 ESLint
4. 组件要小
5. 要有测试
6. 要有文档
... 50 条规则

## 后端规则
... 又 50 条规则

## 测试规则
... 再 50 条规则
```

```markdown
# 好：引用技能
## Workflow
- 新功能：使用 /plan → /tdd
- Bug 修复：使用 /debug
- 代码审查：使用 /review

## Standards
- 引用团队 coding standards 文档
```

## 最佳实践

1. **核心规则放 CLAUDE.md**
2. **流程用 Skills/Commands**
3. **详细文档外部引用**

## 另见

- [ACT 4: Advanced](#)
