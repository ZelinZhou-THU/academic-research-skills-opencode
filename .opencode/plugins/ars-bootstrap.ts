import type { Plugin } from "@opencode-ai/plugin";

const ARS_ANNOUNCE = `ARS v3.9.2 (academic-research-skills) plugin loaded for OpenCode.

Commands (10):
  /ars-full              Full pipeline (research → write → review → revise → finalize)
  /ars-revision-coach    Parse reviewer comments → Revision Roadmap + Response Letter skeleton
  /ars-plan              Socratic chapter-by-chapter planning
  /ars-outline           Detailed outline + evidence map (no full draft)
  /ars-revision          Revised draft + R&R responses
  /ars-abstract          Bilingual abstract + keywords
  /ars-lit-review        Annotated bibliography in paper format
  /ars-format-convert    Convert paper between LaTeX / DOCX / PDF / Markdown
  /ars-citation-check    Citation error report
  /ars-disclosure        Venue-specific AI-usage disclosure statement

Subagents (4, available via @mention):
  @ars-researcher        Deep research (13 agents, 7 modes)
  @ars-writer            Paper writing (12 agents, 10 modes)
  @ars-reviewer          Paper review (7 agents, 6 modes)
  @ars-pipeline          Full pipeline orchestrator (10 stages)

Skills (4, auto-loaded):
  deep-research          Research skill (trigger: research, deep research, literature review...)
  academic-paper         Writing skill (trigger: write a paper, academic paper...)
  academic-paper-reviewer Review skill (trigger: review paper, peer review...)
  academic-pipeline      Pipeline orchestrator (trigger: academic pipeline, full paper workflow...)

Token budget reference: docs/PERFORMANCE.md (a single full pipeline run ≈ $4–6 on Opus 4.7).`;

export default (async () => {
  return {
    "experimental.chat.system.transform": async (_input: any, output: any) => {
      if (Array.isArray(output.system)) {
        output.system.push(ARS_ANNOUNCE);
      }
    },
  };
}) satisfies Plugin;
