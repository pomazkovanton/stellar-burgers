import { TOrder } from './order';

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
