import logo from './logo-portinari-h.png';
import React, { useEffect, useState } from 'react';
import Hangman from './components/Hangman'
import Letter from './components/Letter';
import data from './data/characters.json';

import './App.css';

function Logo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Jogo da Forca
      </header>
    </div>
  );
}

const Forca = ({base}) => {

  const [wordToGuess, setWordToGuess] = React.useState('');

  useEffect(() => {
    setWordToGuess(base.name)
  }, [base])

  const [guessedLetters, setGuessedLetters] = useState([]);
  const wrongGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter)).length + 1;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => (
      <Letter key={index} letter={letter} guessed={guessedLetters.includes(letter)} />
    ));
  };

  const Reset = () => {
    return <><button onClick={() => {
      window.location.href = "/"
    }}>RESET</button></>
  }

  return (
    <div className="App">
      <Logo />
      <Hangman wrongGuesses={wrongGuesses} />
      <div className="word">
        Dica: {base.from} {base.name}
      </div>
      <div className="word">
        {renderWord()}
      </div>
      <div className="alphabet">
        {Array.from({ length: 26 }, (_, index) => (
          <button key={index} onClick={() => handleGuess(String.fromCharCode(65 + index))}>
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      <div className="word">
        <Reset />
      </div>
    </div>
  );
}

let randomN = Math.floor(Math.random() * data.length);

const App = () => {

  const [item, setItem] = React.useState(null);
 
  React.useEffect(() => {
    console.log('oi')
    setItem(data[randomN]);
  }, [])

  return item ? <Forca base={item}></Forca> : <>ERRO</>

};

export default App;
