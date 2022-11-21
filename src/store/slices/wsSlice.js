import { createSlice } from '@reduxjs/toolkit';

export const wsSlice = createSlice({
  name: 'ws',
  initialState: {
    isConnected: false,
    data: null,
    error: null,
  },
  reducers: {
    message(state, { payload }) {
      if (!payload.success) return;
      state.data = payload;
      state.isConnected = true;
    },
    close(state) {
      state.isConnected = false;
      state.data = null;
    },
    error(state) {
      state.isConnected = false;
      state.data = null;
      state.error = true;
    },
    open(state) {
      state.isConnected = true;
    },
    connect(_, payload) {},
    disconnect() {},
  },
});

export const { message, close, error, open, connect, disconnect } = wsSlice.actions;
export default wsSlice.reducer;
