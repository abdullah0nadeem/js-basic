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
