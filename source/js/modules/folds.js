/* * * * * * * * * * * * * * * * * * * * * * * *
 * map.js
 */
const initFolds = (foldsElement) => {
  foldsElement.addEventListener('click', ({ target }) => {
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
