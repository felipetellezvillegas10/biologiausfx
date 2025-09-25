window.sr = ScrollReveal();
  sr.reveal('.admision-home', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
  })
  sr.reveal('.equipo-sec', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
  })
  sr.reveal('.card', {
    duration: 1700,
    origin: 'left',
    distance: '-100px'
  })
  sr.reveal('.banner-content', {
    duration: 2000,
    origin: 'top',
    distance: '-200px'
  })
  ;
  // Selección de elementos
const bannerContent = document.querySelector('.banner-content');
const bannerItems = document.querySelectorAll('.banner-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = bannerItems.length;

// Función para mostrar el slide
function updateSlide(index) {
    const offset = -index * 100;
    bannerContent.style.transform = `translateX(${offset}%)`;
}

// Función para ir al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlide(currentIndex);
}

// Función para ir al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlide(currentIndex);
}

// Configuración de botones manuales
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Reproducción automática cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Pausar reproducción automática al interactuar con el banner o los botones
const pauseAutoSlide = () => clearInterval(autoSlide);
const resumeAutoSlide = () => autoSlide = setInterval(nextSlide, 5000);

bannerContent.addEventListener('mouseover', pauseAutoSlide);
bannerContent.addEventListener('mouseout', resumeAutoSlide);

// Agregar pausa en los botones
prevButton.addEventListener('mouseover', pauseAutoSlide);
prevButton.addEventListener('mouseout', resumeAutoSlide);
nextButton.addEventListener('mouseover', pauseAutoSlide);
nextButton.addEventListener('mouseout', resumeAutoSlide);

  