import { action, observable, computed, reaction } from "mobx";
import * as pics from "./images/cards";

export interface IPlayer {
  id: number;
  isTurn: boolean;
  points: number;
  isWinner: boolean;
}

export interface ICard {
  id: string;
  src: string;
  isRevealed: boolean;
  isMatched: boolean;
  type: string;
}

/* ============================== */

const playersArray: IPlayer[] = [
  { id: 1, isTurn: true, points: 0, isWinner: false },
  { id: 2, isTurn: false, points: 0, isWinner: false }
];

const cardNames: string[] = Object.keys(pics);

/* ============================== */

export class Store {
  @observable players: IPlayer[] = [];
  @observable cards: ICard[] = [];

  constructor() {
    this._initGame();
  }

  @action _initGame = (): void => {
    playersArray.forEach(p => this.players.push(p));

    // @todo: create 2 cards of each `cardNames`, shuffle them, and push into `this.cards` array
    // const card: ICard = {
    //   id: '', // @todo: choose id pattern
    //   type: name,
    //   src: pics[name],
    //   isRevealed: false,
    //   isMatched: false
    // };
  };

  @action revealCard = (cardId: string): void => {
    if (this.revealedCount < 2) {
      this.cards.find(({ id }) => id === cardId).isRevealed = true;
    }
  };

  @action startOver = () => {
    // @todo: implement resetting the game
  };

  @computed get revealedCount(): number {
    return this.cards.filter(({ isRevealed }) => isRevealed).length;
  }

  @computed get winner(): IPlayer {
    return this.players.find(({ isWinner }) => isWinner);
  }

  checkMatch = reaction(
    () => this.revealedCount,
    revealedCount => {
      /*
       * @todo: implement game logic from the point a card is revealed,
       *  you have the number of revealed cards
       * - is there a match?
       * - is it the last pair?
       * - who won?
       */
    }
  );
}

const store = new Store();
export default store;
