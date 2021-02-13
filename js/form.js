const formElement = document.querySelector('.ad-form');
const typeElement = formElement.querySelector('#type');
const priceElement = formElement.querySelector('#price');
const timeInElement = formElement.querySelector('#timein');
const timeOutElement = formElement.querySelector('#timeout');

const typesToPrices = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

typeElement.addEventListener('change', () => {
  priceElement.placeholder = typesToPrices[typeElement.value];
  priceElement.min = typesToPrices[typeElement.value];
});

timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});

timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
});
