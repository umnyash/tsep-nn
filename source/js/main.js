/* * * * * * * * * * * * * * * * * * * * * * * *
 * main.js
 */
const siteHeaderElement = document.querySelector('.site-header');
initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation);

const showAlert = initAlertCreator(openModal);

document.querySelectorAll('.selection--news').forEach(initNewsSelection);

document.querySelectorAll('.contacts__map').forEach(initMap);

document.querySelectorAll('.certificates-list').forEach(initCertificatesList);

document.querySelectorAll('.folds').forEach(initFolds);

document.querySelectorAll('.features-list').forEach(initFeaturesList);

document.querySelectorAll('.features-slider').forEach(initFeaturesSlider);

document.querySelectorAll('[data-modal="request"]').forEach((modalElement) => {
  initModalForm({ modalElement, openModal, sendData });
});

document.querySelectorAll('form[data-name]').forEach((formElement) => {
  initForm({ formElement, sendData, showAlert });
});
/* * * * * * * * * * * * * * * * * * * * * * * */
