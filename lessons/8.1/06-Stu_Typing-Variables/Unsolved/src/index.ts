/*
 *

🏗️ Create Typed Variables

As a developer, I want to create a TypeScript application that edits and 
displays employee data assigned to different variables.


Acceptance Criteria
    It's done when I open the project and a basic TypeScript project exists with 
    proper file structure and tsconfig options.

    It's done when I run the application; TypeScript emits no errors, and the 
    transpiled file runs in the console.

    It's done when variables are defined and typed for:
    First Name
    Last Name
    Age
    Job Title
    Salary
    Remote Status

    It's done when I run the application and the employee's job title and salary 
    are set.

    It's done when the employee's first name and last name are combined into 
    one name.

    It's done when the employee information is logged to the console in a 
    formatted template, listing the employee's name, age, job title, and salary.

    It's done when an employee's remote status is established as unknown. If the 
    status is set to true, the sentence "EMPLOYEE_NAME is working remotely today" 
    is displayed. Otherwise, display "EMPLOYEE_NAME is working from the office 
    today."

    It's done when I run the application; the employee's job title is changed, the 
    salary is increased by 10000, and the employee information is displayed with 
    the changes.

💡 Hint
    Does every variable need to define a type?

🏆 Bonus
    Q: How would we state that a variable could be multiple types?
    A: let variable: any;

*
*/

let firstName: string;
let lastName: string;
let age: number;
let jobTitle: string;
let salary: number;
let remoteStatus: boolean;
let fullName: string;
let employeeTemplate: string;

firstName = "Joe";
lastName = "User";
age = 21;
jobTitle = "Developer";
salary = 65_000;

fullName = firstName + ' ' + lastName;

showEmployee();

jobTitle = "Development Manager";
salary += 10_000;
remoteStatus = true;
showEmployee();

function showEmployee() {
    employeeTemplate = `======================
Employee Info
======================
Name: ${fullName}
Age: ${age}
Job Title: ${jobTitle}
Salary: $${salary}`;
    
    console.log(employeeTemplate);
    
    if (remoteStatus) {
        console.log(`${fullName} is working remotely today.\n`);
    } else {
        console.log(`${fullName} is working from the office today.\n`);
    }

    return;
}