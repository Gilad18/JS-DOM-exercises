const myText = document.querySelector('p');
const plus = document.querySelector('.increase');
const minus = document.querySelector('.decrease');


const addPX = () => {
    style = window.getComputedStyle(myText, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize>1&&currentSize<91) {
    myText.style.fontSize = (currentSize + 10) + 'px';
    }
}

const lowerPX = () => {
    style = window.getComputedStyle(myText,null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if(currentSize>11&&currentSize<100)
    myText.style.fontSize = (currentSize - 10) + 'px';
}

plus.addEventListener('click' , addPX);
minus.addEventListener('click' , lowerPX);


