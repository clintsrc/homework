/* 
 * 🐛 Event Handling in JSX
 * 
 * Activity
 * Work with a partner to resolve the following issue:
 * As a user, I want to be able to welcome some students to class by displaying their 
 *  names in an alert along with a welcome message.
 * As a developer, I want to allow my user to successfully click on the buttons in the 
 *  browser.
 * 
 * Expected Behavior
 * Clicking on any one of the buttons on the page should open an alert dialog box which 
 *  says "Welcome student!" where student properly reflects the name which matches the 
 *  button.
 * 
 * Actual Behavior
 * The page immediately alerts a welcome message for each student and the buttons do 
 *  not respond to clicks.
 * 
 * 💡 Hints
 * When registering event handlers, we pass a function reference to the browser, so 
 *  that it can be invoked when the user interaction occurs on the specified element or 
 *  elements. What are we doing here?
 * A: If you want to define your event handler inline, wrap it in an anonymous 
 *  function. This creates a function to be called later rather than executing the code 
 *  inside the handler with every render
 * The React Docs can be a helpful resource to consult if you are having difficulty 
 *  identifying the issue.
 * A: ref: https://react.dev/learn/responding-to-events
 * 
 * 🏆 Bonus
 * If you have completed this activity, work through the following challenge with 
 *  your partner to further your knowledge:
 * Q: What are some other events we can use with React elements?
 * A: The standard DOM events. Here's the REACT documentation:
 *  https://react.dev/reference/react-dom/components/common
 * 
 */

import ReactDOM from 'react-dom/client';
import App from './App';
// Here we import bootstrap for access to some additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
