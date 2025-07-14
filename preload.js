const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("recorder", {
  start: () => ipcRenderer.invoke("start-recording"),
  stop: () => ipcRenderer.invoke("stop-recording")
});
