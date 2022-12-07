import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from '../../utils/utils';
import {
  getRegisterData,
  getAuthData,
  getNewToken,
  getLogoutData,
  getUserData,
  refreshUserData,
} from '../../utils/auth-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import { TRequestStatus } from '../../utils/types/common';
import {
  TUser,
  TRegisterData,
  TToken,
  TReject,
  TAuthorization,
  TUpdateUserData,
} from '../../utils/types/main';
import {
  TAuthResponse,
  TUserAuthResponse,
  TLogoutResponse,
  TUserDataResponse,
} from '../../utils/types/responses';

type TAuthState = {
  user: TUser | null;
  token: string | null;
  isAuth: boolean;
  responseStatus: TRequestStatus | null;
  responseError: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  isAuth: false,
  responseStatus: null,
  responseError: null,
};

export const register = createAsyncThunk<TUserAuthResponse, TRegisterData, TReject>(
  '@@auth/register',
  async function (registerData, { rejectWithValue }) {
    try {
      const { data } = await getRegisterData(registerData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk<TUserAuthResponse, TUser, TReject>(
  '@@auth/login',
  async function (authData, { rejectWithValue }) {
    try {
      const { data } = await getAuthData(authData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateToken = createAsyncThunk<TAuthResponse, TToken, TReject>(
  '@@auth/updateToken',
  async function (token, { rejectWithValue }) {
    try {
      const { data } = await getNewToken(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk<TLogoutResponse, TToken, TReject>(
  '@@auth/logout',
  async function (token, { rejectWithValue }) {
    try {
      const { data } = await getLogoutData(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUser = createAsyncThunk<TUserDataResponse, TAuthorization, TReject>(
  '@@auth/getUser',
  async function (token, { rejectWithValue }) {
    try {
      const { data } = await getUserData(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk<TUserDataResponse, TUpdateUserData, TReject>(
  '@@auth/updateUser',
  async function (updateUserData, { rejectWithValue }) {
    try {
      const { data } = await refreshUserData(updateUserData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setAuth = (state: TAuthState, accessToken: string, refreshToken: string): void => {
  state.token = accessToken.split('Bearer ')[1];
  state.isAuth = true;
  setCookie('token', refreshToken);
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        state.responseStatus = RESOLVED_DATA;
        state.user = user;
        setAuth(state, accessToken, refreshToken);
      })
      .addCase(login.fulfilled, (state, action) => {
        const { user, accessToken, refreshToken } = action.payload;
        state.responseStatus = RESOLVED_DATA;
        state.user = user;
        setAuth(state, accessToken, refreshToken);
      })
      .addCase(updateToken.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        state.responseStatus = RESOLVED_DATA;
        setAuth(state, accessToken, refreshToken);
      })
      .addCase(logout.fulfilled, (state) => {
        state.responseStatus = RESOLVED_DATA;
        state.isAuth = false;
        state.token = null;
        state.user = null;
        deleteCookie('token');
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.responseStatus = RESOLVED_DATA;
        state.user = action.payload.user;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.responseStatus = RESOLVED_DATA;
        state.user = action.payload.user;
      })
      .addMatcher(isLoading, (state) => {
        state.responseStatus = lOADING_DATA;
        state.responseError = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.responseStatus = REJECTED_DATA;
        state.responseError = action.payload;
        state.isAuth = false;
      });
  },
});

const isError = (action: AnyAction) => action.type.endsWith('rejected');
const isLoading = (action: AnyAction) => action.type.endsWith('pending');

export default authSlice.reducer;
