import React, { Component } from "react";
import { IPlayer } from "../store";
import { observer } from "mobx-react";

@observer
export class PlayerInfo extends Component<{ player: IPlayer }, {}> {
  render() {
    const { player } = this.props;

    return (
      <div>
        <h3>Player {player.id}</h3>
        <span>{player.points} points</span>
      </div>
    );
  }
}
