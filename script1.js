document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".grid-swiper-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".bt-grid-next",
      prevEl: ".bt-grid-prev",
    },
  });
});