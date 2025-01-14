/*
📐 Add Comments to Types vs. Interfaces Code
Work with a partner to add comments describing the functionality of the code found in Unsolved.

📝 Notes
Refer to the documentation:

TypeScript Object Documentation

TypeScript Class Documentation

🏆 Bonus
If you've completed this activity, work through the following challenge with your partner to further your knowledge:

What are some other cases for which is it more suitable to make use of either types or interfaces?
 */


// TODO: Add comments as indicated in the code comments below

// TODO: What is wrong with the following code? How would you correct it?
/*
type Coordinate = {
  x: number;
}

type Coordinate = {
  y: number;
}
*/
// Coordinate represent an x/y point to mirror real-life. It doesn't make sense to
// have only one of these values set for a coordinate, so it would be better to 
// require both variables by making it an interface
interface Coordinate {
  x: number;
  y: number;
}

const coordinate1: Coordinate = {
  x: 100,
  y: 200
};

console.log(coordinate1);


// TODO: Explain the following code throughout. What is the difference between the `fullName` and `teamMember` objects?

// The FullName interface defines a set of members that must be declared by any 
// variable or class that uses it
interface FullName {
  firstName: string;
  lastName: string;
}

// Fullname is a variable of the FullName interface type and it must honor the contract
// to declare the member variables defined in the interface
const fullName: FullName = {
  firstName: 'First',
  lastName: 'Last',
};
// TeamMember is a class that implements the FullName interface type. It must honor 
// the contract to declare the member variables defined in the interface
class TeamMember implements FullName {
  firstName: string;
  lastName: string;
  teamName: string;

  constructor(
    firstName: string,
    lastName: string,
    teamName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamName = teamName;
  }
}

const teamMember: TeamMember = {
  firstName: 'First',
  lastName: 'Last',
  teamName: "Team"
};
