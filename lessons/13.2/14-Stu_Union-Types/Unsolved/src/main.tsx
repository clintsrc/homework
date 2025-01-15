/*
 * 🏗️ Display Last Digit, Character, or Array Element
 * As a website visitor, I want the page to render the rightmost value of a
 * word, number, or list of values, so that I can easily find them.
 *
 * Acceptance Criteria
 * - It's done when all of the corresponding values have the rightmost value of the
 *    array, string, or number displayed.
 * - It's done when I have written a function using union types to properly handle
 *    all cases.
 *
 * 💡 Hints
 * How could we use the remainder operator to find the last digit of a number?
 *
 * 🏆 Bonus
 * Q: How do union types relate to tuples and enums?
 * A: TODO
 *  Union Types: Union types allow a variable to hold values of different types.
 *    For example, you can define a variable that can be either a string or a number.
 *  Tuples: Tuples can be used to create a small, fixed collection of items that can 
 *    be different types that are easier to work with.
 *  Enums: Enums are a set of named constants to improve readability. You could create
 *    an enum constant for PI. Or Success, Error, then use a union to specify that a 
 *    variable can be one of those enum values.
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
