import React from 'react';
import GameModel from '../models/game';
import GameCard from '../components/GameCard';

class GameShow extends React.Component {
  state = {
    game: {}
  }

  componentDidMount() {
    const gameId = this.props.match.params.id;

    GameModel.getOne(gameId)
      .then((data) => {
        console.log('data: ', data);

        this.setState({ game: data.game });
      })
  }
  render() {
    return (
      <div>
        <h1>See One Game</h1>
        <GameCard game={this.state.game} />
      </div>
    )
  }
};

export default GameShow;