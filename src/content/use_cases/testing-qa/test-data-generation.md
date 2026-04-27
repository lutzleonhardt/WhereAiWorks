---
stage: testing-qa
order: 7
roles:
  - qa-engineer
  - software-engineer
title: "Synthetische Testdaten-Generierung"
goal_label: "Realistische Testdaten ohne Produktivdaten"
suitability: good_fit
rationale: "Etablierte Anbieter mit Enterprise-Adoption, vor allem in DACH-regulierten Branchen, in denen Produktivdaten nicht in Test-Umgebungen dürfen. Mostly AI ist österreichisches Unternehmen — DACH-Anker stark. DSGVO ist primärer Treiber."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Mostly AI (EU-HQ, AVV-fähig) oder Tonic Structural eine einzige Tabelle (z.B. Customers) klonen und gegen einen bestehenden Integrationstest-Lauf prüfen, ob Verteilung und Constraints tragen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Differential-Privacy-Garantien werden marketing-seitig oft überdehnt; bei Re-Identifikations-Risiko greift weiter DSGVO Art. 4 Abs. 5. Aus Produktivdaten abgeleitete Synthese braucht Datenschutzbeauftragten-Freigabe; Schema-basierte Synthese ist unkritisch."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
