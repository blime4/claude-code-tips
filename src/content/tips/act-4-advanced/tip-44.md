---
id: 44
title: "Git worktrees for isolation"
act: 4
category: "advanced"
difficulty: "advanced"
tags: ["git", "worktrees", "isolation"]
timestamp: "35:05"
description: "Use git worktrees for isolated development"
related: [43]
---

## 描述

使用 Git worktrees 为不同功能创建隔离的开发环境。

## 什么是 Worktree

Git worktree 让你同时检出多个分支到不同目录：

```bash
main-repo/           # main 分支
├── feature-auth/    # feature/auth 分支
├── feature-ui/      # feature/ui 分支
└── bugfix-123/      # bugfix/123 分支
```

## 创建 Worktree

```bash
# 主仓库
cd ~/projects/my-app

# 为功能创建 worktree
git worktree add ../my-app-auth feature/auth

# 为 bug 修复创建 worktree
git worktree add ../my-app-fix-123 bugfix/issue-123
```

## 在每个 Worktree 中运行 Claude

```bash
# Terminal 1: 主分支
cd ~/projects/my-app
claude

# Terminal 2: 功能开发
cd ~/projects/my-app-auth
claude

# Terminal 3: Bug 修复
cd ~/projects/my-app-fix-123
claude
```

## 优势

- 完全隔离的工作区
- 快速上下文切换
- 并行开发多个功能
- 每个功能独立的 Claude 会话

## 清理 Worktree

```bash
# 完成后删除
git worktree remove ../my-app-auth
```

## 另见

- [Tip 45: /chrome 连接浏览器](/tips/45)
