/*
It's done when I have completed the writeToLog function such that it takes an input and writes the input to a new log.txt file.
It's done when I have proper validation that checks whether the correct amount of inputs has been passed in using process.argv.
*/

// fs is a Node standard library package for reading and writing files
import fs from 'fs';

// Complete the `writeToLog` function such that it will take in data and use it to write to a file called `log.txt`.
const writeToLog = (data) => {
  const logFile = 'log.txt'

  fs.writeFileSync(logFile, data);
};

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) => {
  let message;

  // This conditional validates whether the correct amount of inputs have been provided
  if (y === undefined) {
    // Set the `message` variable to a string that explains that an incorrect number of arguments have been passed in.
    message = `Please pass two numbers.`;
    // Call the `writeToLog` function and pass in the `message` as an argument.
    writeToLog(message);
  } else {
    const num1 = Number.parseInt(x);
    const num2 = Number.parseInt(y);
    // Set the `message` variable to the `num1` and num2`
    message = `${num1} ${num2}`;
    // Call the `writeToLog` function and pass in the `message` as an argument.
    writeToLog(message);
  }
};

// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);
