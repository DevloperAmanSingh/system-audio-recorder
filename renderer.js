const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const status = document.getElementById("status");

let isRecording = false;

startBtn.onclick = async () => {
  await window.recorder.start();
  isRecording = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  status.textContent = "Recording...";
};

stopBtn.onclick = async () => {
  await window.recorder.stop();
  isRecording = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  status.textContent = "Recording saved";
};

// Initialize
stopBtn.disabled = true;
