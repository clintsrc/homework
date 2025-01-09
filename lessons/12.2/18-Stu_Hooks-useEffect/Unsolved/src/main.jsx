/*
 * 📖 Implement the useEffect Hook
 * 
 * Activity
 * Work with a partner to implement the following user story:
 * 
 * As a developer, I want to be able to use the useEffect Hook to update the browser 
 *  tab to reflect the current temperature.
 * 
 * Acceptance Criteria
 * It's done when I have imported useEffect into Thermostat.jsx.
 * It's done when I have set a value for the temp variable.
 * It's done when I have used the useEffect Hook to set the document.title to the 
 *  current temperature.
 * 
 * 📝 Notes
 * Refer to the documentation:
 * React Docs on the Effect Hook
 * 
 * 🏆 Bonus
 * If you have completed this activity, work through the following challenge with your 
 *  partner to further your knowledge:
 * Q: What are some other use cases for the useEffect() Hook?
 * A: 
 *  - fetching data from an api
 *  - other DOM updates: adding/removing event listeners, timers
 * 
 */

import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
