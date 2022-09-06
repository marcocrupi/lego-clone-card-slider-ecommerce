var x = window.matchMedia("(max-width: 700px)");
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: x.matches ? 150 : 55,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
