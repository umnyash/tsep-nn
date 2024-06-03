/* * * * * * * * * * * * * * * * * * * * * * * *
 * form.js
 */
function initForm({ formElement, sendData, showAlert }) {
  const SUBMIT_BUTTON_PENDING_STATE_CLASS = 'button--pending';

  const formName = formElement.dataset.name;
  const submitButtonElement = formElement.querySelector('.form__submit-button');
  const errorMessageWrapperElement = formElement.querySelector('.form__error-message-wrapper');
  const actionUrl = formElement.getAttribute('action');

  const nameFieldElement = formElement.querySelector('.form__item--name .text-field__control');
  const phoneFieldElement = formElement.querySelector('.form__item--phone .text-field__control');
  const organizationFieldElement = formElement.querySelector('.form__item--organization .text-field__control');
  const messageFieldElement = formElement.querySelector('.form__item--message .text-area__control');

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
    classTo: 'form__item',
    errorClass: 'invalid',
    errorTextParent: 'form__item',
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
          showAlert(formAlerts[formName].success);
          formElement.reset();
        },
        () => {
          errorMessageWrapperElement.insertAdjacentHTML(
            'beforeend',
            `<strong class='form__error-message shake'>Ошибка отправки данных. Проверьте подключение к интернету и попробуйте снова.</strong>`
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
}
/* * * * * * * * * * * * * * * * * * * * * * * */
