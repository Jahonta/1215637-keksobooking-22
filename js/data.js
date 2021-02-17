import {getRandomInteger, getRandomFloat, getRandomArrayElement} from './util.js';

const ADS_COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createAd = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(0, 8)}.png`,
    },
    offer: {
      title: 'Заголовок объявления',
      address: `${getRandomFloat(0, 90, 5)}, ${getRandomFloat(0, 90, 5)}`,
      price: getRandomInteger(1, 9999),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: FEATURES.slice(0, getRandomInteger(1, FEATURES.length - 1)),
      description: 'Описание помещения.',
      photos: new Array(getRandomInteger(1, 8)).fill(null).map(() => getRandomArrayElement(PHOTOS)),
    },
    location: {
      x: getRandomFloat(35.65000, 35.70000, 5),
      y: getRandomFloat(139.70000, 139.80000, 5),
    },
  }
};

const ads = new Array(ADS_COUNT).fill(null).map(createAd);

export default ads;
