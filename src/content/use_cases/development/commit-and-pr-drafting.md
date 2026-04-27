---
stage: development
order: 8
roles:
  - software-engineer
title: Commit- und PR-Drafting
goal_label: Commit-Messages und PR-/MR-Beschreibungen aus dem Diff generieren
suitability: good_fit
rationale: "Stack Overflow 2024: 13% mit deutlicher Wachstumserwartung; mehrere Vendor-Tools (GitHub Copilot, Gemini CLI, GitLab Duo MR Summary). In DACH-Self-Managed-GitLab-Stacks durch Duo Enterprise direkt verfügbar."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit GitLab Duo MR Summary (Self-Managed) oder GitHub Copilot an PR-/MR-Beschreibungen aus dem Diff starten und den Text vor dem Push einmal lesen. Risiko/Test-Plan musst du als Kontext beisteuern; bei vertraulichen Repos Self-Hosted-LLM nutzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Texte sind oft pauschal-wohlklingend, verschleiern Designentscheidungen. Diff-Inhalte gehen ans LLM — bei vertraulichen Repos (Trading-Algorithmen, Versicherungsmathematik) Self-Hosted-LLM oder Diff-Filter erforderlich."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
