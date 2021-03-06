export const CoinList = () =>
`
https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false;
`;
  
export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

  export const HistoricalChart = (id, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const TrendingCoins = (currency) =>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=12&page=1&sparkline=false&price_change_percentage=24h`;