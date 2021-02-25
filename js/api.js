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

export {getData};
