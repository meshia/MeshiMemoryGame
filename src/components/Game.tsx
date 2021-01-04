import React, { Component } from 'react';
import { Store } from '../store';
import { Board } from './Board';

export class Game extends Component<{ store?: Store }, {}> {
    render() {
        return (
            <div>
                <h1>Browzwear Memory Game</h1>
                <Board />
            </div>
        );
    };
};
