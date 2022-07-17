new Swiper('.slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    dalay: 750,
    disableOnInteraction: false
  },
  speed: 800,
});