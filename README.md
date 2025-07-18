# System Audio Recorder

A simple Electron desktop application for recording system audio on macOS using FFmpeg and BlackHole virtual audio driver.

## What This Does

This app captures all system playing on your Mac and it will save it as mp3 file. I used blackhole here to take the audio of the system. 


## Technical Flow

1. User clicks "Start Recording" → Renderer process calls `window.recorder.start()`
2. Preload script forwards call to main process via IPC
3. Main process spawns FFmpeg with BlackHole as audio source
4. FFmpeg continuously captures and encodes system audio to `system_audio.mp3`
5. User clicks "Stop Recording" → FFmpeg process terminates gracefully

## Requirements

- **macOS** (uses AVFoundation framework)
- **BlackHole 2ch** virtual audio driver installed
- **FFmpeg** installed and accessible in PATH
- **Node.js** and **npm**

## Electron App

<img width="629" height="432" alt="Screenshot 2025-07-14 at 8 04 59 PM" src="https://github.com/user-attachments/assets/9189fe78-075c-47f7-9ee1-7e453bfae1b6" />

## Usage

```bash
npm install
npm start
```

