//do not change the following line
let isTest = false

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const bodyEl = document.querySelector("body");
const btnMode = document.querySelector("#toggle");

let lightMode = localStorage.getItem('lightMode');

function toggleDarkMode() {
  if(! lightMode) {
    lightMode = 'light' // set a default if not available from local storage
  }

  if( 'light' === lightMode.toLowerCase() ) {
    lightMode = 'dark';
  } else {
    lightMode = 'light';
  }

  bodyEl.setAttribute('class', lightMode);
  localStorage.setItem('lightMode', lightMode);
  
  return;
}

btnMode.addEventListener('click', toggleDarkMode);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// !!!!! Use the following redirectPage function whenever you need to redirect to a different page.  Do not modify any of the code below
let redirectURL = 'blog.html';

const redirectPage = function (url) {
  redirectURL = url
  if (!isTest) {
    // Only redirect if the event is user-initiated
    redirectURL = url
    location.assign(redirectURL)

  }else{
    redirectURL = url
  }
};
