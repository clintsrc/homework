let count = 0;
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add event listener to decrement button
decrementEl.addEventListener('click', function() {
  if(0 < count) {
    count--;
  }

  setCounterText();
});


// BONUS: other DOM events:
// ref https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/events
// removeEventListener(), hasListener();
