// Custom Scripts
// Custom scripts
function treningAffSlider() {
  const container = document.querySelector('.trening-aff-slider__container');

  if (!container) {
    return null
  }
  var swiper = new Swiper(".trening-aff-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".trening-aff-slider__pagination",
    },
    navigation: {
      nextEl: ".trening-aff-slider__arrow--next",
      prevEl: ".trening-aff-slider__arrow--prev",
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
        spaceBetween: 15
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      }
    }
  });
}

treningAffSlider();


document.addEventListener("DOMContentLoaded", function () {
  const membersItems = document.querySelectorAll("[data-more-text-container]");

  membersItems.forEach(item => {
    const toggleButton = item.querySelector("[data-toggle-more-button]");
    const textBlock = item.querySelector("[data-banner-descr-more]");

    item.addEventListener("click", function () {
      this.classList.toggle("banner-descr-more");
      textBlock.classList.toggle("banner-descr-more");

      if (textBlock.classList.contains("banner-descr-more")) {
        toggleButton.textContent = "Свернуть";
      } else {
        toggleButton.textContent = "Подробнее";
      }
    });

  });
});

