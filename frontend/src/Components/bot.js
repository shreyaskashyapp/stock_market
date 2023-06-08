import React, { useState, useEffect } from 'react';

export default function Bot(props) {
  const [name, setName] = useState('');
  const [action, setAction] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [price, setPrice] = useState(0);
  const [prevPrice, setPrevPrice] = useState(0);

  async function fetchPrice() {
    const res = await fetch('http://localhost:8081');
    const stockData = await res.json();
    const stock = stockData.chart.result[0];
    const currentPrice = stock.meta.regularMarketPrice.toFixed(2);
    setPrice(currentPrice);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    console.log(`Current time is: ${hours}:${minutes}:${seconds}`);
    if (prevPrice === 0) {
      setPrevPrice(currentPrice); 
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      console.log(`Current time is: ${hours}:${minutes}:${seconds}`);
    }
  }

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
    if (props.timerExpired) {
      fetchPrice().then(() => {
        if ((prevPrice > price && action === 'BUY') || (prevPrice < price && action === 'SELL')) {
          console.log('BOT OP');
        } else {
          console.log('L BOT');
        }
        console.log(prevPrice);
        console.log(price);
      });
    }
  }, [props.timerExpired, prevPrice, action, price]);

  function handleOptionChange(event) {
    setName(event.target.value);
    if (event.target.value === 'SENTIMENT') {
      if (sentiment === 'Bullish' || sentiment === 'Somewhat Bullish') {
        setAction('BUY');
      } else {
        setAction('SELL');
      }
      fetchPrice(); 
    }
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