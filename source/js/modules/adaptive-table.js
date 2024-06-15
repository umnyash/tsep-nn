/* * * * * * * * * * * * * * * * * * * * * * * *
 * adaptive-table.js
 */
function initAdaptiveTable(tableWrapperElement) {
  const tableHeaderCellElements = tableWrapperElement.querySelectorAll('thead > tr > td');
  const tableRowElements = tableWrapperElement.querySelectorAll('tbody > tr');

  tableRowElements.forEach((rowElement) => {
    const rowCellElements = rowElement.querySelectorAll('td');

    rowCellElements.forEach((rowCellElement, index) => {
      const label = tableHeaderCellElements[index].textContent;
      rowCellElement.dataset.label = label;
    });
  });

  tableWrapperElement.addEventListener('click', ({ target }) => {
    const rowElement = target.closest('tbody tr');

    rowElement?.classList.toggle('open');
  });
}
/* * * * * * * * * * * * * * * * * * * * * * * */
