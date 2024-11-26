/*
 *
Module 07 Mini-Project: Portfolio Generator
In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

Instructions
* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and 
  GitHub URL. Feel free to add any additional prompts you think of.
* An HTML document containing the information collected from the prompts should be constructed and written 
  to the file system. Make sure to add some CSS styling to the document.
* You’ll need the following tools and technologies to accomplish this:
  * `fs` for writing to the file system
  * `inquirer` for collecting user input
  * String template literals for generating a string version of the HTML document before it is written to the file system

  ## 💡 Hints
  It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy 
  with the HTML file's appearance in the browser, you can copy and paste its contents into a string 
  template literal. Then you can write a function to insert the user input into the appropriate places 
  in the HTML string before writing it to the file system.

  ## 🏆 Bonus
  Q: Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?
  A: Promises (in this example inquirer uses promises for the .prompt and .then clauses)
     (ref: https://www.geeksforgeeks.org/callbacks-vs-promises-vs-async-await/)
 *
 */

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Enter your bio information:',
    },
    {
      type: 'input',
      name: 'liURL',
      message: 'What is your LinkedIn URL?',
    },
    {
      type: 'input',
      name: 'ghURL',
      message: 'What is your GitHub URL?',
    },
  ])
  .then((answers) => {
    const { name, location, bio, liURL, ghURL } = answers;
    console.log("DEBUG:", name, location, bio, liURL, ghURL);

    let htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        
            <main>
                <h1>${name}</h1>
                <section id="about">
                    <div>
                    <h1>About Me</h1>
                    <p>${bio}</p>
                    </div>
                </section>
        
                <section id="contact">
                    <div>
                    <h1>Contact</h1>
                    <p>Location: ${location}</p>
                    </div>
                </section>
            </main>
        
            <footer>
                <ul>
                    <li style="margin: 0 10px;"><a href="${ghURL}">GitHub</a></li>
                    <li style="margin: 0 10px;"><a href="${liURL}">LinkedIn</a></li>
                </ul>
            </footer>
        
        </body>
        </html>`;

    let cssContent = `body {
          background-color: #f4f3e1;;
      }
      main {
          color: #174188;
          font-family: Arial, sans-serif;
          font-size: 36px;
          text-align: center;
      }
      #about {
          display: flex;
          justify-content: left
      }
      #about div {
          text-align: left;
      }
      #contact {
          display: flex;
          justify-content: left
      }
      #contact div {
          text-align: left;
      }
      nav {
          display: flex;
          justify-content: flex-end;
      }
      footer ul {
          list-style-type: none; 
          display: flex; 
          justify-content: center; padding: 0;
      }`;


    const writeToFile = (fileName, data) => {

      fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.log(`Error writing to file! ${fileName}`);
        } else {
          console.log(`Successfully wrote to file! ${fileName}`);
        }
      });

    };

    writeToFile("index.html", htmlContent);
    writeToFile("style.css", cssContent);
  });



