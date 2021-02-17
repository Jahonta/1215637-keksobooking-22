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

const typesToPrices = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
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

export {setInactiveState, setActiveState, setAddress};
