/* 
 *
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
    A: 
      * Decoupling: Interfaces allow you to decouple the implementation from the 
        definition. This means that different classes can implement the same 
        interface in their own way, promoting flexibility.
      * Multiple Implementations: A class can implement multiple interfaces, 
        allowing for more versatile designs compared to single inheritance, 
        which can only inherit from one class.
      * Clear Contracts: Interfaces define a clear contract for what methods a 
        class must implement, which can improve code readability and 
        maintainability.
      * Easier Testing: Using interfaces can make it easier to create mock 
        objects for unit testing, as you can substitute different 
        implementations without changing the code that uses the interface.
      * Promoting Composition Over Inheritance: Interfaces encourage the use of 
        composition, which can lead to more modular and reusable code.
 *
 */

// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return ( Math.PI * Math.pow(this.radius, 2));
  }

  calculatePerimeter(): number {
    return (2 * Math.PI * this.radius);
  }
}

// TODO: Define a Rectangle class
class Rectangle implements Shape {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  calculateArea(): number {
    return (this.length * this.width);;
  }

  calculatePerimeter(): number {
    return (2 * (this.length + this.width));
  }

}
// TODO: Define a Triangle class
class Triangle implements Shape {
  base: number;
  height: number;
  hypotenuse: number;

  constructor(base: number, height: number, hypotenuse: number) {
    this.base = base;
    this.height = height;
    this.hypotenuse = hypotenuse;
  }

  calculateArea(): number {
    return (0.5 * this.base * this.height);
  }

  calculatePerimeter(): number {
    return (this.base + this.height + this.hypotenuse);
  }

}

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
const circle = new Circle(5);
const rectangle = new Rectangle(6, 4);
const triangle = new Triangle(3, 4, 6)

// TODO: Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)
const shapes: Shape[] = [
  circle,
  rectangle,
  triangle,
]

// TODO: Display the total area of all shapes
// Expected: Total Area: 108.53981633974483
const totalArea = calculateTotalArea(shapes);
console.log(`Total Area: ${totalArea}`);

// TODO: Display the total perimeter of all shapes
// Expected: Total Perimeter: 64.41592653589794
const totalPerimeter = calculateTotalPerimeter(shapes);
console.log(`Total Perimeter: ${totalPerimeter}`);
