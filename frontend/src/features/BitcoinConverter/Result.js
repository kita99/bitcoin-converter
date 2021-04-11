import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import Subheading from '../../common/components/Subheading';
import AnimatedHeading from '../../common/components/AnimatedHeading';

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
        <Subheading>The amount of bitcoins for { currency } { value } </Subheading>
      </Column>
      <Column>
        <AnimatedHeading className={ processing ? 'lighter' : '' }>{ result }</AnimatedHeading>
      </Column>
    </Container>
  );
};

export default BitcoinConverterResult;
