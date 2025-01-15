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
 * How can you allow multiple children and not just one?
 *
 * 🏆 Bonus
 * Q: What are some other possible options we could use as React children values,
 *    and what are the benefits and pitfalls of each option?
 * A: 
 * Strings: <MyComponent>Hello, World!</MyComponent>
 * Benefits: Simple to use; easy to understand and render.
 * Great for displaying text content directly.
 * Pitfalls: Limited to plain text; cannot contain JSX elements or complex structures.
 * May require additional formatting or escaping if special characters are used.
 * 
 * Numbers: <MyComponent>{42}</MyComponent>
 * Benefits: Useful for displaying numerical values directly.
 * Can be easily computed or manipulated before rendering.
 * Pitfalls: Similar to strings, numbers cannot contain other JSX elements.
 * May require conversion to a string for proper formatting.
 * 
 * Arrays of Elements: <MyComponent>{[<Child1 />, <Child2 />]}</MyComponent>
 * Benefits: Allows for rendering multiple elements in a structured way.
 * Can be dynamically generated, making it flexible for lists or collections.
 * Pitfalls: Requires careful handling of keys for lists to avoid rendering issues.
 * Can become complex if not managed properly, especially with nested arrays.
 * 
 * React Elements: <MyComponent><ChildComponent /></MyComponent>
 * Benefits: Allows for embedding other components, enabling composition and 
 *  reusability.
 * Can pass props to child components easily.
 * Pitfalls: May lead to performance issues if too many components are rendered
 *  unnecessarily.
 * Can complicate the component tree, making debugging more challenging.
 * 
 * Fragments: <MyComponent><></></MyComponent> or 
 *  <MyComponent><Fragment></Fragment></MyComponent>
 * Benefits: Allows grouping multiple children without adding extra nodes to the DOM.
 * Useful for returning multiple elements from a component without a wrapper.
 * Pitfalls:May be confusing for new developers who are not familiar with fragments.
 * Requires understanding of when to use fragments versus regular elements.
 * 
 * Function as Children (Render Props): <MyComponent>{(data) => <ChildComponent data={data} />}</MyComponent>
 * Benefits: Provides flexibility to render based on dynamic data or state.
 * Allows for powerful patterns like conditional rendering and data fetching.
 * Pitfalls: Can lead to complex and hard-to-read code if overused.
 * Requires understanding of higher-order components and function patterns.
 * 
 * Higher-Order Components (HOCs): A component that wraps another component to provide additional functionality.
 * Benefits: Promotes code reuse and separation of concerns.
 * Can enhance components with additional props or functionality.
 * Pitfalls: Can make the component tree more complex and harder to follow.
 * May lead to issues with props drilling if not managed carefully.
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
