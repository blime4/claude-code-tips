---
id: 36
title: "Never create commands manually"
act: 3
category: "power-user"
difficulty: "beginner"
tags: ["commands", "automation", "skills"]
timestamp: "27:32"
description: "Let Claude create commands for you"
related: [35]
---

## 描述

让 Claude 自动创建命令，而不是手动编写。

## 自动创建

```bash
# 告诉 Claude 你想要什么
"创建一个快捷命令来部署到 staging"

# Claude 会自动创建命令文件
# 并测试是否工作
```

## 为什么自动创建

- Claude 知道正确的格式
- 自动处理转义和特殊字符
- 验证命令是否有效
- 添加文档和说明

## 示例对话

```
你: 我想有一个命令快速重启开发服务器

Claude: 好的，我来创建 /restart-dev 命令
[创建文件 ~/.claude/commands/restart-dev.json]

Claude: 命令已创建！使用 /restart-dev 即可
```

## 另见

- [Tip 37: MCPs = 外部服务文档](/tips/37)
