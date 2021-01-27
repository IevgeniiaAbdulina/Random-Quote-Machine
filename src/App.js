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

    this.getQuote = this.getQuote.bind(this);
    this.getRandomQuoteIndex = this.getRandomQuoteIndex.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getRandomQuoteIndex(value) {
    return Math.floor(Math.random() * value);
  }

  getQuote() {
    const urlQuotes = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(urlQuotes)
      .then(response => response.json())
      .then(data => data.quotes[this.getRandomQuoteIndex(data.quotes.length)])
      .then(data => {
        this.setState({
          quoteItem: data
        })
      })
      .catch(err => console.log("Can't get quotes: ", err));
  }

  render() {
    return (
      <div className="wrapper">
        <div id="quote-box" className="quote">
          <div className="quote-text-box">
            <img src={quoteIc} alt="quote icon" />
            <h1 id="text" className="quote-text">{this.state.quoteItem.quote}</h1>
          </div>
          <p id="author" className="quote-author">- {this.state.quoteItem.author}</p>
          <div className="buttons">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
              <img src={twitterIc} alt="twitter icon" />
            </a>
            <button id="new-quote" className="button" onClick={this.getQuote}>New quote</button>
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
