# Prompt: Tools-Seite — HTML-Gerüst (für Claude Design / Artefakt-Mode)

> Selbständiger Prompt zum Generieren eines HTML-Mockups für die Tools-Tabelle der Seite **„Where AI Works"**. Spec-Hintergrund: `specs/tools-page.md`. Direkt in Claude (oder vergleichbares Design-Tool) einsetzen.

---

## Aufgabe

Erstelle eine **statische HTML-Seite** (eine einzige `.html`-Datei mit eingebettetem CSS, kein JS nötig fürs Mockup) für eine **filter- und sortierbare Tools-Tabelle**. Das Gerüst soll dem bestehenden editorialen Design der Seite „Where AI Works" entsprechen — nüchtern, redaktionell, kein SaaS-Look, keine Framework-Komponenten, keine Buttons mit Schatten oder Gradients.

Ziel ist **nur das Markup + CSS** für ein Mockup. Interaktionslogik (Sortieren, Filtern) wird später mit Vanilla-JS angebaut, im Mockup darf alles statisch sein.

---

## Designsystem (übernehmen)

### Farben

```
--bg:         #FAFAF7   /* warmer off-white Hintergrund */
--bg-sunk:    #F2F1EB   /* eingelassene Flächen / hover */
--ink:        #1F2328   /* Primärtext */
--ink-soft:   #4A4F57   /* Sekundärtext */
--ink-mute:   #7A7F87   /* Eyebrow / Meta */
--rule:       #E4E2DA   /* feine Trennlinien */
--rule-strong:#CDCAC0   /* sichtbare Trennlinien / Borders */
--accent:     #0F4C81   /* Tiefes Navy für Links / Akzent */
--accent-soft:#E6EEF6

--green:  #2F855A   /* good_fit */
--amber:  #B7791F   /* conditional */
--orange: #C05621   /* partial */
--red:    #9B2C2C   /* immature */
```

### Typografie

- **Serif** (`Newsreader`, fallback Georgia) — H1/H2/H3, Tool-Namen, Lede-Zitate
- **Sans** (`IBM Plex Sans`) — Body, Buttons, Selects, Tabelleninhalt
- **Mono** (`IBM Plex Mono`) — Eyebrow-Labels, Meta-Daten, Spaltenköpfe der Tabelle, Sortier-Badges, Filter-Labels (immer UPPERCASE mit `letter-spacing: 0.12em`, kleine Größe ~11px)

Schriftfamilien per Google-Fonts-Link einbinden: Newsreader (400, 500), IBM Plex Sans (400, 500, 600), IBM Plex Mono (400, 500).

### Form-Sprache

- **Border-radius: 2px** überall (außer Pills: `999px`). Keine soften Rundungen.
- **1px solid borders** mit `--rule` / `--rule-strong`. Keine Box-Shadows, keine Glows.
- **Trennlinien** statt Container-Cards. Editorial = viel Whitespace, dünne Linien, Typografie als Hierarchie.
- **Hover** = Border wird dunkler (`--ink` / `--ink-soft`) oder Background wird `--bg-sunk`. Niemals Skalierung, niemals Schatten.
- **Selects** custom gestylt mit eigenem Chevron-SVG, kein nativer System-Look.

### Suitability-Pill (kommt von der bestehenden Seite, übernehmen)

```html
<span class="pill green"><span class="dot"></span>Good fit</span>
<span class="pill amber"><span class="dot"></span>Conditional</span>
<span class="pill orange"><span class="dot"></span>Partial</span>
<span class="pill red"><span class="dot"></span>Immature</span>
```

Pill = Pille mit 999px-Radius, dünne Border in der Akzentfarbe (z. B. `rgba(47, 133, 90, 0.35)` für green), 8px-Dot links, 12px-Text. Hintergrund bleibt `--bg`.

### Layout-Container

- Max-Width: **1180px**, `.wrap` mit `padding: 0 28px` (640px: `0 20px`).
- Sticky Header (64px hoch) mit Wordmark links, Nav-Links rechts (`Atlas`, `Finder`, **`Tools`** [active]). Aktiver Link hat dünne Border in `--rule-strong`.

---

## Seitenaufbau

### 1. Site-Header (übernehmen)

Wordmark `Where AI Works` in Serif, kleine Mono-Sub `WO AI HEUTE WIRKT`. Rechts: Navigation `Atlas`, `Finder`, `Tools` (active markiert). 1px Bottom-Border.

