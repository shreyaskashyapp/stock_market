import react from 'react'
import Ticker from './ticker'
import Stock from './stockInfo'
import Sentiment from './sentiment'

export default function Home() {
  return (
    <div>
      <div className="ticker">
        Ticker
      </div>
      <div className="home-footer">
        <div className="stock-info-container">
          <Stock />
        </div>

        <div className="buy-sell">
          <div className="buy">
              BUY
          </div>

          <div className="sell">
              SELL
          </div>
        </div>

        <div className="sentiment">
          <div className="stock-logo">
            logo
          </div>
          <div className="stock-sentiment">
            <Sentiment />
          </div>
        </div>
      </div>

    </div>
  )
}