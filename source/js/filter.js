import {turnFormOff, turnFormOn} from './util.js';

const mapFilterElement = document.querySelector('.map__filters');
const mapFilters = mapFilterElement.querySelectorAll('.map__filter');
const mapCheckboxes = mapFilterElement.querySelectorAll('.map__checkbox');
const mapFilterFields = [...mapFilters, ...mapCheckboxes];
const housingTypeField = mapFilterElement.querySelector('#housing-type');
const housingPriceField = mapFilterElement.querySelector('#housing-price');
const housingRoomsField = mapFilterElement.querySelector('#housing-rooms');
const housingGuestsField = mapFilterElement.querySelector('#housing-guests');

const turnFilterOff = () => {
  turnFormOff(mapFilterElement, mapFilterFields);
};

const turnFilterOn = () => {
  turnFormOn(mapFilterElement, mapFilterFields);
};

const filterByType = (ad, type) => {
  return
};

export {turnFilterOff, turnFilterOn};
