const fetch = require('node-fetch');

module.exports = {
  getTickers: () => fetch('https://blockchain.info/ticker')
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      return null;
    }),

  currencyToBTC: (ticker, value) => fetch(`https://blockchain.info/tobtc?currency=${ticker}&value=${value}`)
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      return null;
    }),
}
