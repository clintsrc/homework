// TODO: Create a variable that selects the form element
const inputUsernameEl = document.querySelector("#username");
const inputTitleEl = document.querySelector("#title");
const inputContentEl = document.querySelector("#content");
const pErrorEl = document.querySelector("#error");
const btnSubmitEl = document.querySelector("#submit");

/*
 * 
 * TODO: Create a function that handles the form submission. 
 * Grab the form data and store it in local storage, then redirect to 
 * the blog page using the `redirectPage` function. 
 * 
 * If the form is submitted with missing data, display an error message 
 * to the user.
 * 
 */
function handleSubmission(e) {
    //e.preventDefault();

    let bInputError = false;
    let blogPost = {};

    pErrorEl.textContent = '';  // clear the error output

    if ( (! inputUsernameEl.value) ) {
        bInputError = true;
        pErrorEl.innerHTML += "Error: Username is required<br>";
    }

    if ( (! inputTitleEl.value) ) {
        bInputError = true;
        pErrorEl.innerHTML += "Error: Title is required<br>";
    }
    
    if ( (! inputContentEl.value) ) {
        bInputError = true;
        pErrorEl.innerHTML += "Error: Content is required";
    }
    
    if(! bInputError ) {
        blogPost = {
            username: inputUsernameEl.value,
            title: inputTitleEl.value,
            content: inputContentEl.value
        };

        localStorage.setItem('blogPost', JSON.stringify(blogPost)); // store the valid record
        //pErrorEl.textContent = JSON.stringify(blogPost);    // TODO: temporary for debugging

        // const latestRecord = JSON.parse(localStorage.getItem('blogPost'));
        const latestRecord = JSON.parse(localStorage.getItem('blogPost')); // read data into an object
        pErrorEl.textContent = JSON.stringify(latestRecord);    // TODO: temporary for debugging
    }
   
}

/*
 *
 * Add an event listener to the form on submit. 
 * Call the function to handle the form submission.
 * 
 */
btnSubmitEl.addEventListener('click', handleSubmission);
