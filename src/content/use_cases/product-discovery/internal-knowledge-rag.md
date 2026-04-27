---
stage: product-discovery
order: 11
roles:
  - product-manager
title: "RAG über bestehende Discovery-Artefakte und Confluence"
goal_label: "Frühere Research, PRDs und Lessons-Learned auffindbar machen"
suitability: conditional
rationale: "DACH-Konzerne haben jahrelange Research-Repos, Confluence-Spaces und Lessons-Learned in Silos; RAG darüber ist ein wachsender PM-Workflow, weil 'wer hat das schon mal gemacht?' in Großorganisationen ein Dauerproblem ist. Vom Markt-Scan vermutlich übersehen, weil als Plattform-Feature (Glean, M365 Copilot, Confluence AI) und nicht als spezifischer PM-Use-Case vermarktet."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Glean oder M365 Copilot (mit korrekt vererbten SharePoint-/Confluence-Permissions) auf eine echte aktuelle Frage starten und Antworten gegen Originaldokumente prüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "RAG-Treffer hängen an Confluence-/SharePoint-Berechtigungs-Modell; falsche Permissions können vertrauliche PRDs in Antworten leaken. In DACH-Konzernen ist das vor Rollout-Audit Pflichtthema."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
