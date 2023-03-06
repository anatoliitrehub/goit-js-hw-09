const startDisable = document.querySelector('[data-start]');
const stopDisable = document.querySelector('[data-stop]');
stopDisable.disabled = true;

document.body.addEventListener('click',eventHandler);

function eventHandler({target:{dataset}}){

    if(dataset.start==='') {
        startDisable.disabled = true;
        stopDisable.disabled = false;

        colorChanger.start();
    }
    
    if(dataset.stop==='')  {
        startDisable.disabled = false;
        stopDisable.disabled = true;

        colorChanger.stop();
    }
}

const colorChanger = {
    interval:'',
    start(){
    this.interval = setInterval(()=>document.body.style.backgroundColor=getRandomHexColor(),1000);
    },
    stop(){
        clearInterval(this.interval);
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
