---
stage: product-discovery
order: 12
roles:
  - product-owner
title: "Regulatorischer Feasibility-Pre-Check für Feature-Ideen"
goal_label: "Feature-Ideen früh gegen DSGVO/EU-AI-Act/MaRisk-Constraints prüfen"
suitability: conditional
rationale: "DACH-spezifischer Workflow in Banken/Versicherern und Public Sector: Compliance-Pre-Check früh in Discovery spart Wochen Spätabbruch. Vom Markt-Scan vermutlich übersehen, weil dieser Use-Case in englischsprachigen PM-Communities kaum Sichtbarkeit hat — er entsteht durch DACH-Regulierungsdichte. Wird typisch via M365 Copilot oder selbst gehosteten RAG-Pipelines (Glean, ChatGPT Enterprise mit Custom-GPT) umgesetzt."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit M365 Copilot oder ChatGPT Enterprise (EU-Region) plus internem RAG über Compliance-Regelwerk eine Idee gegen DSGVO/EU-AI-Act-Risikoklassen prüfen, danach Compliance-Officer einbinden."  # Draft aus Discovery — vor Commit prüfen
caveats: "Modell ist kein Rechtsanwalt — Output ist Diskussionsgrundlage, nicht Entscheidung. Eingangsdokumente (interne Compliance-Regeln, MaRisk) müssen in einem Tool liegen, das DSGVO und Mandantentrennung gewährleistet; reine US-Default-Modelle nicht zulässig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
