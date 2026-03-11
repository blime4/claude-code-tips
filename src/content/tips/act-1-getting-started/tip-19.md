---
id: 19
title: "Git is your safety net"
act: 2
category: "workflow"
difficulty: "beginner"
tags: ["git", "safety", "version-control"]
timestamp: "14:19"
description: "Always commit before major Claude Code operations"
related: [20]
---

## 描述

在进行任何重要的 Claude Code 操作前，先提交代码到 Git。

## 为什么重要

Claude Code 会修改文件，Git 让你能：
- 随时回退到之前的状态
- 对比修改内容
- 安全地实验

## 最佳实践

```bash
# 工作流程
1. git commit -am "work in progress"
2. 让 Claude Code 做大的修改
3. 检查 git diff
4. 如有问题，git reset --hard
5. 如没问题，git commit -am "changes by claude"
```

## 提交习惯

- 功能开始前：`git commit -m "before: feature X"`
- 功能完成后：`git commit -m "after: feature X"`
- 每天结束前：`git commit -m "wip: $(date)"`
- Claude 修改后：`git commit -m "chore: changes by claude"`

## 另见

- [Tip 20: 添加 Critical Rules 部分](/tips/tip-20)
