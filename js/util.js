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

export {getRandomInteger, getRandomFloat, getRandomArrayElement};
