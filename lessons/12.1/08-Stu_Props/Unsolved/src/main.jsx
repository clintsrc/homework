/* 🏗️ Pass Data Using Props
 * Activity
 * Work with a partner to implement the following user story:
 * 
 * As a developer, I want to render a card by passing props.
 * Acceptance Criteria
 * The activity is done when it meets the following criteria:
 * 
 * It's done when I have updated the return method in src/components/Display.jsx to 
 *  render a card.
 * It's done when I have passed data for the kitten's name, description, and id as 
 *  props to the Card component.
 * It's done when I have modified to Card component to render the feline properties.
 * 
 * 💡 Hints
 * How can we use the React Docs on components and props to understand props better?
 * What is the term props short for?
 * 
 * 🏆 Bonus
 * If you have completed this activity, work through the following challenge with your 
 *  partner to further your knowledge:
 * Q: How could we use the style tag to add additional style to our React components? 
 * A: 
 * - Inline styles: Directly add styles to elements using a JavaScript object.
 * - <style> tag: Inject custom styles into the JSX using a plain CSS syntax.
 * - CSS Modules: Use scoped CSS for each component to avoid global style leakage.
 * - Styled Components: Use JavaScript to define and scope your styles with the 
 *  styled-components library.
 * 
 */

import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
