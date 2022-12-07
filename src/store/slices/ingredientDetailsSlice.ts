import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient } from '../../utils/types/main';

type TIngredientDetailsState = {
  ingredientDetails: TIngredient | null;
  isShowDetails: boolean;
};

const initialState: TIngredientDetailsState = {
  ingredientDetails: null,
  isShowDetails: false,
};

const ingredientDetailsSlice = createSlice({
  name: 'ingredientDetails',
  initialState,
  reducers: {
    addDetails(state, action: PayloadAction<TIngredient>) {
      state.ingredientDetails = action.payload;
      state.isShowDetails = true;
    },
    removeDetails(state) {
      state.isShowDetails = false;
      state.ingredientDetails = null;
    },
  },
});

export const { addDetails, removeDetails } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
