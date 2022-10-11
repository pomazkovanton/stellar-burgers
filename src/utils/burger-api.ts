import axios from 'axios';

import { ORDERS_URL, INGREDIENTS_URL } from './constans';

//Универсальный обработчик запроса на сервер
const handleRequest = async (url: string, method: string, data = {}) => {
  const res = await axios(url, {
    method: method,
    data: data,
  });
  return res;
};

//Получение данных об ингредиентах с сервера
export const getIngredients = () => {
  return handleRequest(INGREDIENTS_URL, 'GET');
};

//Получение номера заказа с сервера
export const getOrder = (body) => {
  return handleRequest(ORDERS_URL, 'POST', body);
};
