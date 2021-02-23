const thecode = document.querySelector('h3').innerHTML.split("");
const vault = document.querySelector('.inputCont');
let inputCode = document.querySelectorAll('input');
const verify = document.querySelector('button');
const result = document.querySelector('h4');


let myArr = [];

const emptyVault = () => {
    let currentchild = vault.firstElementChild;
    for (let i=0; i< vault.children.length; i++) {
        currentchild.value = '';
        currentchild = currentchild.nextElementSibling;
    }
}

const runTest = (ar1 , ar2) => {
    for( let i=0 ; i<ar1.length; i++) {
        if(ar1[i]!==ar2[i]) {
            return false;
        }
    } return true;
};

const check = () => {
    for (let i=0; i<inputCode.length; i++) {
        myArr.push(inputCode[i].value)
    }
    if (runTest(thecode , myArr)) {
        myArr = [];
        result.innerHTML = 'Correct!'
    } else {
        myArr = [];
        emptyVault();
        result.innerHTML = 'Wrong Code';
    }
    
}

for (let i=0 ; i<inputCode.length; i++) {
    inputCode[i].addEventListener('input' , ()=> {
        if (inputCode[i].value && inputCode[i].nextElementSibling) {
            inputCode[i].nextElementSibling.focus();
    }})
}

vault.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    let pasteToArr = paste.split('');
    let currentchild = vault.firstElementChild;
    for(let i =0 ;i<pasteToArr.length ; i++) {
        currentchild.value = pasteToArr[i];
        currentchild = currentchild.nextElementSibling
    }
})

verify.addEventListener('click', check);








