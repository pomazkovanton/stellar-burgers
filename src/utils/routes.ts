//Импорт страниц
import HomePage from '../pages/HomePage/HomePage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import IngredientPage from '../pages/IngredientPage/IngredientPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import HistoryOrderPage from '../pages/HistoryOrderPage/HistoryOrderPage';

// Импорт модальных окон
import IngredientModal from '../components/BurgerIngredients/IngredientModal/IngredientModal';
import OrderModal from '../components/OrderModal/OrderModal';

import {
  FEED_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  INGREDIENT_ROUTE,
  LOGIN_ROUTE,
  ORDER_ROUTE,
  PROFILE_ORDERS_ROUTE,
  PROFILE_ORDER_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  RESET_PASSWORD_ROUTE,
} from './constans';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    page: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    page: RegisterPage,
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    page: ForgotPasswordPage,
  },
  {
    path: RESET_PASSWORD_ROUTE,
    page: ResetPasswordPage,
  },
  {
    path: HOME_ROUTE,
    page: HomePage,
  },
  {
    path: INGREDIENT_ROUTE,
    page: IngredientPage,
  },
  {
    path: FEED_ROUTE,
    page: FeedPage,
  },
  {
    path: ORDER_ROUTE,
    page: OrderPage,
  },
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    page: ProfilePage,
  },
  {
    path: PROFILE_ORDERS_ROUTE,
    page: HistoryOrderPage,
  },
  {
    path: PROFILE_ORDER_ROUTE,
    page: OrderPage,
  },
];

export const modalRoutes = [
  {
    path: INGREDIENT_ROUTE,
    page: IngredientModal,
  },
  {
    path: ORDER_ROUTE,
    page: OrderModal,
  },
  {
    path: PROFILE_ORDER_ROUTE,
    page: OrderModal,
  },
];
