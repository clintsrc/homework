const todoInput = document.querySelector('#todo-text'); // holds text input element
const todoForm = document.querySelector('#todo-form');  // holds the form element
const todoList = document.querySelector('#todo-list');  // holds the unordered todo list element
const todoCountSpan = document.querySelector('#todo-count'); // holds element tracking the list item count

// declare the initial empty array for the todo list
const todos = [];

// This function display the current state of the TODO list (each list item and the current count)
function renderTodos() {
  // clear the todo list
  todoList.innerHTML = '';
  // update the count value on the webpage to reflect the number of elements in the todo list
  todoCountSpan.textContent = todos.length;

  // read each item from the todo array then add each item to the web page
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    // create a list item element for the current record
    const li = document.createElement('li');
    // set the item's value to the todo's value
    li.textContent = todo;
    // update the list item with the incremented index number
    //   to track its position
    li.setAttribute('data-index', i);

    // add a button to the list item that can be clicked
    //   later to remove it
    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    // attach the button to the new list item to associate it
    li.appendChild(button);
    // attach the list item to the ordered list
    //   to associate it with the list and make it (along with its button)
    //   visible on the page    
    todoList.appendChild(li);
  }
}

// This function is run once when the page loads
//  set the initial state
function init() {
  // read all todo items from local storage, read the json-formatted
  //   record to javascript object format and store in a local variable for use
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // If the todo list isn't empty, load them into the global variable
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // update the web page to show the todo list
  renderTodos();
}

// Store (update) the current list of todo's to local storage
function storeTodos() {
  // convert the todo object list item to the json standard format
  //    before storing to local storage
  localStorage.setItem('todos', JSON.stringify(todos));
}

// When the user finishes a todo input (return key)
//    store the current list to local storage and
//    update the todo list on the web page
todoForm.addEventListener('submit', function (event) {
  // catch the event so that it doesn't pass through the function
  event.preventDefault();
  // remove any extraneous characters from the inpu string
  const todoText = todoInput.value.trim();
  // if the todo input was empty, exit this function
  if (todoText === '') {
    return;
  }
  // add the todo input to the end of the todos array
  todos.push(todoText);
  // clear the input to prepare for a new entry
  todoInput.value = '';

  // update the local storage with the new todo entry
  storeTodos();
  // update the page with the new todo addition
  renderTodos();
});

// This function removes a todo item when the user clicks a
//    list item's 'complete' button
todoList.addEventListener('click', function (event) {
  // store the element that was clicked
  const element = event.target;
  // determine whether the item clicked was the list item button 
  if (element.matches('button') === true) {
    // capture the index of the list item that was clicked
    const index = element.parentElement.getAttribute('data-index');
    // remove the single (1) item from the array at the index matching the list item's index
    todos.splice(index, 1);
    // update the local storage with the todo item entry removed
    storeTodos();
    // update the page with the todo item entry removed
    renderTodos();
  }
});

// run this function once when the page loads
init();

// BONUS
// Q: What is sessionStorage? How is it different from localStorage?
// A: sessionStorage data is associated with the page session (browser / tab),
//    and it's cleared when the page session ends. 
//
//    localStorage data doesn't expire (it stays in memory -- or a cookie?) so
//    that it persists between sessions.
//