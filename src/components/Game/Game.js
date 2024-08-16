import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import * as CONSTANTS from '../../constants';

import GuessBox from '../GuessBox';
import GuessList from '../GuessList';
import GameGrid from '../GameGrid';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState();

  function checkAnswer(guess) {

    const newGuessList = [...previousGuesses, guess];

    setPreviousGuesses(newGuessList);

    // Max guesses?
    newGuessList.length == CONSTANTS.NUM_OF_GUESSES_ALLOWED ? setGameState("sad") : null

    // Win?
    guess === answer ? setGameState("happy") : null


  }

  return <>
    <GameGrid previousGuesses={previousGuesses} answer={answer}></GameGrid>
    <GuessBox gameState={gameState} checkAnswer={checkAnswer}></GuessBox>
    <Banner gameState={gameState} guesses={previousGuesses.length} answer={answer}></Banner>
    <GuessList previousGuesses={previousGuesses}></GuessList >
  </>
}

export default Game

