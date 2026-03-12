---
id: 53
title: "并行执行独立任务"
act: 4
category: "advanced"
difficulty: "advanced"
tags: ["parallel", "agents", "workflow", "multi-agent"]
timestamp: "47:00"
description: "同时运行多个独立 agent，大幅提升工作效率"
related: [39, 50]
---

## 描述

当面对多个独立任务时，可以在单次消息中启动多个 agents 并行工作。每个 agent 在独立上下文中运行，互不干扰。

## 为什么使用并行 Agents

- **节省时间** - 多个任务同时进行，而非串行等待
- **隔离上下文** - 每个 agent 只加载相关文件，避免 token 浪费
- **专业分工** - 不同 agent 专注不同领域（前端、后端、安全等）
- **独立完成** - 每个 agent 完成后自动通知，无需手动切换

## 如何启动并行 Agents

### 方法 1：单次消息请求

在一个消息中明确要求并行执行多个独立任务：

```
请同时启动两个 agent 并行工作：
1. 第一个 agent 审查 src/components/ 目录下的所有 React 组件代码
2. 第二个 agent 审查 src/api/ 目录下的所有 API 端点代码
```

Claude 会自动启动两个独立的 agents 并行处理。

### 方法 2：使用 Agent 工具

通过自然语言请求使用特定 subagent：

```
用 code-reviewer agent 审查 pr-123 分支的代码，
同时用 security-reviewer agent 检查认证模块的安全性
```

## Subagent 类型

| Agent | 用途 | 何时使用 |
|-------|------|----------|
| `code-reviewer` | 代码质量审查 | PR 审查、代码检查 |
| `security-reviewer` | 安全漏洞检测 | 认证、数据处理相关 |
| `tdd-guide` | 测试驱动开发指导 | 新功能、Bug 修复 |
| `architect` | 架构设计决策 | 系统设计、技术选型 |
| `planner` | 实施计划制定 | 复杂功能规划 |
| `general-purpose` | 通用任务 | 默认选项 |

## 并行任务示例

### 示例 1：前后端并行审查

```
请启动两个 agents：
1. 审查前端 React 组件的代码质量
2. 同时审查后端 API 的安全性
```

### 示例 2：多模块并行测试

```
启动三个 agents 并行运行测试：
- agent 1: 运行单元测试
- agent 2: 运行集成测试
- agent 3: 运行 E2E 测试
```

### ���例 3：文档和代码并行处理

```
同时做两件事：
1. 用 doc-updater agent 更新 API 文档
2. 用 refactor-cleaner agent 清理未使用的代码
```

## 等待并行结果

Agents 运行时你会看到：
- 每个独立运行的通知
- Agent 完成后的自动消息
- 所有 agents 完成后的汇总

## 最佳实践

### 1. 确保任务真正独立

```bash
# ✅ 好 - 任务互不依赖
"审查组件 A 的代码" + "审查组件 B 的代码"

# ❌ 差 - 有依赖关系
"修复 API bug" + "编写 API 测试" (测试依赖修复)
```

### 2. 明确每个任务的范围

```bash
# ✅ 好 - 范围清晰
"审查 src/auth/ 目录的代码安全性"
"优化 src/components/ 的性能"

# ❌ 差 - 范围模糊
"看看代码有什么问题"
```

### 3. 合理使用专业 Agent

```bash
# ✅ 好 - 用专业 agent
"用 security-reviewer 检查认证代码"
"用 code-reviewer 审查代码质量"

# ⚠️ 可用但效率较低
"用两个 general-purpose agents 审查代码"
```

### 4. 避免过度并行

```bash
# ✅ 合理 - 2-3 个并行任务
"启动 3 个 agents 审查不同模块"

# ❌ 过度 - 5+ 个并行任务难以跟踪
"启动 10 个 agents 同时审查代码"
```

## 注意事项

1. **不要共享上下文** - 每个 agent 独立运行，不会自动同步信息
2. **避免竞争条件** - 不要让多个 agents 修改同一文件
3. **监控 Token 使用** - 并行任务会增加 token 消耗
4. **汇总结果** - 所有 agents 完成后需要手动整合结果

## 另见

- [Tip 39: Subagents 隔离上下文](/claude-code-tips/tips/39)
- [Tip 40: 避免指令过载](/claude-code-tips/tips/40)
- [最佳实践](/claude-code-tips/best-practices)
