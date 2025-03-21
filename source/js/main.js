/* * * * * * * * * * * * * * * * * * * * * * * *
 * main.js
 */
const siteHeaderElement = document.querySelector('.site-header');
initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation);

const showAlert = initAlertCreator(openModal);

document.querySelectorAll('.section__contacts-map').forEach(initMap);

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

document.querySelectorAll('.production-slider').forEach(initProductionSlider);
document.querySelectorAll('.partial-list').forEach(initPartialList);
document.querySelectorAll('.photo-slider').forEach(initPhotoSlider);
document.querySelectorAll('.adaptive-table-wrapper').forEach(initAdaptiveTable);
document.querySelectorAll('input[type="tel"]').forEach(initTelField);

document.querySelectorAll('[data-modal="photo"]').forEach((modalElement) => {
  initModalPhoto({ modalElement, openModal });
});
/* * * * * * * * * * * * * * * * * * * * * * * */
