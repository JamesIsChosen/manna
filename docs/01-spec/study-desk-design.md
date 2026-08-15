# Study Desk — accepted design direction

**Status:** ACCEPTED as the visual and behavioural direction for P0.1.
**Received:** 2026-08-15, from Claude Design.
**Source bundle:** `design_handoff_study_desk` (README + prototype runtime).

## Scope warning — read before implementing

This document describes **more than P0.1 builds.** It is the accepted direction
for the Study Desk as a whole, not a P0.1 work order. Per the smallest-change
rule in `AGENTS.md`, P0.1 implements only what its roadmap acceptance criteria
require.

Specifically **out of scope for P0.1**, though fully designed here:

- The layout model — pane resizing, reordering, `⇄` column swap, presets
  (`DEFAULT / WORD FOCUS / WIDE READER / MY LAYOUT`), and `SAVE THIS ARRANGEMENT`
- Persistence of layout or preferences to `localStorage`
- The reference picker's full 66-book datalist and per-book chapter validation
- All six themes — P0.1 needs enough theming to prove the token architecture,
  not the full set
- Full-screen reading mode, Page vs Scroll mode
- The Home / issue-cover screen beyond what P0.1's required UI names

Building these in P0.1 is a YAGNI finding, not a bonus.

**Two conflicts with the engineering specification**, to resolve before the
relevant packet rather than during it:

1. **`localStorage` for layout** conflicts with engineering spec §27, which
   requires a `StorageProvider` abstraction rather than calling browser storage
   APIs directly from application code. Route it through the abstraction.
2. **`support.js` depends on `window.React`.** It is prototype runtime and is
   explicitly not part of the product — R1 and R4 forbid a runtime that fetches
   anything. Do not carry it into `src/`.

## Missing from the received bundle

`Study Desk.dc.html` — the interactive prototype — was **not included**. The
README below names its logic objects (`COM`, `XREF`, `PEOPLE`, `TOPICS`, `NOTES`,
`WORDS`, `PLACES`) as *"the fixture contract for P0.1"*. Until that file arrives,
that contract does not exist and P0.1's fixture strings are undefined beyond the
KJV verses and Strong's entries quoted below.

---

## Overview

Manna (formerly Codex Bible) is an offline-first Bible study workstation shipped as **one self-contained HTML file** that runs identically on phone, tablet, and desktop. The Study Desk is the product's core surface: a synchronized workspace where **Scripture is the controller**. Selecting a verse, a study-enabled word, or a place inside the Bible pane immediately updates every compatible study pane; a pane can be **PINNED** to deliberately break that synchronization.

This bundle documents the accepted visual and behavioural direction that P0.1 builds against. It validates three things and nothing more: responsive layout, the synchronized-pane concept, and the comic identity.

## About the design files

`Study Desk.dc.html` in this folder is a **design reference created in HTML** — a working prototype of look and behaviour, not production code to lift. `support.js` is only the runtime that lets the prototype render; it is not part of the product.

The task is to **recreate these designs in the target codebase's own environment and patterns**. The repository (`manna`) is at pre-implementation stage with an empty `src/`, so the implementer chooses the approach — but the product constraints below are non-negotiable and heavily shape that choice:

- **R1** single release file, `manna.html` (no sibling assets required at runtime)
- **R2** offline core — all core functions work with no network
- **R3** mobile first — the same file serves phone, tablet, desktop
- **R4** no server, no Node/Python/HTTP server at runtime
- **R5** Scripture integrity — never manufacture, alter, or reconstruct Scripture
- **R8** deterministic study tools

Practically: no bundler-dependent runtime fetches, no external fonts, no CDN, no remote icons. Everything inlines into one file.

## Fidelity

**High fidelity.** Colours, type scale, spacing, borders, shadows, states, and copy are final enough to build against. Two deliberate exceptions, both visible in the prototype and both intended to stay visible until real data modules exist:

