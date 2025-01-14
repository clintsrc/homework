/*
 * 🐛 Build Errors Due to Children Type
 * As a developer, I should see my TypeScript build complete without errors when I
 * try to build.
 *
 * Expected Behavior
 * Running npm run build should show a successful build message:
 * vite v5.2.13 building for production...
 * ✓ 36 modules transformed.
 * dist/index.html                   0.68 kB │ gzip:  0.44 kB
 * dist/assets/index-Ipat19sz.css    0.09 kB │ gzip:  0.10 kB
 * dist/assets/index-Bz02yVYj.js   145.29 kB │ gzip: 46.89 kB
 * ✓ built in 597ms
 *
 * Actual Behavior
 * Running npm run build shows an error message that says the following:
 * src/App.tsx:29:16 - error TS2746: This JSX tag's 'children' prop expects a single
 * child of type 'ReactElement<any, string | JSXElementConstructor<any>>', but multiple
 * children were provided.
 * 29               <BookCard key={index} book={book}>
 *                   ~~~~~~~~
 * src/App.tsx:31:19 - error TS2322: Type 'number' is not assignable to type
 * 'ReactElement<any, string | JSXElementConstructor<any>>'.
 * 31                   {book.pages - pageMin}
 *                      ~~~~~~~~~~~~~~~~~~~~~~
 *   src/interfaces/PageDifferenceProps.tsx:3:3
 *     3   children: React.ReactElement;
 *         ~~~~~~~~
 *     The expected type comes from property 'children' which is declared here on
 * type 'IntrinsicAttributes & PageDifferenceProps'
 * Found 2 errors in the same file, starting at: src/App.tsx:29
 *
 * Steps to Reproduce the Problem
 * Run npm run build in the terminal.
 * See an error mesage and an unsuccessful build.
 *
 * 💡 Hints
 * How can you type React children to be more than just React elements?
 *
 * How can you allow multiple children and not just one?
 *
 * 🏆 Bonus
 * Q: What are some other possible options we could use as React children values,
 *    and what are the benefits and pitfalls of each option?
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
