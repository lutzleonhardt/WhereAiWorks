---
stage: customer-support
order: 13
roles:
  - customer-support
title: "AI-Voicebot für Telefon-Self-Service"
goal_label: "Anrufe ohne menschlichen Agent abschließen"
suitability: conditional
rationale: "Eigenständiger Channel mit eigener Tool-Kategorie. Spitch ist 2026 als Standard bei den Volksbanken bestätigt; alphaspeech, telegra, Aristech und Mercury.ai bedienen DACH-Behörden und Mittelstand DSGVO-konform. Klar getrennt von Chat-Self-Service durch Latenz-, ASR- und Tonalitäts-Anforderungen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit DACH-konformem Anbieter (Spitch, telegra, Aristech AI Suite On-Prem oder Cognigy Voice mit EU-Region) auf einem schmalen, transaktionalen Flow (Order-Status, Lieferzeit-Auskunft) starten und 'Press 0 für Mensch' plus aktive KI-Disclosure von Anfang an einbauen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Art. 50 EU AI Act: Sprachbot muss sich aktiv als KI zu erkennen geben. ASR-Engines vieler US-Voicebots nutzen US-Cloud — Schrems-II-Risiko ohne EU-Region. Aufzeichnung unterliegt §201 StGB plus DSGVO-Einwilligung. Qualität bei Schweizerdeutsch und süddeutschen Dialekten oft nur 'gut genug für IVR-Ersatz', nicht für Beratung."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
