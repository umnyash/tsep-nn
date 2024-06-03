/* * * * * * * * * * * * * * * * * * * * * * * *
 * modal.js
 */
const openedModals = [];

function openModal(modalElement) {
  togglePageScroll();
  modalElement.showModal();
  openedModals.push(modalElement);
  document.addEventListener('click', onModalClick);
  modalElement.addEventListener('close', onModalClose);
}

function closeModal(modalElement) {
  modalElement.close();
  setTimeout(() => {
    modalElement.removeEventListener('close', onModalClose);
  }, 0);
}

function onModalClose(evt) {
  const closedModalElement = openedModals.pop();

  if (closedModalElement.classList.contains('modal--with_alert')) {
    closedModalElement.addEventListener('transitionend', (evt) => {
      if (evt.propertyName === 'transform') {
        closedModalElement.remove();
      }
    }, { once: true });
  }

  if (!openedModals.length) {
    const modalInnerElement = evt.target.querySelector('.modal__inner');
    modalInnerElement.addEventListener('transitionend', ({ target }) => {
      if (target.classList.contains('modal') || target.classList.contains('modal__inner')) {
        togglePageScroll();
      }
    }, { once: true });

    document.removeEventListener('click', onModalClick);
  }
}

function onModalClick({ target }) {
  if (!target.classList.contains('modal__close-button') && !target.classList.contains('alert__button')) {
    return;
  }

  closeModal(openedModals.at(-1));
}
/* * * * * * * * * * * * * * * * * * * * * * * */
