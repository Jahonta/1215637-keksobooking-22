import {setActiveState} from './form.js';
const L = window.L;

const onMapLoad = () => {
  setActiveState();
};

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', onMapLoad)
    .setView({
      lat: 35.66023,
      lng: 139.73007,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

export {initMap};
