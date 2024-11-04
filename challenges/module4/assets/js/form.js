///////////////////////////
///  Global variables   ///
///////////////////////////

// Variables for the form elements
const inputUsernameEl = document.querySelector("#username");
const inputTitleEl = document.querySelector("#title");
const inputContentEl = document.querySelector("#content");
const pErrorEl = document.querySelector("#error");
const btnSubmitEl = document.querySelector("#submit");


///////////////////////////
///  Global functions   ///
///////////////////////////

/*
 *
 * handleSubmission
 *
 * Handles the form submission. 
 * Grab the form data and store it in local storage, then 
 * redirect to the blog page using the `redirectPage` function. 
 * 
 * If the form is submitted with missing data, display an error message 
 * to the user.
 * 
 */
function handleSubmission(e) {
    e.preventDefault();

    let bInputError = false;
    let blogPost = {};

    pErrorEl.textContent = '';  // clear the error output

    if ( (! inputUsernameEl.value) ) {
        bInputError = true;
        // A future improvement to handle missing elements individually
        //pErrorEl.innerHTML += "Error: Username is required<br>";
    }

    if ( (! inputTitleEl.value) ) {
        bInputError = true;
        // A future improvement to handle missing elements individually
        //pErrorEl.innerHTML += "Error: Title is required<br>";
    }
    
    if ( (! inputContentEl.value) ) {
        bInputError = true;
        // A future improvement to handle missing elements individually
        //pErrorEl.innerHTML += "Error: Content is required";
    }
    
    if(! bInputError ) {
        blogPost = {
            username: inputUsernameEl.value,
            title: inputTitleEl.value,
            content: inputContentEl.value
        };

        localStorage.setItem('blogPost', JSON.stringify(blogPost)); // store the valid record

        storeLocalStorage(blogPost);    // add the new record to local storage
        redirectPage("blog.html");      // TODO: broken
    } else { 
        pErrorEl.textContent = "Please complete the form.";
    }
   
}


///////////////////////////
///   Event listeners   /// 
///////////////////////////

/*
 *
 * Add an event listener to the form on submit. 
 * Call the function to handle the form submission.
 * 
 */
btnSubmitEl.addEventListener('click', handleSubmission);
