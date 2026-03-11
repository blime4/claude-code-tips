# Claude Code Tips - 项目设计文档

**创建日期**: 2026-03-11
**项目类型**: 静态演示网站
**目标受众**: 团队内部

---

## 项目概述

创建一个用Astro构建的静态站点，用于向团队演示和教授Claude Code的使用技巧。内容基于50个精选tips，按4个Act组织。

**核心目标**:
- 帮助团队快速上手Claude Code
- 展示Claude Code的核心能力和最佳实践
- 提供可搜索、可浏览的技巧参考

**技术栈**:
- Astro (静态站点生成器)
- Astro官方搜索插件 (Pagefind)
- Claude官方设计语言风格

**演示形式**: 交互式教程 + 演示文稿风格 + 搜索功能

---

## 站点架构

```
claude-code-tips/
├── src/
│   ├── content/
│   │   ├── config.ts          # 内容集合配置
│   │   ├── tips/              # 50个tips (Markdown)
│   │   │   ├── act-1-getting-started/
│   │   │   ├── act-2-daily-workflow/
│   │   │   ├── act-3-power-user/
│   │   │   └── act-4-advanced/
│   │   ├── best-practices.md  # 最佳实践
│   │   └── faq.md             # 常见问题
│   ├── layouts/
│   │   └── Layout.astro       # 主布局
│   ├── pages/
│   │   ├── index.astro        # 首页
│   │   ├── quick-start.astro  # 快速入门
│   │   ├── tips/
│   │   │   ├── [...id].astro  # Tip详情页
│   │   │   └── index.astro    # Tips列表/搜索
│   │   ���── demo.astro         # 交互式演示
│   └── components/
│       ├── TipCard.astro      # Tip卡片组件
│       ├── SearchBar.astro    # 搜索组件
│       └── CodeBlock.astro    # 代码块组件
├── public/
├── astro.config.mjs
└── package.json
```

**路由结构**:
- `/` - 首页：项目介绍、亮点展示
- `/quick-start` - 5分钟快速入门指南
- `/tips` - Tips列表，支持过滤、排序、搜索
- `/tips/[id]` - 单个Tip详情页
- `/demo` - 交互式演示（模拟chat界面）
- `/best-practices` - 最佳实践汇总
- `/faq` - 常见问题

---

## 数据结构

### Tip Content Schema

```yaml
---
id: 1              # 唯一ID
title: "Run from root directory"
act: 1             # 所属Act (1-4)
category: "setup"  # 分类: setup, workflow, power-user, advanced
difficulty: "beginner" # beginner, intermediate, advanced
tags: ["cli", "directory"] # 用于搜索和过滤
timestamp: "1:18"  # 视频时间戳
description: "Always run Claude Code from your project root directory"
related: [2, 3]    # 相关tip的ID
---
```

### 内容分布

- **Act 1**: Tips 1-18 (Getting Started + CLAUDE.md)
- **Act 2**: Tips 19-25 (Daily Workflow)
- **Act 3**: Tips 26-32 (Power User Basics)
- **Act 4**: Tips 33-50 (Advanced + Hooks)

### 浏览视图

1. **按Act顺序** - 4个Acts，保持视频结构
2. **按难度** - Beginner → Intermediate → Advanced
3. **按分类** - Setup, Workflow, Power User, Advanced
4. **按标签** - 灵活的多标签过滤
5. **搜索** - 全文搜索标题和内容

---

## 视觉设计（Claude官方风格）

### 设计原则
- 温暖、专业、简洁
- 大量留白，易于阅读
- 柔和的色彩，不刺眼

### 配色方案
```css
--color-primary: #D97757;     /* 温暖的橙色accent */
--color-secondary: #73675C;    /* 中性棕灰 */
--color-bg: #FAF9F7;          /* 温暖的米白色 */
--color-surface: #FFFFFF;      /* 纯白卡片 */
--color-text: #2D2D2D;        /* 深灰文字 */
--color-text-light: #6B6B6B;  /* 浅灰说明文字 */
--color-border: #E8E8E8;      /* 柔和边框 */
```

### 字体
- 标题/正文：SF Pro, Inter, -apple-system
- 代码：SF Mono, Monaco, 'Cascadia Code'

### UI元素
- Tip卡片：白色背景，微妙阴影，hover上浮
- 代码块：深色背景，语法高亮，复制按钮
- Act分组标题：大号，带编号徽章
- 搜索框：大而明显，带搜索图标
- 难度标签：颜色编码（绿/黄/橙）

### 响应式
- 移动优先，断点：768px, 1024px
- 移动端：单栏，隐藏侧边栏
- 桌面端：双栏布局（侧边栏+主内容）

---

## 核心功能

### 1. 首页 (`/`)
- Hero区域：大标题 + 介绍 + CTA按钮
- 亮点展示：4个Acts的预览卡片
- 特色tip：随机展示3-5个精选tips
- 快速链接：Quick Start, Tips, Demo

### 2. 快速入门 (`/quick-start`)
- 5分钟速成课程
- 涵盖：安装、首次运行、CLAUDE.md配置、基本命令
- 步骤清晰，每步有代码示例

### 3. Tips列表页 (`/tips`)
- 顶部搜索框（实时过滤）
- 侧边栏过滤器：Act、难度、分类、标签
- Tip卡片网格
- 排序选项：按ID、按难度、按相关度

### 4. Tip详情页 (`/tips/[id]`)
- 完整的tip内容
- 相关tips推荐
- 前后导航

### 5. 交互式Demo (`/demo`)
- 模拟Claude Code终端界面
- 预设场景让用户"体验"
- 非真实连接，只是UI演示

### 6. 搜索功能
- 使用Pagefind
- 搜索范围：标题、描述、内容
- 高亮匹配关键词

---

## Astro配置

### 依赖
```json
{
  "dependencies": {
    "astro": "^4.x",
    "@astrojs/react": "^3.x",
    "astro-pagefind": "^1.x"
  }
}
```

### Content Collection Schema
```typescript
const tip = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    act: z.number().min(1).max(4),
    category: z.enum(['setup', 'workflow', 'power-user', 'advanced']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tags: z.array(z.string()),
    timestamp: z.string(),
    related: z.array(z.number()).optional(),
  }),
});
```

---

## 部署方案

### GitHub Pages
- 每次push到main自动构建部署
- 构建时间约1-2分钟
- 默认域名：`https://your-username.github.io/claude-code-tips/`

---

## 实现阶段

### Phase 1: 基础框架
- 初始化Astro项目
- 配置content collections
- 创建基本布局和样式
- 设置Claude风格主题

### Phase 2: 内容填充
- 创建50个tip markdown文件
- 实现首页和Quick Start页面
- 实现Tips列表和详情页

### Phase 3: 功能完善
- 添加搜索功能
- 实现过滤和排序
- 添加交互式Demo页面
- 最佳实践和FAQ页面

### Phase 4: 优化部署
- 响应式优化
- 性能优化
- 配置GitHub Actions
- 测试部署流程

---

## Tip内容模板

```markdown
---
id: 1
title: "Run from root directory"
act: 1
category: "setup"
difficulty: "beginner"
tags: ["cli", "directory", "basics"]
timestamp: "1:18"
related: [2]
---

## Description

Always run Claude Code from your project's root directory.

## Why

Claude Code needs to see your entire project to:
- Navigate files correctly
- Understand project structure
- Make informed decisions about changes

## Example

\`\`\`bash
# Good
cd /path/to/my-project
claude

# Avoid
claude  # from some subdirectory
\`\`\`

## See Also

- [Tip 2: Run /init immediately](/tips/2)
- [Best Practices](/best-practices)
```
