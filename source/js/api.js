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
      onGetDataError('Не удалось загрузить похожие объявления');
    })
    .then((ads) => {
      const slicedAds = ads.slice(0, ADS_COUNT);
      onGetDataSuccess(slicedAds);
    })
    .catch(() => {
      onGetDataError('Не удалось загрузить похожие объявления');
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
        onSendDataSuccess();
      } else {
        onSendDataError();
      }
    })
    .catch(() => {
      onSendDataError();
    });
};

export {getData, sendData, setOnSendDataSuccess, setOnSendDataError, setOnGetDataSuccess, setOnGetDataError};
