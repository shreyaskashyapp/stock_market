import react,{useState,useEffect} from 'react'
import Ticker from './ticker'
import Stock from './stockInfo'
import Sentiment from './sentiment'

export default function Home() {
  const[stock,setStock] =useState("AAPL")

  function handleOptionsChange(event){
    setStock(event.target.value)
  }
  return (
    <div>
      <div className="ticker">
        <Ticker name={stock}/>
      </div>
      <div>
          <select name="" id="" onChange={handleOptionsChange}>
            <option value="AAPL">AAPL</option>
            <option value="META">META</option>
            <option value="AMZN">AMZN</option>
            <option value="GOOGL">GOOGL</option>
            <option value="LICI.NS">LICI</option>
            

          </select>
      </div>
      <div className="home-footer">
        <div className="stock-info-container">
          <Stock name={stock}/>
        </div>

        <div className="buy-sell">
          <div className="buy">
          <button className='buybutt'>BUY</button>
          </div>

          <div className="sell">
          <button className='sellbutt'>SELL</button>
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