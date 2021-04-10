import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectCurrency,
  selectResult,
  selectValue,
  selectUpdateCounter,
} from './bitcoinConverterSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Column = styled.div`
  width: 50%;
  text-align: center;
`;

const ResultLabel = styled.div`
  font-weight: 300;
  font-size: 18px;
`;

const Result = styled.div`
  font-size: 32px;
  padding: 12px;
  font-weight: 500;
  opacity: 1;
  -webkit-transition: opacity .15s ease-in-out;
  -moz-transition: opacity .15s ease-in-out;
  -ms-transition: opacity .15s ease-in-out;
  -o-transition: opacity .15s ease-in-out;
  transition: opacity .15s ease-in-out;

  &.processing {
    opacity: 0.2;
  }
`;

const BitcoinConverterResult = () => {
  const currency = useSelector(selectCurrency);
  const result = useSelector(selectResult);
  const value = useSelector(selectValue);
  const updateCounter = useSelector(selectUpdateCounter);

  const [ processing, setProcessing ] = useState(false);

  useEffect(() => {
    if (!updateCounter) {
      return;
    }

    setProcessing(true);
    setTimeout(() => setProcessing(false), 1000)
  }, [ updateCounter ]);

  return (
    <Container>
      <Column style={ { marginTop: '10%' } }>
        <ResultLabel>The amount of bitcoins for { currency } { value } </ResultLabel>
      </Column>
      <Column>
        <Result className={ processing ? 'processing' : '' }>{ result }</Result>
      </Column>
    </Container>
  );
};

export default BitcoinConverterResult;
