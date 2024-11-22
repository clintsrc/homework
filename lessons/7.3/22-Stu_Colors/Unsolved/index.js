/*
It's done when I type node index.js Sally 500 and the following is logged, with Sally highlighted with a bright yellow background and 500 highlighted with a bright green background, since the profit is a number greater than 0:
      node index.js Sally 500
      My name is Sally and I made 500 dollars this quarter.
It's done when I type node index.js Bob -300 and the following is logged with Bob highlighted with a bright yellow background and -300 highlighted with a bright red background since the profit is a number less than or equal to 0:
      node index.js Bob -300
      My name is Bob and I made -300 dollars this quarter.

📝 Notes
Refer to the documentation:
   colors
https://www.npmjs.com/package/colors
Note: In the documentation, there will be two ways to use the colors package. 
We will be using the option that does not extend the String prototype. We will learn more about prototypes later.

💡 Hints
Remember that we can access command line arguments using process.argv.

🏆 Bonus
Q: What is a String prototype?
A: The String.prototype is an object that contains methods and properties that are shared by all string instances. 
   You can add new (or modify existing) methods to override default behaviors.
   *** It's generally considered best practice to avoid it unless absolutely necessary ***

 
 *
 */

import colors from 'colors';

// Get command line arguments
const args = process.argv.slice(2); // drop the exe and script parms, grab the rest
const name = args[0];
let profit = parseInt(args[1]);

if (args.length == 2 ) {
  // Format the output based on the profit value
  if (profit > 0) {
    profit = colors.bgGreen(profit.toString());
  } else {
    profit = colors.bgRed(profit.toString());
  }
  console.log(`My name is ${colors.bgYellow(name)} and I made ${profit} dollars this quarter.`)
} else {
  console.log('Try again using: node index.js [name] [number]');
  console.log('\t example 1: node index.js Sally 500');
  console.log('\t example 2: node index.js Bob -300');
}
