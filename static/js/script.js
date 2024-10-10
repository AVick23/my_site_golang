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

// Добавляем обработчик событий для скролла
window.addEventListener('scroll', revealSections);

// Показ элементов при первой загрузке страницы
window.addEventListener('load', revealSections);

let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.gallery-card');
    const totalCards = cards.length;

    // Обновление текущего индекса
    currentIndex = (currentIndex + direction + totalCards) % totalCards;

    // Обновление позиции слайдов
    const offset = -currentIndex * (100 / 3); // Перемещение на 100%/3 для группы из 3 карточек
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}%)`;
    });
}

// Поддержка сенсорных событий для прокрутки
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
            moveSlide(1); // Перемещение вправо
        } else if (endX > startX + 50) {
            moveSlide(-1); // Перемещение влево
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
            moveSlide(1); // Перемещение вправо
        } else if (endX > startX + 50) {
            moveSlide(-1); // Перемещение влево
        }
        isDragging = false;
    }
});

galleryContainer.addEventListener('touchcancel', () => {
    isDragging = false;
});

