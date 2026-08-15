# Documentation

| Directory | Contents | Audience |
|---|---|---|
| [00-overview](00-overview/) | What this is, why it exists, glossary | Everyone |
| [01-spec](01-spec/) | Product and engineering specification | Contributors |
| [02-security](02-security/) | Threat model, security architecture | Reviewers |
| [03-guides](03-guides/) | Task-oriented how-to guides | Users |
| [04-reference](04-reference/) | Formats, schemas, lookup tables | Contributors |
| [05-development](05-development/) | Roadmap, ADRs, build, testing, review | Contributors |

The numbering is deliberate: it orders the tree from "why" through "what" to
"how", and keeps directories sorted in that order in every file listing.

## Doc hygiene

A stale doc is a defect, and a worse one than a missing doc -- it makes readers
confident and wrong. See [05-development/doc-hygiene.md](05-development/doc-hygiene.md).

## Naming

This project was renamed from **Codex Bible** to **Manna** on 2026-08-15.

The Markdown specifications under `01-spec/` are the **living documents** and use
the current name throughout. The original `.docx` files under `_source-docx/` are
preserved unchanged as historical artifacts and still say "Codex Bible" -- they
are provenance, not contracts. If the two disagree on anything other than the
name, the Markdown wins and the `.docx` is the thing to correct.

Renamed identifiers:

| Was | Now |
|---|---|
| `codex-bible.html` | `manna.html` |
| `codex-library.js` | `manna-library.js` |
| `__CODEX_LIBRARY__` | `__MANNA_LIBRARY__` |
| `.codexlibrary` | `.mannalibrary` |
| `codex-backup` | `manna-backup` |

Note that "Codex" survives deliberately in `04-reference/bundled-resources.md`
where it refers to manuscripts -- the Westminster Leningrad Codex is a different
thing entirely and was shielded from the rename.
