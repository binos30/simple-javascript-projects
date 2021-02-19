const timer = document.getElementById("timer");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("am-pm");
const btn = document.getElementById("btn");

var currentTime,
  alarmElement,
  activeAlarm = false;
const sound = new Audio("src/audio/Alarm-Fast-High-Pitch-A1.mp3");
sound.loop = true;

function showTime() {
  const date = new Date();
  currentTime = date.toLocaleTimeString();
  timer.textContent = currentTime;

  if (currentTime == alarmElement) sound.play();

  setTimeout(showTime, 1000);
}
showTime();

function addHrMinSec(el) {
  var t = 59;

  if (el.id == "hours") t = 12;

  for (let i = 0; i <= t; i++) {
    el.options[el.options.length] = new Option(i < 10 ? `0${i}` : i);
  }
}
addHrMinSec(hours);
addHrMinSec(minutes);
addHrMinSec(seconds);

btn.onclick = function () {
  if (!activeAlarm) {
    hours.disabled = true;
    minutes.disabled = true;
    seconds.disabled = true;
    ampm.disabled = true;

    var hoursValue = hours.value;
    if (parseInt(hours.value) < 10) hoursValue = hours.value.substr(1);

    alarmElement = `${hoursValue}:${minutes.value}:${seconds.value} ${ampm.value}`;
    this.textContent = "Clear Alarm";
    activeAlarm = true;
  } else {
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;

    sound.pause();
    alarmElement = "";
    this.textContent = "Set Alarm";
    activeAlarm = false;
  }
};
