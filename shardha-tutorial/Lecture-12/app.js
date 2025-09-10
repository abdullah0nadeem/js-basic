// Synchronous and Asynchronous

// console.log("1");
// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// console.log("4");
// console.log("5");

// Callbacks - is a function passed as an argument to another function
function sum(a, b) {
  return a + b;
}

function calculator(a, b, callback) {
  console.log(callback(a, b));
}

calculator(2, 3, sum);

calculator(2, 2, (a, b) => {
  return a * b;
});

// nesting if-else

const age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}

// Callback hell - Nested callbacks stacked below one another
// forming a pyramid structure (Pyramid of Doom)

// function getData(id) {
//   console.log(`Data = ${id}`);
// }

// function getData(id) {
//   setTimeout(() => {
//     console.log(`Data = ${id}`);
//   }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// function getData(id, getNextData) {
//   setTimeout(() => {
//     console.log(`Data = ${id}`);

//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// Callback hell - It's become difficult to understand and manage
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// To solve `Callback Hell` problem - we use Promised
// Promises
// Promise States - pending, fulfilled, rejected

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise");
//   // resolve("Success");
//   // reject("error");
// });

// function getDataBy(id, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data = ${id}`);
//       resolve("success");

//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let result = getDataBy(1);

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise");
//     resolve("success");
//   });
// };

// let newPromise = getPromise();
// newPromise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// newPromise.catch((err) => {
//   console.log("promise rejected", err);
// });

// Promise chaining
function aysncFunc(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`some data ${id}`);
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data 1...");
// let p1 = aysncFunc(1);
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 2...");
// let p2 = aysncFunc(2);
// p2.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 1...");
// aysncFunc(1).then((res) => {
//   console.log(res);

//   console.log("fetching data 2...");
//   aysncFunc(2).then((res) => {
//     console.log(res);
//   });
// });

function getDataBy(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data = ${id}`);
      resolve("success");
    }, 2000);
  });
}

// Promise chaining

// getDataBy(1)
//   .then((result) => {
//     return getDataBy(2);
//   })
//   .then((result) => {
//     return getDataBy(3);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Aysnc-Await
// aysnc function always return a Promise

function api(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`weather data ${id}`);
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(1);
  await api(2);
}

// getWeatherData();

async function getAllData() {
  await getDataBy(1);
  await getDataBy(2);
  await getDataBy(3);
}

// getAllData();

// IIFE: Immediately Invoked Function Expression
(function () {
  console.log("hello");
})();

(() => {
  console.log("hello");
})();

(async function () {
  await getDataBy(1);
  await getDataBy(2);
  await getDataBy(3);
})();
