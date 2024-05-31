/* * * * * * * * * * * * * * * * * * * * * * * *
 * certificates-list.js
 */
function initCertificatesList(listElement) {
  const firstItemElement = listElement.querySelector('.certificates-list__item');
  const showMoreButtonElement = listElement.querySelector('.certificates-list__button');

  const setCertificatesListMode = () => {
    listElement.classList.remove('certificates-list--short');

    setTimeout(() => {
      if (listElement.offsetHeight > firstItemElement.offsetHeight) {
        listElement.classList.add('certificates-list--short');
      }
    }, 0);
  };

  setCertificatesListMode(listElement);

  window.addEventListener('resize', debounce(setCertificatesListMode));

  showMoreButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    listElement.classList.remove('certificates-list--short');
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
