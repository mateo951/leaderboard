const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`

const createGame = async () => {
  return await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'The Legend of Zelda: Ocarina of Time',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default createGame;
