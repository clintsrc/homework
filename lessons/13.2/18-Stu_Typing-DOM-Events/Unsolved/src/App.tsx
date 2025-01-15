import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  // TODO: What type of event are we handling here?
  // A: the ChangeEvent, when a user makes a change to the form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const isValid = (input: string) => {
    // Check if input is alphanumeric lowercase and also allow underscore
    const regex = /^[a-z0-9_]*$/;
    // use regex.test() to check if input is valid and input.length to check if it is at least 5 characters long
    return regex.test(input) && input.length >= 5;
  }

  // TODO: What type of event are we handling here?
  // A: the MouseEvent, handles mouse clicks on the form input
  const handleMouseEnter = (e: React.MouseEvent<HTMLFormElement>) => {
    // TODO: How does this work?
    // A: filters the MouseEvent activity to fire when the user presses 
    //  a shift keyboard key at the same time
    if (e.shiftKey) {
      alert("Mouse Entered Form with Shift Key Pressed");
    }
  }

  // TODO: What type of event are we handling here?
  // A: The FormEvent happens when the user clicks submit on a form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted with valid input!");
    setText('');
  }

  return (
    <div className="App">
      <h1>Typing DOM Events</h1>
      {/* TODO: What type of events are we handling here? 
        *   A: onSubmit: when the user clicks the form submit button
               onMouseEnter: when the mouse cursor enters a form input field
        */}
      <form onSubmit={handleSubmit} onMouseEnter={handleMouseEnter}>
        {/* TODO: What type of event are we handling here? 
          * A: handleChange: when a form input changes
          */}
        <input type="text" value={text} onChange={handleChange} />
        <p>Text Input Valid: <span style={isValid(text) ? { color: "green" } : { color: "red" }}>{isValid(text) ? "True" : "False"}</span></p>
        {isValid(text) && <button>Submit</button>}
      </form>
    </div>
  )
}

export default App;
