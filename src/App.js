import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <div className={Math.floor(Math.random() * 2) >= 1 ? "App" : "App2"}>
        <Hangman />
      </div>
    );
  }
}

export default App;
