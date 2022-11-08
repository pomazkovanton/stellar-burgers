import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie } from '../utils/utils';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../utils/constans';

export const register = createAsyncThunk(
  'user/register',
  async function (registerData, { rejectWithValue }) {
    try {
      const { data } = await getRegisterData(registerData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuth: false,
    registerStatus: null,
    registerError: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.registerStatus = lOADING_DATA;
      state.registerError = null;
    },
    [register.fulfilled]: (state, action) => {
      state.registerStatus = RESOLVED_DATA;
      state.user = action.payload.user;
      state.token = action.payload.accessToken.split('Bearer ')[1];
      state.isAuth = true;
      setCookie('token', action.payload.refreshToken);
    },
    [register.rejected]: (state, action) => {
      state.registerStatus = REJECTED_DATA;
      state.registerError = action.payload;
    },
  },
});

// export const { removeOrder } = orderSlice.actions;
export default authSlice.reducer;
