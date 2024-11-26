/* 

  Implement Polymorphism in TypeScript
  Work with a partner to implement the following user story:
  As a developer, I want to define various shapes such as circles, rectangles, and triangles, 
     so I can calculate and display the total area and perimeter for all of the shapes.
  
  Acceptance Criteria
  It's done when I've created Circle, Rectangle, and Triangle classes that implement the Shape interface.
  It's done when I've created an array to hold all the shapes.
  It's done when I call the calculateTotalArea method and the correct value is displayed.
  It's done when I call the calculateTotalPerimeter method and the correct value is displayed.

  📝 Notes
  Refer to the documentation:
  TypeScript class heritage
  TypeScript implements clauses

  Assets
  The output from the completed code should be similar to the following:

  Total Area: 108.53981633974483
  Total Perimeter: 64.41592653589794

  🏆 Bonus
    Q: What are some reasons you would choose an interface instead of inheritance?
    A: TODO

 */

// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class
// const area = (Math.PI * Math.pow(this.radius, 2));
// const perimeter = (2 * Math.PI * this.radius);

// TODO: Define a Rectangle class
// const area = (this.length * this.width);
// const perimeter = (2 * (this.length + this.width));

// TODO: Define a Triangle class
// const area = 0.5 * this.base * this.height
// const perimeter = (this.base + this.height + this.hypotenuse);

// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// TODO: Create instances of the Circle, Rectangle, and Triangle classes

// TODO: Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)

// TODO: Display the total area of all shapes

// TODO: Display the total perimeter of all shapes



/* TBD: from previous
/* Circle
 * Given: radius == 5:
 * Expected:
 * Area: 78.53981633974483
 * Perimeter: 31.41592653589793
 * 
 * Rectangle
 * Given: length == 6, width == 4:
 * Expected:
 * Area: 24
 * Perimeter: 20
 *
 * Triangle
 * Given: base == 3, height == 4, hypotenuse == 6
 * Expected:
 * Area: 6
 * Perimeter: 13
 *
 */

