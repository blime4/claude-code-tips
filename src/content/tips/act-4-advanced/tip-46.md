---
id: 46
title: "Powerful for debugging"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["debugging", "workflow", "systematic"]
timestamp: "37:20"
description: "Claude Code is exceptionally powerful for debugging"
related: [45]
---

## 描述

Claude Code 在调试方面非常强大。

## 调试工作流

```bash
# 1. 描述问题
"用户报告登录时出现错误 XYZ"

# 2. Claude 会：
#    - 读取相关代码
#    - 分析可能原因
#    - 提出假设

# 3. 验证假设
"测试你的假设 A"

# 4. 根据结果迭代
```

## 系统化调试

使用 `/debug` 命令进入系统化调试流程：

1. **重现问题** - 确认 bug 存在
2. **定位原因** - 找到问题代码
3. **提出方案** - 设计修复方案
4. **验证修复** - 确认 bug 已解决
5. **防止回归** - 添加测试

## 调试技巧

```bash
# 让 Claude 添加调试日志
"在关键位置添加 console.log"

# 追踪数据流
"追踪这个变量从哪来、到哪去"

# 隔离问题
"创建最小复现案例"
```

## 另见

- [Hooks & Automation](#)
