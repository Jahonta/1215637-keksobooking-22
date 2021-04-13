import {turnFormOff, turnFormOn} from './util.js';

const mapFilterElement = document.querySelector('.map__filters');
const mapFilters = mapFilterElement.querySelectorAll('.map__filter');
const mapCheckboxes = mapFilterElement.querySelectorAll('.map__checkbox');
const mapFilterFields = [...mapFilters, ...mapCheckboxes];
const housingTypeField = mapFilterElement.querySelector('#housing-type');
const housingPriceField = mapFilterElement.querySelector('#housing-price');
const housingRoomsField = mapFilterElement.querySelector('#housing-rooms');
const housingGuestsField = mapFilterElement.querySelector('#housing-guests');
let onFilterChange = null;
let ads = [];

const turnFilterOff = () => {
  turnFormOff(mapFilterElement, mapFilterFields);
};

const turnFilterOn = () => {
  turnFormOn(mapFilterElement, mapFilterFields);
};

const resetFilter = () => {
  mapFilterElement.reset();
  onFilterChange(ads);
};

const getAds = (data) => {
  ads = data;
}

const filterByType = (ad, type) => {
  return type === 'any' || ad.offer.type === type;
};

const filterByPrice = (ad, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'middle':
      return ad.offer.price < 50000 && ad.offer.price >= 10000;
    case 'low':
      return ad.offer.price < 10000;
    case 'high':
      return ad.offer.price >= 50000;
  }
};

const filterByRooms = (ad, rooms) => {
  return rooms === 'any' || ad.offer.rooms === +rooms;
};

const filterByGuests = (ad, guests) => {
  return guests === 'any' || ad.offer.guests === +guests;
};

const filterByFeatures = (ad, features) => {
  if (features.length === 0) {
    return true;
  }
  return features.every((feature) => ad.offer.features.includes(feature));
};

const filterAds = () => {
  const selectedType = housingTypeField.value;
  const selectedTPrice = housingPriceField.value;
  const selectedTRooms = housingRoomsField.value;
  const selectedTGuests = housingGuestsField.value;
  const selectedFeatures = [];
  [...mapCheckboxes].forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeatures.push(checkbox.value);
    }
  });

  const filteredAds = ads.filter((ad) => (
    filterByType(ad, selectedType) &&
    filterByPrice(ad, selectedTPrice) &&
    filterByRooms(ad, selectedTRooms) &&
    filterByGuests(ad, selectedTGuests) &&
    filterByFeatures(ad, selectedFeatures)
  ));

  return filteredAds;
};

const setOnFilterChange = (cb) => {
  onFilterChange = cb;
};

mapFilterFields.forEach((field) => {
  field.addEventListener('change', () => {
    const filteredAds = filterAds();
    onFilterChange(filteredAds);
  })
});

export {turnFilterOff, turnFilterOn, resetFilter, setOnFilterChange, getAds};
