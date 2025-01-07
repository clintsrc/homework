/* 
 * 🏗️ Implement JSX Expressions
 * Activity
 * Work with a partner to implement the following user story: 
 * As a developer, I want to be able to use JSX expressions to render variables in 
 * my components.
 * 
 * Acceptance Criteria
 * It's done when I create the JavaScript variables requested in JSXVariables.jsx.
 * It's done when I render a name variable that will hold my name.
 * It's done when I render the number of letters in the name variable.
 * It's done when I create a variable called thoughts that contains a string
 *  regarding my thoughts on React.
 * 
 * 💡 Hints
 * How can we use the React Docs on JSX to help us while working with JSX?
 * (ref: https://react.dev/learn/javascript-in-jsx-with-curly-braces#where-to-use-curly-braces)
 *  
 * 🏆 Bonus
 * Q: What other array methods are available to use on the name variable?
 * A: The standard javascript array methods are available to use in react
 * (ref: https://react.dev/learn/rendering-lists#rendering-data-from-arrays)
 *  
 */

import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
