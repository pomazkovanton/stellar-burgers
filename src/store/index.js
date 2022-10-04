import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import burgerReducer from './burgerSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burger: burgerReducer,
  },
});
