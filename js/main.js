const darkMode = document.querySelector('#dark-mode-toggle');
const bodyContent = document.querySelector('body');

darkMode.addEventListener('click', (e) => {
    bodyContent.classList.toggle('dark-mode');
})