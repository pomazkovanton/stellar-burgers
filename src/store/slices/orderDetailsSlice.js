import { createSlice } from '@reduxjs/toolkit';

const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState: {
    orderDetails: null,
    isShowDetails: false,
  },
  reducers: {
    addDetails(state, action) {
      state.orderDetails = action.payload;
      state.isShowDetails = true;
    },
    removeDetails(state) {
      state.isShowDetails = false;
      state.orderDetails = null;
    },
  },
});

export const { addDetails, removeDetails } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
