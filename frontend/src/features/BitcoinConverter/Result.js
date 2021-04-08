import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCurrency,
  selectResult,
  selectValue,
} from './bitcoinConverterSlice';

const BitcoinConverterResult = () => {
  const currency = useSelector(selectCurrency);
  const result = useSelector(selectResult);
  const value = useSelector(selectValue);

  return (
    <div className="row">
      <div className="col">
        <h5>The amount of bitcoins for { currency } { value } </h5>
      </div>
      <div className="col">
        <h1>{ result }</h1>
      </div>
    </div>
  );
};

export default BitcoinConverterResult;
