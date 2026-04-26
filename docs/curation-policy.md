# Curation-Policy: Use-Case-Aufnahme aus Discovery-Läufen

Diese Policy beschreibt, **welche** Use Cases aus den Discovery-Läufen
(`whereaiworks-seed/runs/use-case-discovery/<stage>/<run-id>/summary.md`) in
den Atlas (`src/content/use_cases/<stage>/<slug>.md`) übernommen werden und
welche bewusst draußen bleiben.

## Operative Regel (verbindlich)

Aus jeder Stage-Summary wird **ausschließlich** der Abschnitt
`## Vorschläge zum Anlegen — paste-fertig` übernommen. Jeder dort
enthaltene YAML-Block ist 1:1 als Frontmatter-Datei unter dem im
`> Datei:`-Pointer angegebenen Pfad anzulegen.

Begründung: Die Curator-Logik im Discovery-Lauf hat alle Bucket-Sektionen
(Empfohlen, Skeptic-only, Sonstige, Überlappung, Out-of-Scope) bereits
gewichtet und nur das, was sie tatsächlich für aufnahmewürdig hält, in den
paste-fertigen Abschnitt überführt. Diesen Filter erneut anzufechten würde
die Discovery aushebeln und Inkonsistenzen über Stages erzeugen.

## Was bewusst NICHT übernommen wird

- `## Bereits im Atlas vorhandene Use Cases` — Bestand, kein Import.
- `## Empfohlen — beide Agents stimmen include` (Tabelle) — Diagnose-View;
  alle relevanten Einträge tauchen ohnehin im paste-fertigen Abschnitt auf.
- `## Wahrscheinlich aufnehmen` / `## Nur vom Skeptic gefunden` /
  `## Sonstige (zur Prüfung)` — Diskussions-Buckets. Was der Curator
  daraus wirklich aufnehmen wollte, ist im paste-fertigen Abschnitt.
- `## Konflikte zur manuellen Prüfung` — explizit zur manuellen
  Nacharbeit; nur einbeziehen, wenn der Curator nachträglich einen
  paste-fertigen Stub ergänzt.
- `## Überlappung mit bereits vorhandenen Use Cases` — nur als
  Inspiration für Verfeinerung des Bestands. Kein Auto-Import.
- `## Abgelehnt` und `## Out-of-Scope (Agent-Notiz)` — Ablehnungen
  bleiben Ablehnungen.

## Idempotenz

Existiert die Zieldatei bereits in `src/content/use_cases/<stage>/`, wird
sie **nicht** überschrieben. Bestand hat Vorrang vor Discovery-Output —
manuelle Nacharbeit am Atlas-Stub geht sonst verloren.

## Tools und Sources

Die paste-fertigen Stubs lassen `tools: []` und `sources: []` mit
TODO-Kommentar leer. Beides wird in einem nachgelagerten
`research-use-case`-Lauf pro Use Case befüllt. Die Schema-Validierung
akzeptiert leere Arrays — der Build bleibt grün, auch wenn Tool-Listen
fehlen.

**Reihenfolge der Research-Phase:** Zuerst `suitability: good_fit` und
`enterprise_relevance: high`, dann der Rest. Begründung: Maximaler
Atlas-Wert pro investiertem Agent-Run.

## Neue Tool-IDs

`research-use-case` entdeckt Tools, die nicht in `src/data/tools.yaml`
stehen. Schema-Validierung bricht dann am `toolIdEnum`. Konvention: Der
Research-Lauf pflegt `tools.yaml` mit, bevor er den Use-Case-Stub mit
neuen `id`-Referenzen schreibt. Ein nachträglicher Bulk-Patch über alle
131 Stubs ist deutlich teurer.

## Quelle der Wahrheit

| Aspekt | Ort |
|---|---|
| Was aufgenommen wird | Diese Policy + paste-fertige Abschnitte der Summaries |
| Warum es aufgenommen wird | Begründung steht im jeweiligen Summary-Abschnitt |
| Wo der Use Case lebt | `src/content/use_cases/<stage>/<slug>.md` |
| Tool-Details | `src/data/tools.yaml` (zentrale Registry, per `id` referenziert) |
| Quellen-Details | `src/data/sources.yaml` (zentrale Registry, per `id` referenziert) |
