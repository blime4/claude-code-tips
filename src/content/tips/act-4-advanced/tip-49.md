---
id: 49
title: "Block dangerous commands"
act: 4
category: "advanced"
difficulty: "advanced"
tags: ["hooks", "security", "safety"]
timestamp: "40:10"
description: "Use hooks to block dangerous commands"
related: [48, 50]
---

## 描述

使用 hooks 阻止危险命令执行。

## 危险命令模式

```bash
rm -rf
git clean -fdx
:(){ :|:& };:    # fork bomb
dd if=/dev/zero
> /dev/sda       # 覆盖磁盘
```

## Hook 配置

```json
{
  "hooks": {
    "PreToolUse": {
      "Bash": [
        "if echo $COMMAND | grep -q 'rm -rf'; then",
        "  echo '❌ DANGEROUS: rm -rf blocked'",
        "  exit 1",
        "fi"
      ]
    }
  }
}
```

## 更智能的检查

```bash
# 检查脚本
if [[ $FILE == *.sh ]]; then
  if grep -q 'rm -rf' $FILE; then
    echo "⚠️ Script contains rm -rf"
    read -p "Continue? (y/N) " -n 1 -r
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      exit 1
    fi
  fi
fi
```

## 另见

- [Tip 50: 探索插件生态系统](/tips/tip-50)
