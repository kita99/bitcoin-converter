import { configureStore } from '@reduxjs/toolkit';
import bitcoinConverterReducer from '../features/BitcoinConverter/bitcoinConverterSlice';

export const store = configureStore({
  reducer: {
    bitcoinConverter: bitcoinConverterReducer,
  },
});
