const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require('electron');
const fs = require('fs'), path = require('path');
const pkg = require('./package.json');
let win;
function create() {
  win = new BrowserWindow({ width: 1280, height: 820, title: 'OS Lab Simulator ' + pkg.version, autoHideMenuBar: false,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file:')) { e.preventDefault(); if (/^https:/.test(url)) shell.openExternal(url); } });
}
function about() {
  dialog.showMessageBox(win, { type: 'info', title: 'About OS Lab Simulator', message: 'OS Lab Simulator ' + pkg.version,
    detail: 'Author and publisher: Iqbal Uddin Khan\nDepartment of Information Technology, FEST, Hamdard University\nLicence: MIT\nhttps://github.com/iqbalsound/os-lab-simulator' });
}
ipcMain.handle('save-pdf', async (_e, html, name) => {
  const w = new BrowserWindow({ show: false, webPreferences: { sandbox: true } });
  await w.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
  const hdr = '<div style="font:9pt Arial;width:100%;text-align:right;margin-right:0.3in">OS Lab Simulator ' + pkg.version + ' | Iqbal Uddin Khan | Department of Information Technology, FEST HU</div>';
  const ftr = '<div style="font:9pt Arial;width:100%;text-align:right;margin-right:0.3in">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>';
  const buf = await w.webContents.printToPDF({ pageSize: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: hdr, footerTemplate: ftr,
    margins: { top: 0.3, bottom: 0.3, left: 0.7, right: 0.3 } });
  w.destroy();
  const r = await dialog.showSaveDialog(win, { defaultPath: name, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
  if (r.canceled || !r.filePath) return null;
  fs.writeFileSync(r.filePath, buf); return r.filePath;
});
app.whenReady().then(() => {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: 'File', submenu: [{ role: 'quit' }] }, { label: 'View', submenu: [{ role: 'reload' }, { role: 'togglefullscreen' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'resetZoom' }] },
    { label: 'Help', submenu: [{ label: 'About', click: about }, { label: 'Project page', click: () => shell.openExternal('https://github.com/iqbalsound/os-lab-simulator') }] }]));
  create();
});
app.on('window-all-closed', () => app.quit());
