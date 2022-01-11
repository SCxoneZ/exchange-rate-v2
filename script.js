// https://v6.exchangerate-api.com/v6/75fe1a1155ffd487694cab79/latest/IDR

const container = document.querySelector('.container');
const selectTo = document.querySelector('select.to');
const selectFrom = document.querySelector('select.from');
const result = document.querySelector('.result');
const swapBtn = document.querySelector('.swap-btn');

const input = document.querySelector('input');
const btnExchange = document.querySelector('.btn-exchange');
doLoop();

swapBtn.addEventListener('click', () => {
  const toVal = selectTo.value;
  const fromVal = selectFrom.value;
  selectTo.value = fromVal;
  selectFrom.value = toVal;
})

btnExchange.addEventListener('click', async () => {
  if(input.value && !isNaN(parseInt(input.value))){
    const data = await getData(exchangeUrl(selectFrom.value));
    result.innerHTML = `${data.conversion_rates[selectTo.value] * parseInt(input.value)} ${selectTo.value}`;
    swapBtn.style.transform = 'rotate(180deg)';
  }
});

const exchangeUrl = (curr) => `https://v6.exchangerate-api.com/v6/75fe1a1155ffd487694cab79/latest/${curr}`;

const detailUrl = (country) => `https://restcountries.com/v3.1/name/${country}`;


async function exchange() {
  const details = await getData('https://restcountries.com/v3.1/all');
  // console.log(details);
}

exchange();

function getData(url) {
  return fetch(url).then(res => res.json()).then(data => data).catch(err => err);
}

async function doLoop() {
  const countries = await getData('https://restcountries.com/v3.1/all');
  for (const c of countries) {
    if (c !== 'Timeout') {
      if (c.currencies) {
        const optionTo = document.createElement('option');
        const optionFrom = document.createElement('option');
        optionTo.innerHTML = c.flag + c.name.common;
        optionTo.setAttribute('value', Object.keys(c.currencies)[0]);
        // optionTo.dataset.symbol = c.currencies[Object.keys(c.currencies)[0]].symbol
        optionFrom.innerHTML = c.flag + c.name.common;
        optionFrom.setAttribute('value', Object.keys(c.currencies)[0]);
        // optionFrom.dataset.symbol = c.currencies[Object.keys(c.currencies)[0]].symbol;
        selectTo.appendChild(optionTo);
        selectFrom.appendChild(optionFrom);
      }
    }
    // if(c.currencies) console.log(Object.keys(c.currencies)[0]);
  }


}