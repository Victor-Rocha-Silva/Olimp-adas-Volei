let slideIndex = 0;
mostrarSlides(slideIndex);

// Função para mudar de imagem
function mudarImagem(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    let offset = -slideIndex * 25;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Carrossel automático a cada 5 segundos
setInterval(() => {
    mudarImagem(1);
}, 2000);
