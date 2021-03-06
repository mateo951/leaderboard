import retrieveData from './retrieveData.js';

const setData = async (user, score, apiURL) => fetch(apiURL, {
  method: 'POST',
  body: JSON.stringify({ user, score }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(() => {
    retrieveData(apiURL);
  });

export default setData;