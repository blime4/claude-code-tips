---
id: 27
title: "Fresh context beats bloated"
act: 2
category: "workflow"
difficulty: "beginner"
tags: ["context", "sessions", "workflow"]
timestamp: "19:14"
description: "Start a new session instead of continuing bloated ones"
related: [26, 28]
---

## 描述

当上下文变得臃肿时，启动新会话而不是继续。

## 信号：需要新会话

- 对话响应变慢
- Claude 遗忘之前的上下文
- token 使用 > 80%
- 切换到完全不相关的任务

## 优雅切换

```bash
# 保存当前状态
git commit -am "wip: session $(date)"

# 启动新会话
claude

# 简要说明背景
# 项目是 X，当前在处理 Y
```

## 传递关键上下文

新会话中快速说明：

```
# 最小上下文
项目：电商网站
当前：修复购物车 bug
技术栈：React + TypeScript
```

## 另见

- [Tip 28: 会话结束前持久化](/tips/28)
