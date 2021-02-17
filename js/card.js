const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typesEngToRus = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const createFeatures = (features) => {
  return features.map((feature) => {
    return `<li class="popup__feature popup__feature--${feature}"></li>`
  }).join('');
};

const createPhotos = (photos) => {
  return photos.map((photo) => {
    return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
  }).join('');
};

const createCardElement = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typesEngToRus[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__features').innerHTML = createFeatures(offer.features);
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__photos').innerHTML = createPhotos(offer.photos);

  return cardElement;
};

export default createCardElement;
