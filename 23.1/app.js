const hour = document.querySelector('.hh');
const minute = document.querySelector('.mm');
const second = document.querySelector('.ss');
const pointhour = document.querySelector('.hourMehoga');
const pointMin = document.querySelector('.minMehoga');
const pointSec = document.querySelector('.secMehoga');

let theSeconds = 0;
let theMinutes = 0;
let theHours = 0;
let theSecDegree = 0;
let theMinDegree = 0;
let theHourDegree = 0;
minute.innerHTML = theMinutes;
hour.innerHTML = theHours;  

setInterval(() => {
    if (theSeconds === 59) {
        theSeconds = -1;
        theSecDegree = -6 ;
    }
    theSeconds = theSeconds + 1;
    theSecDegree = theSecDegree + 6;
    second.innerHTML = theSeconds;
    pointSec.style.transform = `rotate(${theSecDegree}deg)`
    
} , 1000);

setInterval(() => {
    if (theMinutes === 59) {
        theMinutes = - 1;
    }
    theMinutes = theMinutes + 1;
    minute.innerHTML = theMinutes;
    theMinDegree = theMinDegree + 6;
    pointMin.style.transform = `rotate(${theMinDegree}deg)`
} , 60000);

setInterval(() => {
    if ( theHours === 23) {
        theHours = -1;
    }
    theHours = theHours + 1;
    hour.innerHTML = theHours;
    theHourDegree = theHourDegree + 15;
    pointhour.style.transform = `rotate(${theHourDegree}deg)`
} , 3600000);

