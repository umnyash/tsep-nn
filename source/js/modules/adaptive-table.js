/* * * * * * * * * * * * * * * * * * * * * * * *
 * adaptive-table.js
 */
function initAdaptiveTable(tableElement) {
  tableElement.addEventListener('click', ({ target }) => {
    const rowElement = target.closest('.adaptive-table__row');

    rowElement?.classList.toggle('adaptive-table__row--open');
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
