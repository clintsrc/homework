/*
🏗️ Implement Theme Toggle Via useContext Hook

Activity
Work with a partner to implement the following user story:
As a user, I want to be able to toggle between light and dark themes so that I can customize the app's appearance based on my preference.

Acceptance Criteria
It's done when the application initially uses a light theme.
It's done when I click on the Toggle Theme button and the application theme switches between light and dark themes.

💡 Hints
How can you use the official React Docs on useContext to assist in this exercise?

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
Q: What are some other use cases for the useContext hook?
A: TODO
 */

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
