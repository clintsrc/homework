/*
 * 🐛 Page is Not Displaying User Data*
 * As a user, I should see sample user information on the page.
 *
 * Expected Behavior
 * When I visit the page, I can see a sample user name, email address, postal
 * address, and phone number.
 *
 * Actual Behavior
 * When I visit the page, it is blank and there are errors in the console.
 *
 * Steps to Reproduce the Problem
 * Run npm install and npm run dev.
 * Visit http://localhost:3000 and see that the page is blank and there are errors
 * in the console.
 *
 * 💡 Hints
 * How could you use type assertion to fix the error?
 *
 * 🏆 Bonus
 * Q: What are some other strategies you could use in place of type assertion?
 * A: TODO
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