1. **Atlas map** is a schematic placeholder (one ellipse for the Sea of Galilee, three labelled dots, a crosshair ring) captioned `schematic — bundled vector atlas goes here`. The real Atlas renders from a bundled vector dataset.
2. **Cover art** on the Home screen is a striped placeholder captioned `cover art / 1024 × 640`.

Neither should be shipped as final art; both mark where a bundled asset drops in.

## Fixture data

All content in the prototype is fixture data. Scripture text is **KJV (public domain)**, Matthew 4:12–17, verbatim:

- **12** Now when Jesus had heard that John was cast into prison, he departed into Galilee;
- **13** And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:
- **14** That it might be fulfilled which was spoken by Esaias the prophet, saying,
- **15** The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles;
- **16** The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.
- **17** From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.

Tagged interactive elements:

| Surface token | Selection type | Resolves to |
|---|---|---|
| `light` (v16, twice) | word | Strong's **G5457** — φῶς, phōs, noun neuter, 73 occurrences |
| `kingdom` (v17) | word | Strong's **G932** — βασιλεία, basileia, noun feminine, 162 occurrences |
| `Galilee` (v12, v15) | place | region record |
| `Nazareth` (v13) | place | town record |
| `Capernaum` (v13) | place | town record |

Words of Christ metadata covers v17 only (`Repent: for the kingdom of heaven is at hand.`).

Commentary, cross references, people, topics, and notes each have a per-verse entry for 12–17. Exact strings are in the prototype's logic class (`COM`, `XREF`, `PEOPLE`, `TOPICS`, `NOTES`, `WORDS`, `PLACES`) — treat those objects as the fixture contract for P0.1 and keep the editorial voice (short, factual, non-devotional).

## The synchronization contract

One selection service owns the active selection. Panes subscribe; each pane decides whether a given selection type applies to it.

```
SelectionContext { type, reference, selectedText, tokenId, strongsId, lemmaId, personId, placeId, sourceModule, timestamp }
type ∈ passage | verse | word | strongs | lemma | person | place | topic
```

Three behaviours the design proves:

1. **Verse selected** → Commentary, Cross References, People·Topics and Notes all update, and each **visibly names the selected verse** in its own header ("Showing for Matthew 4:17"). The Bible stays where it is.
2. **Word selected** → Word Study shows the Strong's entry immediately (no second lookup). Selection priority: a click on a tagged word wins over the verse click underneath it, and it also sets the verse context.
3. **Place selected** → Atlas centres that place and shows its record. The Bible does not navigate.

**Follow / Pin.** Every study pane has a two-segment `FOLLOW | PIN` control (`role="group"`, `aria-pressed` on the active segment). FOLLOW is the default. Pinning freezes the pane's content at the reference held when it was pinned. A pane must **never silently stop following** — see the pinned treatment below.

## Screens

Design sizes as authored (the prototype scales them to fit; the product is fluid):

| Screen | Design size | Purpose |
|---|---|---|
| Desktop Study Desk | 1440 × 900 | Bible centre, study panes left and right |
| Pinned state | 1440 × 900 | Same desk, Commentary pinned at 4:16 while the Bible is on 4:17 |
| Tablet | 1024 × 790 (in bezel) | Reader plus one collapsible study pane |
| Phone portrait | 414 × 872 (in bezel) | Single pane, bottom nav, study drawer |
| Home / issue cover | 414 × 872 (in bezel) | Continue reading, find-the-verse, shortcuts, progress |
| Full-screen reading | 1240 × 860 | Interface recedes; Page vs Scroll mode |

### 1. Desktop Study Desk

Vertical stack: desk toolbar → LAYOUT bar → panes grid → Notes strip.

