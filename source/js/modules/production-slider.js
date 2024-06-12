/* * * * * * * * * * * * * * * * * * * * * * * *
 * products-slider.js
 */
function initProductionSlider(sliderElement) {
  const element = sliderElement.querySelector('.production-slider__slider');

  const swiper = new Swiper(element, {
    slidesPerView: 1,
    pagination: {
      el: '.production-slider__pagination',
      bulletClass: 'production-slider__pagination-item',
      bulletActiveClass: 'production-slider__pagination-item--active',
    },
    allowTouchMove: false,
  });

  let currentThemeClassName = 'null';

  swiper.on('slideChange', () => {
    sliderElement.classList.remove(currentThemeClassName);

    const slideNumber = swiper.realIndex + 1;

    switch (true) {
      case slideNumber % 4 === 3:
        currentThemeClassName = `production-slider--theme_${3}`;
        break;
      case slideNumber % 2 === 0:
        currentThemeClassName = `production-slider--theme_${2}`;
        break;
      default:
        currentThemeClassName = `production-slider--theme_${1}`;
        break;
    }

    sliderElement.classList.add(currentThemeClassName);
  });

  const slidesNumber = swiper.slides.length;
  const scrollLength = slidesNumber * 320;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '.production-slider',
    start: 'top top',
    end: `+=${scrollLength}`,
    pin: true,
    onUpdate: (self) => {
      const slideIndex = Math.floor(self.progress * slidesNumber);
      swiper.slideTo(slideIndex);
    }
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
