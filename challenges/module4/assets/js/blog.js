///////////////////////////
///  Global variables   ///
///////////////////////////

// Variables for main and back button elements
const mainEl= document.querySelector('main');
const btnBackEl = document.querySelector('#back');


///////////////////////////
///  Global functions   ///
///////////////////////////

// Function to create an element and append it to the DOM
// todo: clean-up
function createAndAppendElement(tag, parent, textContent = '', attributes = {}) {
    const element = document.createElement(tag);
    element.textContent = textContent;

    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }

    parent.appendChild(element);
    return element;
}


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
 * TODO: clean up
 */
function renderBlogList() {
    const blog = readLocalStorage();

    if (blog.length > 0) {
        // Clear the main element
        mainEl.innerHTML = '';

        // Render the list of blog posts to the main element
        blog.forEach(function(post) {
            const postEl = document.createElement('div');
            postEl.className = 'post';

            const titleEl = document.createElement('h2');
            titleEl.textContent = post.title;
            postEl.appendChild(titleEl);

            const contentEl = document.createElement('p');
            contentEl.textContent = post.content;
            postEl.appendChild(contentEl);

            mainEl.appendChild(postEl);
        });
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
