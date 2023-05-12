import { Notify } from "notiflix";

const form = document.querySelector(".form")



form.addEventListener('submit', event => {
  event.preventDefault();

const delay = Number(form.delay.value)
const step = Number(form.step.value)
const amount = Number(form.amount.value)

  for (let i = 1; i <= amount; i+=1) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    
  }
})


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay)
  })
}
