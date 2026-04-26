"use strict";

let firstSecond = document.querySelector(".second-1");
let secondSecond = document.querySelector(".second-2");

let firstMinute = document.querySelector(".minute-1");
let secondMinute = document.querySelector(".minute-2");

let firstHour = document.querySelector(".hour-1");
let secondHour = document.querySelector(".hour-2");

const timerButton = document.querySelector(".start-timer");

timerButton.addEventListener("click", () => {
  if (timerButton.innerHTML === "Start timer") {
    startTime();
  } else {
    location.reload();
  }
});

function startTime() {
  timerButton.setAttribute("disabled", true);
  timerButton.innerHTML = "Stop timer";

  let secondSecondTime = 0;
  let firstSecondTime = 0;

  let secondMinuteTime = 0;
  let firstMinuteTime = 0;

  let firstHourTime = 0;
  let secondHourTime = 0;

  setInterval(() => {
    secondSecondTime += 1;
    secondSecond.innerHTML = secondSecondTime;
    firstSecond.innerHTML = firstSecondTime;

    secondMinute.innerHTML = secondMinuteTime;
    firstMinute.innerHTML = firstMinuteTime;

    secondHour.innerHTML = secondHourTime;
    firstHour.innerHTML = firstHourTime;

    if (secondSecondTime === 9) {
      secondSecondTime = -1;
      firstSecondTime += 1;
    }

    if (firstSecondTime === 6) {
      firstSecondTime = 0;
      secondMinuteTime += 1;
    }

    if (secondMinuteTime === 9) {
      secondMinuteTime = 0;
      firstMinuteTime += 1;
    }

    if (firstMinuteTime === 6) {
      firstMinuteTime = 0;
      secondHourTime += 1;
    }

    if (secondHourTime === 9) {
      secondHourTime = 0;
      firstHourTime += 1;
    }

    if (firstHourTime === 6) {
      firstHourTime = 0;
    }
  }, 1000);
}

function stopTimer() {
  window.location.reload();
}
