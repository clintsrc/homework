/*
Users should be able to import and use the basicmath.js module to execute simple math operations.

Expected Behavior
   When I run:
   node index.js sum 3 4
      in the command lineit should print out: 7
   When I run:
   node index.js difference 3 4
      in the command line, it should print out: -1
   When I run:
   node index.js product 3 4
      in the command line, it should print out: 12
   When I run:
   node index.js quotient 3 4
      in the command line, it should print out: 0.75

Actual Behavior:
Nothing happens when I run the commands because the index.js file is empty

Steps to Reproduce the Problem:
Navigate to the Unsolved folder in the command line.
Run node index.js sum 3 4 in the command line.

💡 Hints
What will the parseInt() method allow us to do?

🏆 Bonus
   Q: How can you export functions and objects directly?
   A: Direct exports:
      For Objects:
         export default {
            sum: (a, b) => a + b,
            ...
         }
      For Functions:
         const sum = (a, b) => a + b;
         export default sum;
*/

// TODO: Import `basicmath.js`
//import { moduleName } from './path/to/module.js'; // For named exports
//import moduleName from './path/to/module.js'; // For default exports
import basicmath from './basicmath.js'  // basicmath.js contains: export default {...

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const num_commands = 3;
let operation = ""
let numOne = 0;
let numTwo = 0;

let errorMessage = '\nProvide this script with a math operation and two numbers.'
errorMessage += '\nThe \'operation\' can be: [sum | difference | product | quotient]'
errorMessage += '\n\nUsage: node index.js [operation] [number] [number]'
errorMessage += '\n\tExample: node index.js add 2 2'

 // the first two parameters are the node command and the scriptname overhead, we want 3
if (process.argv.length == (num_commands + 2)) {
    operation = process.argv[2];
    numOne = Number.parseInt(process.argv[3]);
    numTwo = Number.parseInt(process.argv[4]);

    if ( isNaN(numOne) || isNaN(numTwo) ) {
        console.log("Error: You must use integer values!");
        console.log(errorMessage);
        process.exit();
    }
    //console.log(`DEBUG: ${operation} ${numOne} ${numTwo}`);
} else {
    console.log("Invalid command.");
    console.log(errorMessage);
}

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
    case 'sum':
        console.log (numOne + numTwo);
        break;
    case 'difference':
        console.log (numOne - numTwo);
        break;
    case 'product':
        console.log (numOne * numTwo);
        break;
    case 'quotient':
        console.log (numOne / numTwo);
        break;
    default:
        console.log("Error: unrecognized operaton!");
        console.log(errorMessage);
}
