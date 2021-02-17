import {setActiveState, setAddress} from './form.js';
const L = window.L;

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


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.66023,
    lng: 139.73007,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const onMapLoad = () => {
  setActiveState();
};

const onMainPinMove = (evt) => {
  setAddress(evt.target.getLatLng());
}

mainPinMarker.on('moveend', onMainPinMove);

mainPinMarker.addTo(map);
