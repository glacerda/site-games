// Inicializar o carrossel usando a biblioteca Swiper
var swiper = new Swiper('.line-swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }
  },
  loop: true,
  navigation: {
    nextEl: ".bt-line-next",
    prevEl: ".bt-line-prev",
  },
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.line-swiper-pagination',
    clickable: true,
  },
});