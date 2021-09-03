import './style.css';
import setData from './modules/setData.js';
import utilities from './modules/utilities.js';
import retrieveData from './modules/retrieveData.js';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XGNkazNB33clDVzvSoIG/scores';

document.querySelector('#submit').addEventListener('click', () => {
  const values = document.querySelector('.highscoreInput');
  if (utilities.hasValue(values[0].value) && utilities.hasValue(values[1].value)) {
    setData(values[0].value, values[1].value, apiURL);
    values.reset();
  }
});

document.querySelector('#refresh').addEventListener('click', () => {
  retrieveData(apiURL);
});

window.addEventListener('DOMContentLoaded', () => {
  retrieveData(apiURL);
});

document.querySelector('.highscoreInput').querySelector('input[name="score"]').oninput = () => {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};