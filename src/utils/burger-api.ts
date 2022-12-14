import { handleRequest } from './utils';
import { ORDERS_URL, INGREDIENTS_URL } from './constans';
import { TOrderData } from './types/main';
import { TAxiosIngredientResponse, TAxiosOrderResponse } from './types/responses';

//Получение данных об ингредиентах с сервера
export const getIngredients = () => {
  return handleRequest<TAxiosIngredientResponse>(INGREDIENTS_URL, 'GET');
};

//Получение номера заказа с сервера
export const getOrder = (data: TOrderData) => {
  return handleRequest<TAxiosOrderResponse>(ORDERS_URL, 'POST', data.id, data.token);
};
