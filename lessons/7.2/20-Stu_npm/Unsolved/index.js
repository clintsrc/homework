/*
As a developer, I want to be able to keep track of dependencies using npm.
   npm install check-dependencies --save-dev
As a developer, I want to initialize my project and create a package.json file.
   npm init (or npm init -y)
As a developer, I want to use ESM style imports in my project.
   ESM (ECMAScript Modules, ES6 version)
   ref: https://byteofdev.com/posts/how-to-use-esm/, https://blog.logrocket.com/es-modules-in-node-today/
As a developer, I want to be able to use the inquirer package in the provided Unsolved Project.

Acceptance Criteria:
It's done when I see the file package.json in the Unsolved folder.
   npm init (or npm init -y)
It's done when I set the "type" property to "module" in my package.json to allow for ESM style imports.
   Manually change package.json, add: "type": "module",
It's done when I have installed the inquirer package successfully and see it listed in the package.json file.
   npm i inquirer@8.2.4
   NOTE: All activities using the inquirer package will need to use version 8.2.4. The latest version of inquirer (version 9+) introduces breaking changes to activities. All activities have version 8.2.4 in their respective package.json files but should you install inquirer, please use npm i inquirer@8.2.4.
         https://bootcampspot.instructure.com/courses/6675/pages/7-day-1?module_item_id=1335364
It's done when I see the node_modules folder and package-lock.json file in the Unsolved folder.
It's done when I see the "Press ENTER to continue..." prompt when I execute the command node index.js.

📝 Notes:
Refer to the documentation:
npm-init
   (ref: npm help init)
npm-install
   (ref: npm help install)

💡 Hints:
It's possible that the node_modules folder is hidden in the files.exclude setting in VS Code, so don't let that throw you off if you don't see it.

🏆 Bonus:
  Q: How does the -y flag save us some time when running npm init? What does the -g flag do when running npm install?
  A: -y, --yes: by default npm init uses legacy init behavior and prompt for a bunch of questions to and then write your package.json. The -y  option will skip the questionnaire
     (ref: npm help init)
     -g, -- global: In global mode npm it installs the current package context (ie, the current working directory) as a global package.
     (ref: npm help install)
*/

import inquirer from 'inquirer';

inquirer.prompt([
  {
    message: 'Press ENTER to continue...',
    name: 'enterKey',
  },
]);
