import { configureStore } from '@reduxjs/toolkit';

//Импорт reducers
import ingredientsReducer from './slices/ingredientsSlice';
import burgerReducer from './slices/burgerSlice';
import ingredientDetailsReducer from './slices/ingredientDetailsSlice';
import orderReducer from './slices/orderSlice';
import authReducer from './slices/authSlice';
import wsReducer from './slices/wsSlice';

//Импорт middlewares
import wsMiddleware from './middleware/wsMiddleware';

import { wsSlice } from './slices/wsSlice';

const rootReducer = {
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  auth: authReducer,
  ws: wsReducer,
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wsMiddleware(wsSlice.actions)),
});
