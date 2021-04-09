const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

app.get('/', async (_, res) => {
  res.json({ status: 'ok' });
});

io.on('connection', async (socket) => {
  socket.on('getTickerList', async () => {
    io.emit('tickerListUpdate', { tickers: [] });
  });

  socket.on('configure', async data => {
    console.log(data);
    io.emit('bitcoinAmountUpdate', { bitcoinAmount: 0.123 });
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
