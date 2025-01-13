/*
📐 Add Comments to Implementation of Typing React DOM Events
Work with a partner to add comments describing the functionality of the code found in ./Unsolved/App.tsx.

📝 Notes
Refer to the documentation:

React Docs on Typing DOM Events

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What is the React.SyntheticEvent type for, and when would you use it?
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
