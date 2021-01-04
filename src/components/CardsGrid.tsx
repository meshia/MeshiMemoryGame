import React, { Component } from "react";
import { ICard } from "../store";
import { Card } from "./Card";
import { observer } from "mobx-react";

@observer
export class CardsGrid extends Component<{ cards: ICard[] }, {}> {
  render() {
    return (
      <div className="cards-grid">
        {this.props.cards.map(c => (
          <Card key={c.id} card={c} />
        ))}
      </div>
    );
  }
}
