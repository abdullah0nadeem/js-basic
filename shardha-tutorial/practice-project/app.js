const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const exchangeRateButton = document.querySelector("form .exchange-rate button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
let convertedRate = document.querySelector(".converted-rate");

for (const dropdown of dropdowns) {
  for (code in countryList) {
    let option = document.createElement("option");
    option.innerText = code;
    option.value = code;

    if (dropdown.name == "from" && code == "USD") {
      option.selected = true;
    } else if (dropdown.name == "to" && code == "PKR") {
      option.selected = true;
    }
    dropdown.appendChild(option);
  }

  dropdown.addEventListener("change", (e) => {
    updateFlag(e.target);
    updateExchangeRate();
  });
}

const updateFlag = (element) => {
  let countryCode = countryList[element.value];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

exchangeRateButton.addEventListener("click", async (e) => {
  e.preventDefault();
  await updateExchangeRate();
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  if (amountValue <= 0) {
    amount.value = 1;
    amountValue = 1;
  }

  const exchangeRate = await fetchCurrencyRate(
    from.value.toLowerCase(),
    to.value.toLowerCase()
  );

  const formattedAmount = Number(amountValue).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const formattedConverted = (amountValue * exchangeRate).toLocaleString(
    undefined,
    {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }
  );

  convertedRate.innerText = `${formattedAmount} ${from.value} = ${formattedConverted} ${to.value}`;
};

const fetchCurrencyRate = async (fromCountryCode, toCountaryCode) => {
  const url = `${BASE_URL}/${fromCountryCode}.json`;

  let response = await fetch(url);
  let result = await response.json();

  return result[fromCountryCode][toCountaryCode];
};
