/*
 * 🐛 Application Fails to Build Due to Missing Types
 * As a designer, when I visit the page, I should see styling being applied to the page.
 *
 * Expected Behavior
 * When a user visits the page, it should have styling applied to it and the app
 * should build without any errors.
 *
 * Actual Behavior
 * When a build is run, it fails to transpile.
 *
 * Steps to Reproduce the Problem
 * Run npm install in the terminal.
 * Run npm run build in the terminal and take note of the errors.
 *
 * Assets
 * The following image demonstrates the web application's appearance and functionality:
 * Mockup of working application, showing a profile card with profile and background
 * images, as well as profile information.
 *
 * 💡 Hints
 * Which React built-in interface can you use to ensure that you're passing valid CSS
 * to your style props?
 *
 * 🏆 Bonus
 * Q: What is the csstype package, and how does it relate to the
 *    React.CSSProperties type?
 * A: The csstype package is a TypeScript library that provides type definitions for 
 *    CSS properties. It allows developers to use CSS property names and values in a 
 *    type-safe manner when working with inline styles in React components.
 * 
 *    The React.CSSProperties type is an interface provided by React that represents 
 *    the style properties for a component. It uses the types defined in the csstype 
 *    package to ensure that the styles applied to a React component are valid CSS 
 *    properties.
 *    
 *    In summary, the csstype package enhances the type safety of CSS properties in 
 *    TypeScript, and React.CSSProperties leverages this package to provide a robust 
 *    typing system for inline styles in React components. This helps prevent errors 
 *    and improves the developer experience when styling components.
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
