// slider carrusel - beneficios

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.beneficios-img img');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.beneficios-img').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
