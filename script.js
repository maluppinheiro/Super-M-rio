
const form = document.querySelector('.fale-conosco');
const background = document.querySelector('.mascara-form');

function showForm() {
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    background.style.visibility = 'visible';
}

function hideForm() {
    form.style.left = '-100%';
    form.style.transform = 'translateY(-50%)';
    background.style.visibility = 'hidden';
}