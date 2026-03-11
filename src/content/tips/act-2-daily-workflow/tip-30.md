---
id: 30
title: "Give verification commands"
act: 2
category: "workflow"
difficulty: "intermediate"
tags: ["testing", "verification", "workflow"]
timestamp: "22:11"
description: "Tell Claude how to verify its work"
related: [29]
---

## 描述

告诉 Claude 如何验证它完成的工作。

## 提供验证方式

```bash
# 不好的方式
"添加用户认证功能"

# 好的方式
"添加用户认证功能。
验证方式：
npm run test:auth
npm run lint
npm run build
"
```

## CLAUDE.md 验证部分

```markdown
## Verification

### 运行测试
npm test

### 类型检查
npm run type-check

### Lint
npm run lint

### 构建验证
npm run build

### 手动测试
1. 启动服务器：npm run dev
2. 访问 http://localhost:3000
3. 测试关键流程
```

## 为什么要验证

- Claude 自行验证结果
- 及早发现问题
- 减少迭代次数
- 确保质量

## 另见

- [Tip 31: 复杂工作考虑 Opus](/tips/tip-31)
