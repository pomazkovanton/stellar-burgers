import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie } from '../utils/utils';
import { getRegisterData, getAuthData, getNewToken } from '../utils/auth-api';
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

export const login = createAsyncThunk('user/login', async function (authData, { rejectWithValue }) {
  try {
    const { data } = await getAuthData(authData);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateToken = createAsyncThunk(
  'user/updateToken',
  async function (token, { rejectWithValue }) {
    try {
      const { data } = await getNewToken(token);
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

    loginStatus: null,
    loginError: null,

    updateTokenStatus: null,
    updateTokenError: null,
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
      state.isAuth = false;
    },
    [login.pending]: (state) => {
      state.loginStatus = lOADING_DATA;
      state.loginError = null;
    },
    [login.fulfilled]: (state, action) => {
      state.loginStatus = RESOLVED_DATA;
      state.user = action.payload.user;
      state.token = action.payload.accessToken.split('Bearer ')[1];
      state.isAuth = true;
      setCookie('token', action.payload.refreshToken);
    },
    [login.rejected]: (state, action) => {
      state.isAuth = false;
      state.loginStatus = REJECTED_DATA;
      state.loginError = action.payload;
    },
    [updateToken.pending]: (state) => {
      state.updateTokenStatus = lOADING_DATA;
      state.updateTokenError = null;
    },
    [updateToken.fulfilled]: (state, action) => {
      state.updateTokenStatus = RESOLVED_DATA;
      state.token = action.payload.accessToken.split('Bearer ')[1];
      state.isAuth = true;
      setCookie('token', action.payload.refreshToken);
    },
    [updateToken.rejected]: (state, action) => {
      state.isAuth = false;
      state.updateTokenStatus = REJECTED_DATA;
      state.updateTokenError = action.payload;
    },
  },
});

// export const { removeOrder } = orderSlice.actions;
export default authSlice.reducer;
