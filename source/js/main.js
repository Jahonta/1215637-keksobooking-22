import {turnAdFormOff, turnAdFormOn, setFormSubmit, updateAddress, resetForm} from './form.js';
import {turnFilterOff, turnFilterOn, setOnFilterChange, resetFilter, getAds} from './filter.js';
import {initMap, setOnMapLoad, setOnMainPinMove, renderAdPins, updateAdPins, initMainPin, updateMainPin} from './map.js';
import {getData, sendData, setOnSendDataSuccess, setOnSendDataError, setOnGetDataSuccess, setOnGetDataError} from './api.js';
import {showErrorMessage, showSuccessMessage} from './message.js';
import {showAlert, START_COORDINATE} from './util.js';
import 'leaflet/dist/leaflet.css';

// Первоначальное состояние
turnAdFormOff();
turnFilterOff();

// Загрузка карты
setOnMapLoad(() => {
  initMainPin(START_COORDINATE);
  setOnMainPinMove(updateAddress);
  updateAddress(START_COORDINATE);
  turnAdFormOn();
});
initMap(START_COORDINATE);

// Загрузка объявлений
setOnGetDataSuccess((ads) => {
  renderAdPins(ads);
  getAds(ads);
  turnFilterOn();
});
setOnGetDataError(showAlert);
getData();

// Изменение фильтра
setOnFilterChange(updateAdPins);

// Отправка формы
setOnSendDataSuccess(() => {
  showSuccessMessage();
  resetForm();
  updateAddress(START_COORDINATE);
  resetFilter();
  updateMainPin(START_COORDINATE);
});
setOnSendDataError(showErrorMessage);
setFormSubmit(sendData);
