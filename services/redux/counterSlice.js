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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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
    reset: (state, action) => {
      state.value = 0;
      state.value1 = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
