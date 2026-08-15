# UI design brief — Study Desk mock

The brief handed to Claude Design on 2026-08-15 to produce the accepted visual
direction. P0.1 is blocked until this mock is approved.

Sources: product spec §9–12, §103–105, §111–113; P0.1 packet PART I and §51–53.

---

## Brief as issued

Design the **Study Desk** for Codex Bible: an offline-first Bible study
workstation that ships as one self-contained HTML file and runs identically on
phone, tablet, and desktop.

### The core idea

Codex Bible is not a collection of separate Bible-study screens. It is a
**synchronized workspace where Scripture controls everything around it.** The
Bible stays visible; selecting something in it updates every compatible study
pane at once. That single behaviour is the product.

### Visual identity

A premium graphic novel — inked panel borders, halftone texture, caption boxes,
strong shadows, graphic chapter headers, restrained comic typography and accent
colour.

**Scripture itself stays conventionally typeset and highly readable.** The comic
treatment frames the text; it never competes with it. Decoration must never
obscure verse references, make text hard to select, or imply that editorial
content is Scripture.

### Screens to design

1. **Desktop Study Desk** — Bible centre, surrounded by Commentary, Word Study,
   Atlas, Cross References. Two to four resizable panes.
2. **Tablet** — reader plus one collapsible study pane.
3. **Phone portrait** — single pane, bottom navigation
   `READ | SEARCH | STUDY | NOTES | MORE`, study panes as a swipe-up drawer.
4. **Home screen** — styled like a comic issue cover: continue reading, "find the
   verse" natural-language box, quick study shortcuts, study progress.
5. **Pane pinned state** — see below.

### Fixture content to use

Matthew 4:12–17. Tagged interactive elements: `light` → Strong's **G5457**
(φῶς, phōs), `kingdom` → **G932** (βασιλεία), and the places **Galilee**,
**Nazareth**, **Capernaum**.

### The three selection behaviours to show

- **Verse** selected → Commentary and Cross References update, each visibly
  naming the selected verse.
- **Word** selected → Word Study shows the Strong's entry.
- **Place** selected → Atlas centres that place.

### Pin and Follow — design this carefully

Every pane can **FOLLOW** (updates with selection) or be **PINNED** (frozen).
A pane must **never silently stop following.** Pinned state needs an unmistakable
visual treatment — a reader glancing at the screen must never mistake stale
content for synchronized content.

Show a pinned Commentary holding Matthew 4:16 while the Bible has moved to 4:17.

### Themes

Six: Classic Comics (warm paper, inked outlines), Golden Age (vintage halftone),
Modern Graphic Novel (dark, cinematic), Parchment (classical, minimal comic),
Study Mode (minimal decoration), Night Study (dark reading).

Show at least Classic Comics and Night Study.

### Hard constraints

- **WCAG 2.2 AA.** Contrast ratios must hold in every theme.
- **No hover-only interaction.** Every hover affordance needs a tap equivalent.
  The primary target is a phone.
- **Words of Christ in red must not rely on colour alone** — it needs a
  non-colour cue for accessibility and a high-contrast alternative.
- **No external assets.** No Google Fonts, no CDN, no remote icons. The real app
  cannot fetch anything at runtime, so the design must not depend on it. System
  font stacks and inline SVG only.
- **Touch targets sized for one-handed phone use**, primary actions near the
  bottom edge.
- **Reduced-motion support** for any animation.

### Also worth showing if scope allows

Reader in **Page Mode** (discrete comic-style pages) versus **Scroll Mode**
(continuous), and the full-screen reading mode where the interface recedes and
almost only Scripture remains.

### What this is not

Not a visual-polish exercise for its own sake, and not a frozen final design.
It is the accepted direction P0.1 builds against — enough to validate responsive
layout, the synchronized-pane concept, and the comic identity.
