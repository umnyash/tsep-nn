/* * * * * * * * * * * * * * * * * * * * * * * *
 * burger.js
 */
function initBurger(burgerElement, cb) {
  const BURGER_OPEN_CLASS_NAME = 'burger--open';

  const onBurgerClick = (evt) => {
    evt.preventDefault();
    burgerElement.classList.toggle(BURGER_OPEN_CLASS_NAME);
    burgerElement.ariaExpanded = burgerElement.classList.contains(BURGER_OPEN_CLASS_NAME);
    cb();
  };

  burgerElement.addEventListener('click', onBurgerClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */
