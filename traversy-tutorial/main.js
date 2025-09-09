// console used for debugging
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

// variables var, let and const

// var is globaly-scoped
// let and const - ES-6 / ES-2015

let age = 23; // Declaration
age = 50; // assignment
console.log(age);

// const - cannot be changed/reassign but change the values of array/object

// Premitive types - string, number, boolean, null, undefine, Symbol
const player = "A";
const score = 50;
const isAlive = true;
const health = 10.5;
const player2 = undefined;
const player3 = null;
let player4; // implicit - undefined

// we can use (typeof) to check type of variable

console.log(typeof player3);

// Concatination
console.log("Player name" + player + "and Player health" + health);

// Template string
console.log(`Player name ${player} and player health ${health}`);

// String
const str = "Abdullah, Nadeem, Akram";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 5).toUpperCase());
console.log(str.split(""));
console.log(str.split(", "));

// Arrays
/** Arrays - varaibles that holds multiple values */

const numbers = new Array(1, 2, 3, 4, 5); // using constructor

const fruits = ["apple", "orange", "peer"];
console.log(fruits[1]);

fruits[3] = "grape";
console.log(fruits);

fruits.push("mango");
console.log(fruits);

fruits.unshift("strawberry");
console.log(fruits);

console.log(fruits.indexOf("orange"));

// Object literals
const person = {
  firstName: "Abdullah",
  lastName: "Nadeem",
  age: 20,
  hobbies: ["movies", "sports"],
  address: {
    street: "1-A",
    city: "Lhr",
    state: "Punjab",
  },
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// destructing - pulling out
const {
  firstName,
  lastName,
  address: { city },
} = person;

// Adding properties
person.email = "abd@mail.com";

// array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appoinment",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

// JSON format
const todosJson = JSON.stringify(todos);
console.log(todosJson);

// loops
// for-loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while-loop
let i = 0;
while (i <= 10) {
  console.log(`Number: ${i}`);
  i++;
}

// loop through arrays
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// for-of-loop
for (const todo of todos) {
  console.log(todo);
}

// higher-order array methods
// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const completedTodos = todos
  .filter((todo) => todo.isCompleted)
  .map(function (todo) {
    return todo.text;
  });
console.log(completedTodos);

// Conditionals
const value = 20;

if (value == 10) {
  // only check value
  console.log("value is equal to 10");
} else {
  console.log("value is not equal to 10");
}

if (value === 10) {
  // strict - checks value and type
  console.log("value is equal to 10");
} else {
  console.log("value is not equal to 10");
}

if (value === 10) {
  console.log("value is equal to 10");
} else if (value > 10) {
  console.log("value is greater than 10");
} else {
  console.log("value is less than 10");
}

const isValueInRange = value > 0 && value < 20; // ||

// nested if

if (value > 5) {
  if (isValueInRange) {
    console.log("Values is in b/w 5 and 20");
  }
}

// ternary operator
const color = value > 10 ? "red" : "blue";
console.log(color);

// switch
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

// functions
function addNumbers(num1, num2) {
  return num1 + num2;
}

function addNumbers(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNumbers(5, 5));

// arrow functions - ES-6/ES-2015
const add = (num1, num2) => {
  return num1 + num2;
};

const square = (number) => number * number;

console.log(add(1, 6));
console.log(square(2));

// lexical this

// golobal scoping
const printCharacter = () => {
  return this.character + " is a main character in this show";
};

const series = {
  title: "House of Cards",
  character: "Frank Underwood",
  printTitle() {
    return `The name of the series is ${this.title}`;
  },
  printCharacter: printCharacter,

  printDetails() {
    console.log(this);
    return `${this.printTitle()} and ${this.printCharacter()}`;
  },
};

console.log(series.printDetails());

const series2 = {
  title: "House of Cards",
  character: "Frank Underwood",
  printTitle() {
    return `The name of the series is ${this.title}`;
  },
  printCharacter: () => {
    return this.character + " is a main character in this show";
  },
  printDetails() {
    return `${this.printTitle()} and ${this.printCharacter()}`;
  },
};

console.log(series2.printDetails());

// lexical scoping
const series3 = {
  title: "House of Cards",
  character: "Frank Underwood",
  printTitle() {
    return `The name of the series is ${this.title}`;
  },

  printDetails() {
    const printCharacter = () => {
      return this.character + " is a main character in this show";
    };

    return `${this.printTitle()} and ${printCharacter()}`;
  },
};

console.log(series3.printDetails());

// OOP
// Pervisouly used object literal for defining objects

// Constructor function/function prototype/prototypal inheritance - for defining objects - OOP in ES5

// parametrs are properties of object
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getBrithYear = function () {
  return new Date(this.dob).getFullYear();
};

// Instantiation of object
const p = new Person("John", "Well", "20-1-1986");
const p2 = new Person("Mary", "Smith", "4-9-1979");
console.log(p);
console.log(p2.firstName);

function Person2(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  this.getBrithYear = function () {
    return this.dob.getFullYear();
  };

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const p3 = new Person2("Mary", "Smith", "4-9-1979");
console.log(p3.dob);
console.log(p3.dob.getFullYear());
console.log(p3.dob.getDay());
console.log(p3.getBrithYear());
console.log(p3.getFullName());

// OOP - ES6 using classes
class Person3 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBrithYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person3("Abd", "Nad", "3-9-1987");
console.log(person1);
