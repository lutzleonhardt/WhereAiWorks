# DACH-Kurationsleitfaden

Dieses Dokument beschreibt, **welche Qualität ein Use Case oder Tool im
Atlas haben muss**, um aufgenommen zu werden — und woran ein Vorschlag
scheitert. Es ist die inhaltliche Ergänzung zur mechanischen Anleitung
in [`../CONTRIBUTING.md`](../CONTRIBUTING.md).

Grundlage ist die Review-Logik aus dem initialen Seed-Lauf, gestrafft
und an die laufende Atlas-Pflege angepasst.

## Grundhaltung

- Kuratierung ist **evidenzbasiert**, nicht hypegetrieben.
- Jede relevante Aussage braucht **Provenienz**: idealerweise Vendor-Doku
  *plus* mindestens eine unabhängige Quelle, dazu Praktiker-Belege wo
  vorhanden.
- **Use-Case-Fit** und **Enterprise-Readiness** sind zwei
  unterschiedliche Fragen — sie werden im Schema bewusst getrennt
  (`fit` am Tool-Eintrag, `enterprise_readiness` separat).
- Der **DACH-Blick ist nicht optional**. Deutschland, Österreich und die
  Schweiz haben strengere Erwartungen an Datenschutz, Arbeitsrecht,
  Beschaffung, Hosting und Auditierbarkeit als die meisten US-getriebenen
  Tool-Listen unterstellen.
- **Stack-Realität zählt.** Eine Suite-Funktion in einer ohnehin
  freigegebenen Plattform kann wertvoller sein als ein technisch
  schärferer Standalone-Newcomer.

## Mindest-Checks vor jedem Eintrag

### 1. Echter Use-Case-Fit

Löst das Tool genau den Workflow des Use Cases — nicht nur ein vage
verwandtes AI-Problem?

- Die Fähigkeit muss **heute** existieren, nicht erst auf der Roadmap.
- Die Belege müssen das Tool mit dem konkreten Workflow verknüpfen.
- Klar benennen, was es ist:
  - eigenständiges Tool,
  - Suite-Feature in einer größeren Plattform,
  - oder Baustein/API für eine Eigenentwicklung.

Funktioniert ein Tool nur in einem engen Stack, das explizit notieren —
nicht als generelle Default-Empfehlung verkaufen.

### 2. Quellenqualität und Provenienz

Vendor-Copy allein reicht nicht.

- Mindestens eine Vendor-Quelle für Feature- und Compliance-Aussagen.
- Wenn möglich mindestens eine unabhängige Quelle zur Validierung.
- Praktiker- oder Kundenbelege ergänzen, wenn verfügbar.
- DACH-Nischen-Player oder versteckte Suite-Features als solche kennzeichnen.

Ist die Evidenzlage dünn, **darf das Tool nicht als starke Empfehlung
auftauchen** (`fit: conditional` oder `partial`, nicht `good_fit`).

### 3. DSGVO und Data-Governance

Wiederkehrende Gate-Kriterien für DACH:

- DSGVO-Posture allgemein
- AVV/DPA verfügbar
- Sub-Prozessoren transparent
- SCC / Schrems-II-Exposition bei Nicht-EU-Vendors
- **Tatsächliche Datenresidenz für die AI-Funktion** — nicht nur für die
  Kern-SaaS
- Retention-, Logging-, Masking- und Lösch-Verhalten
- Optionen für Self-Hosted, On-Prem, Air-Gapped oder BYO-LLM, wo relevant

Bei sensiblen Use Cases zusätzlich prüfen, ob ausgelöst wird:

- DPIA-Pflicht
- Beschäftigtendaten-Beschränkungen nach Art. 88 DSGVO / BDSG
- Betriebsrat / BetrVG-Mitbestimmung
- EU-AI-Act-Pflichten (Transparenz, Logging, menschliche Aufsicht,
  Risikoklassifizierung)
- Sektorvorgaben wie BaFin, DORA, NIS2 oder Public-Sector-Souveränität

Wichtig: **Eine EU-Region allein genügt nicht**, wenn AI-Requests durch
unklare Modell-Provider oder Sub-Prozessoren laufen.

### 4. Enterprise-Operabilität

Das Tool muss in einem realen DACH-Unternehmen betreibbar sein, nicht
nur im Demo funktionieren.

Prüfen:

- SSO / SCIM / RBAC
- Audit-Logs
- Admin-Controls
- Deployment- und Tenant-Modell
- Support-Modell und Vertragbarkeit
- Vendor-Stabilität
- Referenzkunden, idealerweise EU/DACH

Fehlen operative Basics, sollte `enterprise_readiness` herabgestuft
werden — auch wenn die Feature-Qualität stark ist.

