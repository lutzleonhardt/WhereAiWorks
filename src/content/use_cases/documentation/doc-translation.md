---
stage: documentation
order: 3
roles:
  - software-engineer
title: "Doku-Übersetzung"
goal_label: "Technische Doku in mehrere Sprachen übersetzen"
suitability: good_fit
rationale: "Lokalisierte Produkt-Doku ist ein klassischer hochvolumiger Use Case; DeepL ist deutscher Anbieter mit DSGVO-konformer Pro-API und in DACH-Versicherungen/Pharma/Behörden mainstream. Open-Source-Projekte (Vue, Svelte) nutzen Translation-Bots produktiv. DACH-spezifischer Hebel besonders bei DE↔EN-Doku in regulierten Häusern."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Lokalise AI oder DeepL Pro (EU-Region) auf einer kleinen, gut gepflegten Doku-Section (z.B. Quickstart) starten. Glossar mit den 30–50 wichtigsten Produktbegriffen einpflegen, sonst sind die ersten Outputs unbrauchbar."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI verfehlt domain-spezifische Begriffe und Style-Guide-Konventionen. Glossare und Native-Speaker-Review bleiben Pflicht. Für vertrauliche interne Doku nur Anbieter mit EU-Hosting (DeepL Pro EU) zulässig — generische LLMs ohne Region-Boundary nicht DSGVO-tragbar."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
