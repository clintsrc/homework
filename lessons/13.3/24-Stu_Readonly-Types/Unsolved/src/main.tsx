/*
 * 🏗️ Implement an Interface with Read-Only Properties for Product Information
 * As an online seller, I want to ensure that my product data cannot accidentally be
 * changed when displayed on the website, so the information remains accurate.
 *
 * Acceptance Criteria
 * It's done when a Product interface has been created.
 * It's done when the Product interface contains the following properties:
 *  - A readonly number called id
 *  - A readonly string called productName
 *  - A readonly string called productDescription
 *  - A readonly number called price
 *  - A number called quantity
 *  - A readonly array of strings called tags
 *
 * An optional method called purchase, which accepts a number argument of id and
 *  doesn't return anything.
 * It's done when the Product interface is used whenever product data is used.
 * It's done when the code will compile without errors when I run npm run build.
 *
 * Assets
 * The following snippet shows the expected terminal output after npm run build is executed:
 * vite v4.5.3 building for production...
 * ✓ 36 modules transformed.
 * dist/index.html                   0.46 kB │ gzip:  0.30 kB
 * dist/assets/index-d1fac343.css    0.86 kB │ gzip:  0.43 kB
 * dist/assets/index-3b0856a1.js   144.82 kB │ gzip: 46.81 kB
 * ✓ built in 458ms
 *
 * 💡 Hints
 * How can we assign a property as readonly?
 *
 * 🏆 Bonus
 * Q: How can you write to something marked as readonly?
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
