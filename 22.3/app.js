const theLetter = document.querySelector('.theLetter');
const message = document.querySelector('p');
const guessedKeys = document.querySelector('.guessed');
const btn = document.querySelector('button');

const stratGame = () => {

    btn.removeEventListener('click', stratGame);
    btn.style.visibility = 'hidden';
    message.innerHTML = 'Yalla! guess the letter' ;
    message.style.color = 'black';
    theLetter.innerHTML = ' ? ';
    guessedKeys.innerHTML = '';


    let myLetter = String.fromCharCode(Math.ceil(Math.random()*26)+64);
    console.log(myLetter);
    let guessedLetters = " " ;
    
    
    const check = (item) => {
       if (item === myLetter) {
           theLetter.innerHTML = myLetter;
           message.innerHTML = 'Congrats! you guess the letter';
           message.style.color = 'green';
           btn.addEventListener('click' , stratGame);
           btn.innerHTML = 'Play Again?'
           btn.style.visibility = 'visible';
           guessedLetters = '';
           document.removeEventListener('keyup', logKey);
        } else if (item!==myLetter) {
            message.innerHTML = 'Wrong Guess, Try Again..';
            message.style.color = 'black';
            guessedLetters = `${guessedLetters},${item}`;
            guessedKeys.innerHTML = `${guessedLetters}` 
       } 
    }
    
    function logKey(e) {
        let currentGuess = String.fromCharCode(e.keyCode)
        if(  parseFloat(e.keyCode) > 64 && 
             parseFloat(e.keyCode)< 91 && 
             guessedLetters.includes(currentGuess , 0) === false) {
             check(currentGuess);
            } else if (parseFloat(e.keyCode) < 64 || parseFloat(e.keyCode)> 91) {
                  message.innerHTML = 'Invalid guess, type agian';
                  message.style.color = 'red';
            } else if ( guessedLetters.includes(currentGuess , 0) === true ){
                 message.innerHTML = 'You alreday typed '+ currentGuess;
                 message.style.color = 'red';
      }
      
    }
      
    
    document.addEventListener('keyup', logKey);
}


btn.addEventListener('click' , stratGame);


