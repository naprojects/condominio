/* Dropdown Menu */

const burger = document.getElementById('burger');
const cross = document.getElementById('cross');
const menu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    menu.classList.remove('nav-menu__inactive')
    menu.classList.add('nav-menu__active');
    burger.classList.remove('nav-burger__active');
    burger.classList.add('nav-burger__inactive');
    cross.classList.add('nav-cross__active');
});

cross.addEventListener('click', () => {
    menu.classList.toggle('nav-menu__inactive');
    cross.classList.remove('nav-cross__active');
    burger.classList.remove('nav-burger__inactive');
    burger.classList.add('nav-burger__active');
})

/* Typing animation */

const typed = new Typed('.typed', {
    strings: [
        '<i class="palabras">soñar</i>',
        '<i class="palabras">crear</i>',
        '<i class="palabras">hacer realidad</i>'
    ],
    typeSpeed: 75,
    backSpeed: 75,
    startDelay: 300,
    loop: true,
    backDelay: 1500
});