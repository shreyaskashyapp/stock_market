import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());

let latestData = null;

async function fetchData() {
  try {
    const response = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/AAPL?symbol=AAPL&period1=1634841000&period2=1660501800&useYfid=true&interval=1d&includePrePost=true&events=div%7Csplit%7Cearn&lang=en-US&region=US&crumb=m%2FlQLK.F88U&corsDomain=finance.yahoo.com");
    const data = await response.json();
    latestData = data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch data initially and every 5 minutes thereafter
setInterval(fetchData, 5 * 1000);

app.get('/', (req, res) => {
  res.json(latestData);
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});