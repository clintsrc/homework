/*
 *

  📖 Implement a Redirect if Response Status is 404
  Work with a partner to implement the following user story:

  As a business owner, I want my application to redirect to a new page if an error occurs, so that users are notified of any issues.

  Acceptance Criteria
  It's done when I make a fetch() request that results in a 404 status and the browser redirects to 404.html.

  📝 Notes
  Refer to the documentation:
  MDN Web Docs on location.replace (https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)

  💡 Hints
  How can the Network Activity tab assist us?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What is the difference between document.location.assign and document.location.replace?
  A: document.location.assign and document.location.replace are handled different in the browser history.
     * document.location.assign navigates to the URL and ADDS it to the browser history: 
       this lets the user return to the previous page using the browser's back button
     * document.location.assign REPLACES the current URL entry and does NOT add an entry to the browser history 
       it overwrites it. This prevents the user from returning to the previous page using the browser's back button

 *
 */

import './style.css';
const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

const getRequest = async () => {

  // Use a conditional to check the response status.

  // If that status equals the conditional, then redirect to the 404 page.
  try {
    const response = await fetch(badRequestUrl);

    // redirect to a new page if an error occurs
    if (404 === response.status){
      location.replace(redirectUrl);
    }
  } catch (error) {
    console.log(`Fetch error: ${error}`)
  }
};

getRequest();