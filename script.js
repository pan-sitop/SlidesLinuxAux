let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.getElementById('progressBar');
const indicator = document.getElementById('slideIndicator');

function showSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;

    const percentage = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = percentage + '%';
    indicator.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

function nextSlide() { if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1); }
function prevSlide() { if (currentSlide > 0) showSlide(currentSlide - 1); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

showSlide(0);