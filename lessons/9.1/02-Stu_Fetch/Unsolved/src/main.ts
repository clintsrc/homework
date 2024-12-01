/* 
 *

  Implement the Fetch API to Display GitHub Data as HTML
  Work with a partner to implement the following user story:

  As a manager, I want an app that calls the GitHub API so that I can print a list of my team's GitHub usernames and links to their profiles.

  Acceptance Criteria
  It's done when I press the "Click Me" button, and a list of five GitHub users appears on the page underneath the button.
  It's done when each user includes their login name and a URL to their GitHub profile.
  It's done when I click on a user, and a new tab opens to their GitHub profile.

  💡 Hints
  How can we compile TypeScript and HTML together?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What are fetch options used for?
  A: Fetch options are used for API requests (e.g. to use http method like GET, POST, PUT, DELETE and credentials)
    and error handling for the response
  Q: What tsconfig options did Vite create? Are there options that you've used in the past that are missing?
  A: Vite manages the typescript project (tsconfig.json). I'm not sure, but if Vite was used for this lesson's starter 
     code it probably set these options:
      "moduleResolution": "Bundler" handles module bundling and resolution.
      "target": "ES2020", "module": "ESNext" to use the latest language features
      "rootDir": "src" specifies that the source files are located in the src directory.
      "outDir": "dist" sets the compiled output are in the dist directory
      "strict": true helps with type safety

*
*/


// ! When dynamically generating elements in TypeScript, we need to cast the element to the correct type
const usersContainer = document.getElementById('users') as HTMLDivElement;
const fetchButton = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;

const REQUEST_URL = 'https://api.github.com/users?per_page=5';

const getUsers = async () => {

  try {
    // TODO: Add a fetch call to the GitHub API
    const response = await fetch(REQUEST_URL);

    // TODO: Then parse the JSON response
    const userData = await response.json();

    // Clear previous users
    usersContainer.innerHTML = '';

    // TODO: Then iterate over the data and generate your HTML
    // extract the user login name (login) their GitHub profile url (html_url)
    userData.forEach((user: { login: string; html_url: string }) => {
      const userButton = createUserButton(user.login, user.html_url);
      usersContainer.appendChild(userButton);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchButton.addEventListener('click', getUsers);

const createUserButton = (username: string, url: string) => {
  // Creating a h3 element and a p element
  const userName = document.createElement('h3');
  const userUrl = document.createElement('p');

  // Setting the text of the h3 element and p element.
  userName.textContent = username;
  userUrl.textContent = url;

  // Creating a link element that looks like a button
  const userButton = document.createElement('a');
  userButton.classList.add('btn', 'btn-primary');
  userButton.href = url;
  userButton.target = '_blank';

  // Append will attach the element as the bottom most child.
  userButton.append(userName);
  userButton.append(userUrl);

  return userButton;
};
