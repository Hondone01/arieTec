document.addEventListener('DOMContentLoaded', function () {
    const myCarouselElement = document.querySelector('#carousel-1');
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,  // Intervalo de 2 segundos entre las imágenes
        ride: 'carousel', // Inicia el carrusel automáticamente
        touch: true       // Permite el control táctil en dispositivos móviles
    });
});
