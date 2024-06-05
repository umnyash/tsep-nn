"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * *
 * const.js
 */
// const DESKTOP_WIDTH_MEDIA_QUERY = '(min-width: 1346px)';
const LAPTOP_WIDTH_MEDIA_QUERY = '(min-width: 1260px)';
// const WIDE_TABLET_WIDTH_MEDIA_QUERY = '(min-width: 1024px)';

// const KeyCode = Object.freeze({
//   LEFT_ARROW: 'ArrowLeft',
//   RIGHT_ARROW: 'ArrowRight',
//   DOWN_ARROW: 'ArrowDown',
//   SPACE: 'Space',
//   ESCAPE: 'Escape',
// });
/* * * * * * * * * * * * * * * * * * * * * * * */

function createElementByString(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}
function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
function togglePageScroll() {
  const bodyWidth = document.body.clientWidth;
  document.body.classList.toggle('scroll-lock');
  if (document.body.classList.contains('scroll-lock')) {
    if (document.body.clientWidth === bodyWidth) {
      return;
    }
    document.body.style.paddingRight = `${document.body.clientWidth - bodyWidth}px`;
  } else {
    document.body.style.paddingRight = '0';
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * *
 * alert.js
 */
function initAlertCreator(openModal) {
  return alert => {
    const modalString = `
      <dialog class="modal modal--position_center modal--with_alert">
        <div class="modal__inner">
          <button class="modal__close-button" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
          <section class="alert modal__alert ${alert.status === 'error' ? 'alert--error' : ''}">
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

/* * * * * * * * * * * * * * * * * * * * * * * *
 * api.js
 */
async function sendData(url, body, onSuccess = () => {}, onFail = () => {}, onFinally = () => {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body
    });
    if (!response.ok) {
      throw new Error(`${response.status} – ${response.statusText}`);
    }
    const data = await response.json();
    onSuccess(data);
  } catch (err) {
    onFail();
  } finally {
    onFinally();
  }
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * burger.js
 */
function initBurger(burgerElement, cb) {
  const BURGER_OPEN_CLASS_NAME = 'burger--open';
  const onBurgerClick = evt => {
    evt.preventDefault();
    burgerElement.classList.toggle(BURGER_OPEN_CLASS_NAME);
    burgerElement.ariaExpanded = burgerElement.classList.contains(BURGER_OPEN_CLASS_NAME);
    cb();
  };
  burgerElement.addEventListener('click', onBurgerClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

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
  showMoreButtonElement.addEventListener('click', evt => {
    evt.preventDefault();
    listElement.classList.remove('certificates-list--short');
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * features-list.js
 */
function initFeaturesList(listElement) {
  const itemElements = Array.from(listElement.querySelectorAll('.features-list__item'));
  const setItemElementMinHeightValue = () => {
    listElement.style.setProperty('--item-min-height', 0);
    setTimeout(() => {
      const itemElementsHeightValues = itemElements.map(itemElement => itemElement.offsetHeight);
      const highestHeightValue = `${Math.max(...itemElementsHeightValues)}px`;
      listElement.style.setProperty('--item-min-height', highestHeightValue);
    }, 0);
  };
  setItemElementMinHeightValue();
  window.addEventListener('resize', debounce(setItemElementMinHeightValue));
}
;
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * features-slider.js
 */
function initFeaturesSlider(sliderElement) {
  new Swiper(sliderElement, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      1260: {
        slidesPerView: 3
      },
      1580: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}
;
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * map.js
 */
const initFolds = foldsElement => {
  foldsElement.addEventListener('click', ({
    target
  }) => {
    const buttonElement = target.closest('.folds__button');
    if (!buttonElement) {
      return;
    }
    const foldElement = buttonElement.closest('.folds__item');
    foldElement.classList.toggle('folds__item--open');
    buttonElement.ariaExpanded = buttonElement.ariaExpanded === 'true' ? 'false' : 'true';
  });
};
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * form-alerts.js
 */
const formAlerts = {
  request: {
    success: {
      heading: 'Заявка отправлена',
      text: 'Скоро с Вами свяжется наш менеджер для уточнения деталей заказа и доставки'
    },
    error: {
      status: 'error',
      heading: 'Ошибка',
      text: 'Ошибки – это доказательство того, что ты пытаешься.'
    }
  }
};
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * form.js
 */
function initForm({
  formElement,
  sendData,
  showAlert
}) {
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
    errorTextClass: 'prompt-text'
  });
  formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      errorMessageWrapperElement.innerHTML = '';
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add(SUBMIT_BUTTON_PENDING_STATE_CLASS);
      sendData(actionUrl, new FormData(evt.target), data => {
        showAlert(formAlerts[formName].success);
        formElement.reset();
      }, () => {
        errorMessageWrapperElement.insertAdjacentHTML('beforeend', `<strong class='form__error-message shake'>Ошибка отправки данных. Проверьте подключение к интернету и попробуйте снова.</strong>`);
        setTimeout(() => {
          errorMessageWrapperElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }, () => {
        submitButtonElement.disabled = false;
        submitButtonElement.classList.remove(SUBMIT_BUTTON_PENDING_STATE_CLASS);
      });
    } else {
      formElement.classList.remove('shake');
      setTimeout(() => formElement.classList.add('shake'), 50);
    }
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * map.js
 */
async function initMap(mapElement) {
  const COORDINATES = [43.895817, 56.227675];
  const containerElement = mapElement.querySelector('.map__inner');
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapMarker,
    YMapDefaultFeaturesLayer
  } = ymaps3;
  const map = new YMap(containerElement, {
    location: {
      center: COORDINATES,
      zoom: 12
    }
  });
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
  const markerElement = document.querySelector('#map-marker-template').content.querySelector('.map-marker').cloneNode(true);
  const marker = new YMapMarker({
    coordinates: COORDINATES
  }, markerElement);
  map.addChild(marker);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * modal-form.js
 */
function initModalForm({
  modalElement,
  openModal,
  sendData
}) {
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
    errorTextClass: 'prompt-text'
  });
  formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      errorMessageWrapperElement.innerHTML = '';
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add(SUBMIT_BUTTON_PENDING_STATE_CLASS);
      sendData(actionUrl, new FormData(evt.target), data => {
        sectionElement.classList.add('modal-form-section--response');
        formElement.reset();
      }, () => {
        errorMessageWrapperElement.insertAdjacentHTML('beforeend', `<strong class='modal-form__error-message shake'>Ошибка отправки данных. Проверьте подключение к интернету и попробуйте снова.</strong>`);
        setTimeout(() => {
          errorMessageWrapperElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }, () => {
        submitButtonElement.disabled = false;
        submitButtonElement.classList.remove(SUBMIT_BUTTON_PENDING_STATE_CLASS);
      });
    } else {
      formElement.classList.remove('shake');
      setTimeout(() => formElement.classList.add('shake'), 50);
    }
  });
  document.querySelectorAll(`[data-modal-opener="${modalName}"]`).forEach(openerElement => {
    openerElement.addEventListener('click', evt => {
      evt.preventDefault();
      errorMessageWrapperElement.innerHTML = '';
      pristine.reset();
      formElement.reset();
      formElement.classList.remove('shake');
      innerElement.addEventListener('transitionend', () => {
        modalElement.querySelector('input').focus();
      }, {
        once: true
      });
      sectionElement.classList.remove('modal-form-section--response');
      openModal(modalElement);
    });
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */

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
    closedModalElement.addEventListener('transitionend', evt => {
      if (evt.propertyName === 'transform') {
        closedModalElement.remove();
      }
    }, {
      once: true
    });
  }
  if (!openedModals.length) {
    const modalInnerElement = evt.target.querySelector('.modal__inner');
    modalInnerElement.addEventListener('transitionend', ({
      target
    }) => {
      if (target.classList.contains('modal') || target.classList.contains('modal__inner')) {
        togglePageScroll();
      }
    }, {
      once: true
    });
    document.removeEventListener('click', onModalClick);
  }
}
function onModalClick({
  target
}) {
  if (!target.classList.contains('modal__close-button') && !target.classList.contains('alert__button')) {
    return;
  }
  closeModal(openedModals.at(-1));
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * news-selection.js
 */
function initNewsSelectionList(newsSelectionElement) {
  const cursorElement = document.querySelector('.cursor-picture');
  const cursorImageElement = cursorElement.querySelector('.cursor-picture__image');
  const linkElements = newsSelectionElement.querySelectorAll('.selection-list__item-link');
  linkElements.forEach(linkElement => {
    linkElement.addEventListener('mouseover', ({
      target
    }) => {
      const imageUrl = target.parentElement.dataset.cursorImage;
      cursorImageElement.style.backgroundImage = `url("${imageUrl}")`;
      cursorElement.classList.remove('cursor-picture--hidden');
    });
    linkElement.addEventListener('mousemove', evt => {
      cursorElement.style.top = `${evt.pageY}px`;
      cursorElement.style.left = `${evt.pageX}px`;
    });
    linkElement.addEventListener('mouseout', () => {
      cursorElement.classList.add('cursor-picture--hidden');
    });
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-header.js
 */
function initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation) {
  const burgerElement = siteHeaderElement.querySelector('.site-header__burger');
  const siteNavigationElement = siteHeaderElement.querySelector('.site-header__site-navigation');
  const myCb = () => {
    siteHeaderElement.classList.toggle('site-header--expanded');
    togglePageScroll();
  };
  initBurger(burgerElement, myCb);
  initSiteNavigation(siteNavigationElement);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * site-navigation.js
 */
function toggleSiteNavigationSubMenu(subMenuButtonElement, subMenuButtonActiveClassName) {
  subMenuButtonElement.classList.toggle(subMenuButtonActiveClassName);
  subMenuButtonElement.ariaExpanded = subMenuButtonElement.classList.contains(subMenuButtonActiveClassName);
}
;
function initSiteNavigation(siteNavigationElement) {
  const SUB_MENU_BUTTON_CLASS_NAME = 'site-navigation__sub-menu-button';
  const SUB_MENU_BUTTON_ACTIVE_CLASS_NAME = 'site-navigation__sub-menu-button--active';
  const onSiteNavigationClick = evt => {
    const laptopWidthMediaQueryList = window.matchMedia(LAPTOP_WIDTH_MEDIA_QUERY);
    const subMenuButtonElement = evt.target.closest(`.${SUB_MENU_BUTTON_CLASS_NAME}`);
    if (subMenuButtonElement && !laptopWidthMediaQueryList.matches) {
      toggleSiteNavigationSubMenu(subMenuButtonElement, SUB_MENU_BUTTON_ACTIVE_CLASS_NAME);
    }
  };
  siteNavigationElement.addEventListener('click', onSiteNavigationClick);
}
/* * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * *
 * main.js
 */
const siteHeaderElement = document.querySelector('.site-header');
initSiteHeader(siteHeaderElement, initBurger, initSiteNavigation);
const showAlert = initAlertCreator(openModal);
document.querySelectorAll('.selection-list--news').forEach(initNewsSelectionList);
document.querySelectorAll('.section__contacts-map').forEach(initMap);
document.querySelectorAll('.certificates-list').forEach(initCertificatesList);
document.querySelectorAll('.folds').forEach(initFolds);
document.querySelectorAll('.features-list').forEach(initFeaturesList);
document.querySelectorAll('.features-slider').forEach(initFeaturesSlider);
document.querySelectorAll('[data-modal="request"]').forEach(modalElement => {
  initModalForm({
    modalElement,
    openModal,
    sendData
  });
});
document.querySelectorAll('form[data-name]').forEach(formElement => {
  initForm({
    formElement,
    sendData,
    showAlert
  });
});
/* * * * * * * * * * * * * * * * * * * * * * * */