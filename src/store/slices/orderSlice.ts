import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrder } from '../../utils/burger-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import { TRequestStatus } from '../../utils/types/common';
import { TOrderResponse } from '../../utils/types/responses';

type TOrderState = {
  order: number | null;
  orderStatus: TRequestStatus | null;
  orderError: string | null;
  isShowOrder: boolean;
};

const initialState: TOrderState = {
  order: null,
  orderStatus: null,
  orderError: null,
  isShowOrder: false,
};

export const fetchOrder = createAsyncThunk<TOrderResponse, string[], { rejectValue: string }>(
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
  initialState,
  reducers: {
    removeOrder(state) {
      state.isShowOrder = false;
      state.order = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.orderStatus = lOADING_DATA;
        state.orderError = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.orderStatus = RESOLVED_DATA;
        state.order = action.payload.order.number;
        state.isShowOrder = true;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.orderStatus = REJECTED_DATA;
        if (action.payload !== undefined) state.orderError = action.payload;
      });
  },
});

export const { removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
