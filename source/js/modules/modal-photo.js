function initModalPhoto({ modalElement, openModal }) {
  const imageElement = modalElement.querySelector('.photo__image');

  document.querySelectorAll('[data-modal-opener="photo"]').forEach((wrapperElement) => {
    wrapperElement.addEventListener('click', (evt) => {
      const linkElement = evt.target.closest('a');

      if (!linkElement) {
        return;
      }

      evt.preventDefault();
      imageElement.src = '';

      setTimeout(() => {
        imageElement.src = linkElement.getAttribute('href');
        openModal(modalElement);
      }, 0)
    });
  })
}
