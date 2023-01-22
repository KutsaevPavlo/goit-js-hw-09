const startBtn = document.querySelector('button[data-start]');

// console.log(startBtn.textContent)

const stopStn = document.querySelector('button[data-stop]');

// console.log(stopStn.textContent)



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
