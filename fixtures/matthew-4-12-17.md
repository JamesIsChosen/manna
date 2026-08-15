# Fixture — Matthew 4:12–17

The P0.1 Scripture fixture. **Source of truth for this text is the installed
module, not this file** — this records what the fixture must contain and where it
came from, per R5 and `docs/05-development/testing.md`.

## Provenance

| | |
|---|---|
| Edition | King James Bible, Pure Cambridge Edition |
| Source file | `PCE-KJV-BIBLE.md` (4,638,058 bytes), courtesy of BibleProtector.com |
| Format | `Book Chapter:Verse<TAB>text`, one verse per line |
| Extracted | 2026-08-15 |
| Licensing | See `docs/05-development/adr/0004-kjv-uk-rights.md` — UNRESOLVED |

## Text — verbatim from source

```
12  Now when Jesus had heard that John was cast into prison, he departed into Galilee;
13  And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:
14  That it might be fulfilled which was spoken by Esaias the prophet, saying,
15  The land of Zabulon, and the land of Nephthalim, [by] the way of the sea, beyond Jordan, Galilee of the Gentiles;
16  The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.
17  From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.
```

## ⚠ Supplied words — an open question the design does not answer

Verse 15 contains `[by]`. The brackets are not punctuation. They mark a word
**supplied by the translators** with no counterpart in the underlying Greek —
the KJV's own transparency convention, rendered as *italics* in print and as
square brackets in most plain-text editions.

**The accepted design drops them.** `docs/01-spec/study-desk-design.md` quotes
verse 15 as "…and the land of Nephthalim, by the way of the sea…" and states the
Scripture is reproduced "verbatim". It is not: the supplied-word marking is lost.

This is not a typo, it is an **R5 question**: "never manufacture, silently alter,
or reconstruct displayed Scripture." Silently promoting a translator's supplied
word to the same status as translated text is an alteration of meaning, and it is
exactly the kind of distinction the Pure Cambridge Edition exists to preserve.

**Unresolved:** how supplied words are represented and rendered.

- The **data model** must carry the distinction — stripping it at import makes it
  unrecoverable.
- The **reader** must render it — traditionally italic, which also satisfies the
  "never rely on colour alone" rule.
- **Round-tripping** must preserve it.

Until that is decided, **this fixture keeps the source's brackets** rather than
inventing a rendering. Any implementation that displays verse 15 without marking
`by` as supplied does not match the source module.

## Tagged interactive elements

| Token | Verse | Type | Resolves to |
|---|---|---|---|
| `light` (twice) | 16 | word | G5457 — φῶς, phōs, noun neuter, 73 occurrences |
| `kingdom` | 17 | word | G932 — βασιλεία, basileia, noun feminine, 162 occurrences |
| `Galilee` | 12, 15 | place | region |
| `Nazareth` | 13 | place | town |
| `Capernaum` | 13 | place | town |

Words of Christ metadata covers verse 17 only.

## Editorial fixture data

Commentary, cross-references, people, topics and notes for verses 12–17 are the
`COM`, `XREF`, `PEOPLE`, `TOPICS`, `NOTES`, `WORDS` and `PLACES` objects in
`docs/01-spec/design-reference/Study Desk.dc.html`. Those objects are the fixture
contract for P0.1.

**They are editorial content, not Scripture.** Every surface displaying them
carries the `EDITORIAL NOTE — NOT SCRIPTURE` kicker required by the design.
