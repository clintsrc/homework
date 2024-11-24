/* 
 *
  Implement Inheritance in TypeScript

  Work with a partner to implement the following user story:
  As a developer, I want to define various shapes such as circles, rectangles, and triangles, so I can calculate and display their areas and perimeters.

  Acceptance Criteria
  It's done when I've created Circle, Rectangle, and Triangle classes that inherit from the Shape class.
  It's done when I call the displayInfo method for each class and the correct values are displayed.

  📝 Notes
  Refer to the documentation:
  TypeScript class heritage
  TypeScript extends clauses
  Assets
  The output from the completed code should be similar to the following:

  ----------Circle----------
  Area: 78.53981633974483
  Perimeter: 31.41592653589793

  ----------Rectangle----------
  Area: 24
  Perimeter: 20

  ----------Triangle----------
  Area: 6
  Perimeter: 13

  💡 Hint
  How do we calculate the area of different shapes? Use Google or another search engine to research this.

  🏆 Bonus
    Q: How does TypeScript inheritance make code more maintainable?
    A: TODO
 *
 */

// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`----------${this.name}----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// TODO: Define a Circle class

// TODO: Define a Rectangle class

// TODO: Define a Triangle class

// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes
