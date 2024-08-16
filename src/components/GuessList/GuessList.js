import React from 'react';

function GuessList({ previousGuesses }) {
  return <div className="guess-results">
    {previousGuesses.map(guess => <li className="guess" key={crypto.randomUUID()}>{guess}</li>)}
  </div>
}

export default GuessList;
