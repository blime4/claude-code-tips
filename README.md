# Claude Code Tips

> Claude Code 使用技巧演示网站 - 团队内部

Claude Code 是一个强大的 AI 编程助手。这个项目收集了 50 个实用技巧，帮助团队更好地使用 Claude Code。

## 特性

- 📚 **50 个精选技巧** - 按 4 个 Acts 组织，从入门到高级
- 🔍 **多维度浏览** - 按难度、分类、标签筛选
- 🎨 **Claude 官方设计风格** - 温暖、专业、简洁
- 📱 **响应式设计** - 完美支持移动端和桌面端
- ⚡ **快速静态站点** - 基于 Astro 构建
- 🔎 **全文搜索** - 快速找到所需技巧

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
claude-code-tips/
├── src/
│   ├── content/tips/     # 50 个技巧 markdown 文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面路由
│   └── components/       # 可复用组件
├── public/               # 静态资源
└── docs/plans/           # 设计文档
```

## 技巧组织

- **Act 1: Getting Started** (Tips 1-25) - 基础设置和入门
- **Act 2: Daily Workflow** (Tips 26-32) - 日常工作流程
- **Act 3: Power User** (Tips 33-40) - 高级用户技巧
- **Act 4: Advanced** (Tips 41-50) - 高级功能和自动化

## 部署

项目配置为自动部署到 GitHub Pages。推送代码到 `main` 分支即可触发部署。

```
git push origin main
```

## 设计文档

详细的设计文档请参考 [docs/plans/2026-03-11-claude-code-tips-design.md](docs/plans/2026-03-11-claude-code-tips-design.md)

## 贡献

欢迎提交问题和改进建议！

## 许可

MIT
