function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");
btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);
let timerIdInt = null;

function onStart() {
    timerIdInt = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);

 btnStart.toggleAttribute("disabled");   
}  
function onStop() {
    clearInterval(timerIdInt);
    btnStart.removeAttribute("disabled");
}