**Desk toolbar** (`padding: 10px 16px`, `border-bottom: var(--bw) solid var(--ink)`, background `var(--panel)`):
`STUDY DESK` in display face 17px, then an `ACTIVE · MATTHEW 4:16` badge (mono 10px/`letter-spacing:.1em`, `padding:5px 8px`, background `var(--accent)`, text `var(--onAccent)`, 2px ink border), spacer, `SCROLL MODE | PAGE MODE` segmented control, `FULL-SCREEN READ` button. All controls `min-height: 34px`.

**LAYOUT bar** (`padding: 7px 16px`, background `var(--paper)`): `LAYOUT` label; preset group `DEFAULT | WORD FOCUS | WIDE READER | MY LAYOUT` (2px ink border, 32px tall, active = `var(--accent)` on `var(--onAccent)`, `MY LAYOUT` disabled at 45% opacity until something is saved); `SAVE THIS ARRANGEMENT` (solid ink, paper text); a status note (`DRAG ANY PANE EDGE TO RESIZE · ▲▼ REORDER · ⇄ SWAP SIDE`, or `UNSAVED ARRANGEMENT · …` when dirty); then one chip per pane — `XREF PEOPLE COMM WORD ATLAS` — each chip a 2px-bordered row of label + `▲` + `▼` + `⇄` buttons (30 × 32px each). Known cosmetic issue: this row wraps at narrow desk widths.

**Panes grid**: `display: grid; gap: 12px; padding: 12px; grid-template-columns: <leftW>px 1fr <rightW>px` — default `300px 1fr 372px`. Left and right columns are `display:flex; flex-direction:column; gap:12px`; each pane is `flex: <grow> 1 0`.

Default arrangement — left: Cross Refs, People·Topics. Centre: Bible. Right: Commentary, Word Study, Atlas. Notes is a full-width strip pinned under the grid (not part of the arrangement model).

**Pane shell** (all study panes): background `var(--panel)`, `border: var(--bw) solid var(--ink)`, `box-shadow: var(--sh2)`, `border-radius: 2px`, `display:flex; flex-direction:column; min-height:0`, body `overflow:auto`.

**Pane header**: `padding: 7px 9px`, background `var(--head)`, `border-bottom: var(--bw) solid var(--ink)`, title in display face 15px uppercase `letter-spacing:.06em` colour `var(--headInk)`, spacer, then the `FOLLOW | PIN` group (2px `var(--headInk)` border, segments 30px tall, mono 700 9px).

**Bible pane** header additionally carries the reference picker and a `CONTROLLER` badge (mono 700 9px, `var(--headInk)` background, `var(--head)` text) — the badge is the standing reminder that this pane drives everything else.

**Reference picker** — typeable and pickable, three fields, all `min-height:34px`, 2px `var(--headInk)` border, `var(--paper)` background, `var(--ink)` text, mono 600 11px:
- `BOOK` — text input, `width:132px`, backed by a `<datalist>` of all 66 KJV books; accepts exact or prefix match, case-insensitive ("phil" → Philippians).
- `CH` — number input, `width:56px`, `min=1`, validated against real KJV chapter counts per book.
- `V` — number input, `width:56px`.
Commit on `change` or Enter (Enter also blurs). Invalid input never changes the reference; it shows an inline amber chip beside the fields: `NO BOOK MATCHES "ZZZ"`, `ISAIAH HAS 66 CHAPTERS`, `MOCK VERSES 12–17 ONLY`. Selecting a book resets the chapter to 1.

Off-fixture references show a full-width amber caption under the header: `MOCK DATA COVERS MATTHEW 4:12–17 ONLY. ROMANS 1 WOULD LOAD FROM THE INSTALLED TEXT MODULE.` In the product this becomes the module-missing state.

**Chapter panel** (top of the reader, background `var(--ink)`, text `var(--paper)`, `padding: 22px 26px 20px`): kicker `CHAPTER <n>` mono 600 10px `letter-spacing:.22em`; book name display face 52px/.92 uppercase; one-line summary in the Scripture serif 14px at 85% opacity. Derived from the current reference, not hardcoded.

