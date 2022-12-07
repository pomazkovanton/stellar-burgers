import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBurger } from '../../utils/types/main';

type TIndex = {
  startIndex: number;
  endIndex: number;
};

type TBurgerState = {
  burger: TBurger[];
};

const initialState: TBurgerState = {
  burger: [],
};

const ingredientsSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addToBurger(state, action: PayloadAction<TBurger>) {
      if (action.payload.item.type === 'bun') {
        state.burger = state.burger.filter((el) => el.item.type !== 'bun');
      }
      state.burger.push({ id: action.payload.id, item: action.payload.item });
    },
    reorderInBurger(state, action: PayloadAction<TIndex>) {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.burger.splice(startIndex, 1);
      state.burger.splice(endIndex, 0, removed);
    },
    removeFromBurger(state, action: PayloadAction<number>) {
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
