// script.js
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.navbar-link').forEach((item) => {
        item.classList.toggle('change');
    });
});
