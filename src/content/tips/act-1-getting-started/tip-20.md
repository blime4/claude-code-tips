---
id: 20
title: "Add a Critical Rules section"
act: 1
category: "setup"
difficulty: "intermediate"
tags: ["claudemd", "config", "safety"]
timestamp: "14:33"
description: "Add a Critical Rules section to CLAUDE.md for important constraints"
related: [19]
---

## 描述

在 `CLAUDE.md` 中添加 Critical Rules 部分，列出不可违反的规则。

## 模板

```markdown
# Critical Rules (CRITICAL)

这些规则具有最高优先级，必须严格遵守：

1. **永远不要**在生产环境直接修改数据
2. **必须**在修改前运行测试
3. **禁止**硬编码密钥和密码
4. **必须**使用类型注解
5. **禁止**直接修改数据库 schema（使用迁移）
```

## 为什么有效

- Claude 会优先遵守这些规则
- 防止常见错误
- 团队规范强制执行

## 规则优先级

```
Critical Rules > 项目规则 > 全局规则
```

## 最佳实践

- 保持规则少而精
- 使用 CRITICAL 标记
- 定期审查和更新

## 另见

- [Tip 21: 让 Claude 更新规则](/tips/21)
