const mapFilterElement = document.querySelector('.map__filters');
const housingTypeField = mapFilterElement.querySelector('#housing-type');
const housingPriceField = mapFilterElement.querySelector('#housing-price');
const housingRoomsField = mapFilterElement.querySelector('#housing-rooms');
const housingGuestsField = mapFilterElement.querySelector('#housing-guests');
const mapFeatureFields = mapFilterElement.querySelectorAll('.map__checkbox');
const mapFilterFields = [housingTypeField, housingPriceField, housingRoomsField, housingGuestsField, ...mapFeatureFields];

const filterByType = (ad, type) => {
  return
};
