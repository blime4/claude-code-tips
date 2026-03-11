---
id: 3
title: "CLAUDE.md is hierarchical"
act: 1
category: "setup"
difficulty: "intermediate"
tags: ["claudemd", "config", "hierarchy"]
timestamp: "2:54"
description: "CLAUDE.md files work hierarchically - project level overrides global"
related: [2, 4]
---

## 描述

`CLAUDE.md` 文件是分层的，项目级别的配置会覆盖全局配置。

## 层级结构

```
~/.claude/rules/common/     # 全局通用规则
~/.claude/rules/python/     # 全局 Python 规则
~/project/CLAUDE.md         # 项目特定规则（优先级最高）
```

## 继承规则

1. 全局规则始终被加载
2. 语言特定规则（如 Python）会覆盖通用规则
3. 项目 `CLAUDE.md` 拥有最高优先级

## 另见

- [Tip 4: 保持 CLAUDE.md 简洁](/tips/4)
