// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');

// console.log(startBtn.textContent)

startBtn.disabled = true;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//           if (selectedDates[0] <= new Date()) {
//           window.alert("Please choose a date in the future");
//           startBtn.disabled = true;
//           return;
//         }
//       startBtn.disabled = false;
//     },
// };



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };



 flatpickr("#datetime-picker", {options});




