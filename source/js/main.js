import {turnAdFormOff, setFormSubmit} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import renderMap from './map.js';

turnAdFormOff();
getData(renderMap, showAlert);
setFormSubmit(sendData);
