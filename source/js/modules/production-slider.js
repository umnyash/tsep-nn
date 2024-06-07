/* * * * * * * * * * * * * * * * * * * * * * * *
 * products-slider.js
 */
function initProductionSlider(sliderElement) {
  const swiper = new Swiper(sliderElement, {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
      enable: true,
      releaseOnEdges: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
