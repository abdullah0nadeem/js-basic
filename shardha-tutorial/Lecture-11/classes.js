// Classes are templates/blueprints for objects
// object will have some states (variables) and some behaviors (methods)

// Constructor
// Automatically invoked by new keyword
// initialized object

class Car {
  constructor(brand, milage) {
    this.brand = brand;
    this.milage = milage;
    console.log(`Creating new ${brand ?? "Car"} object`);
  }

  start() {
    console.log(`${this.brand ?? "Car"} Started`);
  }

  stop() {
    console.log(`${this.brand ?? "Car"} Stopped`);
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new Car("Fortuner", 10); // Constructor invoked
let lexus = new Car(); // Constructor invoked

fortuner.start();
lexus.start();

lexus.setBrand("lexus");

console.log(lexus.brand);
lexus.stop();

// Inheritance in JS
