/*
 * Work with a partner to add comments that describe the functionality of the code in Unsolved/src.
 *
 * BONUS:
 * Q: What are some other options that you can use with the defineConfig method?
 * A: Some other options you can use with the defineConfig method include:
 *    - base: Specify the base public path when serving the project in development 
 *      or production.
 *    - build: for build options, e.g. output directory, minification, etc.
 *    - server: options for the development server, e.g. port, proxy, etc.
 *    - plugins: Vite supports plugins
 *    - resolve: module resolution rules
 *    - css:CSS options
 * 
 */

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the root React component (App)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
