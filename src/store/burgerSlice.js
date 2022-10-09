import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    burger: [],
  },
  reducers: {
    addToBurger(state, action) {
      if (action.payload.type === 'bun') {
        state.burger = state.burger.filter((el) => el.item.type !== 'bun');
      }
      state.burger.push({ id: uuidv4(), item: action.payload });
    },
  },
});

export const { addToBurger } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
