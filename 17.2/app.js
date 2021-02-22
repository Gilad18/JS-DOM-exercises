const textBox = document.querySelector('.text');
const button = document.querySelector('.submit')
const mySpan = document.querySelector('span')

let style = window.getComputedStyle(textBox);
console.log(style); 

const submitForm = () => {
  let chars = textBox.value;
  if(chars.length>100) {
    mySpan.style.visibility = 'hidden';
    alert('Thank you for submiting');
  } else  mySpan.style.visibility= 'visible';
}

button.addEventListener('click', submitForm);