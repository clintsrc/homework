"use strict";
/*
📐 Troubleshoot TypeScript Generics Code
Work with a partner to correct the defects in the code found in Unsolved so that it functions as intended and matches the output described in the comments.

📝 Notes
Refer to the documentation:

TypeScript Generics

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What are some other cases for which we may want to make use of TypeScript generics?
 */
// Generic function to return the first and last values of the provided array.
//const getFirstAndLastArrayValues = <T>(inputArray: T[]): T => {
const getFirstAndLastArrayValues = (inputArray) => {
    const resultArray = new Array();
    resultArray[0] = inputArray[0];
    resultArray[1] = inputArray[inputArray.length - 1];
    return resultArray;
};
console.log(getFirstAndLastArrayValues([])); // []
console.log(getFirstAndLastArrayValues([99])); // [ 99, 99 ]
console.log(getFirstAndLastArrayValues([1, 2, 3, 4, 5])); // [ 1, 5 ]
console.log(getFirstAndLastArrayValues(['one', 'two', 'three', 'four', 'five'])); // [ 'one', 'five' ]
// The generic SimpleStack class provides push and pop functionality and a method to log the entire stack to the console.
class SimpleStack {
    constructor() {
        this._array = [];
    }
    push(value) {
        this._array.push(value);
    }
    // pop(): T {
    pop() {
        return this._array.pop();
    }
    writeToConsole() {
        console.log(this._array);
    }
}
const stack1 = new SimpleStack();
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.pop();
stack1.writeToConsole(); // [ 3, 4 ]
const stack2 = new SimpleStack();
stack2.push('three');
stack2.push('four');
// stack2.push(5);
stack2.push(5);
stack2.writeToConsole(); // [ 'three', 'four', 5 ]
