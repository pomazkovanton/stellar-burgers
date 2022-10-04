import { createSlice } from '@reduxjs/toolkit';

const ingredientDetailsSlice = createSlice({
  name: 'ingredientDetails',
  initialState: {
    ingredientDetails: {},
    modalActive: false,
  },
  reducers: {
    addDetails(state, action) {
      state.ingredientDetails = action.payload;
      state.modalActive = true;
    },
    removeDetails(state) {
      state.modalActive = false;
      state.ingredientDetails = {};
    },
  },
});

export const { addDetails, removeDetails } = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
