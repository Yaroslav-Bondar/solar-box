var mySwiper = new Swiper('.about__slider-container', {
  // Optional parameters
  loop: true,
  // If we need pagination
  wrapperClass: 'about__slider-wrapper',
  pagination: {
    el: '.about__slide-pagination',
    bulletClass: 'about__slide-pagination-dot',
    bulletActiveClass: 'about__slide-pagination-dot_active',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.about__slider-button-next',
    prevEl: '.about__slider-button-prev',
  },
});
