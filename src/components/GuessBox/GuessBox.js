import React from 'react';

function GuessBox({ checkAnswer, gameState }) {

  const [guess, setGuess] = React.useState("");

  return <form
    onSubmit={(event) => {
      event.preventDefault();
      checkAnswer(guess);
      setGuess("");
    }}
    className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      disabled={gameState}
      type="text"
      id="guess-input"
      value={guess}
      onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
      required={true}
      minLength={5}
      maxLength={5}
    />
  </form>;
}

export default GuessBox;
