---
id: 16
title: "/resume recovers sessions"
act: 1
category: "workflow"
difficulty: "beginner"
tags: ["commands", "sessions", "recovery"]
timestamp: "12:23"
description: "Use /resume to recover previous sessions"
related: [15]
---

## 描述

使用 `/resume` 命令恢复之前的会话状态。

## 使用方法

```bash
/resume
# 或指定会话ID
/resume <session-id>
```

## 使用场景

- 意外关闭了 Claude Code
- 系统崩溃后恢复
- 在不同设备间继续
- 查看历史会话

## 工作原理

```
会话保存在: ~/.claude/sessions/

恢复时:
- 恢复对话历史
- 恢复上下文
- 恢复项目状态
```

## 注意

- 会话有保留期限
- 文件修改已保存，不会丢失
- 只恢复对话上下文

## 另见

- [Tip 17: /mcp 显示 MCP 状态](/tips/tip-17)
