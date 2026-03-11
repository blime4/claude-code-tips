---
id: 41
title: "Run multiple instances"
act: 4
category: "advanced"
difficulty: "advanced"
tags: ["instances", "productivity", "workflow"]
timestamp: "32:08"
description: "Run multiple Claude Code instances simultaneously"
related: [42]
---

## 描述

同时运行多个 Claude Code 实例以提高效率。

## 使用场景

- **多任务并行** - 不同项目/任务
- **多模型** - 不同实例用不同模型
- **隔离上下文** - 不同工作流
- **对比测试** - A/B 测试不同方案

## 启动多实例

```bash
# Terminal 1: 项目 A
cd ~/project-a
claude

# Terminal 2: 项目 B
cd ~/project-b
claude

# Terminal 3: 文档编写
cd ~/docs
claude
```

## 配置独立模型

```bash
# Terminal 1: Haiku (快速任务)
/model haiku

# Terminal 2: Sonnet (日常开发)
/model sonnet

# Terminal 3: Opus (复杂架构)
/model opus
```

## 注意事项

- 每个实例独立的 token 使用
- 会话不会互相干扰
- 可以复制粘贴跨实例

## 另见

- [Tip 42: iTerm 分屏](/tips/tip-42)
