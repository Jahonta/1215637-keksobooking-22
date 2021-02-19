/* global L:readonly */
import {setActiveState, setAddress} from './form.js';
import ads from './data.js';
import createCardElement from './card.js';

const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', onMapLoad)
    .setView({
      lat: 35.66023,
      lng: 139.73007,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const setMainMarker = () => {
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

  mainPinMarker.on('move', onMainPinMove).addTo(map);
};

const setAdMarkers = (ads) => {
  ads.forEach((ad) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });

    const marker = L.marker(
      {
        lat: ad.location.x,
        lng: ad.location.y,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(createCardElement(ad),
        {
          keepInView: true,
        });
  });
};

const onMapLoad = () => {
  setActiveState();
};

const onMainPinMove = (evt) => {
  setAddress(evt.target.getLatLng());
}

const renderMap = () => {
  initMap();
  setMainMarker();
  setAdMarkers(ads);
}

export default renderMap;
