// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// SLIDER
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

// LIGHTBOX GALERIE
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// ANIMATION SCROLL GALERIE
const items = document.querySelectorAll('.gallery-item');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < trigger){
            item.classList.add('show');
        }
    });
});