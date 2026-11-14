# Publisher name and code signing

**What is already set:** author, vendor, maintainer, copyright, homepage and the MIT licence are in `desktop/package.json`.
They appear in the .deb/.rpm metadata (`dpkg -s`, `rpm -qi`), in Windows file properties and in Add/Remove Programs.

**The Windows "Unknown publisher" warning** (UAC prompt, SmartScreen) is not controlled by metadata. Windows shows a publisher
only when the .exe carries an Authenticode signature from a certificate issued to that publisher. Unsigned builds always show
"Unknown publisher" and SmartScreen may warn on first download (choose More info > Run anyway).

Ways to remove it (pick one):
1. Apply to the SignPath Foundation (free code signing for open-source projects) and add its GitHub Action to the workflow.
2. Buy an OV or EV code-signing certificate from a CA, or use Azure Artifact (Trusted) Signing if your identity qualifies.
   Then add secrets `CSC_LINK` (base64 .pfx) and `CSC_KEY_PASSWORD` to the repository; electron-builder signs automatically.
3. Keep unsigned and publish the SHA-256 checksums (`SHA256SUMS.txt`) so users can verify downloads.

Linux packages can be signed with GPG (`rpm --addsign`, `dpkg-sig`); not enabled here.
