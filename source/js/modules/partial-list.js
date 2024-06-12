/* * * * * * * * * * * * * * * * * * * * * * * *
 * partial-list.js
 */
function initPartialList(listElement) {
  const button = listElement.querySelector('.partial-list__button');

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    listElement.classList.add('partial-list--expand');
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
