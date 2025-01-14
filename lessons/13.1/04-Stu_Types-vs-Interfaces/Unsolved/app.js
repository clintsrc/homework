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
const coordinate1 = {
    x: 100,
    y: 200
};
console.log(coordinate1);
// Fullname is a variable of the FullName interface type and it must honor the contract
// to declare the member variables defined in the interface
const fullName = {
    firstName: 'First',
    lastName: 'Last',
};
// TeamMember is a class that implements the FullName interface type. It must honor 
// the contract to declare the member variables defined in the interface
class TeamMember {
    constructor(firstName, lastName, teamName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teamName = teamName;
    }
}
const teamMember = {
    firstName: 'First',
    lastName: 'Last',
    teamName: "Team"
};
