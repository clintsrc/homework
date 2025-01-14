/*
 * 📖 Implement Weather Information via useContext Hook
 *
 * As the application user, I want to see weather information displayed throughout the
 * application.
 *
 * Acceptance Criteria
 * - It's done when the application makes use of the useContext hook to create a
 *  WeatherContext component that contains the following fields with hardcoded values:
 *    - The string field city representing the location of the weather report.
 *    - The number temperature representing the current temperature.
 *    - The union type temperatureUnits with the value of either Fahrenheit or Celsius.
 *    - The string field conditions describing the current situation,
 *      e.g., "Windy", "Sunny" or "Heavy Snow."
 *
 * - It's done when each of the WeatherContext fields is displayed in each instance
 *  of the Alert component.
 *
 * - Use the "TODO" comments in the following files to guide your implementation:
 * ./Unsolved/src/components/WeatherController.tsx
 * ./Unsolved/src/App.tsx
 * ./Unsolved/src/components/Alert.tsx
 *
 * 💡 Hints
 * Investigate how to implement the useContext hook "provider".
 *
 * 🏆 Bonus
 * Q: What are some other use cases for the useState hook?
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
