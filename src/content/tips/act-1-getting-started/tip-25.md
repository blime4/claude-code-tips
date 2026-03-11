---
id: 25
title: "Combine skip with allowlists"
act: 1
category: "setup"
difficulty: "advanced"
tags: ["permissions", "security", "configuration"]
timestamp: "17:46"
description: "Combine dangerously-skip with allowlists for safer automation"
related: [24]
---

## 描述

结合 `dangerously-skip-permissions` 与白名单，实现更安全的自动化。

## 白名单配置

```json
{
  "dangerouslySkipPermissions": {
    "allowedTools": ["Read", "Grep", "Glob"],
    "allowedPatterns": ["*.md", "src/**/*.ts"],
    "blockedPatterns": ["*.env", "*secret*"]
  }
}
```

## 配置说明

- `allowedTools`: 允许的工具
- `allowedPatterns`: 允许的文件模式
- `blockedPatterns`: 禁止的文件模式（优先级更高）

## 层级安全

```
全局配置（settings.json）
    ↓
项目配置（CLAUDE.md）
    ↓
运行时决策
```

## 最佳实践

```json
{
  // 开发环境：宽松配置
  "dangerouslySkipPermissions": {
    "allowedTools": ["*"],
    "allowedPatterns": ["*"]
  },

  // 生产环境：严格配置
  "dangerouslySkipPermissions": {
    "allowedTools": ["Read", "Grep"],
    "allowedPatterns": ["*.md", "docs/*"]
  }
}
```

## 另见

- [ACT 2: Daily Workflow](#)
