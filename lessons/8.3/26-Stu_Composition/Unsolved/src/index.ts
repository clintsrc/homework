/* 

  Implement Composition in TypeScript

  Work with a partner to implement the following user story:
  As a developer, I want to define a drawing that contains various shapes, such as circles, rectangles, and triangles, so I can calculate and display the total area of the drawing.
  
  Acceptance Criteria
  It's done when I've created a drawing that holds multiple shapes.
  It's done when I call the calculateTotalArea method and the correct value is displayed.

  📝 Note
  Refer to the documentation:
  TypeScript class heritage
  
  Assets
  The output from the completed code should be similar to the following:
  Total Area of Drawing: 100.53981633974483

  🏆 Bonus
    Q: How does composition in TypeScript differ from inheritance?
    A: TODO

 */


// Define a base interface for shapes
interface Shape {
  calculateArea(): number;
}

// Define a Circle class
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // Implement methods to calculate the area and perimeter for the circle
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Define a Rectangle class
class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Implement methods to calculate the area and perimeter for the rectangle
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Define a Triangle class
class Triangle implements Shape {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  // Implement methods to calculate the area and perimeter for the triangle
  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// TODO: Define a Drawing class that contains instances of various shapes

// Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4);

// TODO: Create a drawing containing these shapes

// TODO: Calculate and display the total area of the drawing
