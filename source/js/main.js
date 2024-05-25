/* * * * * * * * * * * * * * * * * * * * * * * *
 * main.js
 */
const siteHeaderElement = document.querySelector('.site-header');
initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation);

document.querySelectorAll('.selection--news').forEach(initNewsSelection);
/* * * * * * * * * * * * * * * * * * * * * * * */
