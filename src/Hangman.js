import React, { Component } from "react";
import "./Hangman.css";
import { randomChar } from "./words";
import img0 from "./components/images/0.jpg";
import img1 from "./components/images/1.jpg";
import img2 from "./components/images/2.jpg";
import img3 from "./components/images/3.jpg";
import img4 from "./components/images/4.jpg";
import img5 from "./components/images/5.jpg";
import img6 from "./components/images/6.jpg";
import logo from "./logo-portinari-h.png";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    character : randomChar()
  };


  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: this.props.character.name };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: this.props.character.name
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "aãbcçdefghijklmnopqrstuvwxyz".toUpperCase().split("").map(ltr => (
      <button
        className="Hangman-btn"
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const altText = `${this.state.nWrong}/${this.props.maxWrong} palpites`;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateButtons();
    if (isWinner) gameState = "Você Venceu!!!";
    if (gameOver) gameState = "Não foi dessa vez... :(";
    return (
      <div className="Hangman">
        <h1><img src={logo} alt={'Portinari!!'} style={{ height: '100px', width: '100px' }} /></h1><h1> Jogo da Forca </h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p className="Hangman-wrong">Palpites Errados: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="Hangman-word">
          {!gameOver ? `Dica: ${this.props.character.from}` : <img src={this.props.character.image} alt={this.props.character.name} style={{ height: '100px', width: '100px' }} />}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        <button className="Hangman-reset" onClick={this.reset}>
          Recomeçar
        </button>
      </div>
    );
  }
}

export default Hangman;
