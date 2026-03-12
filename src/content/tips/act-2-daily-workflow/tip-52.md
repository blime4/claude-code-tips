---
id: 52
title: "使用 CI MCP 工具集"
act: 2
category: "workflow"
difficulty: "intermediate"
tags: ["mcp", "bugzilla", "jenkins", "ci"]
timestamp: "45:00"
description: "使用公司内部的 Bugzilla 和 Jenkins MCP 工具提高工作效率"
related: [27, 28]
---

## 描述

软件设施团队提供了 CI MCP (Model Context Protocol) 工具集，让 Claude Code 能够直接访问公司内部的 Bugzilla 和 Jenkins 系统，实现更高效的日常工作流程。

## 为什么这样做

通过 MCP 工具集，你可以：
- 直接在 Claude Code 中查询 Bug 详情和列表，无需切换浏览器
- 通过自然语言创建和管理 Jenkins 构建任务
- 集成 Bug 跟踪和 CI/CD 流程到 AI 辅助开发中

## 安装配置

### Bugzilla 模块

```bash
# 全局安装（推荐）
claude mcp add --transport http ci-mcp-bugzilla http://ext-cimcp.denglin.com/mcp/bug

# 项目级安装
claude mcp add --transport http ci-mcp-bugzilla http://ext-cimcp.denglin.com/mcp/bug --scope project
```

### Jenkins 模块（需要 API Token）

```bash
# 全局安装（推荐）
claude mcp add --transport http ci-mcp-jenkins http://ext-cimcp.denglin.com/mcp/jenkins --header "X-API-Key:YOUR_TOKEN"

# 项目级安装
claude mcp add --transport http ci-mcp-jenkins http://ext-cimcp.denglin.com/mcp/jenkins --header "X-API-Key:YOUR_TOKEN" --scope project
```

> **注意**: 请将 `YOUR_TOKEN` 替换为你的 API Token。API Token 创建步骤请参考公司内部文档。

## 使用示例

### Bugzilla 查询

**查询 Bug 详情**:
```
帮我查询 bugID 为 17192 的 bug详情
```

**查询 Bug 列表**:
```
查询 niannian.chen 的 bug 列表
```

**组合查询**:
```
查询 niannian.chen 分配的所有未关闭的高优先级 bug
```

### Jenkins 管理

**获取 Job 详情**:
```
帮我获取 Jenkins Job "DLI_PROJECT/DLI_SW/dli_patch_sdk_release_pipe" 的详情
```

**创建构建任务**:
```
帮我创建一个 Jenkins 构建任务，Job 名称为 "temp-test-build"
```

**查询构建状态**:
```
查询记录 ID 为 12345 的构建任务详情
```

## 快捷命令

将 `ci-mcp-doc/commands` 目录复制到以下位置后可使用快捷命令：

- **全局**: `~/.claude/commands`
- **项目级**: 项目下的 `.claude/commands`

可用命令：
- `/bug-detail <Bug ID>` - 获取 Bug 详情
- `/bug-list <assignee>` - 获取 assignee 的 Bug 列表

## Dify 集成

CI MCP 工具也支持在 Dify 中使用：

**Bugzilla 服务端点**: `http://ext-cimcp.denglin.com/mcp/bug`
**Jenkins 服务端点**: `http://ext-cimcp.denglin.com/mcp/no_auth/jenkins`

## 另见

- [Tip 27: Fresh context beats bloated](/claude-code-tips/tips/27)
- [Tip 28: 会话结束前持久化](/claude-code-tips/tips/28)
- [最佳实践](/claude-code-tips/best-practices)
