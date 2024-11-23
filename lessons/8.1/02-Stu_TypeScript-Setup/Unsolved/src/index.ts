/* eslint-disable no-restricted-globals */

// Define an interface for the Employee type
interface Employee {
    firstName: string;
    lastName: string;
    salary: number;
  }
  
  // Get a reference to the #add-employees-btn element
  const addEmployeesBtn = document.querySelector<HTMLButtonElement>('#add-employees-btn');
  
  // Collect employee data
  const collectEmployees = (): Employee[] => {
    // Create an array to hold employee data
    const employees: Employee[] = [];
  
    let keepGoing = true;
  
    // Loop until the user chooses to stop
    while (keepGoing) {
      // Get user input for an employee
      const firstName = prompt('Enter first name:') || '';
      const lastName = prompt('Enter last name:') || '';
      let salaryInput = prompt('Enter salary:') || '0';
  
      // Convert the salary input to a number
      let salary = parseFloat(salaryInput);
  
      // If salary is not a number set it to zero
      if (isNaN(salary)) {
        salary = 0;
      }
  
      // Create an employee object
      const employee: Employee = {
        firstName,
        lastName,
        salary,
      };
  
      // Add the employee object to the end of the employees array
      employees.push(employee);
  
      // Ask the user if they want to continue adding employees
      keepGoing = confirm('Do you want to add another employee?');
    }
  
    // Return the employee data
    return employees;
  };
  
  // Display the average salary
  const displayAverageSalary = (employeesArray: Employee[]): void => {
    const numEmployees = employeesArray.length;
  
    const totalSalary = employeesArray.reduce((total, currentEmployee) => {
      return total + currentEmployee.salary;
    }, 0);
  
    // Calculate the average salary
    const averageSalary = totalSalary / numEmployees;
    console.log(
      `The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`
    );
  };
  
  // Select a random employee
  const getRandomEmployee = (employeesArray: Employee[]): void => {
    const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
    console.log(
      `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
    );
  };
  
  // Display employee data in an HTML table
  const displayEmployees = (employeesArray: Employee[]): void => {
    // Get the employee table
    const employeeTable = document.querySelector<HTMLTableElement>('#employee-table');
  
    // Clear the employee table
    if (employeeTable) {
      employeeTable.innerHTML = '';
  
      // Loop through the employee data and create a row for each employee
      for (const currentEmployee of employeesArray) {
        const newTableRow = document.createElement('tr');
  
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);
  
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);
  
        const salaryCell = document.createElement('td');
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
  
        newTableRow.append(salaryCell);
  
        employeeTable.append(newTableRow);
      }
    }
  };
  
  const trackEmployeeData = (): void => {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
  
    displayEmployees(employees);
  };
  
  // Add event listener to 'Add Employees' button
  if (addEmployeesBtn) {
    addEmployeesBtn.addEventListener('click', trackEmployeeData);
  }