### 2. Lede / Hero

- **Eyebrow** (Mono, uppercase): `KATALOG · 340 TOOLS`
- **H1**: „Welches Tool taugt — und *wo*?"
- **Kicker** (Serif, italic): „Reverse-Lookup für AI-Tools im Software-Lifecycle. Kein Best-Of, sondern eine ehrliche Sicht: in welcher Stage und mit welcher Eignung ein Tool empfohlen wird."
- Meta-Zeile (Mono): `— 340 Tools  — 947 Quellen  — Stand: April 2026`

### 3. Filter-Bar

Eine Zeile mit Selects + Reset-Link, darunter dünne Trennlinie. Felder als gestyltes `<select>` (eigene Chevron-SVG, monospace Label oben drüber):

| Filter | Werte |
|---|---|
| **Kategorie** | Alle / Coding / Other / Doku / Test / Ops / … |
| **Hosting** | Alle / SaaS / Self-hosted / On-Prem / Air-gapped |
| **Datenresidenz** | Alle / EU verfügbar / „No-train" verfügbar |
| **Lizenz** | Alle / Commercial / Open Source / Source-available |
| **Pricing-Modell** | Alle / Free / Freemium / Paid / Enterprise-Tier |
| **Suitability mind.** | Alle / good_fit / conditional |

Rechts in der Bar: ein Mono-Hint „**N von 340**" (Counter) und ein Mono-Link „Filter zurücksetzen".

Die Filter-Bar darf umbrechen (`flex-wrap`). Auf Mobile: zwei Spalten, dann eine.

### 4. Die Tabelle — das Herzstück

**Spalten** (in dieser Reihenfolge):

