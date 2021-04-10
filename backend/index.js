const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

const blockchain = require('./blockchain');

let activePeriodicTasks = {};
const periodicBitcoinAmountUpdate = (socket, options) =>
  setInterval(async () => {
    const bitcoinAmount = await blockchain.currencyToBTC(options.currency, options.value)
    socket.emit('bitcoinAmountUpdate', { bitcoinAmount })
  }, 1000 * Number(options.updateInterval));

io.on('connection', async (socket) => {
  socket.on('getTickerList', async () => {
    const tickers = await blockchain.getTickers();
    socket.emit('tickerListUpdate', { tickers: Object.keys(tickers) });
  });

  socket.on('configure', async (options) => {
    const bitcoinAmount = await blockchain.currencyToBTC(options.currency, options.value)
    socket.emit('bitcoinAmountUpdate', { bitcoinAmount })

    if (!(socket.id in activePeriodicTasks)) {
      activePeriodicTasks[socket.id] = periodicBitcoinAmountUpdate(socket, options);
    } else {
      clearInterval(activePeriodicTasks[socket.id]);
      activePeriodicTasks[socket.id] = periodicBitcoinAmountUpdate(socket, options);
    }
  });

  socket.on('disconnect', () => {
    clearInterval(activePeriodicTasks[socket.id]);
    delete activePeriodicTasks[socket.id];
  });
});

app.get('/', async (_, res) => {
  res.json({ status: 'ok' });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
