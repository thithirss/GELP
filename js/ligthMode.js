const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    const body = document.getElementById('body');
    if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        body.classList.add('light')
        return;
    }

    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    body.classList.remove('light')
});

