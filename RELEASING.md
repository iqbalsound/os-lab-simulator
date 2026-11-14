# Releasing a new version

1. `git pull` to get the latest `main`.
2. Copy the new files over the working tree, update `CHANGELOG.md`.
3. `git add -A && git commit -m "Release 1.1.0"`
4. `git tag -a v1.1.0 -m "Version 1.1.0"`
5. `git push origin main --tags`
6. GitHub: Releases > Draft a new release > choose tag `v1.1.0` > paste the CHANGELOG entry > Publish release.
