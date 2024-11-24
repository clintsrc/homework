  /* 
  Update Functions to Correct Parameter and Return Types

  Work with a partner to resolve the following issue:
  As a developer, I want to ensure functions are checking the parameter and return types correctly.

  Expected Behavior
  When I run npm run start to transpile the TypeScript file and run the Javascript file, no error messages should return.

  Actual Behavior
  When I run npm run start to transpile the TypeScript file and run the Javascript file, error messages display in the terminal.

  Steps to Reproduce the Problem
  In the Unsolved folder, run npm install and npm run start.
  Observe the output from the terminal.

  💡 Hints
  Take a look at the documentation on anonymous functions for additional information on function types and corresponding parameters and return typings.
  How does TypeScript handle anonymous functions and the parameters associated with them?
  A: TypeScript uses contextual typing for functions (similar to inference)

  How can you specify the function if it does not return any value?
  A:  If an anonymous function does not return any value, you can specify its return type as void. This indicates that the function is intended to perform an action but does not return a value.

      Here’s how you can specify the return type as void:

      const logMessage = function(message: string): void {
          console.log(message);
      };

  🏆 Bonus
    Q: How can you type the return type of a function that returns a function?
    A: Define the type of the inner function.
       Specify that the outer function returns a function of that type.

       example:
          Inner function:
          type AddFunction = (num: number) => number;

          Outer function:
          const createAdder = (x: number): AddFunction => {
            return (num: number): number => {
  */

const studentList = ['Matt', 'Amy', 'Shane', 'Josh', 'Pria'];

// studentList is an *array* of strings and needs
// to be passed as sttring[] to also be compatible with forEach()
//const checkStudentRoster = (arr: string): void => {
const checkStudentRoster = (arr: string[]): void => {
  arr.forEach((student) => {
    console.log(`${student} is present!`);
  });
};

// Why does this function not fail?
// TypeScript uses type inference to determine that studentList is type string[]
studentList.forEach((student) => {
  console.log(`${student} is here!`);
});
