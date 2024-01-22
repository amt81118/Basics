import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  value2: 'persist=====>',
  value3: 'notPesist===>',
};

export const secondSlice = createSlice({
  name: 'second',
  initialState,
  reducers: {
    setValue2: (state, action) => {
      state.value2 = action.payload;
    },
    setValue3: (state, action) => {
      state.value3 = action.payload;
    },
  },
});

export const {setValue2, setValue3} = secondSlice.actions;
export default secondSlice.reducer;
