// https://v6.exchangerate-api.com/v6/75fe1a1155ffd487694cab79/latest/IDR

const container = document.querySelector('.container');
const selectTo = document.querySelector('select.to');
const selectFrom = document.querySelector('select.from');

for(const c in countries){
  const optionTo = document.createElement('option');
  const optionFrom = document.createElement('option');
  optionTo.innerHTML = c;
  optionTo.setAttribute('value', c);
  optionFrom.innerHTML = countries[c];
  optionFrom.setAttribute('value', countries[c]);
  selectTo.appendChild(optionTo);
  selectFrom.appendChild(optionFrom);
}

