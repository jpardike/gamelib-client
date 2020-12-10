import React from "react";
import GameModel from "../models/game";
import GameCard from "../components/GameCard";

class GameList extends React.Component {
  state = {
    games: [],
  };

  componentDidMount() {
    // Make API Call
    GameModel.all().then((data) => {
      console.log("data:", data);

      this.setState({ games: data.games });
    });
  }

  renderGames() {
    return this.state.games.map((game) => {
      return <GameCard key={game._id} game={game} />;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderGames()}</ul>
      </div>
    );
  }
}

export default GameList;
