# OS Lab Simulator Desktop 2.0.0

Electron wrapper around the web simulator (same labs, offline). Built and released by GitHub Actions.

| Platform | Files in the release |
|---|---|
| Debian/Ubuntu | `os-lab-simulator-2.0.0-amd64.deb` |
| Fedora/RHEL/openSUSE | `os-lab-simulator-2.0.0-x86_64.rpm` |
| Windows installer | `OS-Lab-Simulator-2.0.0-x64-nsis.exe` |
| Windows portable | `OS-Lab-Simulator-2.0.0-x64-portable.exe` |

Install: `sudo apt install ./os-lab-simulator-2.0.0-amd64.deb` or `sudo dnf install ./os-lab-simulator-2.0.0-x86_64.rpm`.
Verify downloads with `SHA256SUMS.txt`. Task and Observation PDFs are saved directly (A4, your margins, header and footer).

## Build locally
`cd desktop && npm ci && npm start` (run) or `npm run dist:linux` / `npm run dist:win` (needs `rpm` on Linux; build Windows files on Windows).

## Publisher and licence
Publisher/author: Iqbal Uddin Khan, Department of Information Technology, FEST, Hamdard University. Licence: MIT (`LICENSE`).
Electron and Chromium licences are bundled by electron-builder (`LICENSES.chromium.html` inside the app).
See `docs-dev/SIGNING.md` for the Windows "Unknown publisher" warning.
