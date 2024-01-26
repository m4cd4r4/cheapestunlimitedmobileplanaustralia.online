let currentIndex = 0;
const slides = document.querySelectorAll('.carousel__images img');
const totalSlides = slides.length;

document.querySelector('.carousel__button--right').addEventListener('click', function() {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.display = 'block';
});

document.querySelector('.carousel__button--left').addEventListener('click', function() {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slides[currentIndex].style.display = 'block';
});
