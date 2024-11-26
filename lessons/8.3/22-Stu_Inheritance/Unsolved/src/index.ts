/* 
 *
  Implement Inheritance in TypeScript

  Work with a partner to implement the following user story:
  As a developer, I want to define various shapes such as 
  circles, rectangles, and triangles, so I can calculate and display 
  their areas and perimeters.

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
    A: Inheritance helps avoid maintaining duplicate code. 
       It helps developers to model objects based on real world examples, and
          makes the code more readable.
       It also enforces developers to implement required methods in subclasses.
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
class Circle extends Shape {
  radius: number;
  
  constructor(name: string, radius: number) {
    super(name = name);
    this.radius = radius;
  }

  override calculateArea(): number {
    const area = (Math.PI * Math.pow(this.radius, 2));
    return area;
  }

  override calculatePerimeter(): number {
    const perimeter = (2 * Math.PI * this.radius);
    return perimeter;
  }
}

// TODO: Define a Rectangle class
class Rectangle extends Shape {
  length: number;
  width: number;

  constructor(
      name: string,
      length: number,
      width: number,
    ) {
    super(name = name);
    this.length = length;
    this.width = width;
  }

  override calculateArea(): number {
    const area = (this.length * this.width);
    return area;
  }

  override calculatePerimeter(): number {
    const perimeter = (2 * (this.length + this.width));
    return perimeter;
  }
}

// TODO: Define a Triangle class
class Triangle extends Shape {
  base: number;
  height: number;
  hypotenuse: number;
  
  constructor(
      name: string, 
      base: number, 
      height: number, 
      hypotenuse: number,
    ) {
    super(name = name);
    this.base = base;
    this.height = height;
    this.hypotenuse = hypotenuse;
  }

  
  override calculateArea(): number {
    const area = 0.5 * this.base * this.height
    return area;
  }

  override calculatePerimeter(): number {
    const perimeter = (this.base + this.height + this.hypotenuse);
    return perimeter;
  }
}

// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes

/*
 * Given: radius == 5:
 * Expected:
 * Area: 78.53981633974483
 * Perimeter: 31.41592653589793
 */
const circle = new Circle("Circle", 5 );
circle.displayInfo();

/*
 * Given: length == 6, width == 4:
 * Expected:
 * Area: 24
 * Perimeter: 20
 */
const rectangle = new Rectangle("Rectangle", 6, 4);
rectangle.displayInfo();

/*
 * Given: base == 3, height == 4, hypotenuse == 6
 * Expected:
 * Area: 6
 * Perimeter: 13
 */
const triangle = new Triangle("Triangle", 3, 4, 6);
triangle.displayInfo();