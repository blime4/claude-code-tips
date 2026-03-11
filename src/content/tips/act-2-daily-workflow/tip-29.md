---
id: 29
title: "Lazy load context"
act: 2
category: "workflow"
difficulty: "intermediate"
tags: ["context", "optimization", "performance"]
timestamp: "20:48"
description: "Load context only when needed, not upfront"
related: [28, 30]
---

## 描述

只在需要时加载上下文，而不是预先加载所有内容。

## 对比

```bash
# 不好：预先加载大量上下文
"请阅读整个项目然后帮我..."

# 好：按需加载
"我需要修改用户认证，先看一下 auth 相关文件"
```

## 懒加载技巧

1. **先描述问题**
   ```
   用户登录失败，错误是 XYZ
   ```

2. **Claude 会请求相关文件**
   ```
   "让我看看登录相关的代码..."
   ```

3. **而非预先提供**
   ```
   # 不需要这样做
   "这是整个项目结构..."
   ```

## 优势

- 节省 token
- 更快的响应
- Claude 主动识别需要的文件
- 减少噪音

## 另见

- [Tip 30: 提供验证命令](/tips/30)
