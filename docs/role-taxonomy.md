# Rollen-Taxonomie für den Atlas

Dieses Dokument beschreibt, **welche Rollen** im Atlas geführt werden,
**wofür** sie verwendet werden und **wie** neue oder importierte Use Cases
darauf gemappt werden.

Die Rollen-Taxonomie lebt im Hauptprojekt `WhereAiWorks`, nicht im
Seed-Repo. Das Seed-Repo konsumiert diese Taxonomie nur für Discovery- und
Research-Läufe.

## Zweck der Rollen

Die Rollen steuern im Produkt zwei Dinge:

- den Finder: Welche Use Cases nach Auswahl einer Rolle sichtbar werden
- den Atlas-Filter: Welche Stages für eine Rolle relevant wirken

Die Rollen sind deshalb **keine reine Marketing-Zielgruppe**, sondern eine
operative Klassifikation der Arbeit, für die ein Use Case gedacht ist.

## Wichtige Abgrenzung

Die Produkt-Copy spricht über Leser und Käufer des Atlas, zum Beispiel:

- CTOs
- Product Owners
- Team Leads
- Engineers

Diese Begriffe sind wichtig für Positionierung und Kommunikation, aber sie
sind **nicht automatisch identisch** mit `use_case.roles`.

Für `use_case.roles` gilt stattdessen:

- Es geht um die operative Arbeitsrolle, die mit dem Use Case arbeitet.
- Ein Use Case kann mehrere Rollen bedienen.
- Rollen sollen im Finder zu klar unterscheidbaren Zielmengen führen.

Beispiel:

- Ein CTO kann den Atlas lesen.
- Der Use Case `Interview-Scheduling` gehört trotzdem operativ eher zu
  `hr-recruiting`.
- Der Use Case `CI-Pipeline-Debug` gehört operativ eher zu
  `platform-devops-engineer` und `software-engineer`.

## Modell-Entscheidung

`use_case.roles` modelliert **operative Rollen**.

`stage.roles` ist **abgeleitet** und beschreibt die Vereinigungsmenge der
Rollen aller Use Cases einer Stage. Es ist keine eigenständige Taxonomie.

`src/data/roles.yaml` ist die maschinenlesbare Quelle der Wahrheit für alle
erlaubten Rollen-IDs.

## Aktueller Implementierungsstand

Stand heute gilt:

- Im Hauptprojekt `WhereAiWorks` ist `src/data/roles.yaml` die Quelle der
  Wahrheit.
- Im Seed-Repo liest `discover-use-cases` den vollständigen Rollenkatalog
  aus `roles.yaml` plus den Stage-Kontext.
- Discovery soll neue `use_case.roles` **nicht mehr blind von
  `stage.roles` vererben**, sondern pro Kandidat auswählen.
- Alte Discovery-Runs können noch die frühere Logik enthalten und sind
  deshalb beim Import kritisch zu prüfen.

Konsequenz:

- Die Taxonomie wird im Hauptprojekt entschieden.
- Die eigentliche Nacharbeit liegt jetzt zuerst auf
  `src/data/roles.yaml` und `src/content/use_cases/**`.
- Das Seed-Repo ist bereits auf die neue Richtung umgestellt, ersetzt aber
  keine redaktionelle Entscheidung über die finale Rollenliste.

## Qualitätskriterien für Rollen

Eine Rolle gehört in die Taxonomie, wenn sie:

- in mehreren Use Cases oder mindestens in einer klaren Stage-Familie
  wiederkehrt
- für Nutzer im Finder verständlich auswählbar ist
- ein unterscheidbares Set an Zielen erzeugt
- nicht nur ein Synonym einer schon vorhandenen Rolle ist

Eine Rolle gehört **nicht** in die Taxonomie, wenn sie:

- nur ein Alias einer anderen Rolle ist
- nur eine Hierarchiestufe ausdrückt, aber keinen anderen Arbeitskontext
- nur für einen einzelnen exotischen Use Case gebraucht wird

## Arbeitsvorschlag V1

