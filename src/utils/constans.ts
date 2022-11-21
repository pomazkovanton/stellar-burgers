const BASE_API_URL = 'https://norma.nomoreparties.space/api';
const BASE_AUTH_URL = `${BASE_API_URL}/auth`;
const BASE_SOCKET_URL = 'wss://norma.nomoreparties.space';

// Список эндпоинтов
export const ORDERS_URL = `${BASE_API_URL}/orders`;
export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
export const FORGOT_PASSWORD_URL = `${BASE_API_URL}/password-reset`;
export const RESET_PASSWORD_URL = `${BASE_API_URL}/password-reset/reset`;

export const LOGIN_URL = `${BASE_AUTH_URL}/login`;
export const REGISTER_URL = `${BASE_AUTH_URL}/register`;
export const LOGOUT_URL = `${BASE_AUTH_URL}/logout`;
export const TOKEN_URL = `${BASE_AUTH_URL}/token`;
export const USER_URL = `${BASE_AUTH_URL}/user`;

export const ALL_ORDERS_URL = `${BASE_SOCKET_URL}/orders/all`;
export const USER_ORDERS_URL = `${BASE_SOCKET_URL}/orders`;

// Список маршрутов
export const HOME_ROUTE = '/stellar-burgers/';
export const LOGIN_ROUTE = `${HOME_ROUTE}login`;
export const REGISTER_ROUTE = `${HOME_ROUTE}register`;
export const FORGOT_PASSWORD_ROUTE = `${HOME_ROUTE}forgot-password`;
export const RESET_PASSWORD_ROUTE = `${HOME_ROUTE}reset-password`;
export const PROFILE_ROUTE = `${HOME_ROUTE}profile`;
export const PROFILE_ORDERS_ROUTE = `${PROFILE_ROUTE}/orders`;
export const PROFILE_ORDER_ROUTE = `${PROFILE_ORDERS_ROUTE}/:id`;
export const INGREDIENTS_ROUTE = `${HOME_ROUTE}ingredients`;
export const INGREDIENT_ROUTE = `${INGREDIENTS_ROUTE}/:id`;
export const FEED_ROUTE = `${HOME_ROUTE}feed`;
export const ORDER_ROUTE = `${FEED_ROUTE}/:id`;

// Список статусов загрузки данных
export const lOADING_DATA = 'loading';
export const RESOLVED_DATA = 'resolved';
export const REJECTED_DATA = 'rejected';
