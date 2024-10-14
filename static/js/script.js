/* Функция для показа элементов при скролле */
function revealSections() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;

        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    });
}


window.addEventListener('scroll', revealSections);


window.addEventListener('load', revealSections);

let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.gallery-card');
    const totalCards = cards.length;

    
    currentIndex = (currentIndex + direction + totalCards) % totalCards;

    
    const offset = -currentIndex * (100 / 3); 
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}%)`;
    });
}


let startX = 0;
let isDragging = false;

const galleryContainer = document.querySelector('.gallery-container');

galleryContainer.addEventListener('mousedown', (e) => {
    startX = e.pageX;
    isDragging = true;
});

galleryContainer.addEventListener('mouseup', (e) => {
    if (isDragging) {
        const endX = e.pageX;
        if (endX < startX - 50) {
            moveSlide(1); 
        } else if (endX > startX + 50) {
            moveSlide(-1); 
        }
        isDragging = false;
    }
});

galleryContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

galleryContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    isDragging = true;
});

galleryContainer.addEventListener('touchend', (e) => {
    if (isDragging) {
        const endX = e.changedTouches[0].pageX;
        if (endX < startX - 50) {
            moveSlide(1); 
        } else if (endX > startX + 50) {
            moveSlide(-1); 
        }
        isDragging = false;
    }
});

galleryContainer.addEventListener('touchcancel', () => {
    isDragging = false;
});

