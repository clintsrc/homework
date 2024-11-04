// Variables for main element, and  back button element
const mainEl= document.querySelector('main');
const btnBackEl = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    mainEl.textContent = "No Blog posts yet...";
}


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blog = readLocalStorage();

    if (blog.length === 0) {
        noPosts();
    } else {
        console.log("DEBUG renderBlogList GOT HERE");
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// Redirect to the home (landing) page using the `redirectPage` function 
// found in logic.js when the back button is clicked
btnBackEl.addEventListener('click', function () {
    redirectPage("index.html");
});
