# ARS for OpenCode

Academic Research Skills (ARS) 适配 OpenCode 的安装和使用说明。

## 安装

### 方式 1：本地路径引用（推荐）

在你的项目的 `opencode.json`（或 `~/.config/opencode/opencode.json`）中添加：

```json
{
  "skills": {
    "paths": [
      "/path/to/academic-research-skills/deep-research",
      "/path/to/academic-research-skills/academic-paper",
      "/path/to/academic-research-skills/academic-paper-reviewer",
      "/path/to/academic-research-skills/academic-pipeline"
    ]
  },
  "plugin": [
    "/path/to/academic-research-skills/.opencode/plugins/ars-bootstrap.ts"
  ]
}
```

将 `/path/to/` 替换为实际的仓库路径（Windows 使用正斜杠 `D:/Files/...`）。

### 方式 2：克隆后引用

```bash
git clone https://github.com/Imbad0202/academic-research-skills.git
# 在 opencode.json 中添加 skills.paths 和 plugin 指向克隆目录
```

### 验证

重启 OpenCode 后，你应该能在技能列表中看到：
- `deep-research`
- `academic-paper`
- `academic-paper-reviewer`
- `academic-pipeline`

## 使用

### 命令（10 个）

```
/ars-full              Full pipeline (research → write → review → revise → finalize)
/ars-plan              Socratic chapter-by-chapter planning
/ars-outline           Detailed outline + evidence map
/ars-revision          Revised draft + R&R responses
/ars-revision-coach    Parse reviewer comments → Revision Roadmap
/ars-abstract          Bilingual abstract + keywords
/ars-lit-review        Annotated bibliography in paper format
/ars-format-convert    Convert to LaTeX / DOCX / PDF / Markdown
/ars-citation-check    Citation error report
/ars-disclosure        AI-usage disclosure statement
```

### 子智能体（4 个，通过 @mention 调用）

```
@ars-researcher        Deep research agent team
@ars-writer            Paper writing agent team
@ars-reviewer          Paper review agent team
@ars-pipeline          Full pipeline orchestrator
```

### 自然语言触发

ARS 的 4 个 skill 会在你提到相关关键词时自动被 OpenCode 的 skill 工具发现并加载：

| 你说 | 触发的 Skill |
|---|---|
| "research X", "deep research" | deep-research |
| "write a paper", "academic paper" | academic-paper |
| "review paper", "peer review" | academic-paper-reviewer |
| "academic pipeline", "full paper workflow" | academic-pipeline |

## 与 Claude Code 版本的差异

| 功能 | Claude Code | OpenCode |
|---|---|---|
| 安装方式 | `/plugin marketplace add` | skills.paths + plugin 配置 |
| 斜杠命令 | `/ars-*` 原生命令 | `/ars-*` 通过 command 配置 |
| 子智能体 | agents/*.md + model: inherit | .opencode/agents/*.md |
| 模型路由 | `model: opus/sonnet` frontmatter | `model` 字段在 command/agent 配置 |
| 会话启动注入 | hooks.json + bash 脚本 | TypeScript 插件 hook |
| 原版 scripts/ | 完全支持 | 完全支持（Python 工具通用） |

## 可选配置

### 跨模型验证

设置环境变量 `ARS_CROSS_MODEL=1` 启用跨模型完整性验证。

### Socratic 阅读检查

设置 `ARS_SOCRATIC_READING_PROBE=1` 启用 Socratic 模式中的阅读检查探针。

### 声明审计

设置 `ARS_CLAIM_AUDIT=1` 启用 L3 声明-忠实性审计。
