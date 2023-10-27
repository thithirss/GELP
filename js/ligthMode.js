const modo = document.getElementById('mode-icon');

modo.addEventListener('click', () => {
    const body = document.getElementById('body');
    if(modo.classList.contains('fa-sun')){
        modo.classList.remove('fa-sun');
        modo.classList.add('fa-moon');

        body.classList.add('light')
        return;
    }

    modo.classList.remove('fa-moon');
    modo.classList.add('fa-sun');
    body.classList.remove('light')
});

