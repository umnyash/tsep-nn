/* * * * * * * * * * * * * * * * * * * * * * * *
 * features-list.js
 */
function initFeaturesList(listElement) {
  const itemElements = Array.from(listElement.querySelectorAll('.features-list__item'));

  const setItemElementMinHeightValue = () => {
    listElement.style.setProperty('--item-min-height', 0);

    setTimeout(() => {
      const itemElementsHeightValues = itemElements.map((itemElement) => itemElement.offsetHeight);
      const highestHeightValue = `${Math.max(...itemElementsHeightValues)}px`;
      listElement.style.setProperty('--item-min-height', highestHeightValue);
    }, 0);
  };

  setItemElementMinHeightValue();
  window.addEventListener('resize', debounce(setItemElementMinHeightValue));
};
/* * * * * * * * * * * * * * * * * * * * * * * */
