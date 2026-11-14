# OS Lab Simulator 1.1.0

Browser-based companion to the Operating Systems lab manual (CS-213, Revised Edition Fall 2026).
Author: Iqbal Uddin Khan, Department of Information Technology, FEST, Hamdard University. Licence: MIT.

**Desktop app (v2.0.0):** DEB, RPM, Windows installer and portable are on the Releases page; see `desktop/README.md`.

**Web (v1.1.0):** open `index.html` (double-click). No install, works offline.
**GitHub Pages:** Settings > Pages > Branch `main`, folder `/ (root)`.

## Features
- Menu with all 15 labs: objective, steps, hint, starter code with a TODO, **Check my work**
- Code editor (line numbers, Tab key, Copy, Save) and a separate **Solution** tab with Copy and "Paste solution into editor"
- **Flow diagram** for every lab built from the solution code; click a box to highlight the matching code line
- **Terminal window** that replays the reference compile-and-run of the solution (outputs measured with gcc; Lab 05 is typical output)
- Visualizers: scheduling Gantt, Banker's safety, memory fit, page replacement, disk head, fork tree
- Formatted notes editor, About box (author, version, licence)
- **Task PDF** (lab, your code, terminal output) and **Observation PDF** (your notes) with name, roll number and date, in A4 format: the browser print dialog opens; choose "Save as PDF"
- **Themes:** Auto, Light, Dark, Matrix, Sepia, Ocean (remembered in the browser)
- Lab Manual PDF download (`docs/OS_Lab_Manual_Fall_2026.pdf`)

## Limits
The terminal replays reference output; it does not execute student code (no C interpreter yet).
The Lab Manual PDF was rendered with a substitute font (Aptos is not available on the build machine).

## Tests
`npm i jsdom && node tests/smoke.test.js`
