
const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyRef = document.querySelector("body");
btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);
let timerIdInt = null;
btnStop.disabled = true;
function onStart() {
    btnStart.disabled = true;  
    btnStop.disabled = false;
timerIdInt = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);
//  btnStart.toggleAttribute("disabled",true);   
}  
function onStop() {
    btnStart.disabled = false;  
    btnStop.disabled = true;
clearInterval(timerIdInt);
// btnStart.removeAttribute("disabled");
}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
