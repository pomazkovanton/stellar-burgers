import HomePage from '../pages/HomePage/HomePage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import IngredientPage from '../pages/IngredientPage/IngredientPage';

import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  INGREDIENT_ROUTE,
  LOGIN_ROUTE,
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
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    page: ProfilePage,
  },
];

export const commonRoutes = [
  {
    path: HOME_ROUTE,
    page: HomePage,
  },
  {
    path: INGREDIENT_ROUTE,
    page: IngredientPage,
  },
];
