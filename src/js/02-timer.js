import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const dataInput = document.querySelector("#datetime-picker");
const dataStartBtn = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");
let itervalId = null;
let timerId = null;
let formateDate = null;
dataStartBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {
      return Notify.failure("Please choose a date in the future")
    };
    timerId = selectedDates;
    dataStartBtn.disabled = false;
  },
}
flatpickr(dataInput, options);
dataStartBtn.disabled = true;
dataStartBtn.addEventListener("click", onStartTimer);
function onStartTimer() {
  getTimer();
 dataStartBtn.disabled = true;
}
function getTimer() {
  itervalId = setInterval(() => {
    formateDate = timerId - new Date();
    const convertDate = convertMs(formateDate);
    if (formateDate <= 0) {
      clearInterval(itervalId);
    }
    else {
      clockFormat(convertDate);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function clockFormat({ days, hours, minutes, seconds }) {
  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataSeconds.textContent = seconds;
}
  
 function addLeadingZero(value){
  return String(value).padStart(2, 0);
}