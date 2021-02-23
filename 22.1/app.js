const name = document.querySelector('.name');
const age = document.querySelector('.age');
const email = document.querySelector('.email');
const submit = document.querySelector('.submit');
const mesaaage = document.querySelector('h2');

const windowOpen = (event) => {
    let decision = confirm(`Your name is ${name.value}, you ${age.value} years old
    and this is your email ${email.value} ?` );

    if (decision) {
        mesaaage.innerHTML = 'Congratulations! you successfully sent this form.';
        event.preventDefault();
    } else event.preventDefault();
}

submit.addEventListener('click', windowOpen);