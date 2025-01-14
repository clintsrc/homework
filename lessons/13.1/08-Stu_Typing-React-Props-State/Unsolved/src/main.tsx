/*
 * 📖 Implement TypeScript React Properties and State
 * As a developer, I want to implement component properties and state into my TypeScript React application.
 * 
 * Acceptance Criteria
 * It's done when the application displays two different Advertisement components, 
 * each with the fields companyName, productDescription, and price.
 * 
 * It's done when the Calculator component "Add" button correctly updates the 
 * displayed fields for total and previousTotal.
 * 
 * Use the "TODO" comments in the following files to guide your implementation:
 * 
 * ./Unsolved/src/components/Calculator.tsx
 * ./Unsolved/src/components/Advertisement.tsx
 * ./Unsolved/src/App.tsx
 * 
 * 💡 Hints
 * What are two different ways to define types for React properties and state?
 * 
 * 🏆 Bonus
 * Q: How could we make some React component properties optional?
 * A: TODO
 * 
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
