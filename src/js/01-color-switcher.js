const dataStart = document.querySelector("[data-start]");
const dataStop = document.querySelector("[data-stop]");
const body = document.querySelector('body');

const timerId = null
dataStart.addEventListener("click", onStartClick) 
dataStop.addEventListener("click", onStopClick)

function onStartClick() {
    //якщо кнопка onStartClick натиснена, disabled забороняє повторне натискання
    dataStart.disabled = true
    //при натисненні onStartClick відбувається changeBgColor з інтервалом 1с.
timerId = setInterval(changeBgColor, 1000)
}

function onStopClick() {
    dataStart.disabled = false
    //якщо кнопка onStopClick натиснена - зупиняємо зміну backgroundColor
    clearInterval(timerId)
}

function changeBgColor() {
    // для генерування випадкового кольору використовуємо функцію getRandomHexColor
    const color = getRandomHexColor
    body.style.backgroundColor = color
}



function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}