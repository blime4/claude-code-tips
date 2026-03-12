const d={"/help":`可用命令：
/help      - 显示帮助
/init      - 初始化项目
/clear     - 清空对话
/context   - 查看 token 使用
/model     - 切换模型
/plan      - 进入规划模式
/resume    - 恢复会话
/mcp       - MCP 状态`,"/init":`正在初始化项目...

✓ 扫描项目结构
✓ 检测到: TypeScript + React
✓ 检测到: Vite 构建工具
✓ 检测到: Vitest 测试框架

已创建 CLAUDE.md 配置文件！`,"/clear":`对话上下文已清空。

开始新对话...`,"/context":`Session Context Usage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Messages: 45,231 / 200,000 tokens
  Remaining: 154,769 tokens (77%)
  Last message: ~1,500 tokens

💡 提示: 剩余 < 20% 时考虑 /clear`,"/model":`当前模型: Sonnet 4.5 (默认)

可用模型:
  • Haiku 4.5   - 快速，轻量任务
  • Sonnet 4.5  - 日常开发 (当前)
  • Opus 4.5    - 复杂任务

使用 /model haiku 或 /model opus 切换`,"/plan":`📋 进入规划模式...

请描述你想要实现的功能：
1. 功能目标和需求
2. 技术约束和偏好
3. 验收标准

我将为你制定实施计划。`,"/resume":`可用会话：
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 [1] 用户认证功能     - 2小时前
 [2] API 设计          - 昨天
 [3] 数据库优化        - 3天前

输入会话编号恢复，或按 0 取消`,"/mcp":`MCP Servers Status:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ✓ filesystem (本地)
 ✓ git (本地)
 ✓ github (已连接)
 ✗ database (未配置)

可用工具: 12 个`,"/btw":`侧链对话模式已开启 💬

你可以在主任务执行时并行提问，答案将显示在浮层中。

使用场景：
• 快速查询：/btw 这个函数是做什么的？
• 概念确认：/btw useEffect 依赖怎么做？
• 相关疑问：/btw 这个错误码是什么意思？

特点：不中断主任务、即时回答、只读模式`,"/copy":`✓ 已复制到剪贴板！

最后一次响应的 Markdown 内容已复制到剪贴板。

你现在可以：
• 粘贴到代码编辑器
• 粘贴到文档或 Wiki
• 粘贴到工单或 PR 描述
• 分享给团队成员`,"/export":`📦 导出选项

请选择导出格式：

• /export session.md - Markdown 文档
• /export session.html - HTML（带样式）
• /export session.json - JSON 数据
• /export clipboard - 复制到剪贴板

或者直接指定：
• /export output.md

导出内容包括：
• 完整对话历史
• 代码和响应
• 时间戳
• 工具调用记录`,"team mode, member 1 修复用户登录的 token 过期问题，member 2 分析 API 响应慢的原因":`🚀 Team Mode 已激活

正在启动两个 subagents 并行工作...

━━━ Member 1: 修复 token 过期 ━━━
任务：修复用户登录的 token 过期问题
状态：正在分析 auth.ts...
• 检测到 token 有效期设置为 30 分钟
• 建议实现 refresh token 机制
• 正在添加自动续期逻辑...

━━━ Member 2: 分析 API 性能 ━━━
任务：分析 API 响应慢的原因
状态：正在 profiling...
• 发现 /api/users 接口响应时间 2.3s
• 数据库查询缺少索引
• 建议添加 users.email 索引

两个任务已完成！准备合并结果...`,"审查这个 PR 的安全性，检查是否有 SQL 注入风险":`🔒 安全审查中...

正在检查 PR #123 的安全性...

发现的问题：
❌ 高危: users.ts#45 使用字符串拼接构建 SQL 查询
   const query = \`SELECT * FROM users WHERE id = \${userId}\`

✅ 建议: 使用参数化查询
   const query = 'SELECT * FROM users WHERE id = ?'

其他检查：
✅ 密码使用 bcrypt 加密
✅ API 速率限制已配置
⚠️ 建议: 添加 CSRF token 验证

是否需要我修复这个 SQL 注入问题？`,"重构认证模块，使用 JWT 替代 session，需要保持向后兼容":`📋 重构计划确认

目标：认证模块从 session 迁移到 JWT

迁移阶段：
Phase 1: 添加 JWT 支持（保留 session）
  • 安装 jsonwebtoken + @types/jsonwebtoken
  • 实现 JWT 中间件
  • 添加 /auth/token 端点

Phase 2: 双模式运行
  • 同时支持 session 和 JWT
  • 逐步迁移现有客户端
  • 监控错误率

Phase 3: 完全迁移
  • 移除 session 依赖
  • 清理相关代码

向后兼容策略：
• 旧客户端继续使用 session
• 新客户端使用 JWT
• 提供 2 周迁移期

是否开始 Phase 1？`,"写单元测试覆盖用户注册流程，包括正常和异常情况":`✅ 测试计划确认

测试场景覆盖：

正常流程：
✓ 用户名和密码有效 → 注册成功
✓ 邮箱发送验证链接
✓ 返回用户信息（不含密码）

边界条件：
✓ 用户名已存在 → 返回 409 错误
✓ 邮箱格式无效 → 返回 400 错误
✓ 密码强度不足 → 返回 400 错误
✓ 缺少必填字段 → 返回 400 错误

异常情况：
✓ 数据库连接失败
✓ 邮件服务不可用
✓ 并发注册相同用户名

使用框架: Vitest + msw (Mock Service Worker)

准备生成测试代码...`},o=document.getElementById("terminal-content"),s=document.getElementById("demo-input"),m=document.getElementById("send-btn");function i(e,n){if(!o)return;const t=document.createElement("div");t.className=`message ${e}`;const a=document.createElement("span");a.className="label",a.textContent=e==="user"?"你":"Claude";const r=document.createElement("span");r.className="content",r.textContent=n,t.appendChild(a),t.appendChild(r),o.appendChild(t),o.scrollTop=o.scrollHeight}function c(){if(!s)return;const e=s.value.trim();e&&(i("user",e),s.value="",setTimeout(()=>{const t=d[e]||"我明白了。让我帮你处理这个...";i("assistant",t)},500))}m?.addEventListener("click",c);s?.addEventListener("keypress",e=>{e.key==="Enter"&&c()});document.querySelectorAll(".preset-btn").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-cmd");s&&n&&(s.value=n,c())})});i("system","欢迎使用 Claude Code！这是一个演示界面，试试输入命令或点击下面的预设按钮。");
