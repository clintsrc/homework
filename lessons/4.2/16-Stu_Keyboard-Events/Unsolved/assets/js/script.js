const infoKeyEl = document.querySelector('#key');
const infoKeyCodeEl = document.querySelector('#code');

function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector('#status').textContent = 'KEYDOWN Event';
  
  const key = event.key.toLowerCase();
  infoKeyEl.textContent = key;
  infoKeyCodeEl.textContent = event.code;
  // BONUS
  if (event.altKey){
    infoKeyEl.textContent = "[Alt]";
  }

}

function keyupAction() {
  document.querySelector('#status').textContent = 'KEYUP Event';

  infoKeyEl.textContent = '';
  infoKeyCodeEl.textContent = '';
}

document.addEventListener('keyup', keyupAction);
// TODO: Add Event Listener for 'keydown' event
document.addEventListener('keydown', keydownAction);


// BONUS:
// ref: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
// bool KeyboardEvent.altKey, 