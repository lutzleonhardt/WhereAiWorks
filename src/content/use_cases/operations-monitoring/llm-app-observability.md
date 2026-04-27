---
stage: operations-monitoring
order: 6
roles:
  - software-engineer
  - platform-devops-engineer
title: "LLM- und AI-App-Observability"
goal_label: "Prompts, Tokens und Halluzinationen monitoren"
suitability: good_fit
rationale: "Eigene Toolklasse mit klarer Adoption: Langfuse (deutsches OSS, Self-Host), LangSmith, Arize AI, Datadog LLM Observability. Mit GenAI-Apps in DACH-Production wachsende Pflicht; EU AI Act macht Logging zur Compliance-Anforderung."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Langfuse self-hosted (EU-Region) in einer LLM-App mit moderatem Traffic einbauen und drei Wochen Tracing sammeln, bevor eigene Eval-Pipelines folgen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Prompt-/Response-Tracing erfasst oft Kunden-Eingaben — DSGVO-Pflicht zu Pseudonymisierung und Aufbewahrungsfristen; Hallucination-Detection ist heuristisch, keine Garantie."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