**Verse rows**: `font: 400 19px/1.62 var(--fs)`, `max-width: 62ch`, `padding: 9px 12px 9px 46px`, `border-radius: 3px`, `role="button"`, `tabindex="0"`, verse number absolutely positioned left in mono 700 11px `var(--muted)`. Selected verse: background `var(--sel)`, `box-shadow: inset 5px 0 0 var(--accent)`, `outline: 2px solid var(--accent)`, `aria-current="true"`. Reader body carries the halftone: `radial-gradient(var(--dot) 1px, transparent 1.3px)` at `background-size: 5px 5px`.

**Token treatment** — non-colour cues are load-bearing:
- study word: `border-bottom: 3px double currentColor`; selected adds `var(--sel)` background, `var(--accent)` text, weight 600
- place: `border-bottom: 2px dotted currentColor`, prefixed with `◆` and a non-breaking space
- both are real `<button>`s inheriting the Scripture font so the line stays typographically intact
- a legend block sits under the last verse in a 2px dashed box restating the three cues and telling the user they can tap a verse

**Reader footer**: `◀ PREV VERSE`, `NEXT CHAPTER ▶` (38px tall, 2px ink border), spacer, sync summary in mono 600 10px — either `ALL PANES FOLLOWING SCRIPTURE` or `2 PANE(S) PINNED · COMMENTARY, ATLAS`.

**Pane bodies:**
- **Commentary** — `EDITORIAL NOTE — NOT SCRIPTURE` kicker (mono 600 9.5px, `var(--muted)`), reference in display face 20px uppercase, body in Scripture serif 15px/1.6. The kicker is a Scripture-integrity requirement, not decoration.
- **Cross Refs** — `SHOWING FOR MATTHEW 4:16` kicker, then rows separated by `1px solid var(--rule)`: reference in mono 700 11px `var(--accent2)` + text in serif 13px.
- **Word Study** — Strong's chip (mono 700 12px, `var(--ink)` background, `var(--paper)` text, 2px ink border), Greek lemma in serif 30px, transliteration italic 15px `var(--muted)`, then `NOUN · NEUTER · 73 OCCURRENCES`, gloss in serif 15px, `FROM MATTHEW 4:16`, related-word chips (2px ink border on `var(--paper)`).
- **Atlas** — `grid-template-columns: 1fr 164px`. Map cell: `var(--mapbg)` with `repeating-linear-gradient(45deg, var(--rule) 0 1px, transparent 1px 7px)`; Sea of Galilee ellipse 24% × 26% at (42%, 47%) filled `var(--water)` with 2px ink border; place dots 11px circles, 2px ink border, `var(--paper)` fill, selected dot fills `var(--accent)` and scales 1.5; a 44px `var(--accent)` ring crosshair animates to the selected place; labels mono 700 9px. Detail cell: place name display face 18px uppercase, description serif 12.5px, then all-caps mono facts.
- **People · Topics** — people as solid-bordered chips, topics as dashed-bordered chips, both 11px with 7–8px padding, under an `IN MATTHEW 4:16` kicker.
- **Notes** — single strip: `NOTES` label, reference, note text in serif 14px, `FOLLOW | PIN` at the right. Empty state: `No note on this verse yet — tap to write one.`

### 2. Pinned pane state (the one to get right)

A pinned pane changes on five axes at once, so a glance can never mistake stale content for live content:

1. **Header badge row** — full-width bar under the header, background `repeating-linear-gradient(135deg, var(--warn) 0 10px, var(--ink) 10px 20px)` (hazard stripes), holding `PINNED · HELD AT MATTHEW 4:16` in mono 700 10px, `var(--warn)` background, `#16130f` text, 2px `#16130f` border.
2. **Border** — pane border switches to `dashed` and colour to `var(--warn)`.
3. **Desaturation** — pane content `filter: saturate(.55)`, so a pinned pane visibly reads as "not live".
4. **Stale bar** at the pane's bottom edge, shown only when the pinned reference differs from the current selection: solid `var(--warn)`, `NOT FOLLOWING. Bible has moved to MATTHEW 4:17.` plus a `RESUME FOLLOW` button (solid ink, 36px). This is the guaranteed escape hatch.
5. **Toggle state** — `PIN` segment becomes the accent fill, `FOLLOW` returns to its header ink; `aria-pressed` follows.

