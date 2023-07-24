
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");
btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);
let timerIdInt = null;
function onStart(event) {
    timerIdInt = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}  
function onStop(event) {
    btnStart.disabled = false;
    btnStop.disabled = true;
clearInterval(timerIdInt);

}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
