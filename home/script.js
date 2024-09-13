const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Loop automático a cada 3 segundos
setInterval(nextSlide, 3000);
