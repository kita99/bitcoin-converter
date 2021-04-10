const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});

const blockchain = require('./blockchain');


let activePeriodicTasks = {};
const periodicBitcoinAmountUpdate = async (socket, options) =>
  setInterval(async () => {
    const bitcoinAmount = await blockchain.currencyToBTC(options.currency, options.value)
    socket.emit('bitcoinAmountUpdate', { bitcoinAmount })
  }, 1000 * Number(options.updateInterval));

io.on('connection', async (socket) => {
  socket.on('getTickerList', async () => {
    const tickers = await blockchain.getTickers();
    socket.emit('tickerListUpdate', { tickers });
  });

  socket.on('configure', async (options) => {
    if (socket.id in activePeriodicTasks) {
      clearInterval(activePeriodicTasks[socket.id]);
    }

    activePeriodicTasks[socket.id] = await periodicBitcoinAmountUpdate(socket, options);
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
