import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrder } from '../utils/burger-api';

export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async function (idIngredients, { rejectWithValue }) {
    try {
      const { data } = await getOrder(idIngredients);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    orderStatus: '',
    orderError: null,
    isShowOrder: false,
  },
  reducers: {
    removeOrder(state) {
      state.isShowOrder = false;
      state.order = null;
    },
  },
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.orderStatus = 'loading';
      state.orderError = null;
    },
    [fetchOrder.fulfilled]: (state, action) => {
      state.orderStatus = 'resolved';
      state.order = action.payload.order.number;
      state.isShowOrder = true;
    },
    [fetchOrder.rejected]: (state, action) => {
      state.orderStatus = 'rejected';
      state.orderError = action.payload;
    },
  },
});

export const { removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
