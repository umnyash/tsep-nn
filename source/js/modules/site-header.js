/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-header.js
 */
function initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation) {
  const burgerElement = siteHeaderElement.querySelector('.site-header__burger');
  const siteNavigationElement = siteHeaderElement.querySelector('.site-header__site-navigation');

  const myCb = () => {
    siteHeaderElement.classList.toggle('site-header--expanded');
    document.body.classList.toggle('page__body--no-scroll');
  }

  initBurger(burgerElement, myCb);
  initSiteNavigation(siteNavigationElement);
}
/* * * * * * * * * * * * * * * * * * * * * * * */
