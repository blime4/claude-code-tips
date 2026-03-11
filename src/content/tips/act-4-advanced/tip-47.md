---
id: 47
title: "Hooks intercept actions"
act: 4
category: "advanced"
difficulty: "advanced"
tags: ["hooks", "automation", "events"]
timestamp: "38:22"
description: "Hooks intercept and modify Claude Code actions"
related: [48]
---

## 描述

Hooks 可以拦截和修改 Claude Code 的操作。

## Hook 类型

| Hook | 触发时机 | 用途 |
|------|----------|------|
| PreToolUse | 工具使用前 | 验证、修改参数 |
| PostToolUse | 工具使用后 | 格式化、检查 |
| Stop | 会话结束 | 最终验证 |

## 配置示例

```json
// ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": {
      "Edit": "npx prettier --write $FILE"
    },
    "PreToolUse": {
      "Bash": "echo 'About to run: $COMMAND'"
    }
  }
}
```

## 使用场景

- **自动格式化** - Edit 后运行 Prettier
- **安全检查** - Bash 前确认命令
- **类型检查** - Write 后运行 mypy
- **Git 状态** - 停止前检查未提交的修改

## 文件级配置

在项目的 `.claude/hooks.json`：

```json
{
  "PostToolUse": {
    "Write": "npm run type-check"
  }
}
```

## 另见

- [Tip 48: PostToolUse 自动格式化](/tips/48)
