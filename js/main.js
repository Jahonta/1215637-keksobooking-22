import {setInactiveState, setFormSubmit} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import renderMap from './map.js';

setInactiveState();
getData(renderMap, showAlert);
setFormSubmit(sendData);
