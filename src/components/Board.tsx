import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Store } from "../store";
import { PlayerInfo } from "./PlayerInfo";
import { CardsGrid } from "./CardsGrid";
import { Message } from "./Message";

@inject("store")
@observer
export class Board extends Component<{ store?: Store }, {}> {
  render() {
    const { players, cards } = this.props.store;

    return (
      <div className="board">
        <PlayerInfo player={players[0]} />
        <CardsGrid cards={cards} />
        <PlayerInfo player={players[1]} />
        <Message />
      </div>
    );
  }
}
