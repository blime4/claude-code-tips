---
id: 35
title: "Commands = quick shorthand"
act: 3
category: "power-user"
difficulty: "beginner"
tags: ["commands", "shortcuts", "productivity"]
timestamp: "26:50"
description: "Commands are quick aliases for common actions"
related: [34, 36]
---

## 描述

Commands 是常用操作的快捷别名。

## 常用 Commands

```bash
/commit      # 提交代码
/pr          # 创建 PR
/review      # 代码审查
/test        # 运行测试
/deploy      # 部署
```

## 自定义 Command

```json
// ~/.claude/commands/deploy-staging.json
{
  "command": "deploy-staging",
  "description": "部署到 staging 环境",
  "action": "bash",
  "template": "npm run build && npm run deploy:staging"
}
```

## Command vs Skill

| 特性 | Command | Skill |
|------|---------|-------|
| 复杂度 | 简单 | 复杂 |
| 步骤 | 单步 | 多步 |
| 交互 | 少 | 多 |
| 用途 | 快捷方式 | 完整流程 |

## 另见

- [Tip 36: 永远不要手动创建命令](/tips/tip-36)
