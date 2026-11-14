# Releasing a new version

1. `git pull` to get the latest `main`.
2. Copy the new files over the working tree, update `CHANGELOG.md`.
3. `git add -A && git commit -m "Release 1.1.0"`
4. `git tag -a v1.1.0 -m "Version 1.1.0"`
5. `git push origin main --tags`
6. GitHub: Releases > Draft a new release > choose tag `v1.1.0` > paste the CHANGELOG entry > Publish release.

## Desktop release 2.0.0 (separate from web 1.1.0)
1. Copy the repo files in, commit to `main` (Pages keeps serving the root `index.html` = web 1.1.0).
2. `git tag -a v2.0.0 -m "Desktop 2.0.0" && git push origin main --tags`
3. The workflow **Release desktop app** builds DEB, RPM, Windows installer and portable, adds `SHA256SUMS.txt` and publishes the release `v2.0.0`.
4. Check the Actions tab; edit the release notes if you like. The `v1.1.0` release is untouched.
