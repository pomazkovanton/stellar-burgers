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
