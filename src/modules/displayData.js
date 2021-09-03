const displayData = (data) => {
  const listItems = document.querySelector('.list-group');
  const { result } = data;

  listItems.innerHTML = '';
  result.forEach((item) => {
    listItems.innerHTML += `<li class="list-group-item">${item.user}: <span class="floatRight badge badge-primary badge-pill">${item.score}</span></li>`;
  });
};

export default displayData;