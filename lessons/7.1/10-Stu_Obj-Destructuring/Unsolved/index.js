// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// CJ: Destructure the object 'nodejs'
const { name, type } = nodejs;

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// CJ: Destructure the nested object 'js'
/* const {
  tools: {
    frameworks: { framework1, framework2 },
  },
} = js; */

const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// CJ: Destructure the array 'languages'
const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML

/*
 *
 * BONUS:
 * 
 * How can we take a property from an object and assign it to a variable with a different name when we are destructuring it?
 * 
 */

const { name: new_name, type: new_type } = nodejs;
console.log(`BONUS: var new_name == ${new_name}`); // <= Node.js
console.log(`BONUS: var new_type == ${new_type}`); // <= JavaScript runtime environment