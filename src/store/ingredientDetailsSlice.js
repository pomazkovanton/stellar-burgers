import { createSlice } from '@reduxjs/toolkit';

const ingredientDetailsSlice = createSlice({
  name: 'ingredientDetails',
  initialState: {
    ingredientDetails: {},
    isShowDetails: false,
  },
  reducers: {
    addDetails(state, action) {
      state.ingredientDetails = action.payload;
      state.isShowDetails = true;
    },
    removeDetails(state) {
      state.isShowDetails = false;
      state.ingredientDetails = {};
    },
  },
});

export const { addDetails, removeDetails } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