The `PINNED` screen in the switcher is exactly this state preset: Commentary pinned at 4:16, Bible moved to 4:17.

### 3. Tablet

Device bezel `padding:18px`, `border-radius:26px`, `#101010`. Header: book + chapter in display face 17px, `ACTIVE` badge, and a `HIDE STUDY PANE ▶` / `◀ SHOW STUDY PANE` toggle (38px). Body: `grid-template-columns: 1fr 372px`, collapsing to `1fr 0px`. The study pane is one pane at a time with a four-tab strip `COMM | WORD | ATLAS | XREF` (44px tall, active = accent fill), the same pinned badge row, and `FOLLOW | PIN` as two 46px buttons at the bottom of the pane. Verse rows 19px/1.65, `max-width:58ch`.

### 4. Phone portrait

Bezel `padding:12px`, `border-radius:46px`. Status strip, then a compact header (book/chapter + `ACTIVE` badge), then the reader (18px/1.7 verses, 40px left gutter, `padding-bottom: 200px` so the drawer never covers the last verse).

**Study drawer**: absolutely positioned above the nav (`bottom: 62px`), `height: 54%`, background `var(--panel)`, `border-top: var(--bw) solid var(--ink)`, `box-shadow: 0 -8px 0 rgba(0,0,0,.18)`. Collapsed = `translateY(calc(100% - 48px))`, open = `translateY(0)`, `transition: transform .22s ease` (disabled under `prefers-reduced-motion`). Grab bar is a 48px button with a 38 × 5px handle, the pane name, and `▲ OPEN` / `▼ CLOSE`. Inside: the same four pane tabs (46px), pinned badge, pane body, and `FOLLOW | PIN` as two 50px buttons at the bottom edge.

Selecting a word or place from the reader switches the drawer to that pane and opens it — the mobile equivalent of "every compatible pane updates".

**Bottom nav**: `READ | SEARCH | STUDY | NOTES | MORE`, five equal buttons, `min-height: 62px`, mono 700 10px, active = `var(--accent)` fill with `var(--onAccent)` text, 2px dividers, `border-top: var(--bw) solid var(--ink)`. STUDY toggles the drawer.

### 5. Home / issue cover

One comic-issue card (`margin: 8px 12px`, 3px ink border, `var(--sh2)`) containing, top to bottom:
- **Masthead** on `var(--ink)`: `MANNA` in display face 34px/.85 uppercase, and right-aligned mono `NO. 04 / MATTHEW / OFFLINE`
- **Cover art placeholder** 186px tall, diagonal-striped, captioned `cover art / 1024 × 640`, with a `var(--warn)` caption box across the bottom quoting v16
- **Continue reading** — full-width 74px accent button, kicker `CONTINUE READING` + `MATTHEW 4:16` in display face 27px
- **Find the verse** — labelled text input, 50px tall, 2px ink border, value `who saw the great light?`, with the note `Answers from bundled text only. Nothing leaves the device.`
- **Quick shortcuts** — 2 × 2 grid of 64px buttons: `STRONG'S`, `ATLAS`, `TOPICS`, `NOTES`

Below the card, a **study progress** panel: `MATTHEW · 62%` and `WORD STUDIES THIS WEEK · 9 OF 15` as 16px bars (2px ink border, accent / accent2 fills), then three dashed stat tiles (`12-DAY STREAK`, `48 NOTES`, `6 MODULES`). Same bottom nav.

### 6. Full-screen reading

