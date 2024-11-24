/*
 * BONUS:
 *
 * Q: What is type inference?
 * A: In TypeScript, if a variable is not explicitly declared (using type 
 *    annotation) TypeScript uses the value assigned to it to infer the most 
 *    specific type possible
 * 
 */

let one = 64.55;
let two = 'Howdy!';
const three = '656302number[]';
const four = 64;
const five = false;
const six = null;
let seven;

/*

TypeScript attempts to infer the type of a variable based on the value assigned to it.

JavaScript also has a `typeof` operator that can be used to determine the type of a variable.

Insert comments below to explain what the TypeScript type of each variable would be, as well as what each type would be logged to the console by JavaScript.

For example:

let hello = 'world';

console.log(typeof hello); // Logs string, and the TypeScript type would also be string.

*/

// TODO
console.log(typeof one);    // number

// TODO
console.log(typeof two);    // string

// TODO
console.log(typeof three);  // string

// TODO
console.log(typeof four);   // number

// TODO
console.log(typeof five);   // boolean

// TODO
console.log(typeof six);    // null - wrong! Object

// TODO
console.log(typeof seven);  // undefined

// Reassigns variables
// typescript flags an error since the variable 
//    was initially typed as a number (implicitly).
//    (see compiler output below)
one = 'Hello!';
// typescript flags an error since the variable 
//    was initially typed as a string (implicitly)
//    (see compiler output below)
two = false;
seven = 23;

// TODO
console.log(typeof one);    // string

// TODO
console.log(typeof two);    // boolean

// TODO
console.log(typeof seven);  // number


/*

Build output:

$ npm run build

> 04-stu_typescript-types@1.0.0 build
> npx tsc

src/index.js:59:1 - error TS2322: Type 'string' is not assignable to type 'number'.

59 one = 'Hello!';
   ~~~

src/index.js:62:1 - error TS2322: Type 'boolean' is not assignable to type 'string'.

62 two = false;
   ~~~


Found 2 errors in the same file, starting at: src/index.js:59
 */