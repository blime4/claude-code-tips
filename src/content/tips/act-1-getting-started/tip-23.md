---
id: 23
title: "Commit CLAUDE.md to git"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["claudemd", "git", "version-control"]
timestamp: "16:40"
description: "Always commit CLAUDE.md to version control"
related: [22]
---

## 描述

务必将 `CLAUDE.md` 提交到 Git 版本控制。

## 为什么重要

- 团队共享项目规范
- 追踪配置变更历史
- 新成员快速上手
- CI/CD 可访问配置

## Git 忽略规则

确保 `.gitignore` **不忽略** `CLAUDE.md`：

```gitignore
# 不添加这行
# CLAUDE.md

# 但可以忽略本地配置
.claude/local.json
```

## 提交信息

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with project rules"
```

## 最佳实践

- 项目初始化时立即创建并提交
- 有意义修改时及时提交
- 在 PR 中审查 CLAUDE.md 变更

## 另见

- [Tip 24: 临时环境用 dangerously-skip](/tips/tip-24)
