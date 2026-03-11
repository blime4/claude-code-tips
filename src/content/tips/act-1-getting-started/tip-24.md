---
id: 24
title: "dangerously-skip for throwaway envs"
act: 1
category: "setup"
difficulty: "advanced"
tags: ["permissions", "automation", "throwaway"]
timestamp: "17:08"
description: "Use dangerously-skip-permissions for temporary/throwaway environments"
related: [23, 25]
---

## 描述

在临时/一次性环境中使用 `dangerously-skip-permissions` 跳过确认。

## 使用场景

- 短期实验项目
- CI/CD 自动化脚本
- 演示/教学环境
- 已信任的本地开发环境

## 配置方法

在 `~/.claude/settings.json`：

```json
{
  "dangerouslySkipPermissions": true
}
```

## ⚠️ 警告

**仅用于以下情况：**
- 可丢弃的环境
- 完全信任的项目
- 已有 Git 保护

**不要用于：**
- 生产代码
- 重要项目
- 不熟悉的代码库

## 更好的方式

使用白名单代替全局跳过：

```json
{
  "dangerouslySkipPermissions": {
    "allowedTools": ["Read", "Write", "Bash"],
    "allowedPaths": ["/tmp/experiments/*"]
  }
}
```

## 另见

- [Tip 25: 结合 skip 与白名单](/tips/25)
