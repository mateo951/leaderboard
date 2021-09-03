import displayData from "./displayData.js";

const retrieveData = async (apiURL) => {
  await fetch(apiURL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => displayData(result));
};

export default retrieveData;