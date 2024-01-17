import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  value1: 0,
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
      state.value1 += 1;
    },
    decrement: state => {
      state.value -= 1;
      state.value1 -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.value1 += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
      state.value1 -= action.payload;
    },
    // reset: () => initialState, // Return a new serializable object
    reset: (state, action) => {
      state.value = 0;
      state.value1 = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
