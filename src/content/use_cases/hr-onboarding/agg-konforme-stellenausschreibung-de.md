---
stage: hr-onboarding
order: 20
roles:
  - hr-recruiting
title: "AGG-konformer deutschsprachiger Anzeigen-Check"
goal_label: "Stellenausschreibungen auf AGG-Diskriminierungsmerkmale prüfen"
suitability: conditional
rationale: "Geht über generisches JD-Drafting hinaus: AGG §7/§11 verbieten diskriminierende Merkmale, BAG-Rechtsprechung erzwingt '(m/w/d)' und gendergerechte Sprache; AGG-Verstöße sind direkt klagbar (typisch 1-3 Monatsgehälter Schadenersatz). Vom Markt-Scan vermutlich übersehen, weil englischsprachige Tools wie Textio auf US-Anti-Discrimination-Recht (EEOC) abgestimmt sind und deutsche Genus-Marker plus AGG-Spezifika nicht sauber abdecken."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit einem Microsoft-Copilot- oder ChatGPT-Enterprise-Prompt-Template starten, das AGG §1 explizit auflistet, und Output mit einem regelbasierten Linter (genderApp, fairlanguage) gegenprüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Tool ist nur Hilfsmittel — finaler AGG-Check muss durch HR mit Rechts-Awareness erfolgen, da Bußgeld- und Schadenersatzrisiko direkt am Arbeitgeber hängt. Generische LLMs erkennen subtile deutsche Diskriminierungsmarker (z.B. 'jung & dynamisch') nicht zuverlässig — regelbasierte Linter sind oft präziser."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
