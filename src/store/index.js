import { configureStore } from '@reduxjs/toolkit';

//Импорт reducers
import ingredientsReducer from './ingredientsSlice';
import burgerReducer from './burgerSlice';
import ingredientDetailsReducer from './ingredientDetailsSlice';
import orderReducer from './orderSlice';
import authReducer from './authSlice';
import wsReducer from './wsSlice';

//Импорт middlewares
import wsMiddleware from './middleware/wsMiddleware';

import { wsSlice } from './wsSlice';

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
