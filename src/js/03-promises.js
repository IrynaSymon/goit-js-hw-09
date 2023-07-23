import { Notify } from "notiflix";
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onPromiseCreate);
function onPromiseCreate(evt) {
  evt.preventDefault();
  let inputDelay = Number(formEl.delay.value);
  let inputStep = Number(formEl.step.value);
  let inputAmount = Number(formEl.amount.value);

  for (let i = 1; i <= inputAmount; i += 1){

  createPromise(i, inputDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    inputDelay += inputStep;
  }
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}