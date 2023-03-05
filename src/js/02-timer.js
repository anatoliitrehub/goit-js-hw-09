import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const butStart = document.querySelector('button[data-start]');
butStart.disabled = true;
let inputedTime;
let tempTime = {}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        inputedTime = selectedDates[0];
        const deltaTime = inputedTime.getTime() - new Date().getTime()
       if (deltaTime<0) Notiflix.Notify.failure("Please choose a date in the future");
       else {butStart.disabled = false;
       butStart.addEventListener('click',startFunction)}
    },
  };

  const fp = flatpickr("input#datetime-picker", options);

function startFunction(){
    butStart.disabled = true;

    const interv = setInterval(()=>{
        if(inputedTime.getTime() - new Date().getTime()<0) {
            clearInterval(interv);
            return;};

        const showTime = convertMs(inputedTime.getTime() - new Date().getTime());
        // console.log(showTime);
        //         console.log(tempTime);
        (tempTime === {}) ? tempTime = {...showTime} : null;

        (tempTime.days !== showTime.days) ?  
        document.querySelector('span[data-days]').textContent = addLeadingZero(showTime.days): null;
        (tempTime.hours !== showTime.hours) ?  
        document.querySelector('span[data-hours]').textContent = addLeadingZero(showTime.hours):null;
        (tempTime.minutes !== showTime.minutes) ?  
        document.querySelector('span[data-minutes]').textContent = addLeadingZero(showTime.minutes):null;
        document.querySelector('span[data-seconds]').textContent = addLeadingZero(showTime.seconds);
        tempTime = {...showTime}; // create temp var for compare changes

    },1000)
}

function addLeadingZero(value){
    return String(value).padStart(2,0);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}