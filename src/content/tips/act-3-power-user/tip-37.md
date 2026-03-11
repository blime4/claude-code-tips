---
id: 37
title: "MCPs = external service docs"
act: 3
category: "power-user"
difficulty: "advanced"
tags: ["mcp", "integrations", "apis"]
timestamp: "28:05"
description: "MCPs connect Claude Code to external services"
related: [36, 38]
---

## 描述

MCP (Model Context Protocol) 让 Claude Code 连接外部服务。

## MCP 用途

- **API 集成** - GitHub, Jira, Slack
- **数据库** - PostgreSQL, MongoDB
- **文件系统** - S3, Google Drive
- **自定义工具** - 团队内部服务

## 示例 MCP

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"]
    }
  }
}
```

## 使用场景

```bash
# Claude 可以直接操作 GitHub
"创建一个 PR 合并 feature 分支"

# 查询数据库
"查询最近一周的用户注册数"

# 读取 Google Sheets
"分析这个表格的销售数据"
```

## 另见

- [Tip 38: 让 Claude 安装 MCP](/tips/tip-38)
