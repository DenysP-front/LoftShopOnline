const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const headerCount = document.querySelector(".basket-count-js");

function changeHeaderTextColorWhite(className) {
  const productPageHeader = document.querySelectorAll(className);
  [...productPageHeader].forEach((btn) => btn.classList.add("inner-header"));
}

function headerScrool() {
  const scrollTop = wrapper.scrollTop;
  header.classList.toggle("sticky", scrollTop >= 50);
  header.classList.toggle("animation", scrollTop >= 200);
  headerCount.classList.toggle("color", scrollTop >= 200);
}

function checkClass() {
  if (document.querySelector(".inner-page") !== null) {
    changeHeaderTextColorWhite(".header__btn");
    changeHeaderTextColorWhite(".header__logo");
    changeHeaderTextColorWhite(".header__media-btn");
    changeHeaderTextColorWhite(".header__burger");
  }
}

function showOrHideSwiper() {
  const url = document.location.pathname;
  const sliders = document.querySelectorAll(".swiper");
  const arrows = document.querySelectorAll(".carousel__arrow");

  if (url === "/" && wrapper.clientWidth < 760) {
    sliders.forEach((item) => {
      item.classList.remove("swiper");
      item.firstElementChild.classList.remove("swiper-wrapper");
    });
<<<<<<< HEAD
=======

>>>>>>> dcfb5f570acfecf44a0b08c6d21adefd51c8d89e
    arrows.forEach((arrow) => (arrow.style.display = "none"));
    return;
  }

  const swiper = new Swiper(".action__swiper", {
    slidesPerView: 4,
    spaceBetween: 73,
    navigation: {
      nextEl: ".carousel__arrow--next",
      prevEl: ".carousel__arrow--prev",
    },

    breakpoints: {
      560: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  const swiperNew = new Swiper(".new__swiper", {
    slidesPerView: 4,
    spaceBetween: 73,
    navigation: {
      nextEl: ".new__arrow--next",
      prevEl: ".new__arrow--prev",
    },

    breakpoints: {
      560: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("header__burger")) {
    document.querySelector(".mobile").classList.add("active");
  }
  if (target.classList.contains("mobile__close")) {
    document.querySelector(".mobile").classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  showOrHideSwiper();
  checkClass();
});

wrapper.addEventListener("scroll", function () {
  headerScrool();
});
