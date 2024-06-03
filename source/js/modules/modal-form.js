/* * * * * * * * * * * * * * * * * * * * * * * *
 * modal-form.js
 */
function initModalForm({ modalElement, openModal, sendData }) {
  const SUBMIT_BUTTON_PENDING_STATE_CLASS = 'button--pending';

  const modalName = modalElement.dataset.modal;
  const innerElement = modalElement.querySelector('.modal__inner');
  const sectionElement = innerElement.querySelector('.modal-form-section');

  const formElement = sectionElement.querySelector('.modal-form');
  const submitButtonElement = formElement.querySelector('.modal-form__submit-button');
  const errorMessageWrapperElement = formElement.querySelector('.modal-form__error-message-wrapper');
  const actionUrl = formElement.getAttribute('action');

  const nameFieldElement = formElement.querySelector('.modal-form__item--name .text-field__control');
  const phoneFieldElement = formElement.querySelector('.modal-form__item--phone .text-field__control');
  const organizationFieldElement = formElement.querySelector('.modal-form__item--organization .text-field__control');
  const messageFieldElement = formElement.querySelector('.modal-form__item--message .text-area__control');

  if (nameFieldElement) {
    nameFieldElement.dataset.pristinePattern = '/^[a-zа-яЁё -]+$/i';
    nameFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
    nameFieldElement.dataset.pristinePatternMessage = 'Допустимы только буквы, дефисы и пробелы.';
  }

  if (phoneFieldElement) {
    phoneFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  }

  if (organizationFieldElement) {
    organizationFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  }

  if (messageFieldElement) {
    messageFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  }

  const pristine = new Pristine(formElement, {
    classTo: 'modal-form__item',
    errorClass: 'invalid',
    errorTextParent: 'modal-form__item',
    errorTextTag: 'p',
    errorTextClass: 'prompt-text',
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      errorMessageWrapperElement.innerHTML = '';
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add(SUBMIT_BUTTON_PENDING_STATE_CLASS);

      sendData(
        actionUrl,
        new FormData(evt.target),
        (data) => {
          sectionElement.classList.add('modal-form-section--response');
          formElement.reset();
        },
        () => {
          errorMessageWrapperElement.insertAdjacentHTML(
            'beforeend',
            `<strong class='modal-form__error-message shake'>Ошибка отправки данных. Проверьте подключение к интернету и попробуйте снова.</strong>`
          );
          setTimeout(() => {
            errorMessageWrapperElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        },
        () => {
          submitButtonElement.disabled = false;
          submitButtonElement.classList.remove(SUBMIT_BUTTON_PENDING_STATE_CLASS);
        }
      );
    } else {
      formElement.classList.remove('shake');
      setTimeout(() => formElement.classList.add('shake'), 50);
    }
  })

  document.querySelectorAll(`[data-modal-opener="${modalName}"]`).forEach((openerElement) => {
    openerElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      errorMessageWrapperElement.innerHTML = '';
      pristine.reset();
      formElement.reset();
      formElement.classList.remove('shake');

      innerElement.addEventListener('transitionend', () => {
        modalElement.querySelector('input').focus();
      }, { once: true })

      sectionElement.classList.remove('modal-form-section--response');
      openModal(modalElement);
    });
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