Chrome recedes to two hairline (`1px solid var(--rule)`) bars. Top: `FULL-SCREEN READING · INTERFACE RECEDES`, `SCROLL | PAGE`, `EXIT ✕`. Verses at `400 22px/1.75 var(--fs)`, `max-width: 60ch`, centred in a 760px column; tokens are not marked here (reading, not studying) but verses stay tappable. Bottom: `◀ VERSE` / `VERSE ▶` (or `PAGE`), and `TAP ANY VERSE TO SET THE DESK SELECTION · MATTHEW 4:16`.

- **Scroll mode** — transparent continuous column, footer `CONTINUOUS SCROLL`
- **Page mode** — the column becomes a discrete page: 760px, `padding: 40px 56px`, `var(--panel)` background, `var(--bw)` ink border, `var(--sh)` drop shadow, footer `PAGE 2 OF 9 · SWIPE OR TAP TO TURN`

## Layout model (rearrange, resize, save)

```
layout = {
  leftW: 300,               // px, clamp 180–600
  rightW: 372,              // px, clamp 180–600
  left:  ['xref','people'],           // pane order, top to bottom
  right: ['commentary','word','atlas'],
  grow:  { commentary: 240, word: 300, … },  // px-derived flex-grow, optional
  name:  'DEFAULT' | 'WORD FOCUS' | 'WIDE READER' | 'MY LAYOUT' | 'CUSTOM'
}
```

