/*
 * 🐛 Page is Not Displaying User Data
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
 * A: 
 * Type Guards: Implement type guards to check the type of a variable before 
 *  using it. This ensures that the variable is of the expected type, reducing 
 *  the chance of runtime errors.
 * Default Values: Provide default values for properties that may be undefined. 
 *  This can prevent errors when attempting to access properties on potentially 
 *  undefined objects.
 * Optional Chaining: Use optional chaining (e.g., user?.name) to safely access 
 *  properties of an object. This will return undefined instead of throwing an error 
 *  if the object is null or undefined.
 * Interfaces and Types: Define clear interfaces or types for your data structures. 
 *  This helps ensure that the data being used conforms to the expected shape, making 
 *  it easier to catch errors at compile time.
 * Error Handling: Implement error handling to gracefully manage situations where 
 *  data may not be available. This can include displaying fallback content or error 
 *  messages to the user.
 * Validation Libraries: Use validation libraries (like Yup or Joi) to validate the 
 *  data structure before using it. This can help ensure that the data meets the 
 *  expected criteria.
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
