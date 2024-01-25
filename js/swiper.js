
const swiper = new Swiper(".swiper.home-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 3,
    },
  },
});
const categorySwiper = new Swiper(".category-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView:6,
      spaceBetween: 10,
    },
  },
});
const cardSwiper = new Swiper(".swiper.card-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 3,
    },
  },
});
const similarSwiper = new Swiper(".swiper.similar-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 21,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 3,
    },
  },
});

