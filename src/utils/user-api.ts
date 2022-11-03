import { handleRequest } from './utils';
import { REGISTER_URL } from './constans';

//Регистрация пользователя на сервере
export const getRegisterData = (userData) => {
  return handleRequest(REGISTER_URL, 'POST', userData);
};
