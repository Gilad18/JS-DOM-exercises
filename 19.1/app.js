const myLi = document.querySelector('.start-here');

myLi.innerHTML = 'Main title';

const sub4 = document.createElement('li');
sub4.innerHTML = 'sub title 4';

const nextEle = myLi.nextElementSibling.firstElementChild;
nextEle.appendChild(sub4);

 myLi.parentElement.lastElementChild.remove();

const titleTag = myLi.parentElement.parentElement.previousElementSibling.lastElementChild;
titleTag.innerHTML = 'Master Of The Dom';

const myP = myLi.parentElement.nextElementSibling.firstElementChild;

myP.innerHTML = 'Well, that was fun...'