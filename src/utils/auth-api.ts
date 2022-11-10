import { handleRequest } from './utils';
import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL,
  TOKEN_URL,
} from './constans';

//Регистрация пользователя на сервере
export const getRegisterData = (data) => {
  return handleRequest(REGISTER_URL, 'POST', data);
};

//Запрос кода восстановления пароля с сервера
export const getCodeInEmail = (email) => {
  return handleRequest(FORGOT_PASSWORD_URL, 'POST', email);
};

//Запрос на смену пароля
export const getNewPassword = (data) => {
  return handleRequest(RESET_PASSWORD_URL, 'POST', data);
};

//Авторизация пользователя на сервере
export const getAuthData = (data) => {
  return handleRequest(LOGIN_URL, 'POST', data);
};

//Обновление токена
export const getNewToken = (token) => {
  return handleRequest(TOKEN_URL, 'POST', token);
};

//Выход из системы
export const getLogoutData = (token) => {
  return handleRequest(LOGOUT_URL, 'POST', token);
};
