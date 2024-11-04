//do not change the following line
let isTest = false

// Toggle the light/dark mode styles for the page and circle. The mode is saved to local storage.
const rootEl = document.documentElement;
const bodyEl = document.querySelector("body");
const btnMode = document.querySelector("#toggle");

// preserve the initial circle color to toggle back to it
const varInitialCircleColorEl = getComputedStyle(rootEl).getPropertyValue('--circle-color');

let lightMode = localStorage.getItem('lightMode');

function toggleDarkMode() {
  if (!lightMode) {
    lightMode = 'light' // set a default if not available from local storage
  }

  if ('light' === lightMode.toLowerCase()) {
    lightMode = 'dark';
    circleColor = '#ff5900';
  } else {
    lightMode = 'light';
    circleColor = varInitialCircleColorEl;
  }

  bodyEl.setAttribute('class', lightMode);
  rootEl.style.setProperty('--circle-color', circleColor);
  localStorage.setItem('lightMode', lightMode);
}

btnMode.addEventListener('click', toggleDarkMode);

/*
 *
 * Function readLocalStorage reads from local storage and returns the data. 
 * If no data exists, return an empty array.
 * 
 */
function readLocalStorage() {
  let storedBlog = JSON.parse(localStorage.getItem('blog'));

  if (null === storedBlog) {
    storedBlog = [];
  }
  console.log('DEBUG readLocalStorage: ' + storedBlog);  // TODO: for debugging

  return storedBlog;
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newPost) {
  // get existing records
  let storedBlog = readLocalStorage();

  //let newPost = {}
  // append the new post to the stored blog
  storedBlog.push(newPost);

  // save the updated blog back to local storage
  localStorage.setItem('blog', JSON.stringify(storedBlog));

  return;
}

// !!!!! Use the following redirectPage function whenever you need to redirect to a different page.  Do not modify any of the code below
let redirectURL = 'blog.html';

const redirectPage = function (url) {
  redirectURL = url
  if (!isTest) {
    // Only redirect if the event is user-initiated
    redirectURL = url
    location.assign(redirectURL)

  } else {
    redirectURL = url
  }
};
