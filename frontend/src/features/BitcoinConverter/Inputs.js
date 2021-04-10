import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSocket from '../../common/socketio/useSocket';

import {
  selectCurrency,
  selectTickers,
  selectUpdateInterval,
  selectValue,
  setCurrency,
  setResult,
  setTickers,
  setUpdateInterval,
  setValue,
} from './bitcoinConverterSlice';

const BitcoinConverterInputs = () => {
  const dispatch = useDispatch();
  const socket = useSocket();

  const currency = useSelector(selectCurrency);
  const tickers = useSelector(selectTickers);
  const updateInterval = useSelector(selectUpdateInterval);
  const value = useSelector(selectValue);

  useEffect(() => {
    socket.emit('getTickerList');
  }, [ socket ]);

  useEffect(() => {
    if (!currency || !value) {
      return;
    }

    socket.emit('configure', { currency, updateInterval, value });
  }, [ socket, currency, updateInterval, value ]);

  useEffect(() => {
    socket.on('bitcoinAmountUpdate', data => {
      dispatch(setResult(data.bitcoinAmount));
    });

    socket.on('tickerListUpdate', data => {
      dispatch(setTickers(data.tickers));
    });
  }, [ socket ]);

  return (
      <div className="row">
        <div className="col">
          <input
            onChange={ e => dispatch(setUpdateInterval(e.target.value)) }
            step="5"
            type="number"
            value={ updateInterval }
          />
        </div>
        <div className="col">
          <input
            onChange={ e => dispatch(setValue(e.target.value)) }
            type="text"
            value={ value }
          />
        </div>
        <div className="col">
          <select
            onChange={ e => dispatch(setCurrency(e.target.value)) }
            value={ currency }
          >
            <option value="">Select a currency</option>
            { tickers.map(ticker => (
              <option key={ ticker } value={ ticker }>{ ticker }</option>
            )) }
          </select>
        </div>
      </div>
  );
};

export default BitcoinConverterInputs;
