///////////////////////////
///  Global variables   ///
///////////////////////////

//do not change the following line
let isTest = false

// Toggle the light/dark mode styles for the page and circle. The mode is saved to local storage.
const rootEl = document.documentElement;
const bodyEl = document.querySelector("body");
const btnMode = document.querySelector("#toggle");

// preserve the initial circle color to toggle back to it
const varInitialCircleColorEl = getComputedStyle(rootEl).getPropertyValue('--circle-color');

let lightMode = localStorage.getItem('lightMode');


///////////////////////////
///  Global functions   ///
///////////////////////////

/*
 *
 * toggleDarkMode
 * 
 * Handle a dark mode toggle to change the page style and the circle color
 * Preserve the original circle color before updating it to dark
 * Preserve the current mode in local storage
 * 
 */
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

/*
 *
 * readLocalStorage
 * 
 * Read from local storage and return the data. 
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
  // get the existing blog entries
  let currentBlog = readLocalStorage();

  // append the new post to what's currently stored blog
  currentBlog.push(newPost);

  // Save the updated blog object array data back to local storage
  localStorage.setItem('blog', JSON.stringify(currentBlog));

  return;
}

///////////////////////////
///   Event listeners   /// 
///////////////////////////

/*
 *
 * Add an event listener to the header
 * Call the function to handle dark mode settings and changes
 * 
 */
btnMode.addEventListener('click', toggleDarkMode);


///////////////////////////
///  Function Calls    ///
///////////////////////////

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