Dies ist der aktuelle Arbeitsvorschlag für die operative Taxonomie.

Bewusste Entscheidung für V1:

- lieber **9 klar unterscheidbare operative Rollen** als 12+ halb
  überlappende Rollen
- Führungs- und Leserpersonas vorerst **nicht** als `use_case.roles`
  modellieren
- `CTO`, `IT-Leitung`, `Team Lead`, `Engineering Manager` bleiben in der
  Produkt-Copy wichtig, werden aber noch nicht als operative Finder-Rollen
  eingeführt

Begründung:

- Der aktuelle Content ist stark operativ geprägt.
- Für viele Use Cases wäre eine Führungsrolle eher Sponsor als direkter
  Nutzer.
- Zu frühe Führungsrollen würden den Finder verwässern und zu breites
  Tagging provozieren.

| ID | Anzeigename | Typische Abdeckung |
|---|---|---|
| `product-manager` | Product Manager / Product Owner | Discovery, PRDs, User Stories, Priorisierung |
| `software-engineer` | Software Engineer | Implementierung, Refactoring, Debugging, Dokumentation |
| `software-architect` | Software Architect | Architektur, Systemdesign, technische Leitplanken |
| `qa-engineer` | QA Engineer | Teststrategie, Testautomatisierung, Bug-Triage |
| `security-engineer` | Security Engineer / AppSec | Threat Modeling, Security-Reviews, Guardrails, AppSec |
| `platform-devops-engineer` | Platform / DevOps Engineer | CI/CD, Infrastruktur, Kubernetes, Incident-Arbeit |
| `customer-support` | Customer Support | Ticketing, Reply Suggestions, Triage, Agent Enablement |
| `sales-presales` | Sales / Pre-Sales | Discovery Calls, Proposals, RFPs, Account Research |
| `hr-recruiting` | HR / Recruiting | Recruiting, Onboarding, HR-Operations |

## Bewusst nicht in V1

Diese Rollen sind **bewusst noch keine** kanonischen `use_case.roles`:

- `cto-it-lead`
- `engineering-manager-team-lead`

Grund:

- Beide sind derzeit näher an Leserpersona, Sponsor oder Budgethalter als an
  einer wiederkehrenden operativen Tätigkeit im Use-Case-Bestand.
- Wenn wir sie jetzt einführen, steigt das Risiko, dass sie auf zu viele Use
  Cases als unscharfe Sammelrolle gesetzt werden.
- Falls sich später zeigt, dass bestimmte Use Cases tatsächlich ein eigenes
  Zielprofil für Führungskräfte haben, können diese Rollen als zweite
  Iteration ergänzt werden.

## Mapping-Regeln für Use Cases

Beim Setzen von `use_case.roles` gilt:

- So wenige Rollen wie möglich, so viele wie nötig.
- Eine Rolle nur setzen, wenn der Use Case für diese Rolle im Alltag
  sinnvoll auswählbar wäre.
- Nicht aus Stage-Zugehörigkeit automatisch Rollen vererben.
- Keine Rollen nur deshalb setzen, weil Führungskräfte theoretisch
  mitlesen oder budgetieren.
- `security-engineer` nur setzen, wenn Security wirklich operativ beteiligt
  ist, nicht bloß als allgemeiner Review-Schritt am Rand.

Praktische Heuristik:

- Primärrolle: Wer würde den Use Case am ehesten direkt nutzen?
- Sekundärrolle: Wer würde ihn ebenfalls regelmäßig operativ nutzen?
- Keine Tertiärrolle: Wer ihn nur abnimmt, genehmigt oder einkauft, bekommt
  normalerweise kein Rollen-Tag.

Beispiele:

- `ci-pipeline-debug`:
  `platform-devops-engineer`, ggf. zusätzlich `software-engineer`
- `prd-drafting`:
  `product-manager`
- `reply-suggestions`:
  `customer-support`
- `threat-modeling`:
  `software-architect`, ggf. zusätzlich `security-engineer`
- `iac-security-scanning`:
  `platform-devops-engineer`, ggf. zusätzlich `security-engineer`

