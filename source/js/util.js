const ALERT_SHOW_TIME = 5000;
const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007,
};

const getRandomInteger = function (min, max) {
  if (min >= max || min < 0) {
    throw new Error('Неправильный ввод getRandomInteger');
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};

const getRandomFloat = function (min, max, fix) {
  if (min >= max || min < 0) {
    throw new Error('Неправильный ввод getRandomFloat');
  }
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(fix);
};

const getRandomArrayElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = 100;
  alert.style.left = 0;
  alert.style.top = 0;
  alert.style.right = 0;
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME );
};

const turnFormOff = (form, fields) => {
  form.classList.add('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = true;
  });
};

const turnFormOn = (form, fields) => {
  form.classList.remove('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = false;
  });
};

export {getRandomInteger, getRandomFloat, getRandomArrayElement, showAlert, turnFormOff, turnFormOn, START_COORDINATE};
