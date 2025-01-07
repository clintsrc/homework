/* 📖 Implement React Styling
 * Activity
 * Work with a partner to implement the following user story:
 * As a developer, I want to know how to style a React component using built-in 
 *    options.
 * 
 * Acceptance Criteria
 * It's done when I have added inline styles to the Header, Navbar, and Section 
 *    components.
 * It's done when I have updated each component so that the rendered page looks 
 *    like the 
 * inline styled example using only inline styles, and without altering any of 
 *    the CSS files.
 * 
 * (These are at src/components/*.jsx)
 * 
 * 📝 Notes
 * Refer to the documentation:
 * React Docs on style
 * React Enlightenment guide to additional styling
 * 
 * 🏆 Bonus
 * If you have completed this activity, work through the following challenge with your 
 *    partner to further your knowledge:
 * Q: What are some other ways that you can style a component in React?
 * A:
 * 1. CSS Stylesheets: Create a separate CSS file and import it into your component file.
 * 2. CSS Modules: Use CSS Modules to scope CSS to a specific component.
 * 3. Styled Components: Utilize the `styled-components` library to write CSS in JavaScript.
 * 4. CSS-in-JS Libraries: Use libraries like `emotion` or `JSS` to style components.
 * 5. Sass/SCSS: Preprocess your CSS with Sass or SCSS for more powerful styling options.
 * 6. Tailwind CSS: Use utility-first CSS framework like Tailwind CSS for rapid UI development.
 *  (ref: https://www.sitepoint.com/react-components-styling-options/)
 */


import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
