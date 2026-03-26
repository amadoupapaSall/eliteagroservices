// ================= LIGHTBOX =================
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Ouvrir lightbox au clic
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Fermer lightbox en cliquant sur la croix
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fermer lightbox en cliquant sur le fond
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});

// ================= ANIMATION AU SCROLL =================
const galleryItems = document.querySelectorAll('.gallery-item');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85; // Déclenche l'animation avant que l'élément soit complètement visible

    galleryItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < trigger){
            item.classList.add('show'); // ajoute la classe show qui déclenche l'animation CSS
        }
    });
});