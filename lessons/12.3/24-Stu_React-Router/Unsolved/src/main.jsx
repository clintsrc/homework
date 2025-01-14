/*
 * 📖 Implement React-Router-DOM
 * 
 * Activity
 * Work with a partner to implement the following user story:
 *    - As a developer, I want to implement proper client-side routing.
 *    - As a user, I want to initially see the homepage on load.
 *    - As a user, I want to click to see About the developers.
 *    - As a user, I want to be able to click to view the full profile data for a user.
 * 
 * Acceptance Criteria
 *    - It is done when the proper imports have been brought into main.jsx, 
 *      App.jsx, /pages/HomePage.jsx.
 *    - It is done when main.jsx has a valid router defined.
 *    - The user should be able to see three unique pages
 *      - The Home page
 *      - The About page
 *      - The Profile page
 *    - Additionally, when a routing error occurs (such as the user navigates to 
 *      'http://localhost:3000/banana'), the user should be shown an ErrorPage.
 *    - It is done when App.jsx uses the proper React Router component to show a 
 *      browser child route.
 *    - It is done when /pages/HomePage.jsx links to each mock user's profile page.
 *    - It is done when /pages/ProfilePage.jsx properly uses the useParams hook to 
 *      fill in the API call for the individual user's profile data.
 * 
 * 📝 Notes
 * Ref er to the documentation:
 *    - React-Router-DOM Docs
 *    - Create Browser Router Setup
 *    - Link Component
 *    - useParams Hook
 * 
 * 🏆 Bonus
 *  If you have completed this activity, work through the following challenge with 
 *    your partner to further your knowledge:
 *      Q: What are some other ways that you can implement client-side routing with a 
 *         Vite application?
 *      A: Next.js, vanilla javascript
 */

import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/about',
        element: <AboutPage/>,
      },
      {
        path: '/profile/:id',
        element: <ProfilePage/>,
        
      }    
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
