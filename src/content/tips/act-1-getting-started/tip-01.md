---
id: 1
title: "Run from root directory"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["cli", "directory", "basics"]
timestamp: "1:18"
description: "Always run Claude Code from your project root directory"
related: [2]
---

## 描述

始终在项目的根目录下运行 Claude Code。这确保 Claude 能够完整地了解你的项目结构。

## 为什么这样做

Claude Code 需要看到整个项目才能：
- 正确导航文件
- 理解项目结构
- 做出明智的修改决策

## 示例

```bash
# 好的做法
cd /path/to/my-project
claude

# 避免
claude  # 从某个子目录运行
```

## 另见

- [Tip 2: 立即运行 /init](/tips/tip-02)
