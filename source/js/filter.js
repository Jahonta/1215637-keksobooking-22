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
};

const getAds = (data) => {
  ads = data;
}

const filterByType = (ad, type) => {
  return
};

const filterAds = () => {
  const filteredAds = [];
  ads.forEach((ad) => {
    filterByType();
  });
};

const setOnFilterChange = (cb) => {
  onFilterChange = cb;
};

mapFilterFields.forEach((field) => {
  field.addEventListener('change', onFilterChange)
});

export {turnFilterOff, turnFilterOn, resetFilter, setOnFilterChange, getAds};
