import L from 'leaflet';
import createCardElement from './card.js';

let onMapLoad = null;
let onMainPinMoveCallback = null;
let adPinMarkers = [];

const map = L.map('map-canvas');
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const adPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const initMap = (coordinate) => {
  map.on('load', onMapLoad).setView(coordinate, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const initMainPin = (coordinate) => {
  mainPinMarker.setLatLng(coordinate);
  mainPinMarker.on('move', onMainPinMove);
  mainPinMarker.addTo(map);
};

const createAdPinMarkers = (ads) => {
  ads.forEach((ad) => {
    const marker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        icon: adPinIcon,
      },
    );
    marker.bindPopup(createCardElement(ad),
      {
        keepInView: true,
      });
    adPinMarkers.push(marker);
  });
};

const renderAdPins = (ads) => {
  createAdPinMarkers(ads);
  adPinMarkers.forEach((marker) => marker.addTo(map));
};

const updateAdPins = (ads) => {
  adPinMarkers.forEach((marker) => marker.remove());
  adPinMarkers = [];
  renderAdPins(ads);
};

const setOnMapLoad = (cb) => {
  onMapLoad = cb;
};

const onMainPinMove = (evt) => {
  onMainPinMoveCallback(evt.target.getLatLng());
};

const setOnMainPinMove = (cb) => {
  onMainPinMoveCallback = cb;
};

const updateMainPin = (coordinate) => {
  mainPinMarker.setLatLng(coordinate);
};

export {initMap, setOnMapLoad, setOnMainPinMove, renderAdPins, updateAdPins, initMainPin, updateMainPin};
