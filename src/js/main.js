// Custom scripts
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".hero-slider__pagination",
  },
  navigation: {
    nextEl: ".hero-slider__arrow--next",
    prevEl: ".hero-slider__arrow--prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 46,
    }
  }
});