import React, { useState, useEffect } from 'react';
import Bot from './bot';
import Ticker from './ticker'

export default function Compete() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="compete">
        <div className="player">
          <div className="graph">
            <Ticker name="AAPL"/>
          </div>

          <div className="player-footer">
           
            <div className="buy-sell2">
          <div className="buy">
          <button className='buybutt'>BUY</button>
          </div>

          <div className="sell">
            <button className='sellbutt'>SELL</button>
              </div>
            </div>
            

            <div className="player-stock-info">
              bought at:
              current price:
            </div>
          </div>
          <div className="timer-container">
            <div className="timer">
              {formatTime(timer)}
            </div>
          </div>
        </div>

        <div className="bot">
          <div className="graph">
            ticker
          </div>
          <div>
            <Bot timerExpired={timer === 0} />
          </div>
        </div>
      </div>
      {!timer && (<div className="result">
        </div>)}
    </div>
  );
}