---
id: 42
title: "iTerm split panes"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["iterm", "productivity", "setup"]
timestamp: "33:12"
description: "Use iTerm split panes for better multi-instance management"
related: [41]
---

## 描述

使用 iTerm 分屏功能更好地管理多个 Claude Code 实例。

## 快捷键

```
Cmd + D     # 垂直分屏
Cmd + Shift + D  # 水平分屏
Cmd + ]     # 切换到下一个面板
Cmd + [     # 切换到上一个面板
Cmd + Opt + 方向键  # 调整面板大小
```

## 推荐布局

```
┌─────────────┬─────────────┐
│  项目 A     │  项目 B     │
│  (Sonnet)   │  (Haiku)    │
├─────────────┴─────────────┤
│     文档编写 (Opus)        │
└───────────────────────────┘
```

## 保存布局

1. 设置好你的布局
2. `Window > Save Window Arrangement`
3. 以后快速恢复

## 非 iTerm 用户

- **Terminal.app**: 支持分屏
- **VS Code**: 集成终端
- **tmux**: 终端复用器

## 另见

- [Tip 43: 启用通知](/tips/tip-43)
