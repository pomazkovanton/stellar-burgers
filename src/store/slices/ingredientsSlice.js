import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/burger-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';

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
      state.ingredientsStatus = lOADING_DATA;
      state.ingredientsError = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.ingredientsStatus = RESOLVED_DATA;
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.ingredientsStatus = REJECTED_DATA;
      state.ingredientsError = action.payload;
    },
  },
});

export default ingredientsSlice.reducer;
