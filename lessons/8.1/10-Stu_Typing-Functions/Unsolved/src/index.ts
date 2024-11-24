/* Add any missing types to variables, parameters, and return values.

Run npm install and npm run build without any errors.

📝 Notes
Some functions may not explicitly state their types.

Refer to the documentation:
Functions in TypeScript
TypeScript everyday types
Basic JavaScript data types

🏆 Bonus
  Q: How do you declare that a function type is optional?
  A: By adding a ? after the function/property name
*/

// TODO: What type is the parameter and return value of the following function?
// The guest parameter is a string, the arrow function return type is void (empty)
const welcomeGuest = (guest: string): void => {
  console.log(`Welcome ${guest}, how have you been?`);
};

welcomeGuest('James');

// TODO: What type are the parameters and return value of the following function?
// parameters x and y are numbers, the return value type is also a number
const addition = (x: number, y: number): number => {
  return x + y;
};

const sum: number = addition(42, 137);
console.log(sum);

// TODO: Add the correct type for the following variable:
const optionsAvailable: string[] = [
  'Pasta',
  'Ramen',
  'Pizza',
  'Salad',
  'Quinoa',
  'Tacos',
  'Fried Rice',
  'Curry',
];

// TODO: Add the correct type for the parameter and return value in the following function:
// Parameter mealOptions is an array of strings and the function returns a randomly
// selected string from that array
const mealPlanner = (mealOptions: string[]): string => {
  // TODO: Add the correct type for the following variable:
  // This randomizes the index and sets randomChoice to the string at that index
  const randomChoice: string =
    mealOptions[Math.floor(Math.random() * mealOptions.length - 1)];

  return randomChoice;
};

// TODO: Add the correct type for the following variable:
// mealPlanner() returns a string, so dinnerTonight is also a string
const dinnerTonight: string = mealPlanner(optionsAvailable);
console.log(dinnerTonight);

// TODO: Add the type for each parameter and the return value of the following function:
const submitUser = (
  username: string, // given: these parameters were already correctly typed
  email: string,
  password: string,
  isAdmin: boolean,
  age: number
): string => {   // returns the 'Thanks...' string
  const user = {
    username,
    email,
    password,
    isAdmin,
    age,
  };

  console.log(user);

  return `Thanks for signing up ${username}, we'll contact you soon!`;
};

submitUser(
  'eternalCoder42',
  'sami@email.com',
  'myUltimatePassword1980',
  false,
  27
);
