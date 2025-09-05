// Loging to console
console.log("Hello world");

// decleraing variables
let name = "Abdullah";
console.log(name);

// by default variables are `undefine`
// cannot be reserved keywords
// should be meaningfull variables name
// cannot start with number (1name)
// cannot conatins space or hypen
// they are case sensitive
//

let firstName = "Abdullah";
let lastName = "Nadeem";

// Declering constants

const interestRate = 0.3;
console.log(interestRate);

// Variable types
// Premitive / value types
//  - string
//  - number
//  - boolean
//  - undefine
//  - null

let myName = "Abdullah"; // string literal
let age = 20; // number literal
let isTaken = false; // boolea literal (true/false)
let carName = undefined;
let carType = null;

// Referenc types
//  - objects
//  - array
//  - function

let person = {
  name: "Abdullah",
  age: 21,
};

console.log(person);
// Dot Notation
person.name = "Nadeem";

console.log(person.name);
console.log(person.age);

// Bracket Notation
person["name"] = "Abdullah";
console.log(person["name"]);

// arrays
let colors = ["red", "blue", "white"];
console.log(colors);
console.log(colors[0]);
colors[2] = "green";
console.log(colors);
colors[3] = 1;
console.log(colors);
console.log(colors.length);
console.log(colors.join(","));

// functions
function greetMe() {
  console.log("Hello mee!!");
}

greetMe();

function greetName(name) {
  console.log("Hello " + name);
}

greetName("John");

function greetFullName(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greetFullName("john");

greetFullName("john", "smith");

function greetTemplateLiteral(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

// Calcuation a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
