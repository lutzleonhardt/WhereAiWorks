---
stage: architecture-design
order: 5
roles:
  - software-architect
title: "Architektur-Optionen explorieren"
goal_label: "Mehrere Architektur-Alternativen mit Trade-offs gegenüberstellen"
suitability: good_fit
rationale: "Strukturierte Option-Generierung ist der häufigste produktive Architektur-Einsatz von LLMs — Hands-On-Architects-Blog und humansreadcode dokumentieren konkrete Workflows. AI hilft, blinde Flecken (Boring-Option, Failure-Modes) sichtbar zu machen, ohne den Trade-off-Entscheid abzunehmen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Enterprise oder Azure OpenAI (Germany West Central) an einem konkreten anstehenden Entscheid starten: Context-Pack ohne Kundendaten liefern, 3 Optionen plus eine Boring-Option erzwingen, Trade-off-Matrix manuell gewichten."  # Draft aus Discovery — vor Commit prüfen
caveats: "Bei Verwendung von ChatGPT/Cloud-LLMs fließen interne Domänennamen, Architektur-Constraints und Stakeholder-Hinweise ab — Enterprise-Tenant mit DPA (Azure OpenAI EU, ChatGPT Enterprise EU-Region) ist Pflicht für regulierte DACH-Branchen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
