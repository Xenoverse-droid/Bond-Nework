// <----------- Hamburger icon controll  -------------->
const hamburger = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const closeimg = document.querySelector('.close-img');
const navAction = document.querySelector('.nav-action')
hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
    navAction.style.display = 'flex'
    closeBtn.style.display = 'block'
    closeimg.style.display = 'block'
});

closeBtn.addEventListener('click', ()=>{
    hamburger.style.display = 'block';
    navAction.style.display = 'none';
    closeimg.style.display = 'none'
});