// Inheritance is passing down properties and methods
// for parent to child classes

// Method overriding - if child and parent have same methods
// child's method will be invoked

// super keyword - is used to call the constructor of its parent class
// to access the parent's properties and methods

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}! having age ${this.age}`);
  }

  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("sleeping");
  }
}

class Child extends Parent {}

let child = new Child("Abd", 23);
console.log(child);
child.greet();

class Person {
  constructor() {
    this.species = "Homo sapiens";
  }

  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("sleeping");
  }
}

class Engineer extends Person {
  work() {
    console.log("Engineer Working");
  }
}

class Doctor extends Person {
  work() {
    console.log("Doctor Working");
  }
}

let engineer = new Engineer();
engineer.work();
console.log(engineer.species);

class Shape {
  constructor(name) {
    console.log("Enter parent");
    this.name = name;
    console.log("Exit parent");
  }

  rotate() {
    console.log(`Rotating ${this.name ?? "Shape"}`);
  }

  draw() {
    console.log(`Drwaing ${this.name ?? "Shape"}`);
  }
}

class Square extends Shape {
  constructor(length) {
    console.log("Enter child");
    super("Square");
    this.length = length;
    console.log("Exit child");
  }

  draw() {
    super.rotate();
    console.log(`Drwaing ${this.name ?? "Shape"} of length ${this.length}`);
  }
}

let square = new Square(10);
console.log(square);
square.draw();
