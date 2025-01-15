/*
 * 📐 Add Comments to Implementation of Typing React DOM Events
 * Work with a partner to add comments describing the functionality of the code
 * found in ./Unsolved/App.tsx.
 *
 * 📝 Notes
 * Refer to the documentation:
 * React Docs on Typing DOM Events
 *
 * 🏆 Bonus
 * Q: What is the React.SyntheticEvent type for, and when would you use it?
 * A: React.SyntheticEvent is the base type for all DOM events. You can use that
 *    for an event if it's not included here:
 *      https://developer.mozilla.org/en-US/docs/Web/Events
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
