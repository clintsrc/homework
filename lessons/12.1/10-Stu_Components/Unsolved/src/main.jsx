/* 
 * 📖 Implement Map() Inside a Component
 * Activity
 * Work with a partner to implement the following user story:
 * As a developer, I want to be able to map over a list of data and render components 
 *    for each piece of data.
 * 
 * Acceptance Criteria
 * The activity is done when it meets the following criteria:
 * It's done when I have modified the List component so that inside its ul tags, one 
 *    li tag renders for each item in the array of grocery objects being passed 
 *    via props.
 * It's done when each li tag displays the text property of each grocery object using 
 *    the map() method.
 * 
 * 📝 Notes
 * Refer to the documentation:
 * 
 * React Docs on lists and keys
 * 
 * MDN Web Docs on map()
 * 
 * 💡 Hints
 * We only need to modify one file for the activity. Which one is it?
 * 
 * 🏆 Bonus
 * If you have completed this activity, work through the following challenge with your partner to further your knowledge:
 * Q: How could we render a list of only the groceries that have not been purchased? Could we use the filter() method to help us with this? 
 * Q: TODO
 * 
 */


import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
