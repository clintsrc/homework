/*
As a developer, I want to create a command-line application that takes in input from the user and does something with it.

Acceptance Criteria
It's done when I have initialized my repository with a package.json file by running:
   npm init -y
It's done when I set the "type" property to "module" in my package.json 
to allow for ESM style imports.
   "type": "module",
It's done when I have installed inquirer and added it to my list of dependencies by running:
   npm i inquirer
It's done when the application asks the user, 
   What is your name?
   and the message is displayed with the color bright magenta.
It's done when the application asks the user, 
   What languages do you know?
   and the message is displayed with the color bright magenta.
It's done when the application asks the user, 
   What is your preferred method of communication?
   and the message is displayed with the color bright magenta.
It's done after I have written those responses to a file.

💡 Hints
   Why do we need to use JSON.stringify?
      JSON formatting makes the data ready to send from the client 
      side to a web server in a string format (a universal standard)
   Use the inquirer npm page to see how to use checkboxes and lists

🏆 Bonus
Q: How would you format your JSON? Can you generate the name of your user file from the user input?
A: const filePath = `${username}-candidate.json`
*
*/
import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';


inquirer
   .prompt([
      {
         type: 'input',
         message: 'What is your name?',
         name: 'username',
      },
      {
         type: 'checkbox',
         name: 'languages',
         message: 'What languages do you know?',
         choices: ['JavaScript', 'Python', 'Java', 'C']
      },
      {
         type: 'list',
         name: 'contact',
         message: 'What is your preferred method of communication?',
         choices: ['Phone', 'email', 'text message'],
      },
   ])
   .then((answers) => {
      const { username, languages, contact } = answers;
      // BONUS: data file is named to include the username
      const filePath = `${username}-candidate.json`
      // to be written to file
      let content = {
         name: username,
         languages: languages,
         contact: contact
      };

      // display in console
      console.log(colors.magenta(`Hello, ${username}!`));
      console.log(colors.magenta(`You know langagues: ${languages}`));
      console.log(colors.magenta(`We'll contact you at: ${contact}`));

      content = JSON.stringify(content);
      fs.writeFile(filePath, content, (err) => {
         if (err) {
            console.error('Error writing to file:', err);
         } else {
            console.log(`File has been written successfully!\n${filePath}`);
         }
      });

     /*
      *
      // test
      console.log("TEST: reading file...")
      fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
            console.error('Error reading the file:', err);
         } else {
            const fileContent = JSON.parse(data);
            console.log('File content:', fileContent);
         }
      });
      *
      */

   });
