import React from 'react';

import { checkGuess } from '../../game-helpers';

function GameGrid({ previousGuesses, answer }) {
  return <div className="guess-results">
    {previousGuesses.map(guess => {
      const checkResult = checkGuess(guess, answer);
      return <p className="guess" key={crypto.randomUUID()}>
        {
          guess.split("").map((letter, index) => {
            return <span key={crypto.randomUUID()} className={`cell ${checkResult[index].status}`}>{letter}</span>
          })}
      </p>
    })}
  </div>;
}

export default GameGrid;
