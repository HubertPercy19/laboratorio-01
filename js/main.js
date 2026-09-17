const darkMode = document.querySelector('#dark-mode-toggle');
const bodyContent = document.querySelector('body');

const navbar = document.querySelector('.header__nav__bar');
const navContent = document.querySelector('.header__nav__list__content');
darkMode.addEventListener('click', (e) => {
    bodyContent.classList.toggle('dark-mode');
})

navbar.addEventListener('click', (e) => {
    const navBarValue = e.target.parentElement;
    navBarValue.classList.toggle('active');
    navBarValue.parentElement.querySelector('.header__nav__list__content').classList.toggle('active');
})