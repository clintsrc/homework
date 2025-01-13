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

type Coordinate = {
  x: number;
}

type Coordinate = {
  y: number;
}

const coordinate1: Coordinate = {
  x: 100,
  y: 200
};

console.log(coordinate1);


// TODO: Explain the following code throughout. What is the difference between the `fullName` and `teamMember` objects?

interface FullName {
  firstName: string;
  lastName: string;
}

const fullName: FullName = {
  firstName: 'First',
  lastName: 'Last',
};

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