- **No visible gutters.** Resizing uses transparent 11px handles positioned on top of the pane borders themselves (`position:absolute`, `z-index:6`, `cursor:col-resize` / `row-resize`), so handles consume zero layout width. Column handles run the grid's full height at each inner column edge; row handles span the column width at each seam between stacked panes.
- **Drag maths** — column: `w = clamp(w0 ± dx / stageScale)`. Row: at pointer-down capture every pane height in that column into `grow` (px), then move `dy` between the two neighbours, floor 96px, keeping their sum constant.
- **Reorder** — `▲ ▼` move a pane within its column; `⇄` moves it to the other column (appended last, that column's custom heights reset to even). At least one pane must remain per side.
- **Presets** — `DEFAULT 300/372`; `WORD FOCUS 252/452` with Word Study first on the right and People above Cross Refs; `WIDE READER 236/288` with Atlas above Word Study.
- **Persistence** — `SAVE THIS ARRANGEMENT` writes the whole layout object to `localStorage` under `manna.layout` and it becomes the `MY LAYOUT` preset. Any manual change marks the layout `CUSTOM` and the note reads `UNSAVED ARRANGEMENT`. Follow the product's user-ownership rule: layouts are local, and should ride along in whatever settings export the app grows.

Reordering is implemented by placing panes into their column container in layout order (real DOM order), which keeps tab order matching visual order — do the same in the target framework rather than reordering visually with CSS `order`.

## Themes

Six themes, all switchable at runtime. They are CSS custom properties set on one shell element; every descendant reads `var(--token, fallback)` so nothing depends on a stylesheet.

| Token | Classic Comics | Golden Age | Modern Graphic Novel | Parchment | Study Mode | Night Study |
|---|---|---|---|---|---|---|
| `--paper` | `#f6ecd8` | `#ecdfb8` | `#1a1d22` | `#efe6d2` | `#ffffff` | `#101216` |
| `--panel` | `#fffaf0` | `#f6ebc8` | `#20242b` | `#f7f0e0` | `#ffffff` | `#171a1f` |
| `--ink` | `#16130f` | `#241d12` | `#eef1f5` | `#2b2419` | `#1a1a1a` | `#e7e4dd` |
| `--head` | `#16130f` | `#241d12` | `#2b313a` | `#4a3d28` | `#2c2c2c` | `#22262c` |
| `--headInk` | `#fff8ea` | `#f6ebc8` | `#eef1f5` | `#f7f0e0` | `#ffffff` | `#e7e4dd` |
| `--accent` | `#b3271a` | `#a8451a` | `#c33a2a` | `#7a4a1e` | `#1f4fa3` | `#e0a33c` |
| `--onAccent` | `#fff8ea` | `#f6ebc8` | `#ffffff` | `#f7f0e0` | `#ffffff` | `#101216` |
| `--accent2` | `#17558c` | `#1d5049` | `#3d6f96` | `#3d5a4a` | `#1f4fa3` | `#8fc0e8` |
| `--muted` | `#5a5144` | `#5b4e35` | `#a2acb9` | `#5b5142` | `#5c5c5c` | `#9a968c` |
| `--rule` | `rgba(22,19,15,.22)` | `rgba(36,29,18,.26)` | `rgba(238,241,245,.22)` | `rgba(43,36,25,.2)` | `rgba(0,0,0,.16)` | `rgba(231,228,221,.2)` |
| `--dot` (halftone) | `rgba(22,19,15,.13)` | `rgba(36,29,18,.2)` | `rgba(238,241,245,.07)` | `rgba(43,36,25,.05)` | `rgba(0,0,0,0)` | `rgba(231,228,221,.05)` |
| `--warn` (pinned) | `#f2b705` | `#e0a92b` | `#e7b53c` | `#c9962f` | `#e8b81c` | `#e0a33c` |
| `--mapbg` | `#e6dcc2` | `#ddcda0` | `#2a2f38` | `#e3d8bf` | `#f2f2f2` | `#1e232a` |
| `--water` | `#9db7c4` | `#8fa9a4` | `#3d5566` | `#a5b4ac` | `#c9d8e2` | `#2f4653` |
| `--desk` (behind app) | `#c9bda5` | `#bfae82` | `#0d0f13` | `#cdc0a4` | `#e8e8e8` | `#08090b` |
| `--woc` (Words of Christ) | `#a8231a` | `#8f2f14` | `#ff9a86` | `#8a3216` | `#a11f11` | `#ff9d8c` |
| `--sel` (verse highlight) | `rgba(179,39,26,.13)` | `rgba(168,69,26,.16)` | `rgba(217,75,58,.22)` | `rgba(122,74,30,.14)` | `rgba(31,79,163,.11)` | `rgba(224,163,60,.2)` |
| `--bw` (border weight) | `3px` | `3px` | `3px` | `1px` | `1px` | `2px` |
| `--sh` | `12px 12px 0 rgba(22,19,15,.55)` | `12px 12px 0 rgba(36,29,18,.5)` | `12px 12px 0 rgba(0,0,0,.7)` | `0 6px 22px rgba(43,36,25,.28)` | `0 2px 10px rgba(0,0,0,.14)` | `10px 10px 0 rgba(0,0,0,.8)` |
| `--sh2` | `5px 5px 0 rgba(22,19,15,.5)` | `5px 5px 0 rgba(36,29,18,.45)` | `5px 5px 0 rgba(0,0,0,.6)` | `0 2px 8px rgba(43,36,25,.16)` | `0 1px 4px rgba(0,0,0,.12)` | `4px 4px 0 rgba(0,0,0,.7)` |

`--bw`, `--sh`, `--sh2` and `--dot` are how the comic loudness dials down: Parchment and Study Mode drop to hairline borders, soft shadows, and little or no halftone without any structural change. Design to the tokens, never to a theme.

## Typography

System stacks only — no web fonts, ever.

```
--fd  display / comic:  "Haettenschweiler","Arial Narrow Bold","Franklin Gothic Condensed Medium",Impact,system-ui,sans-serif
--fu  UI:               system-ui,-apple-system,"Segoe UI",Roboto,sans-serif
--fs  Scripture:        "Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif
--fm  captions / meta:  ui-monospace,SFMono-Regular,Menlo,Consolas,monospace
```

Rules: `--fd` for pane titles and chapter headers only (uppercase, `letter-spacing .03–.06em`). `--fm` for every label, badge, and caption. **`--fs` for Scripture and editorial prose only, always conventionally typeset** — no condensing, no letter-spacing, no comic styling on verse text. Scripture on desktop is 19px/1.62, phone 18px/1.7, reading mode 22px/1.75.

## Accessibility (WCAG 2.2 AA — hard requirement)

- **Contrast holds in all six themes.** Two traps found and fixed in this design; keep the fixes: (a) never reset a toggle's colour to empty when it deactivates — restore its authored ink explicitly, or inactive controls end up black-on-dark; (b) the Strong's chip is `--ink` on `--paper`, not white on `--accent2`, because `--accent2` flips light in dark themes.
- **No hover-only interaction.** Nothing is revealed by hover anywhere; every affordance is a real button with a visible resting state. Phone is the primary target.
- **Words of Christ never rely on colour.** v17 carries `border-left: 4px double currentColor` plus a `✝WoC` mono superscript marker, in addition to `--woc` red. Three-way control: `RED+MARK` (colour + rule + marker), `MARK ONLY` (rule + marker, inherits body ink — the high-contrast alternative), `OFF`. Marker and rule are what carry meaning; colour is redundant by design.
- **Touch targets** — 44px+ for anything reached one-handed: bottom nav 62px, drawer tabs 46px, drawer FOLLOW/PIN 50px, tablet pane tabs 44px. Desk-only controls sit at 30–38px because they are pointer-and-keyboard surfaces; do not shrink the phone values to match them.
- **Primary actions near the bottom edge** on phone: nav, drawer controls, FOLLOW/PIN.
- **Reduced motion** — one global `@media (prefers-reduced-motion: reduce)` rule kills all animation and transition. The only motion in the design is the drawer transform and the Atlas crosshair move.
- **Semantics** — verse rows are `role="button" tabindex="0"` with `aria-current` on the selection; toggle pairs are `role="group"` with `aria-pressed`; panes are `<section aria-label>`; the reference fields have real `<label for>`; resize handles are decorative (`aria-hidden`) with `▲▼ ⇄` as the accessible equivalents. Scripture text stays selectable — decoration must never sit over it or block selection.
- Keyboard note: vertical/horizontal resize is currently pointer-only. If keyboard resizing is wanted, add discrete step controls to the pane chips rather than focusable invisible strips.

## State

```
selection: { book, chapter, verse, strongsId, placeId }   // the one controller
pins:      { [paneId]: { verse, strongsId, placeId } }    // absent = following
layout:    { leftW, rightW, left[], right[], grow{}, name }
prefs:     { theme, wocMode, readerMode, immersive }
ui:        { screen, mobilePane, drawerOpen, tabletPaneOpen, pickError }
```

Transitions: verse tap → `selection.verse`, every unpinned pane re-derives. Word tap → `selection.strongsId` + verse context, Word Study updates, on mobile the drawer switches to WORD and opens. Place tap → `selection.placeId`, Atlas centres, Bible unchanged. `PIN` snapshots the current selection into `pins[pane]`; `FOLLOW` deletes the entry. Picker commit validates then writes book/chapter/verse or `pickError` — never partially.

Persist across launches: `prefs`, `layout` (`manna.layout`), last reference, and notes. All local, all exportable; nothing leaves the device.

## Not built, deliberately

Search results, Notes editor, People Explorer detail, Topic Explorer, module import/install, and settings. Cross-column moves append rather than insert at a chosen index. Person and topic selection types are in the contract but only surfaced as chips.

## Files in this bundle

- `Study Desk.dc.html` — the interactive prototype: all six screens (switcher across the top), all six themes, live selection sync, pin/follow, layout model, reference picker. Open it directly in a browser.
- `support.js` — prototype runtime only. Not part of the product.

Everything is inline: no external fonts, no CDN, no image files, no icon fonts. Icons are text glyphs (`◆ ✝ ▲ ▼ ⇄ ◀ ▶ ✕`) — replace with inline SVG in the product if glyph rendering varies across platforms, but keep them non-colour-dependent.
