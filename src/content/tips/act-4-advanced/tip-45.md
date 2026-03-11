---
id: 45
title: "/chrome connects browser"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["chrome", "browser", "debugging"]
timestamp: "36:15"
description: "Use /chrome to connect Chrome browser for debugging"
related: [44, 46]
---

## 描述

使用 `/chrome` 命令连接 Chrome 浏览器进行调试。

## 使用方法

```bash
# 1. 启动 Chrome 并开启远程调试
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222

# 2. 在 Claude Code 中连接
/chrome http://localhost:9222

# 3. 现在 Claude 可以：
#    - 查看页面
#    - 读取控制台
#    - 执行 JavaScript
#    - 调试样式
```

## 使用场景

```bash
# 调试 UI 问题
"Chrome 上这个按钮点击没反应，帮我看看"

# 查看控制台错误
"有什么 console 错误吗？"

# 测试响应式
"在移动视图下检查布局"
```

## 安全提示

- 仅用于本地开发
- 不要在生产环境使用
- 使用完毕后关闭调试端口

## 另见

- [Tip 46: 强大的调试能力](/tips/tip-46)
