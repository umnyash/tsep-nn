/* * * * * * * * * * * * * * * * * * * * * * * *
 * features-slider.js
 */
function initFeaturesSlider(sliderElement) {
  new Swiper(sliderElement, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      1260: {
        slidesPerView: 3,
      }
    }
  });
};
/* * * * * * * * * * * * * * * * * * * * * * * */
