# Build

## Commands

```bash
npm ci        # exact dependency install from the lockfile
npm run build # produce the release artifact
npm test
npm run verify # lint + test + build, what CI runs
```

## Determinism

Two builds from identical source, dependencies, and configuration should produce
byte-identical output.

Verify it properly -- two builds in the same shell prove almost nothing:

```bash
npm run build && sha256sum <artifact>
rm -rf dist && npm run build && sha256sum <artifact>   # must match
```

Then vary the environment, because that is where determinism actually breaks:

```bash
TZ=Asia/Tokyo LC_ALL=C npm run build && sha256sum <artifact>
```

Common sources of nondeterminism: embedded timestamps, absolute source paths,
filesystem iteration order, locale-dependent sorting, and hash seeds.

**Never embed a build-machine path.** `scripts/lint.js` should check for known
home-directory patterns and fail if it finds one.

## Fail closed

Every build and verification step must exit **non-zero** on failure. A script
that prints an error and exits 0 passes CI silently, which is worse than not
having the check.

Prove it deliberately: break something, run the build, and confirm `echo $?` is
not 0.
