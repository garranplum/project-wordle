import React from 'react';

function Banner({ gameState, guesses, answer }) {

  if (!gameState) return null;

  const banners = {
    happy: <p>
      <strong>Congratulations!</strong> Got it in {" "} <strong>{guesses} guess{guesses > 1 ? "es" : null}</strong>.
    </p>,
    sad: <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  }

  return <div className={`banner ${gameState}`}>
    {banners[gameState]}
  </div>
}

export default Banner;
