const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // set the div box text to the element's data-number value
  element.textContent = element.dataset.number;
  
  // set the state to visible
  element.setAttribute('data-state', 'visible');
  // alternatively: element.dataset.state = 'visible';
});

// BONUS:
// getElementById, getElementsByClassName, getElementsByName, getElementsByTagName, querySelector, querySelectorAll
// removeAttribute, toggleAttribute
