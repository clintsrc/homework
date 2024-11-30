import type Work from '../interfaces/Work.js';

class Employee implements Work {
  name: string;
  id: number;
  title: string;
  salary: number;

  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
  ) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.salary = salary;
  }

  // TODO: tbd
  receivePay(pay: number): number {
    this.salary += pay;
    return this.salary;
  }
}

export default Employee;
