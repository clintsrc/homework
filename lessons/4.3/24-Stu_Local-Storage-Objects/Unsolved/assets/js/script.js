const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

const displayArea = document.querySelector('#msg');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const acctRecord = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }
  // TODO: Create user object from submission
  localStorage.setItem('acctRecord', JSON.stringify(acctRecord));

  // TODO: Set new submission to local storage
  renderMessage();
});

function renderMessage() {
  const currentAcctRecord = JSON.parse( localStorage.getItem('acctRecord'));
  if (currentAcctRecord != null ) {
    displayArea.textContent = 
      `${currentAcctRecord.firstName} | 
       ${currentAcctRecord.lastName} | 
       ${currentAcctRecord.email} | 
       ${currentAcctRecord.password}`;
    console.log(JSON.stringify(currentAcctRecord)); // dump json formatted record to the console
  }
}


// BONUS:
// refs: https://www.oracle.com/database/what-is-json/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
//
// Q: What is JSON? How is it useful for sending and storing data?
//
// A: JSON is a text-based format for storing and exchanging data 
// in a way that’s both human-readable and machine-parsable
//