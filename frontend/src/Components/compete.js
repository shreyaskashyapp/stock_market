import React, { useState, useEffect } from 'react';
import Bot from './bot'
export default function Compete() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      // setTimer(60);
    //   {!timer && (<div className="result">
    //   <h1>STATUS</h1>
    // </div>)}
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`
  };

  return (
    <div>
      <div className="compete">
        <div className="player">
          <div className="graph">
            ticker
      </div>

          <div className="player-footer">
            <div className="controls">
              buy/sell
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
            <Bot />
          </div>
        </div>
      </div>
      

    </div>

  );
}