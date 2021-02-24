const hour = document.querySelector('.hh');
const minute = document.querySelector('.mm');
const second = document.querySelector('.ss');

let theSeconds = 0;
let theMinutes = 0;
let theHours = 0;
minute.innerHTML = theMinutes;
hour.innerHTML = theHours;  

setInterval(() => {
    if (theSeconds === 59) {
        theSeconds = -1;
    }
    theSeconds = theSeconds + 1;
    second.innerHTML = theSeconds;
    
} , 1000);

setInterval(() => {
    if (theMinutes === 59) {
        theMinutes = - 1
    }
    theMinutes = theMinutes + 1;
    minute.innerHTML = theMinutes;
} , 60000);

setInterval(() => {
    if ( theHours === 23) {
        theHours = -1;
    }
    theHours = theHours + 1;
    hour.innerHTML = theHours;
} , 3600000);

