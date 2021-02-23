const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];


 const myList = document.createElement('ol');

users.forEach(element => {
    let myListItem = document.createElement('li');
    myListItem.innerHTML = `${element.firstName} ${element.lastName}`;
    myList.appendChild(myListItem);
});

myList.style.listStyle = 'none';

let current = myList.firstElementChild;
for(let i=0 ; i<3; i++) {
   current.setAttribute('data-id', users[i].id)
   current=current.nextElementSibling;
}

console.log(myList);



       
   