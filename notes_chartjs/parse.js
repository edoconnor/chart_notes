const apiKey = 'K35QV2IE1YPRKJI9';
const symbol = 'gs';
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;

async function getData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const timeSeries = data['Time Series (Daily)'];
  const dates = Object.keys(timeSeries);
  const prices = dates.map(date => timeSeries[date]['4. close']);
  const gs_prices = prices.slice(-5);
  const gs_dates = dates.slice(-5);
}
