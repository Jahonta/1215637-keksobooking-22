const ADS_COUNT = 10;
let onSendDataSuccess = null;
let onSendDataError = null;
let onGetDataSuccess = null;
let onGetDataError = null;

const setOnSendDataSuccess = (cb) => {
  onSendDataSuccess = cb;
};

const setOnSendDataError = (cb) => {
  onSendDataError = cb;
};

const setOnGetDataSuccess = (cb) => {
  onGetDataSuccess = cb;
};

const setOnGetDataError = (cb) => {
  onGetDataError = cb;
};

const getData = () => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Не удалось загрузить похожие объявления');
    })
    .then((ads) => {
      const slicedAds = ads.slice(0, ADS_COUNT);
      onGetDataSuccess(slicedAds);
    })
    .catch((error) => {
      onGetDataError(error);
    });
};

const sendData = (body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSendDataSuccess();
    } else {
      throw new Error('Не удалось опубликовать объявление');
    }
  }).catch((error) => {
    onSendDataError(error);
  });
};

export {getData, sendData, setOnSendDataSuccess, setOnSendDataError, setOnGetDataSuccess, setOnGetDataError};
