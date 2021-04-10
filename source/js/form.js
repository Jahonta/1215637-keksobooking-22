import {turnFormOff, turnFormOn, START_COORDINATE} from './util.js';

const adFormElement = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');
const typeField = adFormElement.querySelector('#type');
const priceField = adFormElement.querySelector('#price');
const timeInField = adFormElement.querySelector('#timein');
const timeOutField = adFormElement.querySelector('#timeout');
const avatarField = adFormElement.querySelector('#avatar');
const titleField = adFormElement.querySelector('#title');
const addressField = adFormElement.querySelector('#address');
const capacityField = adFormElement.querySelector('#capacity');
const descriptionField = adFormElement.querySelector('#description');
const imagesField = adFormElement.querySelector('#images');
const roomNumberField = adFormElement.querySelector('#room_number');
const featureFields = adFormElement.querySelectorAll('.feature__checkbox');

const adFormFields = [typeField, priceField, timeInField, timeOutField, avatarField, titleField, addressField, capacityField, descriptionField, imagesField, roomNumberField, ...featureFields];

const typesToPrices = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const roomsToGuests = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const turnAdFormOff = () => {
  turnFormOff(adFormElement, adFormFields);
};

const turnAdFormOn = () => {
  turnFormOn(adFormElement, adFormFields);
  setAddress(START_COORDINATE);
};

const setAddress = ({lat, lng}) => {
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const validateTitle = (evt) => {
  const {tooShort, tooLong, valueMissing} = evt.target.validity;

  switch (true) {
    case tooShort:
      titleField.setCustomValidity(`Заголовок должен быть минимум ${titleField.minLength} символов`);
      break;
    case tooLong:
      titleField.setCustomValidity(`Заголовок не должен быть длиннее ${titleField.maxLength} символов`);
      break;
    case valueMissing:
      titleField.setCustomValidity('Введите заголовок');
      break;
    default:
      titleField.setCustomValidity('');
      break;
  }
};

const validatePrice = (evt) => {
  const {rangeUnderflow, rangeOverflow, valueMissing} = evt.target.validity;

  switch (true) {
    case rangeUnderflow:
      priceField.setCustomValidity(`Цена не должна быть ниже ${priceField.min} рублей`);
      break;
    case rangeOverflow:
      priceField.setCustomValidity(`Цена не должна быть выше ${priceField.max} рублей`);
      break;
    case valueMissing:
      priceField.setCustomValidity('Введите цену');
      break;
    default:
      priceField.setCustomValidity('');
      break;
  }
};

const validateCapacity = () => {
  if (!roomsToGuests[roomNumberField.value].includes(capacityField.value)) {
    capacityField.setCustomValidity('Неверное значение!');
  } else {
    capacityField.setCustomValidity('');
  }
  capacityField.reportValidity();
};

const validateAddress = (evt) => {
  const {valueMissing} = evt.target.validity;

  if (valueMissing) {
    addressField.setCustomValidity('Выберите адрес!');
  } else {
    addressField.setCustomValidity('');
  }
};

const disableCapacity = () => {
  for (const option of capacityField.options) {
    if (roomsToGuests[roomNumberField.value].includes(option.value)) {
      option.disabled = false;
    } else {
      option.disabled = true;
    }
  }
};

const resetForm = (evt) => {
  evt.preventDefault();
  adFormElement.reset();
  setAddress(START_COORDINATE);
};

typeField.addEventListener('change', () => {
  priceField.placeholder = typesToPrices[typeField.value];
  priceField.min = typesToPrices[typeField.value];
});

timeInField.addEventListener('change', () => {
  timeOutField.value = timeInField.value;
});

timeOutField.addEventListener('change', () => {
  timeInField.value = timeOutField.value;
});

roomNumberField.addEventListener('change', () => {
  validateCapacity();
  disableCapacity();
});

addressField.addEventListener('focus', () => {
  addressField.blur();
});

resetButton.addEventListener('click', resetForm);
capacityField.addEventListener('change', validateCapacity);
titleField.addEventListener('invalid', validateTitle);
priceField.addEventListener('invalid', validatePrice);
addressField.addEventListener('invalid', validateAddress);

const setFormSubmit = (sendData) => {
  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(resetForm, new FormData(evt.target));
  });
};

export {turnAdFormOff, turnAdFormOn, setAddress, setFormSubmit};
