import { createSlice } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    burger: [],
  },
  reducers: {
    addToBurger(state, action) {
      if (action.payload.type === 'bun') {
        state.burger = state.burger.filter((el) => el.type !== 'bun');
      }
      state.burger.push(action.payload);
    },
  },
});

export const { addToBurger } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
