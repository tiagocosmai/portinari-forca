import React from 'react';

const Hangman = ({ wrongGuesses }) => {
  const maxWrongGuesses = 7;

  const getHangmanImage = () => {
    const imageIndex = wrongGuesses >= maxWrongGuesses ? maxWrongGuesses : wrongGuesses;
    return `/Imagens/${imageIndex}.gif`; // Carregue imagens do boneco da forca
  };

  return (
    <div className="hangman">
      <img src={getHangmanImage()} alt={`Hangman ${wrongGuesses}`} />
    </div>
  );
};

export default Hangman;