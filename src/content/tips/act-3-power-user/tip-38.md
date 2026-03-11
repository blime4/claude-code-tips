---
id: 38
title: "Ask Claude to install MCPs"
act: 3
category: "power-user"
difficulty: "intermediate"
tags: ["mcp", "installation", "automation"]
timestamp: "28:52"
description: "Let Claude handle MCP installation and configuration"
related: [37]
---

## 描述

让 Claude 帮你安装和配置 MCP 服务器。

## 安装方法

```bash
# 告诉 Claude 你需要什么
"帮我设置 GitHub MCP 服务器"

# Claude 会：
# 1. 安装 MCP 包
# 2. 配置 settings.json
# 3. 设置认证
# 4. 测试连接
```

## 示例对话

```
你: 我想连接公司的 Postgres 数据库

Claude: 我需要一些信息：
1. 数据库地址？
2. 端口？
3. 数据库名？
4. 认证方式？

[你提供信息后]

Claude: 好的，我来配置 postgres MCP
[安装和配置...]

Claude: 配置完成！现在我可以查询数据库了。
```

## 优势

- Claude 知道所有 MCP 服务器
- 自动处理依赖
- 正确配置认证
- 验证连接

## 另见

- [Tip 39: Subagents = 隔离上下文](/tips/39)
