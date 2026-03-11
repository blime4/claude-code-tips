---
id: 43
title: "Enable notifications"
act: 4
category: "advanced"
difficulty: "beginner"
tags: ["notifications", "productivity", "settings"]
timestamp: "34:10"
description: "Enable notifications for long-running tasks"
related: [42]
---

## 描述

为长时间运行的任务启用通知。

## 配置方法

在 `~/.claude/settings.json`：

```json
{
  "notifications": {
    "enabled": true,
    "onComplete": true,
    "onError": true,
    "sound": true
  }
}
```

## 使用场景

- 长时间构建
- 大型重构
- 测试运行
- Agent 执行

## 工作流程

```bash
# 1. 启动任务
"运行完整测试套件"

# 2. 切换到其他工作
# 3. 收到通知后返回
```

## 通知类型

- ✅ 任务完成
- ❌ 任务失败
- 🔔 需要 user input
- 💡 有建议

## 另见

- [Tip 44: Git worktrees 实现隔离](/tips/44)
