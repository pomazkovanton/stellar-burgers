import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/burger-api';
import { lOADING_DATA, REJECTED_DATA, RESOLVED_DATA } from '../../utils/constans';
import { TIngredient, TReject } from '../../utils/types/main';
import { TRequestStatus } from '../../utils/types/common';
import { TIngredientsResponse } from '../../utils/types/responses';

type TIngredientsState = {
  ingredients: TIngredient[];
  ingredientsStatus: TRequestStatus | null;
  ingredientsError: string | null;
};

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsStatus: null,
  ingredientsError: null,
};

export const fetchIngredients = createAsyncThunk<TIngredientsResponse, undefined, TReject>(
  'ingredients/fetchIngredients',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await getIngredients();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.ingredientsStatus = lOADING_DATA;
        state.ingredientsError = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredientsStatus = RESOLVED_DATA;
        state.ingredients = action.payload.data;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.ingredientsStatus = REJECTED_DATA;
        if (action.payload !== undefined) state.ingredientsError = action.payload;
      });
  },
});

export default ingredientsSlice.reducer;
