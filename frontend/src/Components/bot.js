import React, { useState, useEffect } from 'react';

export default function Bot(props) {
  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [price, setPrice] = useState(0);
  const [prevPrice, setPrevPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const url =
        'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=Q9B5DSCXOI33L4CV.';
      const result = await fetch(url);
      const data = await result.json();
      setSentiment(data.feed[0].ticker_sentiment[0].ticker_sentiment_label);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPrice() {
      const res = await fetch('http://localhost:8081');
      const data = await res.json();
      console.log(data);
      const stock = data.chart.result[0];
      setPrice(stock.meta.regularMarketPrice.toFixed(2));
    }

    fetchPrice();
  }, []);

  useEffect(() => {
    if (props.timerExpired) {
      if ((prevPrice > price && action === 'BUY') || (prevPrice < price && action === 'SELL')) {
        console.log('BOT OP');
      } else {
        console.log('L BOT');
      }
      console.log(prevPrice);
      console.log(price);
    }
  }, [prevPrice, price, action, props.timerExpired]);

  useEffect(() => {
    if (props.timerExpired) {
      setPrevPrice(price);
    }
  }, [props.timerExpired, price]);

  function handleOptionChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <div className="bot-container">
        <div>Strategy: {name}</div>
        <div className="options">
          <select name="strategy" id="strategy" onChange={handleOptionChange}>
            <option value="SENTIMENT">SENTIMENT</option>
            <option value="SMA">SMA</option>
          </select>
        </div>
      </div>
    </div>
  );
}