const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('osLab', { savePdf: (html, name) => ipcRenderer.invoke('save-pdf', html, name) });
