///////////////////////////
///  Global variables   ///
///////////////////////////

// Variables for main and back button elements
const mainEl= document.querySelector('main');
const btnBackEl = document.querySelector('#back');


///////////////////////////
///  Global functions   ///
///////////////////////////

// TODO: Create a function that builds an element and appends it to the DOM


/*
 * 
 * noPosts
 * 
 * Handle the case where there are no blog posts to display
 * 
 */
function noPosts() {
    mainEl.textContent = "No Blog posts yet...";
}

/*
 *
 * renderBlogList
 *
 * render the list of blog posts if they exist. If not, call the no posts function.
 * 
 */
function renderBlogList() {
    const blog = readLocalStorage();

    if (blog.length > 0) {
        console.log("DEBUG renderBlogList GOT HERE");   // TODO
    } else {
        noPosts();
    }
}

///////////////////////////
///  Function Calls    ///
///////////////////////////

// Update the blog display
renderBlogList();


///////////////////////////
///   Event listeners   /// 
///////////////////////////

/*
 *
 * Redirect to the home (landing) page using the 'redirectPage'
 * function (see in logic.js) when the back button is clicked
 * 
 */
btnBackEl.addEventListener('click', function () {
    redirectPage("index.html");
});
