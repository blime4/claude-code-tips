---
id: 34
title: "Skills = recurring workflows"
act: 3
category: "power-user"
difficulty: "advanced"
tags: ["skills", "workflows", "automation"]
timestamp: "25:42"
description: "Skills encapsulate reusable workflows"
related: [33, 35]
---

## 描述

Skills 封装可复用的工作流程。

## 什么是 Skill

Skill 是预定义的工作流程，包含：
- 触发条件
- 执行步骤
- 验证标准
- 最佳实践

## 内置 Skills

```bash
# TDD 工作流
/tdd

# 代码审查
/review

# 调试流程
/debug

# 安全审查
/security
```

## 创建自定义 Skill

```markdown
# .claude/skills/my-workflow.md

name: feature-implementation
description: 我团队的标准功能开发流程
trigger: when user says "implement feature"

steps:
  1. Run /plan to create implementation plan
  2. Get user approval
  3. Use /tdd for TDD workflow
  4. Run /review after implementation
  5. Create PR with /pr
```

## 另见

- [Tip 35: Commands = 快捷简写](/tips/tip-35)
