const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getPlayer: async (args) =>
        ipcRenderer.invoke('get:player', args),
    postPlayer: async (args) =>
        ipcRenderer.invoke('post:player', args),
});