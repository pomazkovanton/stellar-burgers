import { createSlice } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
  name: 'burger',
  initialState: {
    burger: [],
  },
  reducers: {
    addToBurger(state, action) {
      if (action.payload.item.type === 'bun') {
        state.burger = state.burger.filter((el) => el.item.type !== 'bun');
      }
      state.burger.push({ id: action.payload.id, item: action.payload.item });
    },
    reorderInBurger(state, action) {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.burger.splice(startIndex, 1);
      state.burger.splice(endIndex, 0, removed);
    },
    removeFromBurger(state, action) {
      state.burger = state.burger.filter((ingr) => ingr.id !== action.payload);
    },
    removeAllBurger(state) {
      state.burger = [];
    },
  },
});

export const { addToBurger, reorderInBurger, removeFromBurger, removeAllBurger } =
  ingredientsSlice.actions;
export default ingredientsSlice.reducer;
