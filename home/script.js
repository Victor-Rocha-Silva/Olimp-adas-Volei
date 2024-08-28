let slideIndex = 0;

mostrarSlides(slideIndex);

// Função para mudar de imagem
function mudarImagem(n) {
    mostrarSlides(slideIndex += n);
}

// Função para mostrar slides
function mostrarSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    let carouselWidth = document.querySelector('.carousel-slide').offsetWidth; // Obtenha a largura total do carrossel
    if (n >= slides.length) {
        slideIndex = 0; // Reset to the first slide
    } else {
        slideIndex = n; // Atualiza o índice do slide
    }
    
    let offset = -slideIndex * (carouselWidth / slides.length); // Calcula o offset correto
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
}

// Carrossel automático a cada 4 segundos
setInterval(() => {
    mudarImagem(1);
}, 10000);