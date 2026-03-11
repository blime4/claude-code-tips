---
id: 2
title: "Run /init immediately"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["init", "setup", "claudemd"]
timestamp: "1:56"
description: "Run /init command immediately when starting a new project"
related: [1, 3]
---

## 描述

在新项目中首次启动 Claude Code 时，立即运行 `/init` 命令。

## 为什么这样做

`/init` 命令会：
- 扫描项目结构
- 创建初始的 `CLAUDE.md` 配置文件
- 了解项目的技术栈和依赖
- 建立项目上下文

## 示例

```bash
cd my-new-project
claude
# 在对话中输入
/init
```

## 另见

- [Tip 3: CLAUDE.md 的层级结构](/tips/tip-03)
