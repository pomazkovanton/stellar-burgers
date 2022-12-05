import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder } from '../../utils/types/order';

type TOrderDetailsState = {
  orderDetails: TOrder | null;
  isShowDetails: boolean;
};

const initialState: TOrderDetailsState = {
  orderDetails: null,
  isShowDetails: false,
};

const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    addDetails(state, action: PayloadAction<TOrder>) {
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
