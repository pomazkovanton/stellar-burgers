import { handleRequest } from './utils';
import { FORGOT_PASSWORD_URL, REGISTER_URL } from './constans';

//Регистрация пользователя на сервере
export const getRegisterData = (userData) => {
  return handleRequest(REGISTER_URL, 'POST', userData);
};

//Регистрация пользователя на сервере
export const getCodeInEmail = (email) => {
  return handleRequest(FORGOT_PASSWORD_URL, 'POST', email);
};
