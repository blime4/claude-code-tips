---
id: 48
title: "Auto-format with PostToolUse"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["hooks", "formatting", "automation"]
timestamp: "39:05"
description: "Use PostToolUse hooks for automatic code formatting"
related: [47]
---

## 描述

使用 PostToolUse hooks 自动格式化代码。

## 配置示例

```json
// ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": {
      "Edit": "prettier --write $FILE",
      "Write": "prettier --write $FILE"
    }
  }
}
```

## 语言特定配置

```json
{
  "hooks": {
    "PostToolUse": {
      "Edit": [
        "if [[ $FILE == *.py ]]; then black $FILE; fi",
        "if [[ $FILE == *.ts ]]; then prettier --write $FILE; fi"
      ]
    }
  }
}
```

## 项目级配置

```json
// .claude/hooks.json
{
  "hooks": {
    "PostToolUse": {
      "Edit": "npm run format"
    }
  }
}
```

## 注意事项

- 确保格式化工具已安装
- 格式化会增加一点延迟
- 可以按文件类型有条件执行

## 另见

- [Tip 49: 阻止危险命令](/tips/49)