## Umgang mit Synonymen und Aliases

Die Taxonomie kennt genau **eine kanonische ID pro Rolle**.

Synonyme wie diese werden **nicht** als eigene Rollen geführt:

- `PM`, `PO`, `Product Owner`, `Product Manager`
- `Developer`, `Software Engineer`, `Backend Engineer`, `Frontend Engineer`
- `Architect`, `Software Architect`, `Solution Architect`, `Lead Developer`
- `DevOps`, `Platform Engineer`, `SRE`
- `Support`, `Support Agent`, `Customer Success`
- `HR`, `Recruiting`, `Talent Acquisition`
- `AppSec`, `Application Security`, `Security Engineer`

Solche Begriffe gehören als `aliases` oder als redaktionelle Beschreibung
zur kanonischen Rolle, aber nicht als eigene ID in `use_case.roles`.

## Pflege-Regeln pro Datei

| Datei | Rolle |
|---|---|
| `src/data/roles.yaml` | Kanonischer Rollenkatalog |
| `src/content/use_cases/<stage>/<slug>.md` | Operative Rollen je Use Case |
| `src/content/stages/<slug>.md` | Vereinigungsmenge der Rollen aller Use Cases der Stage |

## Regel für `stage.roles`

`stage.roles` soll inhaltlich immer der Vereinigungsmenge der
`use_case.roles` aller Kind-Use-Cases entsprechen.

Konsequenz:

- `stage.roles` wird nicht als kreative Zusatzklassifikation gepflegt
- `stage.roles` darf keine Rolle enthalten, die in keinem Kind-Use-Case
  vorkommt
- wenn ein neuer Use Case importiert wird, ist `stage.roles` danach zu
  prüfen

## Verhältnis zum Seed-Repo

Das Seed-Repo ist **nicht** die Quelle der Wahrheit für Rollen.

Das Seed-Repo darf:

- die Taxonomie aus `WhereAiWorks` lesen
- sie in Briefings referenzieren
- neue Use Cases auf diese Taxonomie mappen helfen

Das Seed-Repo soll **nicht**:

- eine konkurrierende Rollenliste pflegen
- `stage.roles` blind in neue `use_case.roles` kopieren

Aktuelle Regel für Discovery:

- Discovery bekommt den vollständigen Rollenkatalog aus `roles.yaml`
- Discovery bekommt zusätzlich Stage-Kontext
- Discovery wählt pro neuem Use Case eine Teilmenge der passenden Rollen
- Discovery vererbt Rollen nicht pauschal von der Stage

## Migrations-Reihenfolge

1. Rollenkatalog in `src/data/roles.yaml` festlegen
2. Bestehende `use_case.roles` auf die neue Taxonomie mappen
3. `stage.roles` aus den Kind-Use-Cases nachziehen
4. Neue und alte Discovery-Stubs beim Import darauf prüfen, ob die Rollen
   zur V1-Taxonomie passen
5. Falls nötig, Discovery-Runs mit alter Rollenhistorie gezielt neu
   erzeugen oder ihre Stubs manuell nachtaggen

## Offene Entscheidungen

Diese Punkte sind vor der finalen Migration bewusst zu klären:

- Reicht `software-architect` ohne eigene `engineering-manager`- oder
  `tech-lead`-Rolle für V1 aus?
- Soll `platform-devops-engineer` bewusst auch klassische SRE-/Ops-Themen
  abdecken?
- Reicht `hr-recruiting` als gemeinsame Rolle für Recruiting und Onboarding,
  oder müssen diese später getrennt werden?
- Reicht `sales-presales` als gemeinsame Rolle für AE, Sales Engineer und
  Bid-/Proposal-Arbeit, oder braucht das später eine Aufteilung?
- Ist `security-engineer` in V1 groß genug, um als eigene Rolle zu bleiben,
  oder sollte es später wieder in Architektur/Platform zurückgeführt werden?

Bis zur finalen Entscheidung gilt dieses Dokument als redaktioneller
Arbeitsstand für die Umstellung.
