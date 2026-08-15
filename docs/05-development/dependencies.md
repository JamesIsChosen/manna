# Dependencies

Adding one is rarely the right answer. When it is:

1. Vendor the actual release artifact into `vendor/`.
2. Record its version and upstream SHA-256 below.
3. Confirm `npm run verify-vendor` passes.
4. Justify the size cost in your PR.

Prefer dependency-free, audited libraries.

## Runtime dependencies

| Package | Version | Upstream SHA-256 | License | Why |
|---|---|---|---|---|

## Build-time dependencies

| Package | Version | License | Why |
|---|---|---|---|

## Verification

`npm run verify-vendor` recomputes each vendored file's hash and compares it to
this table. It must fail non-zero on any mismatch.

**Verify against real upstream, not the project's own manifest.** Download the
artifact yourself from the publisher and compare. Checking a file against a hash
stored in the same repo proves only that the repo is internally consistent.
