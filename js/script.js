"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * *
 * const.js
 */
// const DESKTOP_WIDTH_MEDIA_QUERY = '(min-width: 1346px)';
const LAPTOP_WIDTH_MEDIA_QUERY = '(min-width: 1260px)';
// const WIDE_TABLET_WIDTH_MEDIA_QUERY = '(min-width: 1024px)';

// const KeyCode = Object.freeze({
//   LEFT_ARROW: 'ArrowLeft',
//   RIGHT_ARROW: 'ArrowRight',
//   DOWN_ARROW: 'ArrowDown',
//   SPACE: 'Space',
//   ESCAPE: 'Escape',
// });
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * burger.js
 */
function initBurger(burgerElement, cb) {
  const BURGER_OPEN_CLASS_NAME = 'burger--open';
  const onBurgerClick = evt => {
    evt.preventDefault();
    burgerElement.classList.toggle(BURGER_OPEN_CLASS_NAME);
    burgerElement.ariaExpanded = burgerElement.classList.contains(BURGER_OPEN_CLASS_NAME);
    cb();
  };
  burgerElement.addEventListener('click', onBurgerClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * news-selection.js
 */
function initNewsSelection(newsSelectionElement) {
  const cursorElement = document.querySelector('.cursor-picture');
  const cursorImageElement = cursorElement.querySelector('.cursor-picture__image');
  const linkElements = newsSelectionElement.querySelectorAll('.selection__item-link');
  linkElements.forEach(linkElement => {
    linkElement.addEventListener('mouseover', ({
      target
    }) => {
      const imageUrl = target.parentElement.dataset.cursorImage;
      cursorImageElement.style.backgroundImage = `url("${imageUrl}")`;
      cursorElement.classList.remove('cursor-picture--hidden');
    });
    linkElement.addEventListener('mousemove', evt => {
      cursorElement.style.top = `${evt.pageY}px`;
      cursorElement.style.left = `${evt.pageX}px`;
    });
    linkElement.addEventListener('mouseout', () => {
      cursorElement.classList.add('cursor-picture--hidden');
    });
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-header.js
 */
function initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation) {
  const burgerElement = siteHeaderElement.querySelector('.site-header__burger');
  const siteNavigationElement = siteHeaderElement.querySelector('.site-header__site-navigation');
  const myCb = () => {
    siteHeaderElement.classList.toggle('site-header--expanded');
    document.body.classList.toggle('page__body--no-scroll');
  };
  initBurger(burgerElement, myCb);
  initSiteNavigation(siteNavigationElement);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-navigation.js
 */
function toggleSiteNavigationSubMenu(subMenuButtonElement, subMenuButtonActiveClassName) {
  subMenuButtonElement.classList.toggle(subMenuButtonActiveClassName);
  subMenuButtonElement.ariaExpanded = subMenuButtonElement.classList.contains(subMenuButtonActiveClassName);
}
;
function initSiteNavigation(siteNavigationElement) {
  const SUB_MENU_BUTTON_CLASS_NAME = 'site-navigation__sub-menu-button';
  const SUB_MENU_BUTTON_ACTIVE_CLASS_NAME = 'site-navigation__sub-menu-button--active';
  const onSiteNavigationClick = evt => {
    const laptopWidthMediaQueryList = window.matchMedia(LAPTOP_WIDTH_MEDIA_QUERY);
    const subMenuButtonElement = evt.target.closest(`.${SUB_MENU_BUTTON_CLASS_NAME}`);
    if (subMenuButtonElement && !laptopWidthMediaQueryList.matches) {
      toggleSiteNavigationSubMenu(subMenuButtonElement, SUB_MENU_BUTTON_ACTIVE_CLASS_NAME);
    }
  };
  siteNavigationElement.addEventListener('click', onSiteNavigationClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * main.js
 */
const siteHeaderElement = document.querySelector('.site-header');
initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation);
document.querySelectorAll('.selection--news').forEach(initNewsSelection);
/* * * * * * * * * * * * * * * * * * * * * * * */