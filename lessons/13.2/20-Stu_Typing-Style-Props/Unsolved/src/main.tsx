/*
🐛 Application Fails to Build Due to Missing Types
Work with a partner to resolve the following issue(s):

As a designer, when I visit the page, I should see styling being applied to the page.
Expected Behavior
When a user visits the page, it should have styling applied to it and the app should build without any errors.

Actual Behavior
When a build is run, it fails to transpile.

Steps to Reproduce the Problem
Run npm install in the terminal.

Run npm run build in the terminal and take note of the errors.

Assets
The following image demonstrates the web application's appearance and functionality:

Mockup of working application, showing a profile card with profile and background images, as well as profile information.

💡 Hints
Which React built-in interface can you use to ensure that you're passing valid CSS to your style props?

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What is the csstype package, and how does it relate to the React.CSSProperties type?
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
