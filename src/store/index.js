import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import burgerReducer from './burgerSlice';
import ingredientDetailsReducer from './ingredientDetailsSlice';
import orderReducer from './orderSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer,
    user: userSlice,
  },
});
