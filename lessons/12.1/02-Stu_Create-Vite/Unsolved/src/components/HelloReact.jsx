// TODO: Add a comment explaining what a react component is
/*
 * A React component is a reusable JavaScript function or class that returns 
 * JSX (React elements), which define the structure and behavior of the user interface.
 *
 */

function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  /* 
   * JSX allows you to write HTML-like syntax within JavaScript, which is compiled to 
   * JavaScript, React.createElement calls.
   *
   * The curly braces enable embedding JavaScript expressions (such as variables 
   * or function calls) within the JSX.
   * 
   */
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
