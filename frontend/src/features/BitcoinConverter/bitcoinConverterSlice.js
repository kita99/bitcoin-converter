import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: '',
  result: 0,
  updateInterval: 0,
  value: 0,
};

export const bitcoinConverterSlice = createSlice({
  name: 'bitcoinConverter',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
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
  setCurrency,
  setResult,
  setUpdateInterval,
  setValue
} = bitcoinConverterSlice.actions;

export const selectCurrency = (state) => state.bitcoinConverter.currency;
export const selectResult = (state) => state.bitcoinConverter.result;
export const selectUpdateInterval = (state) => state.bitcoinConverter.updateInterval;
export const selectValue = (state) => state.bitcoinConverter.value;

export default bitcoinConverterSlice.reducer;
