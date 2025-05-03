const form = document.querySelector('.fale-conosco');
const background = document.querySelector('.mascara-form');

function showForm() {
    form.classList.add('active');
    background.style.visibility = 'visible';
}

function hideForm() {
    form.classList.remove('active');
    background.style.visibility = 'hidden';
}
