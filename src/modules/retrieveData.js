import displayData from './displayData.js';

const loader = document.querySelector('#loading');
const displayLoading = () => {
  loader.classList.add('display');
  setTimeout(() => {
    loader.classList.remove('display');
  }, 5000);
};
const hideLoading = () => {
  loader.classList.remove('display');
};

const retrieveData = async (apiURL) => {
  displayLoading();
  await fetch(apiURL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      hideLoading();
      displayData(result);
    });
};

export default retrieveData;