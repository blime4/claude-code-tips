---
id: 21
title: "Ask Claude to update rules"
act: 1
category: "setup"
difficulty: "intermediate"
tags: ["claudemd", "config", "collaboration"]
timestamp: "15:24"
description: "Ask Claude to help update CLAUDE.md rules"
related: [20, 22]
---

## 描述

可以让 Claude 帮你更新 `CLAUDE.md` 配置文件。

## 使用方法

```
请帮我看一下 CLAUDE.md，有没有需要改进的地方？
```

## Claude 可以帮助

- 发现重复或冲突的规则
- 建议新的规则
- 优化现有规则的表述
- 添加缺失的部分

## 示例对话

```
你: 我的项目最近加用了 TypeScript，帮 CLAUDE.md 更新一下

Claude: 建议添加：
## TypeScript 规范
- 所有函数必须有类型注解
- 使用 strict 模式
- 禁止使用 any 类型
```

## 注意

- Claude 会建议，你做最终决定
- 记得提交到 Git

## 另见

- [Tip 22: 使用 workflow 触发器](/tips/tip-22)
