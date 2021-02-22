document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.boxSizing = 'border-box'
document.body.style.textAlign = 'center';

const nav = document.createElement('nav');
nav.style.width = '100%';
nav.style.height = '10vh';
nav.style.backgroundColor = 'green';
document.body.appendChild(nav);

const heading = document.createElement('h1');
heading.textContent = 'Welcome To My Website';
document.body.appendChild(heading);

const slogan = document.createElement('h3');
slogan.textContent = 'This website was made using JavaScript ONLY!'
document.body.appendChild(slogan);

const main = document.createElement('main');
main.classList.add('img');
main.style.backgroundImage = 'url("image.jpg")';
main.style.width = '70%';
main.style.height = '50vh';
main.style.float = 'left'
document.body.appendChild(main);

const aside = document.createElement('aside');
aside.style.width = '25%'
aside.style.height = '50vh'
aside.style.float = 'right'
aside.style.backgroundColor = 'orange';
aside.style.display = 'flex'
aside.style.textAlign = 'center'
aside.style.justifyContent = 'center'
aside.style.alignItems = 'center'
document.body.appendChild(aside);

const mytext = document.createElement('p');
mytext.textContent = "We haven't even used CSS here, how amazing is it?"
mytext.style.fontSize = '20px'
mytext.style.fontFamily = 'Arial, Helvetica, sans-serif'

aside.appendChild(mytext);

const footer = document.createElement('footer');
footer.style.width = '100%'
footer.style.height = '20vh'
footer.style.backgroundColor = 'green';
footer.style.position = 'absolute'
footer.style.bottom = '0'
document.body.appendChild(footer);







