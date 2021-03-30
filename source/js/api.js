import {showErrorMessage, showSuccessMessage} from './message.js';

const ADS_COUNT = 10;

const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      onError('Не удалось загрузить похожие объявления');
    })
    .then((ads) => {
      const slicedAds = ads.slice(0, ADS_COUNT);
      onSuccess(slicedAds);
    })
    .catch(() => {
      onError('Не удалось загрузить похожие объявления');
    })
};

const sendData = (onSuccess, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
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
