const BASE_URL = "https://catfact.ninja";
const URL = `${BASE_URL}/facts`;
const factsUL = document.querySelector(".facts");

// let promise = fetch(URL);
// console.log(promise);

// GET Request
const getFacts = async () => {
  const response = await fetch(URL);

  const result = await response.json();

  return result.data;
};

// const getFactsUsingPromise = () => {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log(result.data);
//     });
// };

getFacts().then((results) => {
  for (result of results) {
    const factLI = document.createElement("li");
    factLI.appendChild(document.createTextNode(`${result.fact}`));
    factsUL.appendChild(factLI);
  }
});
