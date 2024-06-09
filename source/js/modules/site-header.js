/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-header.js
 */
function initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation) {
  const burgerElement = siteHeaderElement.querySelector('.site-header__burger');
  const siteNavigationElement = siteHeaderElement.querySelector('.site-header__site-navigation');

  const myCb = () => {
    siteHeaderElement.classList.toggle('site-header--expanded');
    togglePageScroll();
  }

  initBurger(burgerElement, myCb);
  initSiteNavigation(siteNavigationElement);

  let pageScrollY = 0;

  const onWindowScroll = () => {
    const headerHeight = siteHeaderElement.offsetHeight;

    if (window.scrollY > 0) {
      siteHeaderElement.classList.add('site-header--sticked');
    }

    if (window.scrollY > pageScrollY && window.scrollY > headerHeight) {
      siteHeaderElement.classList.add('site-header--hidden');
    } else {
      siteHeaderElement.classList.remove('site-header--hidden');

      if (window.scrollY === 0) {
        siteHeaderElement.classList.remove('site-header--sticked');
      }
    }
    pageScrollY = window.scrollY;
  };

  window.addEventListener('scroll', onWindowScroll);
}
/* * * * * * * * * * * * * * * * * * * * * * * */
