# Codex Bible

A comic-book-themed, offline-first Bible study workstation delivered as **one
self-contained HTML file** that runs on desktop, tablet, and phone with no
server, account, installation, or Internet connection.

## Status

Pre-implementation. Specification complete; P0.1 not yet started.
See [docs/05-development/ROADMAP.md](docs/05-development/ROADMAP.md).

## The non-negotiables

| # | Requirement |
|---|---|
| R1 | Single release file -- `codex-bible.html`, no sibling assets required |
| R2 | Offline core -- all core functions work with no network |
| R3 | Mobile first -- the same file serves phone, tablet, and desktop |
| R4 | No server required -- no Node, Python, HTTP server, or backend at runtime |
| R5 | Scripture integrity -- never manufacture, alter, or reconstruct Scripture |
| R6 | User ownership -- personal data is local and exportable |
| R7 | Safe import -- imported modules are untrusted and never gain executable capability |
| R8 | Deterministic study tools -- search and lookup produce reproducible results |

Full text: [docs/01-spec/engineering-specification.md](docs/01-spec/engineering-specification.md) §2.

## Documentation

| Path | Contents |
|---|---|
| [docs/01-spec/product-specification.md](docs/01-spec/product-specification.md) | Product spec, 114 sections |
| [docs/01-spec/engineering-specification.md](docs/01-spec/engineering-specification.md) | Engineering spec, 120 sections |
| [docs/01-spec/p0.1-implementation-packet.md](docs/01-spec/p0.1-implementation-packet.md) | Study Desk sync contract + P0.1 packet |
| [docs/05-development/ROADMAP.md](docs/05-development/ROADMAP.md) | Working roadmap with markers |
| [docs/05-development/adr/](docs/05-development/adr/) | Architecture decision records |
| [docs/_source-docx/](docs/_source-docx/) | Original .docx source documents |

## Quick start

Nothing to run yet. P0.1 produces the first build.

## License

[GNU Affero General Public License v3.0 only](LICENSE). See
[ADR-0001](docs/05-development/adr/0001-agplv3-license.md).
