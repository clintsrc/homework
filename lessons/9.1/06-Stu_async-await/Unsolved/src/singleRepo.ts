/* 
 *

  🏗️ Refactor the Code to Use async and await Instead of Promises Chains
  Work with a partner to implement the following user story:
  As a business owner, I want to update my application's code to keep up with modern practices.
  
  Acceptance Criteria
  It's done when singleRepo.ts no longer uses Promise chaining and instead uses async and await.
  It's done when the application functions as before with the refactored code.

  💡 Hint
  How does JavaScript know when a function is asynchronous?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What is a try/catch block?
  A: The "try" block contains code that may potentially throw an exception, while the "catch" block contains code 
     that executes if an exception occurs. This allows developers to detect errors, respond gracefully, and maintain 
     the application’s stability without crashing. If a "finally" block is specified then that code will try to 
     recover or clean up after a fatal error

*
*/


import './style.css';

const repoNameEl = document.querySelector('#repo-name') as HTMLSpanElement;
const issueContainerEl = document.querySelector(
  '#issues-container'
) as HTMLDivElement;
const limitWarningEl = document.querySelector(
  '#limit-warning'
) as HTMLDivElement;

const getRepoName = () => {
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  const queryString = document.location.search;
  const repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    document.location.replace('./index.html');
  }
};

const getRepoIssues = async (repo: string) => {
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

  try {
    // wait intil the promise is resolved (returned)
    const response = await fetch(apiUrl);//.then((response) => {
      if (response.ok) {
        // the response doesn't need to be chained now
        //response.json().then((data) => {
        const data = await response.json();
          displayIssues(data);

          // Since GitHub only returns 30 results at a time, we check to see if 
          //    there's more than 30 by looking for a next page URL in the 
          //    response headers.
          if (response.headers.get('Link')) {
            displayWarning(repo);
          }
      } else {
        document.location.replace('./index.html');
      }
  } catch (error) {
    console.error('Error fetching repo issues:', error);
    document.location.replace('./index.html');
  }
};

const displayIssues = (issues: any[]) => {
  // This will check for strict equality. Using `!issues.length` works, but only because JavaScript considers `0` to be `falsy`.
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (const issueObj of issues) {
    createIssueCard(issueObj);
  }
};

const createIssueCard = (issue: any) => {
  const issueEl = document.createElement('a');
  issueEl.classList.add(
    'list-item',
    'flex-row',
    'justify-space-between',
    'align-center'
  );
  issueEl.setAttribute('href', issue.html_url);
  issueEl.setAttribute('target', '_blank');

  const titleEl = document.createElement('span');
  titleEl.textContent = issue.title;
  issueEl.appendChild(titleEl);

  const typeEl = document.createElement('span');

  // If there's already a pull request open, it's a good idea we focus on other open issues that no one has worked on.
  if (issue.pull_request) {
    typeEl.textContent = '(Pull request)';
  } else {
    typeEl.textContent = '(Issue)';
  }

  issueEl.appendChild(typeEl);

  issueContainerEl.appendChild(issueEl);
};

// When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
const displayWarning = (repo: string) => {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  // This will appear on the bottom of the page.
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
