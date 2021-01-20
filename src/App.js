import './App.scss';

function App() {
  return (
      <div id="quote-box" className="quote">
        <h1 id="text" className="quote-text">"Quote text</h1>
        <p id="author" className="quote-author">- Quote author</p>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet quote</a><br />
        <button id="new-quote">New quote button</button>
      </div>
  );
}

export default App;
