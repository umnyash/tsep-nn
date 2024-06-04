/* * * * * * * * * * * * * * * * * * * * * * * *
 * news-selection.js
 */
function initNewsSelectionList(newsSelectionElement) {
  const cursorElement = document.querySelector('.cursor-picture');
  const cursorImageElement = cursorElement.querySelector('.cursor-picture__image');
  const linkElements = newsSelectionElement.querySelectorAll('.selection-list__item-link');

  linkElements.forEach((linkElement) => {
    linkElement.addEventListener('mouseover', ({ target }) => {
      const imageUrl = target.parentElement.dataset.cursorImage;
      cursorImageElement.style.backgroundImage = `url("${imageUrl}")`;
      cursorElement.classList.remove('cursor-picture--hidden');
    });

    linkElement.addEventListener('mousemove', (evt) => {
      cursorElement.style.top = `${evt.pageY}px`;
      cursorElement.style.left = `${evt.pageX}px`;
    });

    linkElement.addEventListener('mouseout', () => {
      cursorElement.classList.add('cursor-picture--hidden');
    });
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
