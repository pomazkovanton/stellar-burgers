import { AxiosRequestConfig } from 'axios';
import { TIngredient, TOrder, TUser } from './main';

export type TWsResponse = {
  success: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TOrderResponse = {
  name: string;
  order: TOrder;
  success: boolean;
};

export type TIngredientsResponse = {
  success: boolean;
  data: TIngredient[];
};

export type TAuthResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type TUserAuthResponse = {
  user: TUser;
} & TAuthResponse;

export type TLogoutResponse = {
  message: string;
  success: boolean;
};

export type TUserDataResponse = {
  success: boolean;
  user: TUser;
};

export type TForgotResponse = {
  success: boolean;
  message: string;
};

export type TResetResponse = TForgotResponse;

export type TAxiosResponse = {
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
};

export type TAxiosUserAuthResponse = {
  data: TUserAuthResponse;
} & TAxiosResponse;

export type TAxiosAuthResponse = {
  data: TAuthResponse;
} & TAxiosResponse;

export type TAxiosLogoutResponse = {
  data: TLogoutResponse;
} & TAxiosResponse;

export type TAxiosUserDataResponse = {
  data: TUserDataResponse;
} & TAxiosResponse;

export type TAxiosForgotDataResponse = {
  data: TForgotResponse;
} & TAxiosResponse;

export type TAxiosResetDataResponse = {
  data: TResetResponse;
} & TAxiosResponse;

export type TAxiosIngredientResponse = {
  data: TIngredientsResponse;
} & TAxiosResponse;

export type TAxiosOrderResponse = {
  data: TOrderResponse;
} & TAxiosResponse;
