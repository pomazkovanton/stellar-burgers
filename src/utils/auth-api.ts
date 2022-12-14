import { handleRequest } from './utils';
import {
  FORGOT_PASSWORD_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL,
  TOKEN_URL,
  USER_URL,
} from './constans';
import {
  TRegisterData,
  TForgotData,
  TResetData,
  TUser,
  TToken,
  TAuthorization,
  TUpdateUserData,
} from './types/main';
import {
  TAxiosAuthResponse,
  TAxiosForgotDataResponse,
  TAxiosLogoutResponse,
  TAxiosResetDataResponse,
  TAxiosUserAuthResponse,
  TAxiosUserDataResponse,
} from './types/responses';

//Регистрация пользователя на сервере
export const getRegisterData = (data: TRegisterData) => {
  return handleRequest<TAxiosUserAuthResponse>(REGISTER_URL, 'POST', data);
};

//Запрос кода восстановления пароля с сервера
export const getCodeInEmail = (email: TForgotData) => {
  return handleRequest<TAxiosForgotDataResponse>(FORGOT_PASSWORD_URL, 'POST', email);
};

//Запрос на смену пароля
export const getNewPassword = (data: TResetData) => {
  return handleRequest<TAxiosResetDataResponse>(RESET_PASSWORD_URL, 'POST', data);
};

//Авторизация пользователя на сервере
export const getAuthData = (data: TUser) => {
  return handleRequest<TAxiosUserAuthResponse>(LOGIN_URL, 'POST', data);
};

//Обновление токена
export const getNewToken = (token: TToken) => {
  return handleRequest<TAxiosAuthResponse>(TOKEN_URL, 'POST', token);
};

//Выход из системы
export const getLogoutData = (token: TToken) => {
  return handleRequest<TAxiosLogoutResponse>(LOGOUT_URL, 'POST', token);
};

//Получение данных о пользователе
export const getUserData = (token: TAuthorization) => {
  return handleRequest<TAxiosUserDataResponse>(USER_URL, 'GET', {}, token);
};

//Обновление данных о пользователе
export const refreshUserData = (data: TUpdateUserData) => {
  return handleRequest<TAxiosUserDataResponse>(USER_URL, 'PATCH', data.user, data.token);
};