1. **Tool** — Serif, 16px, mit kleinem Vendor-Hostname darunter in Mono+`--ink-mute` (z. B. „cursor.com"). Klickbar als Link zur (späteren) Detailseite.
2. **Kategorie** — Mono, uppercase, klein
3. **Empfohlen in** — drei kleine Stage-Badges nebeneinander (z. B. `DEV`, `TEST`, `OPS`), Mono uppercase, 1px-Border
4. **Eignung** — gestapelte Mini-Pills: z. B. `5× good_fit`, `2× conditional` als kompakte Suitability-Pills (siehe oben), in einer Zeile
5. **Hosting** — Mono-Liste (z. B. `SaaS · Self-hosted`)
6. **Datenresidenz** — Mono (z. B. `EU · US`, mit kleinem `no-train`-Marker falls vorhanden)
7. **Lizenz** — Mono (z. B. `Open Source` oder `Commercial`)
8. **Pricing** — Mono (z. B. `Freemium`, `Enterprise-Tier`)
9. **Maturity** — kleine Pill (`production` neutral, `preview` amber)

**Tabellen-Styling**:

- Keine vertikalen Linien, nur horizontale 1px Trennlinien zwischen Zeilen in `--rule`.
- Header-Zeile in Mono uppercase, 11px, `--ink-mute`, mit dickerer Bottom-Border (`--rule-strong`).
- Zeilen-Hover: Hintergrund `--bg-sunk`.
- Genug vertikales Padding (12–14px), damit es atmet — keine dichte SaaS-Zeile.
- Tabellen-Header **sticky** unter dem Site-Header.

**Sortier-UI im Header** (für Mockup statisch andeuten):

- Jeder Spaltenkopf ist klickbar (Cursor-Pointer).
- Aktive Sortier-Spalten zeigen rechts neben dem Label ein **kleines Mono-Badge** mit Reihenfolge und Richtung: `1 ↓`, `2 ↑`, `3 ↓`. Badge: 1px-Border, 9px-Text, 1×4px Padding.
- Im Mockup: Spalte „Empfohlen in" trägt `1 ↓`, Spalte „Eignung" trägt `2 ↓` — zeigt das Multi-Sort-Pattern.
- Erklärung als Mono-Hint **unter** der Tabelle: „Klick = primär sortieren · Shift+Klick = zusätzlicher Sort-Key"

**Mobile-Verhalten** (unter ~720px):

- Tabelle wird zur **Card-Liste**: jede Zeile ein Block mit 1px-Border, Tool-Name oben groß, restliche Spalten als `Label: Wert`-Paare in Mono. Filter-Bar bleibt sichtbar, scrollt aber nicht horizontal.

### 5. Footer (übernehmen)

Mono, klein, `--ink-mute`. Links: `© Where AI Works · CC-BY-SA Content`. Rechts: Links zu GitHub, Methodologie.

---

## Beispiel-Daten (mindestens 10 Zeilen, gerne 15)

Mische bekannte Tools, damit die Eignung-/Stage-Verteilung realistisch wirkt. Vorschlag:

| Tool | Vendor | Kategorie | Stages | Eignung | Hosting | Datenresid. | Lizenz | Pricing | Maturity |
|---|---|---|---|---|---|---|---|---|---|
| Claude Code | claude.com | Coding | DEV, TEST, OPS | 6× good_fit, 2× conditional | SaaS | EU, US, no-train | Commercial | Paid | production |
| GitHub Copilot | github.com | Coding | DEV, TEST | 4× good_fit, 3× conditional | SaaS | US | Commercial | Freemium | production |
| Cursor | cursor.com | Coding | DEV | 3× good_fit, 1× conditional | SaaS | US | Commercial | Freemium | production |
| Aider | aider.chat | Coding | DEV | 2× good_fit | Self-hosted | — | Open Source | Free | production |
| JetBrains AI | jetbrains.com | Coding | DEV, TEST | 3× good_fit, 2× partial | SaaS | EU, US | Commercial | Paid | production |
| Continue.dev | continue.dev | Coding | DEV | 2× good_fit, 1× conditional | Self-hosted | — | Open Source | Free | production |
| Sourcegraph Cody | sourcegraph.com | Coding | DEV | 1× good_fit, 2× conditional | SaaS, Self-hosted | EU, US, no-train | Commercial | Enterprise-Tier | production |
| Tabnine | tabnine.com | Coding | DEV | 1× conditional, 2× partial | SaaS, Self-hosted, Air-gapped | EU, US, no-train | Commercial | Freemium | production |
| Atlassian Rovo | atlassian.com | Other | DOC, OPS | 1× good_fit, 2× conditional | SaaS | EU, US | Commercial | Enterprise-Tier | production |
| Snyk AI Trust | snyk.io | Security | DEV, OPS | 2× conditional | SaaS | EU, US | Commercial | Enterprise-Tier | preview |
| LiteLLM | github.com/BerriAI | Infra | OPS | 1× good_fit, 1× conditional | Self-hosted | — | Open Source | Free | production |
| Cloudflare AI Gateway | cloudflare.com | Infra | OPS | 1× good_fit | SaaS | EU, US | Commercial | Freemium | production |
| Lakera | lakera.ai | Security | OPS | 1× conditional, 1× immature | SaaS | EU | Commercial | Enterprise-Tier | preview |
| Gitpod Flex | gitpod.io | Infra | DEV | 2× good_fit | Self-hosted, On-Prem | — | Commercial | Enterprise-Tier | production |
| AWS Q Developer | aws.amazon.com | Coding | DEV, OPS | 2× conditional, 1× partial | SaaS | US | Commercial | Paid | production |

Stage-Badges: `DISC` (Discovery), `DEV` (Development), `TEST` (Testing/QA), `OPS` (Ops/Monitoring), `DOC` (Documentation), `SUPP` (Customer Support).

---

## Constraints / Anti-Pattern

- **Kein Framework, kein Tailwind, kein Bootstrap.** Nur natives HTML + eingebettetes `<style>`.
- **Keine Icons aus FontAwesome/Lucide** — wenn Icons nötig (z. B. Sort-Chevron im Select), inline SVG.
- **Keine Karten mit Schatten, keine Glassmorphism, keine Gradients** außer dem ganz dezenten Card-Verlauf wie in `.atlas-intro-card` (kaum sichtbar).
- **Keine bunten Status-Hintergründe** — nur die definierten Suitability-Farben für die Pills, sonst Schwarz/Grau-Töne.
- **Keine fetten Buttons**. „Filter zurücksetzen" ist ein Mono-Link, kein Button.
- **Editorial bleibt editorial**: viel Weißraum, dünne Linien, Serif für Titel, Mono für Meta. Wenn es nach SaaS-Dashboard aussieht → falsch.

---

## Output

Eine **einzelne `.html`-Datei**, vollständig, im Browser direkt öffnenbar. CSS inline im `<head>`. Mit den ~15 Beispielzeilen. Kein JavaScript nötig — Mockup ist statisch, Sortier-Badges fest gerendert.

Im HTML-Kommentar oben ein Hinweis: `<!-- Mockup: /tools für Where AI Works · später per Astro + vanilla JS dynamisch -->`
