import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import burgerReducer from './burgerSlice';
import ingredientDetailsReducer from './ingredientDetailsSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    ingredientDetails: ingredientDetailsReducer,
  },
});
