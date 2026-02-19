// Variables de estado y elementos del DOM
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.getElementById('progressBar');
const indicator = document.getElementById('slideIndicator');

// Función principal para cambiar de diapositiva
function showSlide(index) {
    // Validaciones para no salirnos de los límites
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.classList.remove('active');
        // REINICIAR EL SCROLL: Vital para la versión móvil
        slide.scrollTop = 0; 
    });
    
    // Mostrar la diapositiva actual
    slides[index].classList.add('active');
    currentSlide = index;

    // Actualizar la barra de progreso
    const percentage = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = percentage + '%';
    
    // Actualizar el texto del indicador (ej. "3 / 20")
    indicator.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

// Funciones auxiliares para los botones
function nextSlide() { 
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1); 
    }
}

function prevSlide() { 
    if (currentSlide > 0) {
        showSlide(currentSlide - 1); 
    }
}

// Soporte para navegación con teclado (PC)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Inicializar la presentación en la primera diapositiva
showSlide(0);
