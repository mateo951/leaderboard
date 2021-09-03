const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createGame = async () => fetch(apiURL, {
  method: 'POST',
  body: JSON.stringify({
    name: 'The Legend of Zelda: Ocarina of Time',
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json());

export default createGame;
