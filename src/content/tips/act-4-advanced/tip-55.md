---
id: 55
title: "使用 /copy 复制响应"
act: 4
category: "advanced"
difficulty: "beginner"
tags: ["commands", "clipboard", "productivity"]
timestamp: "42:30"
description: "使用 /copy 命令快速复制最后一次响应到剪贴板"
related: [56]
---

## 描述

`/copy` 命令将 Claude 的最后一次响应以 Markdown 格式复制到剪贴板。

## 使用方法

```bash
# Claude 响应后
/copy
```

## 使用场景

### 快��分享代码

```bash
你: 帮我写一个用户认证函数

[Claude 生成代码...]

你: /copy

# 现在可以粘贴到其他应用
```

### 保存解释说明

```bash
你: 解释一下这个算法

[Claude 详细解释...]

你: /copy

# 粘贴到文档或 Wiki
```

### 导出分析结果

```bash
你: 分析这个性能问题

[Claude 分析完成...]

你: /copy

# 粘贴到工单或 PR 描述
```

## 复制的内容

`/copy` 复制的是**最后一次响应的完整内容**，包括：
- 代码块
- 文本说明
- 格式（Markdown）

## 注意事项

- 只复制最后一次响应
- 格式为 Markdown
- 自动复制到系统剪贴板
- 不影响对话继续进行

## 快速参考

```
想要快速分享 Claude 的回答？ → /copy
需要粘贴代码到其他应用？   → /copy
保存重要解释？              → /copy
```

## 另见

- [Tip 56: 使用 /export 导出对话](/claude-code-tips/tips/56)
