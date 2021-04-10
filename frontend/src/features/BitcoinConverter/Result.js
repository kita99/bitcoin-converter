import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectCurrency,
  selectResult,
  selectValue,
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

const BitcoinConverterResult = () => {
  const currency = useSelector(selectCurrency);
  const result = useSelector(selectResult);
  const value = useSelector(selectValue);

  return (
    <Container>
      <Column style={ { marginTop: '5%' } }>
        <ResultLabel>The amount of bitcoins for { currency } { value } </ResultLabel>
      </Column>
      <Column>
        <h1>{ result }</h1>
      </Column>
    </Container>
  );
};

export default BitcoinConverterResult;
