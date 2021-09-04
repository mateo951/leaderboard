import Utilities from './utilities.js';

const displayData = (data) => {
  const listItems = document.querySelector('.list-group');
  const { result } = data;
  Utilities.resetElement(listItems);
  result.forEach((item) => {
    listItems.innerHTML += `<li class="list-group-item">${item.user}: <span class="floatRight badge badge-primary badge-pill">${item.score}</span></li>`;
  });
};

export default displayData;