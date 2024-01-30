const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const arr= [{name:'omkar'},{name:'dinesh'},{name:'tanmay'}]

const getCard = (element)=> `
<div class="banner-box banner-box2">
<h2>${element.name}</h2>
<h3>Spring / Summer 2022</h3>
</div>`

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index]
//     document.getElementById('banner3').innerHTML+=getCard(element)  
// }

