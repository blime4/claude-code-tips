---
id: 17
title: "/mcp shows MCP status"
act: 1
category: "workflow"
difficulty: "advanced"
tags: ["commands", "mcp", "integrations"]
timestamp: "12:49"
description: "Use /mcp to check MCP server connections"
related: [18]
---

## 描述

使用 `/mcp` 命令查看 MCP (Model Context Protocol) 服务器状态。

## 使用方法

```bash
/mcp
```

## 输出示例

```
MCP Servers Status:
✓ filesystem (local)
✓ git (local)
✓ github (connected)
✗ database (disconnected)
```

## 什么是 MCP

MCP 让 Claude Code 连接外部服务：
- 文件系统操作
- Git 仓库访问
- API 集成
- 自定义工具

## 使用场景

- 检查集成状态
- 调试 MCP 连接
- 查看可用工具

## 另见

- [Tip 18: /help 显示所有命令](/tips/18)
