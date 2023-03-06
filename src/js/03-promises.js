import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inpDelay = document.querySelector('[name=delay]');
const inpStep = document.querySelector('[name=step]');
const inpAmount = document.querySelector('[name=amount]');
form.addEventListener('submit',promisesGenerator);

function promisesGenerator(evt){
  evt.preventDefault();
  let tempDelay = +inpDelay.value; //convert to number first value
  for (let i=0;i<inpAmount.value;i++){
    createPromise(i,tempDelay)
    .then(data=>Notiflix.Notify.success(`✅ Fulfilled promise ${data.position} in ${data.delay}ms`))
    .catch(data=>Notiflix.Notify.failure(`❌ Rejected promise ${data.position} in ${data.delay}ms`));
    tempDelay +=+inpStep.value; //increase next delay and convert to number
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3; //condition for resolve
  return new Promise((fulfill,reject)=>{
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        fulfill({position,delay}) //return if response
        }
       else {
        // Reject
        reject({position,delay}) //return if reject
      }
    },delay)})
  
}

