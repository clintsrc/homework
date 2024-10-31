// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

// Prompt user input to create and return an array of employee objects
const collectEmployees = function() {
  const Employees = [];     // an empty array of employee class records
  let Employee = {};        // empty individual record class
  let bEnterRecord = true;  // controls the record entry loop

  while (bEnterRecord) {    // start record entry loop, exit loop when the user chooses cancel
    Employee = {};          // clear the record

    let firstName = ""
    let lastName = ""

    while (! isValidString(firstName) ) {
      firstName = prompt("First Name");
    }

    while (! isValidString(lastName) ) {
      lastName = prompt("Last Name");
    }
    
    let salary = prompt("salary");
    if( isNaN(salary) ) { 
      console.log("Warning: salary entry is not a valid number, setting to 0");
      salary = 0;
    }

    // Add the record now that the inputs have been validated
    Employee.firstName = firstName;
    Employee.lastName = lastName;
    Employee.salary = salary;
    Employees.push(Employee); // add the Employee record to the array of Employees
    console.log(`Added ${Employee.lastName}, ${Employee.firstName}`);

    bEnterRecord = confirm("Enter another employee?");    // OK / Cancel prompt
  }
    
  return Employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary = 0;
  let averageSalaryWithTwoDecimals = 0;

  // Calculate the average salary
  for (const employee of employeesArray) {
    totalSalary += parseFloat(employee.salary);   // ensure the total isn't adding string values
  }

  averageSalary = totalSalary / employeesArray.length;

  // Handle salary with and without decimals
  // Log the average salary always always displaying with 2 decimals

  // shift the decimal over 2 places (* 100) - this adds 2 zeros for even numbers
  // round to the nearest whole number with Math.round - this drops any additional digits
  // shift the decimal back 2 places (/ 100) to set the hundredths precision
  // toFixed(2) makes sure to display the number with the hundredths digits
  averageSalaryWithTwoDecimals = (Math.round(averageSalary * 100) / 100 ).toFixed(2);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalaryWithTwoDecimals}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select and display a random employee using a method that allows for all employees to be chosen in the drawing

  // Generate a random number between 0 and the number of elements in the array
  const arrRandomIndex = Math.floor(Math.random() * employeesArray.length);

  // Display the winner's first and last in the console output
  console.log(`Congratulations to ${employeesArray[arrRandomIndex].firstName} ${employeesArray[arrRandomIndex].lastName}, our random drawing winner!`);
}

/*
 * isValidString()
 * Check if a string valid or if it is empty
 * 
 * The string is considered empty if it is null
 * The string is considered empty if, after removing beginning and 
 *    trailing space, it is an empty value ""
 * 
 * (ref: https://www.freecodecamp.org/news/javascript-check-empty-string-checking-null-or-empty-in-js/)
 * 
 */
function isValidString( testString ) {
  if (testString === null || testString.trim() === "") {
    console.log("Warning: invalid string");
    return false;
  } else {
    return true;
  }
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

