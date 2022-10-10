import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../utils/burger-api';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await getIngredients();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    ingredientsStatus: '',
    ingredientsError: null,
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.ingredientsStatus = 'loading';
      state.ingredientsError = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.ingredientsStatus = 'resolved';
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.ingredientsStatus = 'rejected';
      state.ingredientsError = action.payload;
    },
  },
});

export default ingredientsSlice.reducer;
