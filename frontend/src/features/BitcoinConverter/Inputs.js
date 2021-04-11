import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import useSocket from '../../common/hooks/useSocket';

import Input from '../../common/components/Input';
import InputLabel from '../../common/components/InputLabel';
import Select from '../../common/components/Select';

import {
  incrementUpdateCounter,
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


const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: calc(100% / 4);
  height: 47px;
`;

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
      dispatch(incrementUpdateCounter());
      dispatch(setResult(data.bitcoinAmount));
    });

    socket.on('tickerListUpdate', data => {
      dispatch(setTickers(data.tickers));
    });
  }, [ socket, dispatch ]);

  return (
      <Container>
        <Column>
          <InputLabel htmlFor="interval">Interval</InputLabel>
          <Input
            id="interval"
            min="5"
            onChange={ e => dispatch(setUpdateInterval(e.target.value)) }
            step="5"
            type="number"
            value={ updateInterval }
          />
        </Column>
        <Column>
          <InputLabel htmlFor="value">Value</InputLabel>
          <Input
            id="value"
            onChange={ e => dispatch(setValue(e.target.value)) }
            type="text"
            value={ value }
          />
        </Column>
        <Column>
          <InputLabel htmlFor="currency">Currency</InputLabel>
          <Select
            id="currency"
            onChange={ e => dispatch(setCurrency(e.target.value)) }
            value={ currency }
          >
            <option value="">Select a currency</option>
            { tickers.map(ticker => (
              <option key={ ticker } value={ ticker }>{ ticker }</option>
            )) }
          </Select>
        </Column>
      </Container>
  );
};

export default BitcoinConverterInputs;
