import './style.css';
import setData from './modules/setData.js'
import utilities from './modules/utilities.js';
import retrieveData from './modules/retrieveData';
import createGame from './modules/createNewGame'

const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/y0pvTsTSE6lTFHbTYbj2/scores`

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  let values = document.querySelector('.highscoreInput');
  if(utilities.hasValue(values[0].value) && utilities.hasValue(values[1].value)) {
    setData(values[0].value, values[1].value,apiURL);
    values.reset();
  }
});

document.querySelector('#refresh').addEventListener('click', (e) => {
  retrieveData(apiURL);
});

window.addEventListener('DOMContentLoaded', (event) => {
  retrieveData(apiURL);
});
