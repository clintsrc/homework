// set a variable by selecting the div containing the image and direction buttons
const carousel = document.querySelector('.carouselbox');
// set variables by selecting the next and previous buttons
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

// array holding the available carouselbox background images
const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

// set the initial carouselbox background image to the first in the array
carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;  // index is increased or decreased by 1
  // handle wraparound for 'previous on first image' and 'next on last image'
  if (index < 0) {
    // index was on the first image: previous (-1) means set it to the last image (array index 3)
    index = images.length - 1;
  } else if (index > images.length - 1) {
    // index was on he last image: next image (+1) means 'wrap around' to the first image (array index 0)
    index = 0;
  }
  // the previous/next was still within array range so go ahead and assign it
  currentImage = images[index];
  // update the carouselbox background image to reflect the direction clicked
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// Prevent a the browser from opening the background image itself
//    if the user clicks the background -- this explicitly sets
//    the click action to set the image for the current window
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// handle a Next button click to advance the count forward with a +1 index
next.addEventListener('click', function (event) {
  // Prevent a the browser from opening the next background image itself
  event.stopPropagation();

  navigate(1);
});

// handle a Previous button click to advance the count backward with a -1 index
prev.addEventListener('click', function (event) {
  // Prevent a the browser from opening the last background image itself
  event.stopPropagation();

  navigate(-1);
});

// set the initial background to the first image
navigate(0);

// BONUS:
// ref: https://gomakethings.com/whats-the-difference-between-javascript-event-delegation-bubbling-and-capturing/
/*
  Event delegation: designate a parent element as the listener for 
     all of the events that happen inside it (down the DOM heirarchy)

  Event bubbling: events bubble up to the parent (up the heirarchy), 
     then on to any containers or divs where the element was embedded, 
     then on to the body, ...
     ... then the html element
     ... then the document
     ... then the window.
  */