---
id: 28
title: "Persist before ending sessions"
act: 2
category: "workflow"
difficulty: "beginner"
tags: ["git", "sessions", "workflow"]
timestamp: "20:01"
description: "Always commit work before ending a session"
related: [27]
---

## 描述

结束会话前，务必提交所有工作到 Git。

## 会话结束检查清单

```bash
# 1. 查看修改
git status

# 2. 提交代码
git add .
git commit -m "feat: implement user authentication"

# 3. 检查是否有未保存的工作
git diff --staged

# 4. 记录会话笔记（可选）
echo "$(date): Implemented auth" >> session-notes.md
git add session-notes.md
git commit -m "docs: add session notes"
```

## 为什么要持久化

- 意外关闭不丢失工作
- 可以安全地开始新会话
- 保留工作历史
- 便于团队协作

## 习惯养成

```bash
# 绑定到退出快捷键
# 或设置会话结束提醒
```

## 另见

- [Tip 29: 懒加载上下文](/tips/tip-29)
