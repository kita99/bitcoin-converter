import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrency,
  selectUpdateInterval,
  selectValue,
  setCurrency,
  setUpdateInterval,
  setValue,
} from './bitcoinConverterSlice';

const BitcoinConverterInputs = () => {
  const dispatch = useDispatch();

  const currency = useSelector(selectCurrency);
  const updateInterval = useSelector(selectUpdateInterval);
  const value = useSelector(selectValue);

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
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
  );
};

export default BitcoinConverterInputs;
