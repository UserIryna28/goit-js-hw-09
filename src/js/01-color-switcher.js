const dataStart = document.querySelector("[data-start]");
const dataStop = document.querySelector("[data-stop]");
const body = document.querySelector('body');

const timerId = null
dataStart.addEvenListener("click", onStartClick) 
dataStop.addEvenListener("click", onStopClick)

function onStartClick(){
    dataStart.disabled = true
timerId = setInterval(changeBgColor, 1000)
}

function onStopClick() {
    dataStart.disabled = false
    clearInterval(timerId)
}

function changeBgColor() {
    const color = getRandomHexColor
    body.style.backgroundColor = color
}



function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}