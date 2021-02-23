const myNum = document.querySelector('.number');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');


// const removeChildren = () => {
//    let mydiv = document.querySelector('div');
//   if(mySmiles.length>0) {
     
//       }
// }




const apply = () => {
    // removeChildren();
    let num = myNum.value;
    if (isNaN(num)) {
        alert('not a number');
    }
    for(let i=0; i<num ; i++) {
        let mySmile = document.createElement('div');
        mySmile.classList.add('smile');
        container.appendChild(mySmile);
    }
}


submit.addEventListener('click', apply);