// console.log(window); // parent object of the browser

// Single element selector

// const form = document.getElementById("my-form");
// console.log(form);

// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));

// Multiple element selector
// console.log(document.querySelectorAll(".item")); // used for class, id, tag, return NodeList
// console.log(document.getElementsByClassName("item")); // return HTMLCollection
// console.log(document.getElementsByTagName("li")); // return HTMLCollection

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// DOM - Manipulation
// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Changed";
// ul.children[1].innerText = "brad";
// ul.lastElementChild.innerHTML = "<h2>Item3<h2>";

// const button = document.querySelector(".btn");
// button.style.background = "red";

// Events
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   // console.log(event.target);
//   // console.log(event.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// });

// button.addEventListener("mouseover", (event) => {
//   event.preventDefault();
//   // console.log(event.target);
//   // console.log(event.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// });

// button.addEventListener("mouseout", (event) => {
//   event.preventDefault();
//   // console.log(event.target);
//   // console.log(event.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
// });

const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const message = document.querySelector(".msg");
const userList = document.querySelector("#users");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    message.classList.add("error");
    message.innerHTML = "Please enter all fields";
    setTimeout(() => {
      message.classList.remove("error");
      message.innerHTML = "";
    }, 3000);

    return;
  }

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
  );
  userList.appendChild(li);

  // clear fields
  nameInput.value = "";
  emailInput.value = "";
}
