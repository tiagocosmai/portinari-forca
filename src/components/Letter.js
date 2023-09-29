import React from 'react';

const Letter = ({ letter, guessed }) => {
  return (
    <span className={`letter ${guessed ? 'guessed' : ''}`}>
      {guessed ? letter : '_'}
    </span>
  );
};

export default Letter;