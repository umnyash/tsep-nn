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
