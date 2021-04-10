import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'USD',
  result: 0,
  tickers: [],
  updateCounter: 0,
  updateInterval: 5,
  value: 0,
};

export const bitcoinConverterSlice = createSlice({
  name: 'bitcoinConverter',
  initialState,
  reducers: {
    incrementUpdateCounter: (state) => {
      state.updateCounter++;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setTickers: (state, action) => {
      state.tickers = action.payload;
    },
    setUpdateInterval: (state, action) => {
      state.updateInterval = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  incrementUpdateCounter,
  setCurrency,
  setResult,
  setTickers,
  setUpdateInterval,
  setValue
} = bitcoinConverterSlice.actions;

export const selectCurrency = (state) => state.bitcoinConverter.currency;
export const selectResult = (state) => state.bitcoinConverter.result;
export const selectTickers = (state) => state.bitcoinConverter.tickers;
export const selectUpdateCounter = (state) => state.bitcoinConverter.updateCounter;
export const selectUpdateInterval = (state) => state.bitcoinConverter.updateInterval;
export const selectValue = (state) => state.bitcoinConverter.value;

export default bitcoinConverterSlice.reducer;
