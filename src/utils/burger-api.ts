import { handleRequest } from './utils';
import { ORDERS_URL, INGREDIENTS_URL } from './constans';

//Получение данных об ингредиентах с сервера
export const getIngredients = () => {
  return handleRequest(INGREDIENTS_URL, 'GET');
};

//Получение номера заказа с сервера
export const getOrder = (data) => {
  return handleRequest(ORDERS_URL, 'POST', data.id, data.token);
};