### 5. DACH-Realitäts-Fit

Ein Tool kann technisch gut sein und trotzdem die falsche Empfehlung für
diesen Atlas sein.

Passt es zur Realität:

- Deutschsprachige Inhalte, Daten oder UI, wo nötig
- Einbettung in vorhandene Stacks (M365, Microsoft Teams, SAP,
  ServiceNow, Jira, GitHub/GitLab, …)
- Erwartungen regulierter Branchen
- Beschaffungspräferenz für freigegebene Suiten gegenüber neuen
  Spezialvendoren

Bevorzuge Lösungen, die Freigabe-Reibung in den Umgebungen reduzieren,
für die der Atlas geschrieben ist.

### 6. Caveats sind First-Class-Daten

Nie ein Tool eintragen, ohne die Gründe zu nennen, warum jemand es
ablehnen könnte.

Typische Caveats in diesem Repository:

- Hosting US-only oder unklar
- AI-Add-on hat anderen Datenpfad als das Hauptprodukt
- Beta / Early Access / dünner Enterprise-Beleg
- Schwacher DACH-Footprint
- Keine belastbare unabhängige Evidenz
- Arbeitsrechtliches Risiko bei Mitarbeiter-Monitoring
- Unklare Preise, Beschaffung oder Lock-in

Verändert ein Caveat die Einsatzfähigkeit materiell, gehört der Eintrag
auf `conditional`/`partial` — oder wird abgelehnt.

## Stop-Kriterien

**Nicht** als Atlas-Empfehlung aufnehmen, wenn eines dieser Kriterien
zutrifft:

- Keine konkrete Evidenz für genau diesen Use Case
- Nur Roadmap- oder Launch-Ankündigungs-Belege
- Compliance-Story vage oder rein marketinggetrieben
- AI-Datenfluss oder Sub-Prozessoren unklar
- Tool ist für DACH-Enterprise oder -Mittelstand realistisch nicht
  beschaffbar
- Empfehlung ignoriert offensichtliche DACH-Themen (Arbeitsrecht,
  Datenschutz, Souveränität)
- Reines Generic-Model-Frontend ohne Workflow-spezifischen Vorteil

## Rating-Disziplin

Schema und gewünschte Lesart:

`fit` (Tool ↔ Use Case):

- `good_fit` — starker Workflow-Match mit Evidenz
- `conditional` — nützlich, aber nur unter bestimmten rechtlichen,
  technischen oder Stack-Annahmen
- `partial` — löst nur einen Teil der Aufgabe
- `immature` — zu früh, zu dünn, zu unbelegt

`enterprise_readiness` (Tool im Enterprise-Kontext):

- `enterprise_ready` — operativ und vertraglich für breiten
  Enterprise-Einsatz plausibel
- `team_ready` — taugt für Teams, aber kein breiter Enterprise-Default
- `evaluation_only` — ein PoC wert, keine Produktiv-Empfehlung
- `irrelevant_for_enterprise` — keine ernsthafte Passung für die
  Zielgruppe
- `unknown` — Evidenz zu dünn, um eine Aussage zu treffen

Bei regulierten oder beschäftigtenrelevanten Use Cases im Zweifel zur
**konservativeren Einstufung** greifen.

## Praktische Defaults

- **Boring beats flashy.** Lieber freigabefähige Defaults als
  Frontier-Tools mit Show-Effekt.
- **DACH-/EU-Fit vor globalem Hype** mit schwacher regionaler Evidenz.
- **Bestehende Suite-Capabilities** bevorzugen, wenn sie
  Beschaffungs-Reibung deutlich senken.
- **Self-hosted oder kontrollierbare Deployment-Pfade** für sensible
  Workloads bevorzugen.
- **„Top AI Tools"-Argumentationen ablehnen**, solange sie nicht in
  konkreten Use Case, Evidenzkette und DACH-Constraint-Analyse übersetzt
  sind.

## Was jeder PR beantworten muss

Diese acht Fragen gehören in die PR-Beschreibung jedes Beitrags, der
einen Use Case oder ein Tool hinzufügt oder materiell ändert:

1. Was genau wird hinzugefügt oder geändert?
2. Zu welcher Stage und welchem Use Case gehört es?
3. Welche Quellen belegen Fit, Readiness und Caveats?
4. Warum ist das speziell für DACH-Teams relevant?
5. Wo liegen die Compliance- und Datenresidenz-Constraints?
6. Standalone-Tool, Suite-Feature oder Baustein?
7. Welche zentralen Caveats oder Ausschluss-Bedingungen gibt es?
8. Warum ist das besser als ein bereits gelisteter Incumbent oder eine
   Suite-Lösung?

Ohne diese Antworten ist ein PR unvollständig.
