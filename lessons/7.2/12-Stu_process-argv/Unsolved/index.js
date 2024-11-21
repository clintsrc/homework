/* 
Work with a partner to implement the following user story:

As a developer, I want to use command-line arguments as input when writing Node.js applications.
Acceptance Criteria
It's done when I have created a file, index.js, in the working directory.

It's done when I use process.argv to assign two arguments to variables.

It's done when I compare those two variables to see whether they are the same or not.

It's done if the program logs true to the console when the values are the same and false if they are not.

💡 Hints
How many different ways can you solve this problem? Remember that there is not just one correct solution.

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:

What is the difference between === and == when comparing two values in JavaScript?

A: === takes into account the value and also the type of variable. == only compares the value, not the type
*/

// console.log(process.argv.length);

if (process.argv.length == 4) {
    console.log(`main:`);
    // parm 1 is the node command
    // parm 2 is the script name
    // parm 3 is the 3rd argument (element at index 2)
    let arg1 = process.argv[2];
    let arg2 = process.argv[3];

    if (arg1 == arg2) {
        console.log(`\tTrue: ${arg1} == ${arg2}`);
    } else {
        console.log(`\tFalse: ${arg1} == ${arg2}`);
    }

} else {
    console.log("Please pass 2 command line arguments for comparison.");
}

function parseArgs (args, num_expected) {
    if (args.length < (num_expected + 2) ) {
        console.log(`No parameters were given`);
        args = []
    } else {
        args = args.slice(2);
    }
    return args;
}

function compareTwo(first, second) {
    console.log(`compareTwo:`);
    if (first === second) {
        console.log(`\tTrue: ${first} === ${second}`);
    } else {
        console.log(`\tFalse: ${first} === ${second}`);
    }
}

let parameters = []
parameters = parseArgs(process.argv, 2);

if (parameters.length) {
    compareTwo(parameters[0], parameters[1]);
}
