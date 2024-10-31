const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  userEmailSpan.textContent = localStorage.getItem('localStorageEmail');
  userPasswordSpan.textContent = localStorage.getItem('localStorageEmailPwd');
}

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');
    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem('localStorageEmail', email);
    localStorage.setItem('localStorageEmailPwd', password);

    renderLastRegistered();
  }
});


// BONUS:
// Does data stored using localStorage have an expiration date? What happens when the browser is closed?
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// localStorage data has no expiration time
// the stored data is saved across browser sessions (it remains after the browser is closed -- like a cookie)
