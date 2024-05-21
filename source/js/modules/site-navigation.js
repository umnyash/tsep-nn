/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-navigation.js
 */
function toggleSiteNavigationSubMenu(subMenuButtonElement, subMenuButtonActiveClassName) {
  subMenuButtonElement.classList.toggle(subMenuButtonActiveClassName);
  subMenuButtonElement.ariaExpanded = subMenuButtonElement.classList.contains(subMenuButtonActiveClassName);
};

function initSiteNavigation(siteNavigationElement) {
  const SUB_MENU_BUTTON_CLASS_NAME = 'site-navigation__sub-menu-button';
  const SUB_MENU_BUTTON_ACTIVE_CLASS_NAME = 'site-navigation__sub-menu-button--active';

  const onSiteNavigationClick = (evt) => {
    const laptopWidthMediaQueryList = window.matchMedia(LAPTOP_WIDTH_MEDIA_QUERY);
    const subMenuButtonElement = evt.target.closest(`.${SUB_MENU_BUTTON_CLASS_NAME}`);

    if (subMenuButtonElement && !laptopWidthMediaQueryList.matches) {
      toggleSiteNavigationSubMenu(subMenuButtonElement, SUB_MENU_BUTTON_ACTIVE_CLASS_NAME);
    }
  };

  siteNavigationElement.addEventListener('click', onSiteNavigationClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */
