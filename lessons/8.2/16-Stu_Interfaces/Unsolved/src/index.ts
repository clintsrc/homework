/* 

  Use a TypeScript Interface to Define a Named Object Type

  Work with a partner to implement the following user story:
  As a developer, I want to use TypeScript interfaces to create named object types.

  Acceptance Criteria
  It's done when I have created an interface called Employee that describes all following employee objects.
  It's done when I update the objects to use the Employee interface.
  It's done when I update the review method to use the Employee interface.

  📝 Notes
  Refer to the documentation:
  TypeScript docs on object types
  TypeScript docs on interfaces

  💡 Hint
  If the object shapes do not match, how can we use optional properties to fit all objects?

  🏆 Bonus
  Q: What is a type alias? How do type aliases compare to interfaces?
  A: TODO

  */


// TODO: Create an interface called Employee that describes the following objects. Think about what should be optional and what should be required.
// TODO: Update the objects to use the Employee interface.

// Object 1:
const employee1 = {
  firstName: 'Jimmy',
  lastName: 'Yang',
  role: 'Software Engineer',
  salary: 100000,
  reportsTo: 'Sarah Smith',
};

// Object 2:
const employee2 = {
  firstName: 'Ramon',
  lastName: 'Garcia',
  role: 'Senior Software Engineer',
  salary: 120000,
  reportsTo: 'Sarah Smith',
  bonus: 10000,
};

// Object 3:
const employee3 = {
  firstName: 'Sarah',
  lastName: 'Smith',
  role: 'Director of Engineering',
  salary: 150000,
  reportsTo: 'Sandra Ellis',
  bonus: 20000,
  reports: [employee1, employee2],
  // TODO: update the review method to use the Employee interface
  review: (employee: any) => {
    if (Math.random() > 0.5) {
      return `${employee.firstName} ${employee.lastName} has been Promoted!`;
    } else {
      return `${employee.firstName} ${employee.lastName} has not been Promoted!`;
    }
  },
};

if (employee3.review) {
  const promotionResult = employee3.review(employee2);
  console.log(promotionResult);
}
