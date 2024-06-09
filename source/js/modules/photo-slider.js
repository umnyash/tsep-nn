/* * * * * * * * * * * * * * * * * * * * * * * *
 * photo-slider.js
 */
function initPhotoSlider(sliderElement) {
  const mainSliderElement = sliderElement.querySelector('.photo-slider__main-slider');
  const prevButtonElement = mainSliderElement.querySelector('.photo-slider__main-slider-arrow--prev');
  const nextButtonElement = mainSliderElement.querySelector('.photo-slider__main-slider-arrow--next');

  const thumbnailsSliderElement = sliderElement.querySelector('.photo-slider__thumbnails-slider');

  const thumbnailsSwiper = new Swiper(thumbnailsSliderElement, {
    spaceBetween: 10,
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      1580: {
        spaceBetween: 20,
      }
    }
  });

  new Swiper(mainSliderElement, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: prevButtonElement,
      nextEl: nextButtonElement,
      disabledClass: 'photo-slider__main-slider-arrow--disabled',
    },
    thumbs: {
      swiper: thumbnailsSwiper,
      slideThumbActiveClass: 'photo-slider__thumbnails-slider-item--active',
    },
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
