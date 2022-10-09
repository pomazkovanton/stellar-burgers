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
    reorderInBurger(state, action) {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.burger.splice(startIndex, 1);
      state.burger.splice(endIndex, 0, removed);
    },
  },
});

export const { addToBurger, reorderInBurger } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
