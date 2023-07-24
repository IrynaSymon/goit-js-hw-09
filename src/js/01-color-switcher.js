
const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyRef = document.querySelector("body");
btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);
let timerIdInt = null;
btnStart.disabled = true;
function onStart() {
    timerIdInt = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}  
function onStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
clearInterval(timerIdInt);

}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
