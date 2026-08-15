# Release checklist

Every box is ticked before a tag is pushed. An unticked box is a blocked release,
not a judgement call.

## Correctness
- [ ] `npm run verify` passes on a clean clone
- [ ] Build is byte-identical across two different paths, timezones, and locales
- [ ] Every roadmap item in this release is `[x]` -- independently verified
- [ ] No packet in this release has an open finding

## Failure behaviour
- [ ] Deliberate breakage confirmed to exit non-zero
- [ ] Negative tests pass for every parser and importer

## Security
- [ ] Dependency hashes verified against real upstream
- [ ] Threat model reviewed and still accurate
- [ ] No secrets, tokens, or developer paths in the artifact

## Documentation
- [ ] CHANGELOG updated with real entries, not "various fixes"
- [ ] Docs match shipped behaviour
- [ ] Every internal link resolves

## Manual
- [ ] Manual test matrix complete, with dates
- [ ] Release artifact tested from a clean directory, as a user would obtain it

## Tag
- [ ] Version bumped
- [ ] Tag signed and pushed
- [ ] Artifact checksum published
