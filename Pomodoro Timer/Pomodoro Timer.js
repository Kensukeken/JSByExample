let intervalId;
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let minutesStr = minutes < 10 ? '0' + minutes : minutes;
  let secondsStr = seconds < 10 ? '0' + seconds : seconds;
  timerDisplay.textContent = minutesStr + ':' + secondsStr;

  if (timeLeft === 0) {
    clearInterval(intervalId);
    alert('Time is up!');
  } else {
    timeLeft--;
  }
}

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

function stopTimer() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 25 * 60;
  updateTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer();
