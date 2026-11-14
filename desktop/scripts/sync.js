// Copies the web app into desktop/app, sets the desktop version and adds the desktop bridge.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..', '..'), app = path.join(__dirname, '..', 'app');
const ver = require('../package.json').version;
fs.rmSync(app, { recursive: true, force: true }); fs.mkdirSync(path.join(app, 'docs'), { recursive: true });
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/\b1\.\d+\.\d+\b/g, ver).replace('</body>', '<script src="bridge.js"></script></body>');
fs.writeFileSync(path.join(app, 'index.html'), html);
fs.copyFileSync(path.join(__dirname, 'bridge.js'), path.join(app, 'bridge.js'));
for (const f of fs.readdirSync(path.join(root, 'docs'))) fs.copyFileSync(path.join(root, 'docs', f), path.join(app, 'docs', f));
console.log('synced app', ver);
