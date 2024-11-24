/*
 *
    Log Welcome Messages to Students Using a Typed Array

    Work with a partner to implement the following user story:
    As a teacher, I want to create a list of student names so that I can welcome them individually.
    
    Acceptance Criteria
    It's done when typescript has successfully been installed as a devDependency.
    It's done when the total number of students is logged to the console.
    It's done when the message "Welcome to the class, STUDENT_NAME" is logged using each element in the array.
    It's done when the proper TypeScript type is applied to the array.
    It's done when the code transpiles without errors.

    💡 Hints
    What is the first index in an array: 0 or 1?
    What Typescript types are available?
 * 
 */


   //  It's done when the code transpiles without errors.

// TODO Create an array containing names of five students in the class with the correct type
let students: string[] = ["Eric", "Buck", "Albert", "Joe", "Allan"];

// TODO Log length of the students array
console.log(`Number of students: ${students.length}`);

// TODO Loop over the array and welcome each student to the class
//students.forEach( (student) => console.log(`Welcome to the class, ${student}`) );
for(let i:number = 0; i < students.length; i++) {
   console.log(`Welcome to the class, ${students[i]}`)
}


/*
 * 🏆 Bonus
   Q: How can we contain the names and ages of each student in one array, while still being strictly typed?
 *
 */

// Define the type for the student objects
interface Student {
   name: string;
   age: number;
 }
 
 // Declare students2 as an array of Student objects
 let studentsDetails: Student[] = [
   { name: "Eric", age: 25 },
   { name: "Buck", age: 26 },
   { name: "Albert", age: 27 },
   { name: "Joe", age: 28 },
   { name: "Allan", age: 29 },
 ];

console.log("====== BONUS ======");
for (let i:number = 0; i < students.length; i++) {
   console.log(`Welcome to the class, ${studentsDetails[i].name} (age: ${studentsDetails[i].age})`);
}