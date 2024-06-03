/* * * * * * * * * * * * * * * * * * * * * * * *
 * alert.js
 */
function initAlertCreator(openModal) {
  return (alert) => {
    const modalString = `
      <dialog class="modal modal--position_center modal--with_alert">
        <div class="modal__inner">
          <button class="modal__close-button" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
          <section class="alert modal__alert ${(alert.status === 'error') ? 'alert--error' : ''}">
            <h2 class="alert__heading heading">${alert.heading}</h2>
            ${alert.text ? `<p class="alert__text">${alert.text}</p>` : ''}
            <button class="alert__button button button--primary" type="button">${alert.buttonText || 'Закрыть'}</button>
          </section>
        </div>
      </dialog>
    `;

    const modalElement = createElementByString(modalString);
    document.body.append(modalElement);
    openModal(modalElement);
  };
}
/* * * * * * * * * * * * * * * * * * * * * * * */
