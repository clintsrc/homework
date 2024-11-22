/*
As a developer, I want to create a command-line application that takes in input 
from the user and logs a message with a selected color to the console.

Acceptance Criteria
It's done when I have initialized my repository with a package.json file by running:
    npm init -y.
It's done when I set the "type" property to "module" in my package.json to allow for ESM style imports.
    "type": "module",
It's done when I have installed inquirer added it to my list of dependencies by running 
    npm i inquirer
It's done when I have installed colors and added it to my list of dependencies by running 
    npm i colors.
It's done when the application asks the user, 
    "What text would you like to log?".
It's done when the application asks the user, 
    "What color would you like to use?", 
    and has the options "red", "blue", "green", "yellow", "cyan", and "magenta".
It's done when the text is logged in the selected color.

💡 Hints
Use the inquirer npm page to see how to use lists and inputs.
https://www.npmjs.com/package/inquirer
https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
Use inquirer for asking the user questions, validating user inputs, using the responses.


🏆 Bonus
Q: How could you also add some styling choices to the text logged using colors and inquirer?
A: e.g. add the style to the string's properties (e.g. *.underline.italic)
https://www.npmjs.com/package/colors
*/

// import the libraries
import inquirer from 'inquirer';
import colors from 'colors';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logText',
            message: 'What text would you like to log?',
        },
        {
            type: 'list',
            name: 'stringStyle',
            message: 'What color would you like to use?',
            choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
        },
    ])
    .then((answers) => {
        const { logText, stringStyle } = answers;
        console.log(colors[stringStyle](logText).underline.italic);
    });
