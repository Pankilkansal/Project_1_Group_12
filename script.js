
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.navbar-link').forEach((item) => {
        item.classList.toggle('change');
    });
});
const icons = document.querySelectorAll('.section-1-icons i');
let i = 0;

setInterval(() => {
    icons[i].classList.remove('change'); // Remove 'change' from current icon
    i = (i + 1) % icons.length; // Loop back to first icon after last
    icons[i].classList.add('change'); // Add 'change' to the new icon
}, 4000);

document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
        alert('Card clicked');
    });
});
