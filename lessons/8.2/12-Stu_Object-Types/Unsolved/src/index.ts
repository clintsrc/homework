/* 
    Use Types With an Object
    Work with a partner to implement the following user story:
    As a developer, I want to use TypeScript to type my objects.

    Acceptance Criteria
    It's done when I have created an object called "cat" with the following properties: name: string, age: number, pattern: string, isSleepy (optional) : boolean, and siblings (optional) : string[].
    It's done when I log the cat object.
    It's done when I log the cat's siblings if they exist.

    💡 Hint
    How do we define an optional property in TypeScript?
*/


// TODO: create a cat object called 'cat' with the following properties: name: string, age: number, pattern: string, isSleepy (optional) : boolean, and siblings (optional) : string[]
const cat: {
    name: string;
    age: number;
    pattern: string;
    isSleepy?: boolean;
    siblings?: string[];
    meow(): void;
} = {
    name: 'Tom',
    age: 4,
    pattern: 'no idea',
    isSleepy: true,
    siblings: [
        'Felix',
        'Sylvester'
    ],
    meow: function() {
        console.log("MEOWWWWW!");
    }
};

// TODO: console.log the cat object
console.log(cat);

// TODO: console.log the cat's siblings if they exist
if(cat.siblings) {
    console.log(`${cat.name} the cat has these siblings:`);
    cat.siblings.forEach( (sibling: string) => console.log(sibling) );
} else {
    console.log('The cat has no siblings.');
}

// 🏆 Bonus
// How can you add and type a meow method that logs "MEOWWWWW!"?
cat.meow();