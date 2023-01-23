
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const inputDays = document.querySelector('[data-days]')
const inputHour = document.querySelector('[data-hours]')
const inputMinute = document.querySelector('[data-minutes]')
const inputSeconds = document.querySelector('[data-seconds]')
// const date = new Date();

let timerId = null;
let timerMs = null;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
          if ([selectedDates] <= Date.now()) {
          window.alert("Please choose a date in the future");
          startBtn.disabled = true;
          return;
        }
      else {
        startBtn.disabled = false;
      }
    },
  };
  
  flatpickr("#datetime-picker", options);
  
  
  
  
  
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
    
    addLeadingZero({ days, hours, minutes, seconds }); 
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    const timerParam = Object.values(value);
    const timerParamToString = timerParam.map(timerParam => timerParam.toString().padStart(2, '0'));
    inputDays.innerHTML = timerParamToString[0];
    inputHour.innerHTML = timerParamToString[1];
    inputMinute.innerHTML = timerParamToString[2];
    inputSeconds.innerHTML = timerParamToString[3];
  }
  
  
  startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      
      timerMs = [selectedDates].getTime() - Date.now().getTime();
      timerMs = timerMs - 1000;
      convertMs(timerMs);
      console.log(convertMs(timerMs)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
             
    }, 1000);
    startBtn.disabled = true;
  });
  
  
  