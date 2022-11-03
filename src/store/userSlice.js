import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRegisterData } from '../utils/user-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../utils/constans';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function (userData, { rejectWithValue }) {
    try {
      const { data } = await getRegisterData(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    name: null,
    accessToken: null,
    refreshToken: null,
    userStatus: '',
    userError: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.userStatus = lOADING_DATA;
      state.userError = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.userStatus = RESOLVED_DATA;
      state.email = action.payload.user.email;
      state.name = action.payload.user.name;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    [registerUser.rejected]: (state, action) => {
      state.userStatus = REJECTED_DATA;
      state.userError = action.payload;
    },
  },
});

// export const { removeOrder } = orderSlice.actions;
export default userSlice.reducer;
