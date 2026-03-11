---
id: 22
title: "Use workflow triggers"
act: 1
category: "workflow"
difficulty: "advanced"
tags: ["claudemd", "config", "automation"]
timestamp: "15:52"
description: "Configure automatic workflow triggers in CLAUDE.md"
related: [21]
---

## 描述

在 `CLAUDE.md` 中配置自动工作流触发器。

## 工作流触发器

```markdown
## Workflow Triggers

当以下情况时自动激活相应技能：

- 用户说 "修复 bug" → tdd-guide 技能
- 用户说 "设计架构" → architect 技能
- 代码已修改 → code-reviewer 技能
- 涉及用户输入 → security-reviewer 技能
```

## 配置示例

```markdown
## Automatic Triggers

1. **新功能请求** → brainstorming → writing-plans → 执行
2. **Bug 修复** → systematic-debugging → tdd-workflow
3. **代码修改后** → code-reviewer
4. **提交前** → security-reviewer
```

## 优势

- 自动化重复流程
- 确保最佳实践
- 减少手动干预

## 另见

- [Tip 23: 提交 CLAUDE.md 到 git](/tips/23)
