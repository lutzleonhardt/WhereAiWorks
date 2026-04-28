# Prompt v2: Tools-Seite — Refresh

> Korrekturen zu v1 (`specs/tools-page-prompt.md`). Nimm das v1-Mockup als Ausgangspunkt und ändere nur die folgenden Punkte. Designsystem, Header, Lede, Footer und Pill-Definitionen bleiben unverändert.

---

## 1. Nur Felder verwenden, die wir heute schon pflegen

`tools.yaml` enthält pro Eintrag: `id`, `name`, `category`, `url`, `maturity`. Mehr nicht.

**Streiche** aus Tabelle und Filter-Bar:

- Hosting
- Datenresidenz
- Lizenz
- Pricing-Modell

(Diese Felder kommen in einer späteren Phase, sind heute keine Realität.)

**Übrig in der Filter-Bar** (ein Select pro Filter, gleiche Optik wie bisher):

| Filter | Optionen |
|---|---|
| Kategorie | Alle / Coding / Other / Security / Infra / … |
| Stage | Alle / Discovery / Development / Testing / Ops / Doku / Customer Support |
| Suitability mind. | Alle / good_fit / conditional |
| Maturity | Alle / production / preview |

Counter („`12 von 340`") und Reset-Link bleiben rechts.

---

## 2. Tabelle: 7 Spalten — alles aus vorhandenen Daten

| # | Spalte | Quelle | Darstellung |
|---|---|---|---|
| 1 | **Tool** | `tools.yaml`: `name`, `url`, `category` | Tool-Name (Serif, 16px) · Vendor-Host darunter (Mono, mute, ~12px) · darunter die **Kategorie** als kleines Mono-Sub-Label (statt eigener Spalte) |
| 2 | **Empfohlen in** | abgeleitet aus Use-Case-Referenzen | Stage-Badges (`DEV`, `TEST`, `OPS`, …) wie in v1 |
| 3 | **Use Cases** | abgeleitet | Mono-Zahl, z. B. „`8`" |
| 4 | **Eignung** | abgeleitet aus `suitability` der referenzierenden Use Cases | gestapelte Suitability-Pills wie in v1, z. B. „`4× good_fit` / `2× conditional`" |
| 5 | **Rollen** | abgeleitet aus `roles` der Use Cases | Mono-Zahl, z. B. „`3`" |
| 6 | **Caveats** | abgeleitet aus `caveats`-Länge der Use Cases | Mini-Bar-Indikator (4 Striche, 1–4 davon eingefärbt — analog `.pill.coverage` aus dem bestehenden CSS). Mehr Striche = mehr offene Warnhinweise |
| 7 | **Maturity** | `tools.yaml.maturity` | kleines Mono-Tag: `production` neutral (`--ink-soft`), `preview` in `--amber` |

**Sortier-Badges bleiben:** `1↓` an Spalte „Empfohlen in", `2↓` an „Eignung". Hint-Zeile unter der Tabelle: „`Klick = primär sortieren · Shift+Klick = zusätzlicher Sort-Key`".

---

## 3. Volle Breite, kein horizontales Scrollen

Im v1-Mockup wurde die Tabelle rechts abgeschnitten. Das war ein Layout-Bug.

- **Container:** `.wrap` mit `max-width: 1180px` wie der Rest der Seite. **Kein** überbreiter Wrapper, **kein** `overflow-x: scroll`.
- **Tabelle:** `width: 100%` und `table-layout: fixed`.
- **Spaltenbreiten** als prozentuale Richtwerte (Summe = 100%):

  | Spalte | Breite |
  |---|---|
  | Tool | 26% |
  | Empfohlen in | 14% |
  | Use Cases | 8% |
  | Eignung | 22% |
  | Rollen | 8% |
  | Caveats | 10% |
  | Maturity | 12% |

- **Lange Vendor-Hosts** abschneiden mit `text-overflow: ellipsis` (`white-space: nowrap`), niemals die Tabelle wegen einer Zelle überdehnen.
- **Mobile-Fallback (≤720px)** wie in v1: Tabelle wird zur Card-Liste, jede Zeile ein Block.

---

## 4. Phantom-Tabellenkopf entfernen

Im v1-Render war oberhalb des sichtbaren Headers eine zweite, blass gerenderte Kopfzeile zu sehen. Bitte nur **einen** `<thead>`. Sticky-Verhalten relativ zum Site-Header ist okay, aber kein doppelter Render davor.

---

## 5. Beispieldaten (10–12 Zeilen reichen)

Aus jeder Zeile entfernt: Hosting, Datenresidenz, Lizenz, Pricing.
Pro Zeile ergänzt: `use_cases` (Zahl), `roles` (Zahl), `caveats_level` (1–4).

| Tool | Vendor | Kategorie | Stages | UC | Eignung | Rollen | Caveats | Maturity |
|---|---|---|---|---|---|---|---|---|
| Claude Code | claude.com | Coding | DEV TEST OPS | 8 | 6× good_fit · 2× conditional | 4 | 2 | production |
| GitHub Copilot | github.com | Coding | DEV TEST | 7 | 4× good_fit · 3× conditional | 4 | 2 | production |
| Cursor | cursor.com | Coding | DEV | 4 | 3× good_fit · 1× conditional | 2 | 1 | production |
| Aider | aider.chat | Coding | DEV | 2 | 2× good_fit | 2 | 1 | production |
| JetBrains AI | jetbrains.com | Coding | DEV TEST | 5 | 3× good_fit · 2× partial | 3 | 2 | production |
| Continue.dev | continue.dev | Coding | DEV | 3 | 2× good_fit · 1× conditional | 2 | 1 | production |
| Sourcegraph Cody | sourcegraph.com | Coding | DEV | 3 | 1× good_fit · 2× conditional | 2 | 2 | production |
| Tabnine | tabnine.com | Coding | DEV | 3 | 1× conditional · 2× partial | 2 | 3 | production |
| Atlassian Rovo | atlassian.com | Other | DOC OPS | 3 | 1× good_fit · 2× conditional | 3 | 2 | production |
| Snyk AI Trust | snyk.io | Security | DEV OPS | 2 | 2× conditional | 2 | 3 | preview |
| LiteLLM | github.com/BerriAI | Infra | OPS | 2 | 1× good_fit · 1× conditional | 1 | 1 | production |
| Lakera | lakera.ai | Security | OPS | 2 | 1× conditional · 1× immature | 1 | 4 | preview |

---

## 6. Caveats-Bar-Indikator

Vier kleine Striche nebeneinander, je 4×8 px, 2 px Abstand, Border-Radius 1 px.

- `caveats_level: 1` → 1 Strich in `--ink`, 3 in `--rule-strong`
- `caveats_level: 2` → 2 in `--ink`
- `caveats_level: 3` → 3 in `--ink`
- `caveats_level: 4` → 4 in `--ink`

Mit Mono-Label rechts daneben, sehr klein („`1/4`" o. ä.) — optional, nur falls es das Layout nicht stört.

---

Alle anderen v1-Vorgaben (Designsystem, Header, Lede, Filter-Bar-Look, Footer, Anti-Patterns) bleiben unverändert.
