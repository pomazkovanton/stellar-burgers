import { handleRequest } from './utils';
import { FORGOT_PASSWORD_URL, REGISTER_URL, RESET_PASSWORD_URL } from './constans';

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
