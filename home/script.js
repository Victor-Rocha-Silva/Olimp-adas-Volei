let slideIndex = 0;
mostrarSlides(slideIndex);

// Função para mudar de imagem
function mudarImagem(n) {
    mostrarSlides(slideIndex += n);
}

// Função para mostrar slides
function mostrarSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) {
        slideIndex = 0; // Volta ao primeiro slide
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Vai para o último slide
    } else {
        slideIndex = n; // Atualiza o índice do slide
    }
    
    let offset = -slideIndex * 25; // Ajuste o offset para 100%
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Carrossel automático a cada 4 segundos
setInterval(() => {
    mudarImagem(1);
}, 4000);
