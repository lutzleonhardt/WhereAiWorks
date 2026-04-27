---
stage: hr-onboarding
order: 17
roles:
  - hr-recruiting
title: "Arbeitszeugnis-Generierung (DACH)"
goal_label: "Erst-Versionen von qualifizierten Arbeitszeugnissen erzeugen"
suitability: good_fit
rationale: "DACH-Spezifikum: Arbeitszeugnis ist gesetzlich verankert (§109 GewO) mit Pflicht zu wohlwollender, codierter Sprache und BAG-Rechtsprechungs-konformer Bewertungsskala. LLMs treffen die formale Struktur und die typischen Notenformeln ('stets zur vollsten Zufriedenheit') konsistent. Vom Markt-Scan vermutlich übersehen, weil das ein DACH-spezifisches Rechtsinstrument ist und im englischsprachigen HR-AI-Diskurs schlicht nicht existiert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Microsoft Copilot (Konzern-Lizenz, EU-Daten-Boundary) und einem internen Prompt-Template für Notenstufen 1-5 starten; HR-Manager prüft jede Notenformel manuell, bevor das Zeugnis gezeichnet wird."  # Draft aus Discovery — vor Commit prüfen
caveats: "Falsche Notenformel kann arbeitsrechtliche Klage (Zeugnisberichtigung) auslösen — HR-Endabnahme zwingend. Personenbezogene Leistungs- und Verhaltensdaten sind Art. 9 DSGVO-relevant; Cloud-LLM ohne EU-DPA und Zero-Retention ist tabu."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
