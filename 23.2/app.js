const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const millseconds = document.querySelector('.mils');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');

let curMilSec = 1;
let curSec = 0;
let curMin = 0

const runWatchMM = (curMin) => {
    if (curMin < 10) {
        minutes.innerHTML = `0${curMin}`;
    } else if (curMin >= 10 && curMin <= 59) {
        minutes.textContent = curMin;
    } else if (curMin > 59) {
       curMin = 0;
       curSec = 0;
       curMin = 0;
       minutes.textContent = `0${curMin}`
    } 
}

const runWatchS = (curSec) => {
    if (curSec < 10) {
        seconds.innerHTML = `0${curSec}`;
    } else if (curSec > 10 && curSec <= 59) {
        seconds.textContent = curSec;
    } else if (curSec > 59) {
       seconds.textContent = `00`;
       curMin++;
       runWatchMM(curMin);
       curSec = 0;
    } 
}


const runWatchM = () => {
    if (curMilSec < 99) {
        millseconds.innerHTML = `01`;
    } else if (curMilSec > 99 && curMilSec < 999) {
        millseconds.textContent = Math.floor(curMilSec/10);
    } else if (curMilSec > 999) {
       runWatchS(curSec++);
       curMilSec = 10;
    } 
    curMilSec = curMilSec +10 ;
}



let timer = setInterval(runWatchM, 10);

pause.addEventListener('click', () => {
    clearInterval(timer)});

start.addEventListener('click', () => {
    timer = setInterval(runWatchM,10)});