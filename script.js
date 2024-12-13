
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.navbar-link').forEach((item) => {
        item.classList.toggle('change');
    });
});

const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});



const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

