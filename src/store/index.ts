import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Импорт reducers
import ingredientsReducer from './slices/ingredientsSlice';
import burgerReducer from './slices/burgerSlice';
import ingredientDetailsReducer from './slices/ingredientDetailsSlice';
import OrderDetailsReducer from './slices/orderDetailsSlice';
import orderReducer from './slices/orderSlice';
import authReducer from './slices/authSlice';
import wsReducer from './slices/wsSlice';

//Импорт middlewares
import wsMiddleware from './middleware/wsMiddleware';

import { wsSlice } from './slices/wsSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: OrderDetailsReducer,
  order: orderReducer,
  auth: authReducer,
  ws: wsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['orderDetails', 'ingredientDetails', 'ingredients', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(wsMiddleware(wsSlice.actions)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
