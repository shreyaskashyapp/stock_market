import React from 'react';
import '../css/result.css';

export default function Result({ playerResult, botResult }) {
  return (
    <div>
      <div className="results">
        <div className="player-score">
          <div className="info">
            <h2>Player Result</h2>
            <p>Previous Price: {}</p>
            <p>Current Price: {}</p>
          </div>
          <div className="result1">
            <h3>{}</h3>
          </div>
        </div>

        <div className="bot-score">
          <div className="info">
            <h2>Bot Result</h2>
            <p>Previous Price: {}</p>
            <p>Current Price: {}</p>
          </div>
          <div className="result2">
            <h3>{}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
