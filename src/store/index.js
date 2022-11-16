import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import burgerReducer from './burgerSlice';
import ingredientDetailsReducer from './ingredientDetailsSlice';
import orderReducer from './orderSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
    auth: authSlice,
  },
});
