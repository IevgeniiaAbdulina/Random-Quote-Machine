import React from "react";
import "./App.scss";
import quoteIc from "./img/quote-ic.svg";
import twitterIc from "./img/twitter-ic.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteItem: ""
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div id="quote-box" className="quote">
          <div className="quote-text-box">
            <img src={quoteIc} alt="quote icon" />
            <h1 id="text" className="quote-text">{ }</h1>
          </div>
          <p id="author" className="quote-author">- { }</p>
          <div className="buttons">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <img src={twitterIc} alt="twitter icon" />
            </a>
            <button id="new-quote" className="button">New quote</button>
          </div>
        </div>
        <div className="attribution">
          <p>Challenge by <a href="https://github.com/freeCodeCamp/freeCodeCamp" target="_blank" rel="noreferrer">freeCodeCamp</a>.
          Coded by<a href="https://github.com/IevgeniiaAbdulina"> Ievgeniia Abdulina</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
