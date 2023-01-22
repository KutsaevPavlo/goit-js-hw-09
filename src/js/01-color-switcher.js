const startBtn = document.querySelector('button[data-start]');

// console.log(startBtn.textContent)

const stopBtn = document.querySelector('button[data-stop]');

// console.log(stopBtn.textContent)

const bodyEl = document.querySelector("body");
// console.log(bodyEl.textContent)
stopBtn.disabled = true;

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



  startBtn.addEventListener("click", () => {
      timerId = setInterval(() => {
          const color = getRandomHexColor();
          bodyEl.style.backgroundColor  = color;
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        

  });


  stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
  });