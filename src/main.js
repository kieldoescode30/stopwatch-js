let isStopwatchOn = false;
let stopwatchId = null;
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

document.querySelector('.js-start-btn')
  .addEventListener('click', () => {
    startStopwatch();
  });

document.querySelector('.js-stop-btn')
  .addEventListener('click', () => {
    stopStopwatch();
  });

document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    resetStopwatch();
  });


function startStopwatch() {
  if (!isStopwatchOn) {
    stopwatchId = setInterval(() => {
      updateStopwatch();
    }, 1000);
    isStopwatchOn = true;
  }
}

const hoursElement = document.querySelector('.js-hours');
const minutesElement = document.querySelector('.js-minutes');
const secondsElement = document.querySelector('.js-seconds');

function updateStopwatch() {
  time.seconds++;
  if (time.seconds === 60) {
    time.seconds = 0;
    time.minutes++;

    if(time.minutes === 60) {
      time.minutes = 0;
      time.hours++;
    }
  }

  displayTime();  
}

function stopStopwatch() {
  if (isStopwatchOn) {
    clearInterval(stopwatchId);
    isStopwatchOn = false;
  }
}

function resetStopwatch() {
  time.hours = 0;
  time.minutes = 0;
  time.seconds = 0;

  displayTime();
  stopStopwatch();
}


function displayTime() {
  let hours = time.hours < 10 ? "0" + time.hours : time.hours;
  let minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
  let seconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;

  hoursElement.innerHTML = `${hours}
  <span class="mini-text">Hours</span>
  `;
  minutesElement.innerHTML = `${minutes}
    <span class="mini-text">Minutes</span>
  `;
  secondsElement.innerHTML = `${seconds} 
    <span class="mini-text">Seconds</span>
  `;
}

