const adFormElement = document.querySelector('.ad-form');
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

const mapFilterElement = document.querySelector('.map__filters');
const housingTypeField = mapFilterElement.querySelectorAll('#housing-type');
const housingPriceField = mapFilterElement.querySelectorAll('#housing-price');
const housingRoomsField = mapFilterElement.querySelectorAll('#housing-rooms');
const housingGuestsField = mapFilterElement.querySelectorAll('#housing-guests');
const mapFeatureFields = mapFilterElement.querySelectorAll('.map__checkbox');

const adFormFields = [typeField, priceField, timeInField, timeOutField, avatarField, titleField, addressField, capacityField, descriptionField, imagesField, roomNumberField, ...featureFields];
const mapFilterFields = [housingTypeField, housingPriceField, housingRoomsField, housingGuestsField, mapFeatureFields];

const FieldLimit = {
  MIN_TITLE_LENGTH: 30,
  MAX_TITLE_LENGTH: 100,
  MAX_PRICE: 1000000,
  MIN_BUNGALOW_PRICE: 0,
  MIN_FLAT_PRICE: 1000,
  MIN_HOUSE_PRICE: 5000,
  MIN_PALACE_PRICE: 10000,
}

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

const turnFormOff = (form, fields) => {
  form.classList.add('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = true;
  });
};

const turnFormOn = (form, fields) => {
  form.classList.remove('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = false;
  });
};

const setInactiveState = () => {
  turnFormOff(adFormElement, adFormFields);
  turnFormOff(mapFilterElement, mapFilterFields);
};

const setActiveState = () => {
  turnFormOn(adFormElement, adFormFields);
  turnFormOn(mapFilterElement, mapFilterFields);
};

const setAddress = ({lat, lng}) => {
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const validateTitle = () => {
  const valueLength = titleField.value.length;
  let message = '';

  if (valueLength < FieldLimit.MIN_TITLE_LENGTH) {
    message = 'Ещё ' + (FieldLimit.MIN_TITLE_LENGTH - valueLength) + ' симв.';
  }
  if (valueLength > FieldLimit.MAX_NAME_LENGTH) {
    message = 'Удалите лишние ' + (valueLength - FieldLimit.MAX_NAME_LENGTH) + ' симв.';
  }

  titleField.setCustomValidity(message);
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

titleField.addEventListener('invalid', validateTitle);

export {setInactiveState, setActiveState, setAddress};
