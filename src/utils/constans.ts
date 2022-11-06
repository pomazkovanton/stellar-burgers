const BASE_API_URL = 'https://norma.nomoreparties.space/api';

export const ORDERS_URL = `${BASE_API_URL}/orders`;
export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
export const LOGIN_URL = `${BASE_API_URL}/auth/login`;
export const REGISTER_URL = `${BASE_API_URL}/auth/register`;
export const LOGOUT_URL = `${BASE_API_URL}/auth/logout`;
export const TOKEN_URL = `${BASE_API_URL}/auth/token`;

export const HOME_ROUTE = '/stellar-burgers/';
export const LOGIN_ROUTE = `${HOME_ROUTE}login`;
export const REGISTER_ROUTE = `${HOME_ROUTE}register`;
export const FORGOT_PASSWORD_ROUTE = `${HOME_ROUTE}forgot-password`;
export const RESET_PASSWORD_ROUTE = `${HOME_ROUTE}reset-password`;
export const PROFILE_ROUTE = `${HOME_ROUTE}profile`;

export const lOADING_DATA = 'loading';
export const RESOLVED_DATA = 'resolved';
export const REJECTED_DATA = 'rejected';
