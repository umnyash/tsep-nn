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
      },
      1580: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
};
/* * * * * * * * * * * * * * * * * * * * * * * */
