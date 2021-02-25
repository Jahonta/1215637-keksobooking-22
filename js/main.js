import {setInactiveState} from './form.js';
import renderMap from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

setInactiveState();
getData(renderMap, showAlert);
