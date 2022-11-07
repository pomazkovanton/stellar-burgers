import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRegisterData } from '../utils/user-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../utils/constans';

export const register = createAsyncThunk(
  'user/register',
  async function (userData, { rejectWithValue }) {
    try {
      const { data } = await getRegisterData(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    email: null,
    token: null,
    isAuth: false,
    authStatus: '',
    authError: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.authStatus = lOADING_DATA;
      state.authError = null;
    },
    [register.fulfilled]: (state, action) => {
      state.authStatus = RESOLVED_DATA;
      state.email = action.payload.user.email;
      state.name = action.payload.user.name;
      state.token = action.payload.accessToken;
      state.isAuth = true;
    },
    [register.rejected]: (state, action) => {
      state.authStatus = REJECTED_DATA;
      state.authError = action.payload;
    },
  },
});

// export const { removeOrder } = orderSlice.actions;
export default authSlice.reducer;
