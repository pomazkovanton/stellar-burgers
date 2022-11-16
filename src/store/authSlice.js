import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from '../utils/utils';
import {
  getRegisterData,
  getAuthData,
  getNewToken,
  getLogoutData,
  getUserData,
  refreshUserData,
} from '../utils/auth-api';
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

export const logout = createAsyncThunk('user/logout', async function (token, { rejectWithValue }) {
  try {
    const { data } = await getLogoutData(token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  'user/getUser',
  async function (token, { rejectWithValue }) {
    try {
      const { data } = await getUserData(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async function (updateUserData, { rejectWithValue }) {
    try {
      const { data } = await refreshUserData(updateUserData);
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

    logoutStatus: null,
    logoutError: null,

    getDataUserStatus: null,
    getDataUserError: null,

    updateDataUserStatus: null,
    updateDataUserError: null,
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
    [logout.pending]: (state) => {
      state.logoutStatus = lOADING_DATA;
      state.logoutError = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.logoutStatus = RESOLVED_DATA;
      state.isAuth = false;
      state.token = null;
      state.user = null;
      deleteCookie('token');
    },
    [logout.rejected]: (state, action) => {
      state.logoutStatus = REJECTED_DATA;
      state.logoutError = action.payload;
    },
    [getUser.pending]: (state) => {
      state.getDataUserStatus = lOADING_DATA;
      state.getDataUserError = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.getDataUserStatus = RESOLVED_DATA;
      state.user = action.payload.user;
    },
    [getUser.rejected]: (state, action) => {
      state.getDataUserStatus = REJECTED_DATA;
      state.getDataUserError = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.updateDataUserStatus = lOADING_DATA;
      state.updateDataUserError = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.updateDataUserStatus = RESOLVED_DATA;
      state.user = action.payload.user;
    },
    [updateUser.rejected]: (state, action) => {
      state.updateDataUserStatus = REJECTED_DATA;
      state.updateDataUserError = action.payload;
    },
  },
});

// export const { removeOrder } = orderSlice.actions;
export default authSlice.reducer;
