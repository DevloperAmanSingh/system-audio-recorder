const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let win;
let ffmpegProcess;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
});

ipcMain.handle("start-recording", () => {
  ffmpegProcess = spawn("ffmpeg", [
    "-f", "avfoundation",
    "-i", ":BlackHole 2ch",
    "-ac", "2",
    "-ar", "44100",
    "-y",
    "system_audio.mp3"
  ]);

  ffmpegProcess.stderr.on("data", data => {
    console.log(`FFmpeg: ${data.toString()}`);
  });
});

ipcMain.handle("stop-recording", () => {
  if (ffmpegProcess) {
    ffmpegProcess.kill("SIGINT");
    ffmpegProcess = null;
  }
});
