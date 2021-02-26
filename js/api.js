import {showErrorMessage, showSuccessMessage} from './message.js';

const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      onError('Не удалось загрузить похожие объявления');
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onError('Не удалось загрузить похожие объявления');
    })
};

const sendData = (body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};
