import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  field1: 2,
  field2: 0,
};
export const counterSlice = createSlice({
  name: 'counter', //?It is only for debug purpose
  initialState,
  reducers: {
    increment: state => {
      state.field1 += 1;
      state.field2 += 1;
    },
    decrement: state => {
      state.field1 -= 1;
      state.field2 -= 1;
    },
    incrementByAmount: (state, action) => {
      state.field1 += action.payload;
      state.field2 += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.field1 -= action.payload;
      state.field2 -= action.payload;
    },
    // reset: () => initialState, // Return a new serializable object
    reset: (state, action) => {
      state.field1 = 0;
      state.field2 = 0;
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
