const url = `http://localhost:4000/api/v1/games`;

class GameModel {
  static all() {
    return fetch(url)
      .then((res) => res.json(res))
      .catch((err) => {
        console.log('Error fetching data in GameModel.all', err);
        return { game: [] };
      });
  }

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in GameModel.getOne', err);
        return { game: {} };
      });
  }

  static create(newGame) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in GameModel.create', err);
        return { message: 'Error fetching data in GameModel.create' };
      });
  }
}

export default GameModel
