---
id: 56
title: "使用 /export 导出对话"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["commands", "export", "documentation", "sharing"]
timestamp: "43:00"
description: "使用 /export 命令导出对话会话，用于文档、分享或归档"
related: [55]
---

## 描述

`/export` 命令将对话会话导出为文件或复制到剪贴板，支持多种格式。

## 使用方法

### 导出到文件

```bash
# 导出到 markdown 文件
/export session.md

# 导出到 HTML 文件（带样式）
/export session.html

# 导出到 JSON 文件（结构化数据）
/export session.json
```

### 导出到剪贴板

```bash
# 复制整个会话到剪贴板
/export clipboard

# 复制为特定格式
/export clipboard --format markdown
/export clipboard --format html
```

### 高级选项

```bash
# 指定导出格式
/export output.md --format markdown
/export output.html --format html
/export output.json --format json

# 只导出最近的 N 条消息
/export recent.md --last 20

# 导出特定范围
/export from-message-10-to-20.md
```

## 使用场景

### 1. 文档编写

```bash
# 完成功能开发后
/export feature-research.md

# 将深度调查结果用于文档
```

### 2. 工单和 PR

```bash
# 分析完成后
/export bug-analysis.md

# 粘贴到 Jira 工单或 GitHub PR
```

### 3. 团队交接

```bash
# 会话结束时
/export handoff.md

# 分享给团队成员
```

### 4. 知识归档

```bash
# 重要讨论或决策
/export decision-record.md

# 保存到知识库
```

## 导出格式对比

| 格式 | 用途 | 特点 |
|------|------|------|
| **Markdown** | 文档、Wiki | 纯文本，兼容性好 |
| **HTML** | 展示、分享 | 带样式，可直接浏览 |
| **JSON** | 程序处理 | 结构化数据，易于解析 |

## 导出内容

默认导出整个对话会话，包括：
- 用户消息
- Claude 响应
- 代码块
- 时间戳
- 工具调用记录

## 最佳实践

### 选择合适的格式

```bash
# 文档或笔记 → Markdown
/export docs/architecture.md

# 展示给他人 → HTML
/export demo/session.html

# 后续处理 → JSON
/export data/session.json
```

### 定期导出

```bash
# 重要会话结束
/export research/$(date +%Y%m%d).md

# 阶段性成果
/export milestones/feature-v1.md
```

### 命名规范

```bash
# 好的命名
/export 2026-03-12-auth-design.md
/export bugfix-123-token-expiry.md
/export research-sql-optimization.md

# 避免过于简单
/export session1.md  # 不清晰
/export chat.md       # 不知道是什么
```

## 快速参考

| 需求 | 命令 |
|------|------|
| 快速复制整个会话 | `/export clipboard` |
| 保存为文档 | `/export session.md` |
| 用于工单 | `/export bug-analysis.md` |
| 团队交接 | `/export handoff.md` |
| 归档重要决策 | `/export decision-$(date +%Y%m%d).md` |

## 另见

- [Tip 55: 使用 /copy 复制响应](/claude-code-tips/tips/55)
- [Tip 17: 会话生命周期管理](/claude-code-tips/tips/17)
