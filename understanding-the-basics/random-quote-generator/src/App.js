import { useState } from 'react';
import './App.css';
import Quote from './components/Quote';

function App() {
  const [quote, setQuote] = useState('');

  window.onload = function() {
    getQuote();
  };
  
  let getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var randomIndex = Math.floor(Math.random() * data.length);

      var randomQuote = data[randomIndex];
  
      setQuote(randomQuote);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Random Quote Generator
        <Quote quote={quote}/>
        <button className='btn btn-primary'
                onClick={() => getQuote()}
                >Next Quote</button>
      </header>
    </div>
  );
}

export default App;
