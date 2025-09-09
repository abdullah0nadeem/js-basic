// console.log(window); // parent object of the browser

// Single element selector

const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

// Multiple element selector
console.log(document.querySelectorAll(".item")); // used for class, id, tag, return NodeList
console.log(document.getElementsByClassName("item")); // return HTMLCollection
console.log(document.getElementsByTagName("li")); // return HTMLCollection

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// DOM - Manupulation
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Changed";
ul.children[1].innerText = "brad";
ul.lastElementChild.innerHTML = "<h2>Item3<h2>";

const button = document.querySelector(".btn");
button.style.background = "red";
